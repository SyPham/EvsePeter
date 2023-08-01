using System;
using System.ComponentModel.DataAnnotations;

namespace Evse.DTO
{
    public class ReleaseVersionDto
    {
        public int Id { get; set; }
        [StringLength(512, ErrorMessage="Tiêu đề không quá 512 ký tự")]
        public string Title { get; set; }
        [StringLength(512)]
        public string Version { get; set; }
        public DateTime VersionDate { get; set; }
        
        [StringLength(512, ErrorMessage="Mô tả không quá 512 ký tự")]
        public string Description { get; set; }

        [StringLength(4000, ErrorMessage="Nội dung phiên bản không quá 4000 ký tự")]
        public string ReleaseContent { get; set; }

        public ReleaseVersionTypeEnum OsType { get; set; }

    }
}