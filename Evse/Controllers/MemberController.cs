﻿using Microsoft.AspNetCore.Mvc;
using Evse.DTO;
using Evse.Helpers;
using Evse.Services;
using Syncfusion.JavaScript;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.IO;
using System;
using NetUtility;
using System.Linq;
using Evse.Models;

namespace Evse.Controllers
{
    public class MemberController : ApiControllerBase
    {
        private readonly IMemberService _service;

        public MemberController(IMemberService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult> GetAllAsync()
        {
            return Ok(await _service.GetAllAsync());
        }
        [HttpPost]
        public async Task<ActionResult> DeleteUploadFile([FromForm] decimal key)
        {
            return Ok(await _service.DeleteUploadFile(key));
        }
        [HttpPost]
        public async Task<ActionResult> AddAsync([FromBody] MemberDto model)
        {
            return StatusCodeResult(await _service.AddAsync(model));
        }

        [HttpPut]
        public async Task<ActionResult> UpdateAsync([FromBody] MemberDto model)
        {
            return StatusCodeResult(await _service.UpdateAsync(model));
        }
        [HttpPut]
        public async Task<ActionResult> UpdatePofileAsync([FromBody] MemberProfileDto model)
        {
            return StatusCodeResult(await _service.UpdatePofileAsync(model));
        }
    [HttpPost]
        public async Task<ActionResult> AddFormAsync([FromForm] MemberDto model)
        {
            return Ok(await _service.AddFormAsync(model));
        }

        [HttpPut]
        public async Task<ActionResult> UpdateFormAsync([FromForm] MemberDto model)
        {
            return Ok(await _service.UpdateFormAsync(model));
        }

        [HttpPut]
        public async Task<ActionResult> UpdateFileAsync([FromForm]  IFormFile file,[FromQuery] decimal id)
        {
            return Ok(await _service.UpdateFileAsync(new MemberUploadFileDto{Id = id, File =file}));
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
        public async Task<ActionResult> GetByIdAndLangAsync(decimal id, string lang)
        {
            return Ok(await _service.GetByIdAndLangAsync(id,lang));
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
        [HttpGet]
        public async Task<ActionResult> GetLastLocation(string guid)
        {
            return Ok(await _service.GetLastLocation(guid));
        }
        [HttpPut]
        public async Task<ActionResult> StoreLastLocation([FromBody] LastLocationDto model)
        {
            return StatusCodeResult(await _service.StoreLastLocation(model));
        }
        [HttpPost]
                public async Task<ActionResult> Remove([FromForm] string cancelUploading, [FromForm] string uploadFiles, decimal id, string type)
                {
                  return StatusCodeResult(await _service.RemoveFile(id, type));
                }
         [HttpPost]
        public async Task<ActionResult> Save(IFormFile uploadFile, decimal id, string type)
        {
           
                 if(uploadFile ==null)
                uploadFile = Request.Form.Files["UploadFiles"];
                return StatusCodeResult(await _service.SaveFile(uploadFile,id, type));

        }
         [HttpGet]
        public async Task<IActionResult> CheckDisplayPopupByCurrentUser()
        {
            return Ok(await _service.CheckDisplayPopupByCurrentUser());
        }
        [HttpPost]
        public async Task<IActionResult> AddDisplayPopup()
        {
            return Ok(await _service.AddDisplayPopup());
        }
    }
}
