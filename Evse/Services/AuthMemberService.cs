﻿using Microsoft.EntityFrameworkCore;
using Evse.Data;
using Evse.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Evse.Helpers;
using Evse.DTO;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using NetUtility;
using System.Net;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Evse.DTO.auth;
using AutoMapper;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Http;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Evse.Constants;
using System.Data;
using Microsoft.Data.SqlClient;
using Dapper;

namespace Evse.Services
{
    public interface IAuthMemberService : IScopeService
    {
        Task<Member> Login(string username, string password);
        Task LogOut();
        Task<bool> CheckLock(string username);
        Task<OperationResult> ResetPassword(ResetPasswordDto reset);
        Task<OperationResult> ChangePassword(ChangePasswordDto reset);
        Task<OperationResult> ForgotPassword(string email);
        Task<OperationResult> ForgotUsername(string email);
        Task<OperationResult> LoginAsync(UserForLoginDto loginDto);
        Task<OperationResult> LoginAsync(decimal ID);
        Task<OperationResult> RefreshTokenAsync(string token, string refreshToken);
        Task<OperationResult> Register(RegisterMemberDto reset);
    }
    public class AuthMemberService : IAuthMemberService
    {
        private readonly IRepositoryBase<Member> _repo;
        private readonly IRepositoryBase<CodeType> _repoCodeType;
        private readonly IRepositoryBase<XAccountGroup> _repoXAccountGroup;
        private readonly IRepositoryBase<Employee> _repoEmployee;
        private readonly IRepositoryBase<RefreshToken> _repoRefreshToken;
        private readonly IUnitOfWork _unitOfWork;
        private readonly JwtSettings _jwtSettings;
        private readonly ILineService _lineService;
        private readonly IEmailService _emailService;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IMapper _mapper;
        private readonly TokenValidationParameters _tokenValidationParameters;
        private readonly IWebHostEnvironment _currentEnvironment;
        private readonly IConfiguration _configuration;
        private readonly IConfiguration _config;
        private readonly List<string> _tokens;

        public AuthMemberService(
            IRepositoryBase<Member> repo,
            IRepositoryBase<CodeType> repoCodeType,
            IRepositoryBase<XAccountGroup> repoXAccountGroup,
            IRepositoryBase<Employee> repoEmployee,
            IRepositoryBase<RefreshToken> repoRefreshToken,
            IUnitOfWork unitOfWork,
            JwtSettings jwtSettings,
            ILineService lineService,
            IEmailService emailService,
            IHttpContextAccessor httpContextAccessor,
            IMapper mapper,
            TokenValidationParameters tokenValidationParameters,
            IWebHostEnvironment currentEnvironment,
            IConfiguration config,
        IConfiguration configuration
,
        IRepositoryBase<Engineer> repoEngineer)
        {
            _repo = repo;
            _config = config;
            var lineConfig = _config.GetSection("LineNotifyConfig");
            List<string> tokens = _config.GetSection("LineNotifyConfig:tokens")?.GetChildren()?.Select(x => x.Value)?.ToList();
            _tokens = tokens;
            _repoCodeType = repoCodeType;
            _repoXAccountGroup = repoXAccountGroup;
            _repoEmployee = repoEmployee;
            _repoRefreshToken = repoRefreshToken;
            _unitOfWork = unitOfWork;
            _jwtSettings = jwtSettings;
            _lineService = lineService;
            _emailService = emailService;
            _httpContextAccessor = httpContextAccessor;
            _mapper = mapper;
            _tokenValidationParameters = tokenValidationParameters;
            _currentEnvironment = currentEnvironment;
            _configuration = configuration;
        }

        public async Task<bool> CheckLock(string username)
        {
            var account = await _repo.FindAll().AsNoTracking().FirstOrDefaultAsync(x => x.Uid == username && x.Status == 1);

            if (account == null) return false;
            if (account.Status == 0) return false;
            return true;

        }

        public async Task<Member> Login(string username, string password)
        {
            var account = await _repo.FindAll().FirstOrDefaultAsync(x => x.Uid == username && x.Status == 1);

            if (account == null)
                return null;
            if (account.Status == 0) return null;
            if (account.Upwd == password)
                return account;
            return null;

        }

        public async Task<OperationResult> LoginAsync(UserForLoginDto loginDto)
        {
            var account = await _repo.FindAll(x => x.Uid == loginDto.Username && x.Status == 1)
                .FirstOrDefaultAsync();
            if (account == null)
                return new OperationResult
                {
                    StatusCode = HttpStatusCode.NotFound,
                    Message = "The account name is not available!",
                    Success = false
                };

            if (account.Status == 0)
                return new OperationResult
                {
                    StatusCode = HttpStatusCode.NotFound,
                    Message = "The account is locked!",
                    Success = false
                };

            if (account.Upwd.VerifyHashedPassword(loginDto.Password.ToSha512()))
            {

                return await GenerateOperationResultForUserAsync(account, loginDto.Password);
            }

            return new OperationResult
            {
                StatusCode = HttpStatusCode.NotFound,
                Message = "The account name or password is incorrect!",
                Success = false
            };

        }





        private async Task LogStoreProcedure(decimal accountId, string logText)
        {
            using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                if (conn.State == ConnectionState.Closed)
                {
                    await conn.OpenAsync();
                }
                var Context = _httpContextAccessor.HttpContext;
                var url = string.Format("{0}://{1}{2}{3}", Context.Request.Scheme, Context.Request.Host, Context.Request.Path, Context.Request.QueryString);
                var remoteIpAddress = Context.Connection.RemoteIpAddress.ToString();
                string sql = "SP_Save_SYS_LOG";
                var parameters = new
                {
                    @LOG_Type = "",
                    @LOG_TEXT = logText,
                    @Account_ID = accountId,
                    @LOG_IP = remoteIpAddress,
                    @LOG_WIP = "",
                    @LOG_URL = url,
                };
                try
                {
                    await conn.QueryAsync(sql, parameters, commandType: CommandType.StoredProcedure);
                }
                catch
                {
                }

            }
        }

        public async Task<OperationResult> LoginAsync(decimal ID)
        {
            var account = await _repo.FindAll().FirstOrDefaultAsync(x => x.Id == ID && x.Status == 1);
            if (account != null && account.Status == 0)
                return new OperationResult
                {
                    StatusCode = HttpStatusCode.NotFound,
                    Message = "The account is locked!",
                    Success = false
                };
            if (account != null)
                return await GenerateOperationResultForUserAsync(account, "");

            return new OperationResult
            {
                StatusCode = HttpStatusCode.Unauthorized,
                Message = "",
                Success = false
            };

        }



        public async Task LogOut()
        {
            string token = _httpContextAccessor.HttpContext.Request.Headers["AuthMemberorization"];
            var accountId = JWTExtensions.GetDecodeTokenByID(token);
            var account = await _repo.FindByIDAsync(accountId.ToDecimal());
            account.Lastlogin = DateTime.Now;
            try
            {
                _repo.Update(account);
                await _unitOfWork.SaveChangeAsync();
                LogStoreProcedure(account.Id, "LogIn").ConfigureAwait(false).GetAwaiter();
#if DEBUG

#else
                //var dateTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm");
                //var message = $"{account.Uid} logged out the system on {dateTime}";
                //foreach (var a in _tokens)
                //{
                //    _lineService.SendMessage(new MessageParams
                //    {
                //        Token = a,
                //        Message = message
                //    }).ConfigureAwait(false).GetAwaiter();
                //}
#endif


            }
            catch
            {
            }

        }

        public async Task<OperationResult> RefreshTokenAsync(string token, string refreshToken)
        {
            var validatedToken = GetPrincipalFromToken(token);

            if (validatedToken == null)
            {
                return new OperationResult { Message = "Invalid token!", StatusCode = HttpStatusCode.BadRequest, Success = false };
            }

            var expiryDateUnix = (validatedToken.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Exp).Value).ToLong();

            var expiryDateTimeUtc = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc).AddSeconds(expiryDateUnix);

            if (expiryDateTimeUtc > DateTime.Now)
            {
                return new OperationResult { Message = "Unexpired token!", StatusCode = HttpStatusCode.BadRequest, Success = false };
            }

            var jti = validatedToken.Claims.Single(x => x.Type == JwtRegisteredClaimNames.Jti).Value;

            var storedRefreshToken = await _repoRefreshToken.FindAll().AsNoTracking().FirstOrDefaultAsync(x => x.JwtId == refreshToken);

            if (storedRefreshToken == null)
            {
                return new OperationResult { Message = "Token does not existed!", StatusCode = HttpStatusCode.BadRequest, Success = false };
            }

            if (DateTime.Now > storedRefreshToken.ExpiryDate)
            {
                return new OperationResult { Message = "Token has expired!", StatusCode = HttpStatusCode.BadRequest, Success = false };
            }

            if (storedRefreshToken.Invalidated)
            {
                return new OperationResult { Message = "Token is invalidated!", StatusCode = HttpStatusCode.BadRequest, Success = false };
            }

            if (storedRefreshToken.Used)
            {
                return new OperationResult { Message = "Token is used!", StatusCode = HttpStatusCode.BadRequest, Success = false };
            }

            if (storedRefreshToken.JwtId != jti)
            {
                return new OperationResult { Message = "Token does not match!", StatusCode = HttpStatusCode.BadRequest, Success = false };
            }

            storedRefreshToken.Used = true;
            _repoRefreshToken.Update(storedRefreshToken);
            await _unitOfWork.SaveChangeAsync();
            var query = validatedToken.Claims.FirstOrDefault(x => x.Type == "id");
            if (query == null) return new OperationResult { Message = "Invalid token!", StatusCode = HttpStatusCode.BadRequest, Success = false };
            var user = await _repo.FindByIDAsync(query.Value);

            return await GenerateOperationResultForUserAsync(user, "");
        }
        public async Task<OperationResult> ChangePassword(ChangePasswordDto reset)
        {
            var account = await _repo.FindAll(x => x.Status == 1).AsNoTracking().FirstOrDefaultAsync(x => x.Id == reset.Id);
            if (account == null)
                return new OperationResult
                {
                    Success = false,
                    StatusCode = HttpStatusCode.BadRequest,
                    Data = null,
                    Message = "Your account does not exist"
                };
            if (reset.Password != reset.RePassword)
                return new OperationResult
                {
                    Success = false,
                    Data = null,
                    StatusCode = HttpStatusCode.BadRequest,
                    Message = "Password and Repassword are not same"
                };

            account.Upwd = reset.Password.ToSha512();
            try
            {
                _repo.Update(account);

                await _unitOfWork.SaveChangeAsync();
                return new OperationResult
                {
                    Success = true,
                    StatusCode = HttpStatusCode.OK,
                    Data = account,
                    Message = "Reset password successfully"
                };
            }
            catch (Exception)
            {

                return new OperationResult
                {
                    Success = false,
                    StatusCode = HttpStatusCode.BadRequest,
                    Data = null,
                    Message = "Can not change password"
                };
            }
        }
        public async Task<OperationResult> ResetPassword(ResetPasswordDto reset)
        {
            var validatedToken = GetPrincipalFromToken(reset.token);

            if (validatedToken == null)
            {
                return new OperationResult { Message = "Invalid token!", StatusCode = HttpStatusCode.BadRequest, Success = false };
            }

            var expiryDateUnix = (validatedToken.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Exp).Value).ToLong();

            var expiryDateTimeUtc = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Local).AddSeconds(expiryDateUnix);

            if (expiryDateTimeUtc < DateTime.Now)
            {
                return new OperationResult { Message = "Unexpired token!", StatusCode = HttpStatusCode.BadRequest, Success = false };
            }
            var email = (validatedToken.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email).Value).ToSafetyString();
            if (email == null)
                return new OperationResult
                {
                    Success = false,
                    StatusCode = HttpStatusCode.BadRequest,
                    Data = null,
                    Message = "Your email does not exist"
                };
            var employee = await _repoEmployee.FindAll(x => x.Status == 1).AsNoTracking().Select(x => new
            {
                x.Email,
                x.Guid
            }).FirstOrDefaultAsync(x => x.Email == email);
            if (employee == null)
                return new OperationResult
                {
                    Success = false,
                    StatusCode = HttpStatusCode.BadRequest,
                    Data = null,
                    Message = "Your email does not exist"
                };
            var account = await _repo.FindAll(x => x.Status == 1).AsNoTracking().FirstOrDefaultAsync(x => x.Guid == employee.Guid);
            if (account == null)
                return new OperationResult
                {
                    Success = false,
                    Data = null,
                    Message = "Your account does not exist"
                };
            if (account.Status == 0)
                return new OperationResult
                {
                    Success = false,
                    StatusCode = HttpStatusCode.BadRequest,
                    Data = null,
                    Message = "The account is locked!"
                };
            account.Upwd = reset.NewPassword.ToSha512();
            try
            {
                _repo.Update(account);

                await _unitOfWork.SaveChangeAsync();
                return new OperationResult
                {
                    Success = true,
                    Data = null,
                    Message = "Reset password successfully!"
                };
            }
            catch (Exception)
            {

                return new OperationResult
                {
                    Success = false,
                    Data = null,
                    Message = "Can not reset password!"
                };
            }
        }

        private async Task<OperationResult> GenerateOperationResultForUserAsync(Member user, string password)
        {
            var claims = new[]
            {
                            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                        };
            var key = Encoding.ASCII.GetBytes(_jwtSettings.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.Add(_jwtSettings.TokenLifetime),
                //Expires = DateTime.Now.Add(TimeSpan.FromSeconds(15)),
                SigningCredentials =
                new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenValue = tokenHandler.WriteToken(token);
            var refreshToken = new RefreshToken
            {
                JwtId = token.Id,
                AccountId = user.Id.ToInt(),
                CreationDate = DateTime.Now,
                ExpiryDate = DateTime.Now.AddMonths(6),
                Token = tokenValue
            };

            _repoRefreshToken.Add(refreshToken);
            user.Lastlogin = DateTime.Now;
            await _unitOfWork.SaveChangeAsync();
            var userResponse = _mapper.Map<UserMemberForDetailDto>(user);
            userResponse.Mobile = user.MemberMobile;
            userResponse.Email = user.MemberEmail;
            userResponse.FullName = user.MemberName;
            userResponse.NickName = user.MemberName;
            userResponse.Avatar = user.PhotoPath;
            userResponse.AccountName = user.MemberName;
            userResponse.LastLocation = user.LastLocation;
            userResponse.Area = "Member";

            LogStoreProcedure(user.Id, "LogIn").ConfigureAwait(false).GetAwaiter();

#if DEBUG

#else
            //var dateTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm");
            //var message = $"{employee.NickName} logged in the system on {dateTime}";
            //foreach (var a in _tokens)
            //{
            //    _lineService.SendMessage(new MessageParams
            //    {
            //        Token = a,
            //        Message = message
            //    }).ConfigureAwait(false).GetAwaiter();
            //}
#endif

            return new OperationResult
            {
                Success = true,
                Data = new
                {
                    Token = tokenValue,
                    RefreshToken = refreshToken.JwtId,
                    User = userResponse
                }
            };
        }

        private ClaimsPrincipal GetPrincipalFromToken(string token)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            try
            {
                var tokenValidationParameters = _tokenValidationParameters.Clone();
                tokenValidationParameters.ValidateLifetime = false;
                var principal = tokenHandler.ValidateToken(token, tokenValidationParameters, out var validatedToken);
                if (!IsJwtWithValidSecurityAlgorithm(validatedToken))
                {
                    return null;
                }

                return principal;
            }
            catch
            {
                return null;
            }
        }

        private bool IsJwtWithValidSecurityAlgorithm(SecurityToken validatedToken)
        {
            return (validatedToken is JwtSecurityToken jwtSecurityToken) &&
                   jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256,
                       StringComparison.InvariantCultureIgnoreCase);
        }

        private async Task<OperationResult> GenerateOperationResultForUserForGotPasswordAsync(Member user, string email)
        {

            var claims = new[]
            {
                             new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                            new Claim(ClaimTypes.Email, email.ToString())
                        };
            var key = Encoding.ASCII.GetBytes(_jwtSettings.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.Add(TimeSpan.FromHours(24)),
                SigningCredentials =
                new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenValue = tokenHandler.WriteToken(token);
            var path = "EmailTemplate\\forgot-password.html";
            string fogotPasswordHtml = Path.Combine(_currentEnvironment.WebRootPath, path);
            string html = File.ReadAllText(fogotPasswordHtml);
            string urlRedirect = $"{_configuration["MailSettings:AngularUrl"]}/reset-password?token={tokenValue}";
            html = html.Replace("{{HREF}}", urlRedirect);

            var check = await _emailService.SendAsync(email, "Forgot Password", html);
            if (check == "")
                return new OperationResult
                {
                    Success = true,
                    StatusCode = HttpStatusCode.OK,
                    Data = null
                };
            return new OperationResult
            {
                Success = false,
                StatusCode = HttpStatusCode.OK,
                Data = check
            };
        }

        public async Task<OperationResult> ForgotPassword(string email)
        {
            var employee = await _repo.FindAll(x => x.Status == 1).AsNoTracking().FirstOrDefaultAsync(x => x.MemberEmail == email);

            if (employee == null)
                return new OperationResult
                {
                    Success = false,
                    StatusCode = HttpStatusCode.BadRequest,
                    Data = null,
                    Message = "Your email does not exist"
                };
            var account = await _repo.FindAll(x => x.Status == 1).AsNoTracking().FirstOrDefaultAsync(x => x.Guid == employee.Guid);

            if (account == null)
                return new OperationResult
                {
                    Success = false,
                    StatusCode = HttpStatusCode.BadRequest,
                    Data = null,
                    Message = "Your account does not exist"
                };
            return await GenerateOperationResultForUserForGotPasswordAsync(account, email);

        }

        public async Task<OperationResult> ForgotUsername(string email)
        {
            var employee = await _repoEmployee.FindAll(x => x.Status == 1).AsNoTracking().FirstOrDefaultAsync(x => x.Email == email);

            if (employee == null)
                return new OperationResult
                {
                    Success = false,
                    Data = null,
                    Message = "Your email does not exist"
                };
            var account = await _repo.FindAll(x => x.Status == 1).AsNoTracking().FirstOrDefaultAsync(x => x.Guid == employee.Guid);

            if (account == null)
                return new OperationResult
                {
                    Success = false,
                    StatusCode = HttpStatusCode.BadRequest,
                    Data = null,
                    Message = "Your account does not exist"
                };

            var path = "EmailTemplate\\forgot-username.html";
            string fogotPasswordHtml = Path.Combine(_currentEnvironment.WebRootPath, path);
            string html = File.ReadAllText(fogotPasswordHtml);
            string urlRedirect = $"{_configuration["MailSettings:AngularUrl"]}/login";
            html = html.Replace("{{HREF}}", urlRedirect);
            html = html.Replace("{{USERNAME}}", account.Uid);

            var check = await _emailService.SendAsync(email, "Forgot Username", html);
            if (check == "")
                return new OperationResult
                {
                    Success = true,
                    StatusCode = HttpStatusCode.OK,
                    Message = "Success! An email has been sent. Please check your inbox!"
                };
            return new OperationResult
            {
                Success = false,
                StatusCode = HttpStatusCode.OK,
                Data = check
            };
        }

        public async Task<OperationResult> Register(RegisterMemberDto reset)
        {
             if (reset.Password.Length < 10)
                return new OperationResult
                {
                    Success = false,
                    StatusCode = HttpStatusCode.BadRequest,
                    Data = null,
                    Message = "The ID number must be at least 10 characters long"
                };
            var account = await _repo.FindAll().FirstOrDefaultAsync(x => x.Uid == reset.Username);

            if (account != null)
                return new OperationResult
                {
                    Success = false,
                    StatusCode = HttpStatusCode.BadRequest,
                    Data = null,
                    Message = "Your mobile does exist"
                };

            var item = new Member();
            item.Uid = reset.Username;
            // Lấy 4 ký tự cuối
            string password =  reset.Password[^4..];
            item.Upwd =password.ToSha512();
            item.Status = 1;
            item.MemberStatus = "1";
            item.MemberMobile = reset.Username;
            item.MemberIdcard = reset.Password;
            item.RoleType = "03";
            _repo.Add(item);
            await _unitOfWork.SaveChangeAsync();
            return new OperationResult
            {
                Success = true,
                StatusCode = HttpStatusCode.OK,
                Data = item
            };
        }

    }
}
