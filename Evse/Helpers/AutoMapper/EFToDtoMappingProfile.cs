﻿using AutoMapper;
using Evse.DTO;
using Evse.DTO.auth;
using Evse.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Evse.Helpers.AutoMapper
{
    public class EFToDtoMappingProfile : Profile
    {
        public EFToDtoMappingProfile()
        {
            var list = new List<int> { };

            CreateMap<XAccount, UserForDetailDto>()
                .ForMember(d => d.Username, o => o.MapFrom(x => x.Uid))
                .ForMember(d => d.ID, o => o.MapFrom(x => x.AccountId));

            CreateMap<LandLord, UserForDetailDto>()
               .ForMember(d => d.Username, o => o.MapFrom(x => x.Uid));

            CreateMap<Engineer, UserForDetailDto>()
          .ForMember(d => d.Username, o => o.MapFrom(x => x.Uid));

            CreateMap<Member, UserMemberForDetailDto>()
         .ForMember(d => d.Username, o => o.MapFrom(x => x.Uid));

            CreateMap<Employee, EmployeeDto>();
            CreateMap<Employee, EmployeeDto>();
            CreateMap<SystemLanguage, SystemLanguageDto>();
            CreateMap<XAccount, XAccountDto>();
            CreateMap<XAccountGroup, XAccountGroupDto>();
            CreateMap<SysMenu, SysMenuDto>();
            CreateMap<CodePermission, CodePermissionDto>();
            CreateMap<SysMenu, ChartSettingDto>();
            CreateMap<CodeType, CodeTypeDto>();
            CreateMap<SystemConfig, SystemConfigDto>();
            CreateMap<Site, SiteDto>();
            CreateMap<Member, MemberDto>();
            CreateMap<LandLord, LandLordDto>();
            CreateMap<Engineer, EngineerDto>();
            CreateMap<Device, DeviceDto>();
            CreateMap<ParkingLot, ParkingLotDto>();

            CreateMap<Bank, BankDto>();
            CreateMap<WebBanner, WebBannerDto>();
            CreateMap<Contract, ContractDto>();
            CreateMap<WebNews, WebNewsDto>();
            CreateMap<User2MessageDto, User2Message>();
            CreateMap<ReportErrorDto, ReportError>();

            CreateMap<NotificationUser, NotificationUserDto>();
            CreateMap<DeviceUser, DeviceUserDto>();
            CreateMap<Topic, TopicDto>();
            CreateMap<TopicUser, TopicUserDto>();
            CreateMap<ImageConfig, ImageConfigDto>();
            CreateMap<CreditCard, CreditCardDto>();
            CreateMap<Favorite, FavoriteDto>();
            CreateMap<Discount, DiscountDto>();
            CreateMap<Payment, PaymentDto>();
            CreateMap<Township, TownshipDto>();
            CreateMap<County, CountyDto>();
            CreateMap<DeviceError, DeviceErrorDto>();
            CreateMap<Investor, InvestorDto>();
            CreateMap<Electrician, ElectricianDto>();
            CreateMap<Role, RoleDto>();
            CreateMap<RoleDetail, RoleDetailDto>();
            CreateMap<Account, AccountDto>();
            CreateMap<Account2, Account2Dto>();
            CreateMap<AuditLog, AuditLogDto>();
            CreateMap<AccountContract, AccountContractDto>();
            CreateMap<EngineerErrorReport, EngineerErrorReportDto>();
            CreateMap<ElectricianErrorReport, ElectricianErrorReportDto>();
            CreateMap<ReportConfig, ReportConfigDto>();
            CreateMap<ReportParams, ReportExportParams>();
            CreateMap<CouponManagement, CouponManagementDto>();
            CreateMap<ElectricityPrice, ElectricityPriceDto>();

            CreateMap<HelpCenterDto, HelpCenter>();
            CreateMap<PrivacyPolicyDto, PrivacyPolicy>();
            CreateMap<ContractManagementDto, ContractManagement>();
            CreateMap<MessageManagementDto, MessageManagement>();
            CreateMap<ReleaseVersion, ReleaseVersionDto>();

        }

    }
}
