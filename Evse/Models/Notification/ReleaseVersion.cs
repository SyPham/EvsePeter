using System;
using System.ComponentModel.DataAnnotations;
  public enum ReleaseVersionTypeEnum
    {
        All,
        IOS,
        Android
    }
namespace Evse.Models
{
    public class ReleaseVersion
    {
        [Key]
        public int Id { get; set; }
        [StringLength(512)]
        public string Title { get; set; }
        [StringLength(512)]
        public string Version { get; set; }
        public DateTime VersionDate { get; set; }
        [StringLength(512)]
        public string Description { get; set; }
        [StringLength(4000)]
        public string ReleaseContent { get; set; }
        public ReleaseVersionTypeEnum OsType { get; set; }
      
    }
}