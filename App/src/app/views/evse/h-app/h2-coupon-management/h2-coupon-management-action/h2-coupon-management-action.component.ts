

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
import { CouponManagement } from 'src/app/_core/_model/evse/model';
import { XAccountService } from 'src/app/_core/_service/xaccount.service';
import { EmitType, detach, Browser, createElement, isNullOrUndefined, EventHandler } from '@syncfusion/ej2-base';
import { FileInfo, RemovingEventArgs, SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import { CouponManagementService } from 'src/app/_core/_service/evse/coupon-management.service';
declare let $: any;


@Component({
  selector: 'app-h2-coupon-management-action',
  templateUrl: './h2-coupon-management-action.component.html',
  styleUrls: ['./h2-coupon-management-action.component.scss']
})
export class H2CouponManagementActionComponent  implements OnInit {

  loading
  model: CouponManagement = <CouponManagement>{};
  file: any;
  employeeFields: object = { text: 'nickName', value: 'guid' };
  farmFields: object = { text: 'farmName', value: 'guid' };
  fields: object = { text: 'groupName', value: 'guid' };
  employeeData: any[];
  farmData: any;
  permissionData: [] = [];
  memberGroupFields: object = { text: 'groupName', value: 'guid' };
  memberGroupData;
  apiHost = environment.apiUrl.replace('/api/', '');
  noImage = ImagePathConstants.NO_IMAGE;
  public onFiltering: any = (e: FilteringEventArgs) => {
    let query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text != "") ? query.where("name", "contains ", e.text, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(this.permissionData, query);
  };
id: any;
  audit: CouponManagement;
  alert = {
    updateMessage: this.translate.instant(MessageConstants.UPDATE_MESSAGE),
    updateTitle: this.translate.instant(MessageConstants.UPDATE_TITLE),
    createMessage:this.translate.instant(MessageConstants.CREATE_MESSAGE),
    createTitle: this.translate.instant(MessageConstants.CREATE_TITLE),
    deleteMessage: this.translate.instant(MessageConstants.DELETE_MESSAGE),
    deleteTitle: this.translate.instant(MessageConstants.DELETE_TITLE),
    cancelMessage: this.translate.instant(MessageConstants.CANCEL_MESSAGE),
    serverError: this.translate.instant(MessageConstants.SERVER_ERROR),
    deleted_ok_msg: this.translate.instant(MessageConstants.DELETED_OK_MSG),
    created_ok_msg: this.translate.instant(MessageConstants.CREATED_OK_MSG),
    updated_ok_msg: this.translate.instant(MessageConstants.UPDATED_OK_MSG),
    system_error_msg: this.translate.instant(MessageConstants.SYSTEM_ERROR_MSG),
    exist_message: this.translate.instant(MessageConstants.EXIST_MESSAGE),
    choose_farm_message: this.translate.instant(MessageConstants.CHOOSE_FARM_MESSAGE),
    select_order_message: this.translate.instant(MessageConstants.SELECT_ORDER_MESSAGE),
    yes_message: this.translate.instant(MessageConstants.YES_MSG),
    no_message: this.translate.instant(MessageConstants.NO_MSG),
  };

  constructor(
    private service: CouponManagementService,
    private serviceXAccount: XAccountService,
    private serviceEmployee: EmployeeService,
    public modalService: NgbModal,
    private serviceFarm: FarmService,
    private alertify: AlertifyService,
    private utilityService: UtilitiesService,
    private datePipe: DatePipe,
     private config: NgbTooltipConfig,
    public translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute,

  ) { 

  }
  changeStatus(e) {
    if (e.checked) {
      this.model.status = "1"
    } else {
      this.model.status = "0"
    }

  }
 async ngOnInit() {
  this.id = +this.route.snapshot.params['id'];
  if ( this.id === 0) {
    this.reset()

  } else {
  const model=  await this.loadDetail();
  if (model == null) {
    this.alertify.errorConfirm("", this.translate.instant("Not found record"), () => {
      this.router.navigateByUrl("/")
      return;
    })
   
  }
  this.model = model;
 
    this.getAudit(this.id);
   this.auditLogs();

  }
   this.codeType();


  }
 
  loadDetail() {
   return this.service.getById(this.id).toPromise()
  }

  getAudit(id) {
    this.service.getAudit(id).subscribe(data => {
      this.audit = data;
    });

}
  imagePath(path) {
    if (path !== null && this.utilityService.checkValidImage(path)) {
      if (this.utilityService.checkExistHost(path)) {
        return path;
      }
      return this.apiHost + path;
    }
    return this.noImage;
  }
  reset() {
    this.id = null;
    this.model = <CouponManagement>{};
    this.model.id = 0;
    this.model.discountType = "DiscountPrice"
   
  }
  contactRel = ''
 


  onFileChangeLogo(args) {
    this.file = args.target.files[0];
  }



  back() {
      this.router.navigateByUrl("/h-app/h2")
  }
  create() {
  
    this.alertify.confirm4(
       this.alert.yes_message,
       this.alert.no_message,
       this.alert.createTitle,
       this.alert.createMessage,
       () => {
         this.service.add(this.ToFormatModel(this.model)).subscribe(
           (res) => {
             if (res.success === true) {
               this.alertify.success(this.alert.created_ok_msg);
               this.back();
 
             } else {
               this.translate.get(res.message).subscribe((data: string) => {
                 this.alertify.warning(data, true);
               });
             }
 
           },
           (error) => {
             this.alertify.warning(this.alert.system_error_msg);
           }
         );
       }, () => {
         this.alertify.error(this.alert.cancelMessage);
       },
       'success'
     );
 
   }
   update() {
    this.alertify.confirm4(
       this.alert.yes_message,
       this.alert.no_message,
       this.alert.updateTitle,
       this.alert.updateMessage,
       () => {
         this.service.update(this.ToFormatModel(this.model)).subscribe(
           (res) => {
             if (res.success === true) {
               this.alertify.success(this.alert.updated_ok_msg);
               this.back();
 
             } else {
               this.alertify.warning(res.message, true);
             }
           },
           (error) => {
             this.alertify.warning(this.alert.system_error_msg);
           }
         );
       }, () => {
         this.alertify.error(this.alert.cancelMessage);
 
       },
       'success'
     );
 
   }
   save() {

    if (this.model.id > 0) {
      this.update();
    } else {
      this.create();
    }
  }
  ToFormatModel(model: any) {
    for (let key in model) {
      let value = model[key];
      if (value && value instanceof Date) {
        if (key === 'createDate') {
          model[key] = this.datePipe.transform(value, "yyyy/MM/dd HH:mm:ss");
        } else {
          model[key] = this.datePipe.transform(value, "yyyy/MM/dd");
        }
      } else {
        model[key] = value;
      }
    }
    return model;
  }

  checked(item, i) {
    if (this.model.discountType) {
      return item.guid === this.model.discountType

    } else {
      return item.guid == "DiscountPrice"
    }
  }
  checkedDiscountType(e) {
    if (e.target.checked) {
      this.model.discountType = e.target.defaultValue
    }
  }
  query;
  query2;
  discountData
  statusData
  codeType() {
    this.query = new Query()
    .addParams("lang", localStorage.getItem('lang'));
    let data = new DataManager({
      url: `${environment.apiUrl}CodeType/GetDataDropdownlist?lang=${localStorage.getItem('lang')}&codeType=Discount_Type`,
      adaptor: new UrlAdaptor,
      crossDomain: true,
    });
    data.executeQuery(this.query.sortBy('guid')).then((x: any)=> {
      this.discountData = x.result;
    })
    this.query2 = new Query()
    .addParams("lang", localStorage.getItem('lang'));
    let data2 = new DataManager({
      url: `${environment.apiUrl}CodeType/GetDataDropdownlist?lang=${localStorage.getItem('lang')}&codeType=Coupon_Status`,
      adaptor: new UrlAdaptor,
      crossDomain: true,
    });
    data2.executeQuery(this.query2.sortBy('guid')).then((x: any)=> {
      this.statusData = x.result;
    })
  }
  auditLogsQuery: Query; 
  auditLogsData$: any; 
  locale = localStorage.getItem('lang');
  pageText = 'Total Records Count {{items}} items'
  
auditLogs() {
  this.auditLogsQuery = new Query().where("recordId", 'equal', this.id);
  this.auditLogsData$ = new DataManager({
    url: `${environment.apiUrl}AuditLog/LoadData?lang=${localStorage.getItem('lang')}`,
    adaptor: new UrlAdaptor,
    crossDomain: true,
  },this.auditLogsQuery);
}
  

}
