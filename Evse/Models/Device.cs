﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace Evse.Models
{
    public partial class Device
    {
        public decimal Id { get; set; }
        public string SiteGuid { get; set; }
        public string ParkingLotGuid { get; set; }
        public string DeviceType { get; set; }
        public string DeviceNo { get; set; }
        public string DeviceName { get; set; }
        public string DeviceLeftNo { get; set; }
        public string DeviceLeftGuid { get; set; }
        public string DeviceRightNo { get; set; }
        public string DeviceRightGuid { get; set; }
        public string Comment { get; set; }
        public DateTime? CreateDate { get; set; }
        public decimal? CreateBy { get; set; }
        public DateTime? UpdateDate { get; set; }
        public decimal? UpdateBy { get; set; }
        public DateTime? DeleteDate { get; set; }
        public decimal? DeleteBy { get; set; }
        public decimal? Status { get; set; }
        public string Guid { get; set; }
         public string Longitude { get; set; }
        public string Latitude { get; set; }
    }
}