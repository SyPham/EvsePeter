﻿using Microsoft.AspNetCore.Mvc;
using Evse.DTO;
using Evse.Helpers;
using Syncfusion.JavaScript;
using System.Threading.Tasks;
using Evse.Services.HApp;

namespace Evse.Controllers.HApp
{
    public class ContractManagementController : ApiControllerBase
    {
        private readonly IContractManagementService _service;

        public ContractManagementController(IContractManagementService service)
        {
            _service = service;
        }


        [HttpGet]
        public async Task<ActionResult> GetAllAsync()
        {
            return Ok(await _service.GetAllAsync());
        }

        [HttpPost]
        public async Task<ActionResult> AddAsync([FromBody] ContractManagementDto model)
        {
            return StatusCodeResult(await _service.AddAsync(model));
        }

        [HttpPut]
        public async Task<ActionResult> UpdateAsync([FromBody] ContractManagementDto model)
        {
            return StatusCodeResult(await _service.UpdateAsync(model));
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteAsync(decimal id)
        {
            return StatusCodeResult(await _service.DeleteAsync(id));
        }

        [HttpGet]
        public async Task<ActionResult> GetByIDAsync(decimal id)
        {
            return Ok(await _service.GetByIDAsync(id));
        }

        [HttpGet]
        public async Task<ActionResult> GetWithPaginationsAsync(PaginationParams paramater)
        {
            return Ok(await _service.GetWithPaginationsAsync(paramater));
        }
        [HttpPost]
        public async Task<ActionResult> LoadData([FromBody] DataManager request, string lang)
        {

            var data = await _service.LoadData(request, lang);
            return Ok(data);
        }
        [HttpGet]
        public async Task<ActionResult> GetByGuid(string guid)
        {
            return Ok(await _service.GetByGuid(guid));
        }
        [HttpGet]
        public async Task<ActionResult> GetAudit(decimal id)
        {
            return Ok(await _service.GetAudit(id));
        }
        [HttpPost]
        public async Task<ActionResult> GetDataDropdownlist([FromBody] DataManager request)
        {

            var data = await _service.GetDataDropdownlist(request);
            return Ok(data);
        }
        [HttpGet]
        public async Task<ActionResult> GetFirst()
        {
            return Ok(await _service.GetFirst());
        }
    }
}
