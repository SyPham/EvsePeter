using Microsoft.AspNetCore.Mvc;
using Evse.DTO;
using Syncfusion.JavaScript;
using System.Threading.Tasks;
using Evse.Services.HApp;
using Evse.Helpers;

namespace Evse.Controllers.HApp
{
    public class HelpCenterController : ApiControllerBase
    {
        private readonly IHelpCenterService _service;

        public HelpCenterController(IHelpCenterService service)
        {
            _service = service;
        }


        [HttpGet]
        public async Task<ActionResult> GetAllAsync()
        {
            return Ok(await _service.GetAllAsync());
        }

        [HttpPost]
        public async Task<ActionResult> AddAsync([FromBody] HelpCenterDto model)
        {
            return StatusCodeResult(await _service.AddAsync(model));
        }

        [HttpPut]
        public async Task<ActionResult> UpdateAsync([FromBody] HelpCenterDto model)
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
        public async Task<ActionResult> GetWithPaginationsAsync([FromQuery]PaginationParams paramater)
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
    }
}
