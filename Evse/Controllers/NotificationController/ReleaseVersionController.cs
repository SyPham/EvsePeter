
using BFCTicket.Extensions;
using Evse.Constants;
using Evse.DTO;
using Evse.Helpers;
using Evse.Services;
using Evse.Utilities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Evse.Controllers
{
    public class ReleaseVersionController : ApiControllerBase
    {
        private readonly IReleaseVersionService _service;

        public ReleaseVersionController(IReleaseVersionService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult> GetAllAsync()
        {
            return Ok(await _service.GetAllAsync());
        }

        [HttpPost]
        [ValidationModel]
        [HasPermission("RELEASE-VERSION", HasPermissionConst.CREATE)]
        public async Task<IActionResult> AddAsync([FromBody] ReleaseVersionDto model)
        {
             
            return StatusCodeResult(await _service.AddAsync(model));
        }

        [HttpPut]
         [ValidationModel]
        [HasPermission("RELEASE-VERSION", HasPermissionConst.UPDATE)]
        public async Task<IActionResult> UpdateAsync([FromBody] ReleaseVersionDto model)
        {
             
            return StatusCodeResult(await _service.UpdateAsync(model));
        }

        [HttpDelete]
        [HasPermission("RELEASE-VERSION", HasPermissionConst.DELETE)]
        public async Task<ActionResult> DeleteAsync(int key)
        {
            return StatusCodeResult(await _service.DeleteAsync(key));
        }

        [HttpGet]
        public async Task<ActionResult> FindByIdAsync(int id)
        {
            return Ok(await _service.GetByIDAsync(id));
        }

        [HttpGet]
        public async Task<ActionResult> PaginationAsync(ParamaterPagination paramater)
        {
            return Ok(await _service.PaginationAsync(paramater));
        }

        // [HttpGet]
        // [HasPermission("RELEASE-VERSION", HasPermissionConst.READ)]
        // public async Task<ActionResult> LoadDxoGridAsync(DataSourceLoadOptions loadOptions)
        // {
        //     return Ok(await _service.LoadDxoGridAsync(loadOptions));
        // }

        // [HttpGet]
        // public async Task<ActionResult> LoadDxoLookupAsync(DataSourceLoadOptions loadOptions)
        // {
        //     return Ok(await _service.LoadDxoLookupAsync(loadOptions));
        // }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetLastedVersion()
        {
            return Ok(await _service.GetLastedVersionAsync());
        }
    }
}