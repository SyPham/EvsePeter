﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace Evse.Models
{
    public partial class CouponManagement
    {
        public decimal Id { get; set; }
        public string CouponCode { get; set; }
        public string DiscountType { get; set; }
        public string Comment { get; set; }
        public DateTime? CreateDate { get; set; }
        public decimal? CreateBy { get; set; }
        public DateTime? UpdateDate { get; set; }
        public decimal? UpdateBy { get; set; }
        public string Status { get; set; }
        public string Guid { get; set; }
                public decimal? DiscountPrice { get; set; }
        public decimal? DiscountPercentage { get; set; }
    }
}