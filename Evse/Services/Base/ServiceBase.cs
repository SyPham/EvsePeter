﻿using System.Net.Mime;
using AutoMapper;
using Evse.Data;
using Evse.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Evse.DTO;
using System.Net;
using Evse.Constants;
using Evse.Models;
using Syncfusion.JavaScript;
using Syncfusion.JavaScript.DataSources;
using Evse.Utilities;

namespace Evse.Services.Base
{
    public interface IServiceBaseMobile<T, TDto>
    {
        Task<OperationResult> AddMobileAsync(TDto model);
        Task<OperationResult> UpdateMobileAsync(TDto model);
    }
    public interface IServiceBase<T, TDto> where TDto : class
    {
        Task<OperationResult> AddAsync(TDto model);
        Task<OperationResult> AddRangeAsync(List<TDto> model);


        Task<OperationResult> UpdateAsync(TDto model);
        Task<OperationResult> UpdateRangeAsync(List<TDto> model);

        Task<OperationResult> DeleteAsync(object id);

        Task<List<TDto>> GetAllAsync();

        Task<PagedList<TDto>> GetWithPaginationsAsync(PaginationParams param);
        Task<Pager<TDto>> PaginationAsync(ParamaterPagination paramater);

        Task<PagedList<TDto>> SearchAsync(PaginationParams param, object text);
        TDto GetByID(object id);
        Task<TDto> GetByIDAsync(object id);
        Task<object> GetDataDropdownlist(DataManager data);

    }
    public class ServiceBase<T, TDto> : IServiceBase<T, TDto> where T : class where TDto : class
    {
        public OperationResult operationResult;
        private readonly IMapper _mapper;
        private readonly IRepositoryBase<T> _repo;
        private readonly MapperConfiguration _configMapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IEvseLoggerService _logger;

        public ServiceBase(
            IRepositoryBase<T> repo,
            IEvseLoggerService logger,
            IUnitOfWork unitOfWork,
            IMapper mapper,
            MapperConfiguration configMapper
            )
        {
            _mapper = mapper;
            _repo = repo;
            _logger = logger;
            _configMapper = configMapper;
            _unitOfWork = unitOfWork;
        }

        public virtual async Task<OperationResult> AddAsync(TDto model)
        {
            var item = _mapper.Map<T>(model);
            _repo.Add(item);
            try
            {
                await _unitOfWork.SaveChangeAsync();
                operationResult = new OperationResult
                {
                    StatusCode = HttpStatusCode.OK,
                    Message = MessageReponse.AddSuccess,
                    Success = true,
                    Data = item
                };
            }
            catch (Exception ex)
            {
                 await _logger.LogStoreProcedure(new LoggerParams {
                    Type= EvseLogConst.Create,
                    LogText = $"Type: { ex.GetType().Name}, Message: { ex.Message}, StackTrace: {ex.ToString()}"
                }).ConfigureAwait(false);
                operationResult = ex.GetMessageError();
            }
            return operationResult;
        }
        public virtual async Task<OperationResult> AddRangeAsync(List<TDto> model)
        {
            var item = _mapper.Map<List<T>>(model);
            _repo.AddRange(item);
            try
            {
                await _unitOfWork.SaveChangeAsync();
                operationResult = new OperationResult
                {
                    StatusCode = HttpStatusCode.OK,
                    Message = MessageReponse.AddSuccess,
                    Success = true,
                    Data = item
                };
            }
            catch (Exception ex)
            {
                 await _logger.LogStoreProcedure(new LoggerParams {
                    Type= EvseLogConst.CreateMany,
                    LogText = $"Type: { ex.GetType().Name}, Message: { ex.Message}, StackTrace: {ex.ToString()}"
                }).ConfigureAwait(false);
                operationResult = ex.GetMessageError();
            }
            return operationResult;
        }

        public virtual async Task<OperationResult> DeleteAsync(object id)
        {
            var item = _repo.FindByID(id);
            _repo.Remove(item);
            try
            {
                await _unitOfWork.SaveChangeAsync();
                operationResult = new OperationResult
                {
                    StatusCode = HttpStatusCode.OK,
                    Message = MessageReponse.DeleteSuccess,
                    Success = true,
                    Data = item
                };
            }
            catch (Exception ex)
            {
                   await _logger.LogStoreProcedure(new LoggerParams {
                    Type= EvseLogConst.Delete,
                    LogText = $"Type: { ex.GetType().Name}, Message: { ex.Message}, StackTrace: {ex.ToString()}"
                }).ConfigureAwait(false);
                operationResult = ex.GetMessageError();
            }
            return operationResult;
        }

        public virtual async Task<List<TDto>> GetAllAsync()
        {

            return await _repo.FindAll().ProjectTo<TDto>(_configMapper).ToListAsync();

        }

        public virtual TDto GetByID(object id)
        {
            return _mapper.Map<T, TDto>(_repo.FindByID(id));
        }
        
        public virtual async Task<TDto> GetByIDAsync(object id)
        {
            return  _mapper.Map<T, TDto>( await _repo.FindByIDAsync(id));
        }
        public virtual async Task<PagedList<TDto>> GetWithPaginationsAsync(PaginationParams param)
        {
            var lists = _repo.FindAll().ProjectTo<TDto>(_configMapper);
            return await PagedList<TDto>.CreateAsync(lists, param.PageNumber, param.PageSize);
        }
    
        public virtual async Task<PagedList<TDto>> SearchAsync(PaginationParams param, object text)
        {
            var lists = _repo.FindAll().ProjectTo<TDto>(_configMapper)
          .Where(x => x.GetType().GetProperty("Name").GetValue(x) == text)
          .OrderByDescending(x => x.GetType().GetProperty("Id"));
            return await PagedList<TDto>.CreateAsync(lists, param.PageNumber, param.PageSize);
        }

        public virtual async Task<OperationResult> UpdateAsync(TDto model)
        {
            var item = _mapper.Map<T>(model);
            _repo.Update(item);
            try
            {
                await _unitOfWork.SaveChangeAsync();
                operationResult = new OperationResult
                {
                    StatusCode = HttpStatusCode.OK,
                    Message = MessageReponse.UpdateSuccess,
                    Success = true,
                    Data = item
                };
            }
            catch (Exception ex)
            {
                   await _logger.LogStoreProcedure(new LoggerParams {
                    Type= EvseLogConst.Update,
                    LogText = $"Type: { ex.GetType().Name}, Message: { ex.Message}, StackTrace: {ex.ToString()}"
                }).ConfigureAwait(false);
                operationResult = ex.GetMessageError();
            }
            return operationResult;
        }
    
        public virtual async Task<OperationResult> UpdateRangeAsync(List<TDto> model)
        {
            var item = _mapper.Map<List<T>>(model);
            _repo.UpdateRange(item);
            try
            {
                await _unitOfWork.SaveChangeAsync();
                operationResult = new OperationResult
                {
                    StatusCode = HttpStatusCode.OK,
                    Message = MessageReponse.UpdateSuccess,
                    Success = true,
                    Data = item
                };
            }
            catch (Exception ex)
            {
                   await _logger.LogStoreProcedure(new LoggerParams {
                    Type= EvseLogConst.UpdateMany,
                    LogText = $"Type: { ex.GetType().Name}, Message: { ex.Message}, StackTrace: {ex.ToString()}"
                }).ConfigureAwait(false);
                operationResult = ex.GetMessageError();
            }
            return operationResult;
        }

       public virtual async Task<object> GetDataDropdownlist(DataManager data)
        {
              var datasource = _repo.FindAll().AsQueryable();
            var count = await datasource.CountAsync();
            if (data.Where != null) // for filtering
                datasource = QueryableDataOperations.PerformWhereFilter(datasource, data.Where, data.Where[0].Condition);
            if (data.Sorted != null)//for sorting
                datasource = QueryableDataOperations.PerformSorting(datasource, data.Sorted);
            if (data.Search != null)
                datasource = QueryableDataOperations.PerformSearching(datasource, data.Search);
            count = await datasource.CountAsync();
            if (data.Skip >= 0)//for paging
                datasource = QueryableDataOperations.PerformSkip(datasource, data.Skip);
            if (data.Take > 0)//for paging
                datasource = QueryableDataOperations.PerformTake(datasource, data.Take);
            return await datasource.ToListAsync();
        }

              public virtual async Task<Pager<TDto>> PaginationAsync(ParamaterPagination paramater)
        {
            var query = _repo.FindAll().AsNoTracking().ProjectTo<TDto>(_configMapper);
            return await query.ToPaginationAsync(paramater.page, paramater.pageSize);
        }
    }
}
