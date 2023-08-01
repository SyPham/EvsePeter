using AutoMapper;
using Evse.Constants;
using Evse.Data;
using Evse.DTO;
using Evse.Models;
using Evse.Services.Base;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Evse.Services
{
    public interface IReleaseVersionService : IServiceBase<ReleaseVersion,ReleaseVersionDto>
    {
        Task<ReleaseVersionDto> GetLastedVersionAsync();
    }

    public class ReleaseVersionService : ServiceBase<ReleaseVersion, ReleaseVersionDto>,IReleaseVersionService
    {
        private readonly IRepositoryBase<ReleaseVersion> _repository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly MapperConfiguration _configMapper;
        private readonly IConfiguration _config;
        private OperationResult operationResult;
        private readonly INotificationService _notificationService;
        private readonly IEvseLoggerService _logger;
        public readonly IHttpContextAccessor _contextAccessor;
        public ReleaseVersionService(IRepositoryBase<ReleaseVersion> repository, IUnitOfWork unitOfWork, IMapper mapper, MapperConfiguration configMapper, IConfiguration config, IHttpContextAccessor contextAccessor, INotificationService notificationService, IEvseLoggerService logger)
            : base(repository, logger, unitOfWork, mapper, configMapper)
        {
            _repository = repository;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _configMapper = configMapper;
            _config = config;
            _contextAccessor = contextAccessor;
            _notificationService = notificationService;
            _logger = logger;
        }


        public override async Task<OperationResult> AddAsync(ReleaseVersionDto model)
        {
            var nearerVersion = await _repository.FindAll().Where(x => x.Version == model.Version).ToListAsync();
            if (nearerVersion.Count() == 2)
            {
                return new OperationResult
                {
                    StatusCode = System.Net.HttpStatusCode.BadRequest,
                    Message = MessageReponse.Existed,
                    Success = false
                };
            }

            if (nearerVersion.Count != 0)
            {
                if (nearerVersion[0].OsType == ReleaseVersionTypeEnum.All || nearerVersion[0].OsType == model.OsType)
                    {
                        return new OperationResult
                        {
                            StatusCode = System.Net.HttpStatusCode.BadRequest,
                            Message = "Phiên bản " + model.Version +
                                 " cho " + (model.OsType == ReleaseVersionTypeEnum.All ? " Tất cả"
                                 : (model.OsType == ReleaseVersionTypeEnum.IOS ? "IOS" : "Android")) +
                                " đã tồn tại",
                            Success = false
                        };
                    }

                    if (model.OsType == ReleaseVersionTypeEnum.All)
                    {
                        if (nearerVersion[0].OsType == ReleaseVersionTypeEnum.Android)
                            model.OsType = ReleaseVersionTypeEnum.IOS;
                        else model.OsType = ReleaseVersionTypeEnum.Android;
                    }
            }

            model.VersionDate = DateTime.Now;
            var resultAdd = await base.AddAsync(model);
            if (resultAdd.Success)
            {
                System.Reflection.PropertyInfo pi = resultAdd.Data.GetType().GetProperty("Id");
                int id = (int)(pi.GetValue(resultAdd.Data, null));

                Thread thread = new Thread(async () =>
                     {
                         var urlImage = "icons/update.png";
                         //var urlImage ="https://techcrunch.com/wp-content/uploads/2012/07/sync.png";
                         var modelPush = new PushNotificationAnonymousDto
                         {
                             id = id,
                             type = NotificationTypeEnum.UpdateApplication,
                             title = model.Title,
                             description = model.Description,
                             content = model.ReleaseContent,
                             imageUrl = urlImage,
                             targetUrl = model.Version
                         };

                         if (model.OsType == ReleaseVersionTypeEnum.All)
                         {
                             await _notificationService.PushNotificationAnonymousAsync(modelPush);
                         }
                         else if (model.OsType == ReleaseVersionTypeEnum.IOS)
                         {
                             await _notificationService.PushNotificationForOsAsync(TopicFirebaseConst.OS_TYPE_IOS, modelPush);
                         }
                         else
                         {
                             await _notificationService.PushNotificationForOsAsync(TopicFirebaseConst.OS_TYPE_ADNROID, modelPush);
                         }

                     });
                thread.Start(); // start thread mới
            }
            return resultAdd;
        }

        public async Task<ReleaseVersionDto> GetLastedVersionAsync()
        {
            var data = await _repository.FindAll().OrderByDescending(x => x.VersionDate).FirstOrDefaultAsync();
            if (data == null)
            {
                return new ReleaseVersionDto();
            }
            return _mapper.Map<ReleaseVersionDto>(data);
        }
    }
}