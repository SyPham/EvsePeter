﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace Evse.Models
{
    public partial class HelpCenter
    {
        public decimal Id { get; set; }
        public string QuestionDescript { get; set; }
        public string AnswerDescript { get; set; }
        public string QuestionType { get; set; }
        public string Comment { get; set; }
        public DateTime? CreateDate { get; set; }
        public decimal? CreateBy { get; set; }
        public DateTime? UpdateDate { get; set; }
        public decimal? UpdateBy { get; set; }
        public string Status { get; set; }
        public string Guid { get; set; }
    }
}