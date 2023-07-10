

import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { AccountTypeService } from 'src/app/_core/_service/account-type.service';
import { EmployeeService } from 'src/app/_core/_service/employee.service';
import { FarmService } from 'src/app/_core/_service/farms';
import { DataManager, Query, UrlAdaptor, Predicate } from '@syncfusion/ej2-data';
import { environment } from 'src/environments/environment';
import { ImagePathConstants, MessageConstants } from 'src/app/_core/_constants';
import { AlertifyService, UtilitiesService } from '@pigfarm-core';
import { Site } from 'src/app/_core/_model/evse/model';
import { SiteService } from 'src/app/_core/_service/evse/site.service';
import { XAccountService } from 'src/app/_core/_service/xaccount.service';
import { EmitType, detach, Browser, createElement, isNullOrUndefined, EventHandler } from '@syncfusion/ej2-base';
import { FileInfo, RemovingEventArgs, SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
declare let $: any;

@Component({
  selector: 'app-sitev2-detail',
  templateUrl: './sitev2-detail.component.html',
  styleUrls: ['./sitev2-detail.component.scss']
})
export class Sitev2DetailComponent implements OnInit {
  model: Site = <Site>{};
id: any;

  constructor(
    private service: SiteService,
    public modalService: NgbModal,
    private alertify: AlertifyService,
    public translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute,

  ) { 

  }
  ngOnInit() {
  this.id = +this.route.snapshot.params['id'];
  if ( this.id !== 0) {
  this.loadDetail().subscribe(model => {
    if (model == null) {
      this.alertify.errorConfirm("", this.translate.instant("Not found record"), () => {
        this.router.navigateByUrl("/")
        return;
      })
     
    }
    this.model = model;
  });

  }
  }

  
  loadDetail() {
   return this.service.getByIdAndLang(this.id)
  }
  
  back() {
      this.router.navigateByUrl("/evse/sitev2")
  }
}

