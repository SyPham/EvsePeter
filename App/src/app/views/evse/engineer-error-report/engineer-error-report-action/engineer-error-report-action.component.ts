
import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { DropDownListComponent, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { AccountTypeService } from 'src/app/_core/_service/account-type.service';
import { EmployeeService } from 'src/app/_core/_service/employee.service';
import { FarmService } from 'src/app/_core/_service/farms';
import { DataManager, Query, UrlAdaptor, Predicate } from '@syncfusion/ej2-data';
import { environment } from 'src/environments/environment';
import { ImagePathConstants, MessageConstants } from 'src/app/_core/_constants';
import { AlertifyService, UtilitiesService } from '@pigfarm-core';
import { XAccountService } from 'src/app/_core/_service/xaccount.service';
import { EmitType, detach, Browser, createElement, isNullOrUndefined, EventHandler } from '@syncfusion/ej2-base';
import { FileInfo, RemovingEventArgs, SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import { EngineerErrorReport } from 'src/app/_core/_model/evse/model';
import { EngineerErrorReportService } from 'src/app/_core/_service/evse/engineer_error_report.service';
declare let $: any;

@Component({
  selector: 'app-engineer-error-report-action',
  templateUrl: './engineer-error-report-action.component.html',
  styleUrls: ['./engineer-error-report-action.component.css']
})
export class EngineerErrorReportActionComponent implements OnInit {
  @ViewChild('previewupload')
  public uploadObj: UploaderComponent;


  public parentElement: HTMLElement;
  public dropElement: HTMLElement;


  public allowExtensions: string = '.png, .jpg, .jpeg';
  public filesName: string[] = [];
  public filesDetails : FileInfo[] = [];
  public filesList: HTMLElement[] = [];



  loading
  model: EngineerErrorReport = <EngineerErrorReport>{};
  file: any;
  employeeFields: object = { text: 'nickName', value: 'guid' };
  farmFields: object = { text: 'farmName', value: 'guid' };
  fields: object = { text: 'groupName', value: 'guid' };
  employeeData: any[];
  farmData: any;

  engineerErrorReportGroupFields: object = { text: 'groupName', value: 'guid' };
  engineerErrorReportGroupData;
  apiHost = environment.apiUrl.replace('/api/', '');
  noImage = ImagePathConstants.NO_IMAGE;

id: any;
  audit: EngineerErrorReport;
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
    private service: EngineerErrorReportService,
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
    private xAccountService: XAccountService,


  ) { 

  }
  lastLoginDate
  currentUser = JSON.parse(localStorage.getItem('user'))

  ngOnInit() {
  this.xAccountService.getById(this.currentUser.id).subscribe(x=> {
    this.lastLoginDate = x.lastLoginDate;
  })
  this.loadSites();
  this.codeType();
  this.auditLogs();
  this.uploadConfig();
  this.loadCodeTypeViewError();
  this.loadCodeTypeStatus();
  
  this.id = +this.route.snapshot.params['id'];

  if ( this.id === 0) {
    this.reset()

  } else {
   this.loadDetail().subscribe(model => {
    if (model == null) {
      this.alertify.errorConfirm("", this.translate.instant("Not found record"), () => {
        this.router.navigateByUrl("/")
        return;
      })
     
    } else {
      this.model = model;
      this.deviceGuid = this.model.deviceGuid
      this.loadDevices(this.model.errorSite)
    }
  });
 
  this.path = {
    saveUrl: environment.apiUrl+ `EngineerErrorReport/Save?id=${this.model.id}&type=1` ,
    removeUrl: environment.apiUrl+ `EngineerErrorReport/Remove?id=${this.model.id}&type=1`
};


    this.getAudit(this.id);
  }


  }
 

  inputType = 'password'
  inputTypeRePw = 'password'
  togglePassword() {
    this.inputType = this.inputType === "password" ? "text": "password"
  }
  toggleRePassword() {
    this.inputTypeRePw = this.inputTypeRePw === "password" ? "text": "password"
  }
  loadDetail() {
   return this.service.getById(this.id)
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
    this.model = <EngineerErrorReport>{};
    this.model.id = 0;
   
  }
 


  onFileChangeLogo(args) {
    this.file = args.target.files[0];
  }



  getFarms() {
    this.serviceFarm.getFarms().subscribe(data => {
      this.farmData = data;
    });
  }

  back() {
      this.router.navigateByUrl("/evse/engineer-error-report")
  }
  dataSourceCodeTypeViewError
  dataSourceCodeTypeStatus
  dataSourceDevice
  queryViewError
  queryDevice
  queryStatus
  queryErrorSite
  dataSourceErrorSite
  public onFilteringErrorSite: any = (e: FilteringEventArgs) => {
    let query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text != "") ? query.where("siteName", "contains ", e.text, true).where("siteName", "contains ", e.text, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(this.dataSourceErrorSite, query);
  };
  public onFilteringDevice: any = (e: FilteringEventArgs) => {
    let query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text != "") ? query.where("deviceName", "contains ", e.text, true).where("deviceNo", "contains ", e.text, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(this.dataSourceDevice, query);
  };
  public onFilteringViewError: any = (e: FilteringEventArgs) => {
    let query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text != "") ? query.where("name", "contains ", e.text, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(this.dataSourceCodeTypeViewError, query);
  };
  public onFilteringStatus: any = (e: FilteringEventArgs) => {
    let query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text != "") ? query.where("name", "contains ", e.text, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(this.dataSourceCodeTypeStatus, query);
  };
  @ViewChild('codeTypeViewError')
  public dropDownListViewError: DropDownListComponent;
  @ViewChild('codeTypeStatus')
  public dropDownListStatus: DropDownListComponent;
  @ViewChild('deviceDrop')
  public dropDownListDevice: DropDownListComponent;

  loadCodeTypeViewError() {
    this.queryViewError = new Query()
    .addParams("lang", localStorage.getItem('lang'));
    this.dataSourceCodeTypeViewError = new DataManager({
      url: `${environment.apiUrl}CodeType/GetDataDropdownlist?lang=${localStorage.getItem('lang')}&codeType=EngineerError_ViewError`,
      adaptor: new UrlAdaptor,
      crossDomain: true,
    });

  }
  deviceGuid
  loadCodeTypeStatus() {
    this.queryStatus = new Query()
    .addParams("lang", localStorage.getItem('lang'));
    this.dataSourceCodeTypeStatus = new DataManager({
      url: `${environment.apiUrl}CodeType/GetDataDropdownlist?lang=${localStorage.getItem('lang')}&codeType=EngineerError_Status`,
      adaptor: new UrlAdaptor,
      crossDomain: true,
    });
  }
  onChangeSite(e) {
    
    if (e.isInteracted) {
      this.dropDownListDevice.value = null;
      this.deviceGuid = null;
      this.model.deviceGuid = null;
      this.loadDevices(this.model.errorSite);
    }
  
  }
  onChangeDevice(deviceGuid) {
    this.model.deviceGuid = deviceGuid
  }
  actionComplete(e) {
    if (this.deviceGuid) {
      this.dropDownListDevice.value = this.deviceGuid
    }
  }
  loadDevices(errorSite) {
    this.queryDevice = new Query()
    .where("siteGuid", 'equal', errorSite);
    this.dataSourceDevice= new DataManager({
      url: `${environment.apiUrl}Device/GetDataDropdownlist`,
      adaptor: new UrlAdaptor,
      crossDomain: true,
    });
  }
  loadSites() {
    this.queryErrorSite = new Query();
    this.dataSourceErrorSite= new DataManager({
      url: `${environment.apiUrl}Site/GetDataDropdownlist`,
      adaptor: new UrlAdaptor,
      crossDomain: true,
    });
  }
  create() {
  
    this.alertify.confirm4(
       this.alert.yes_message,
       this.alert.no_message,
       this.alert.createTitle,
       this.alert.createMessage,
       () => {
         this.service.insertForm(this.ToFormatModel(this.model)).subscribe(
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
         this.service.updateForm(this.ToFormatModel(this.model)).subscribe(
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

  changeRepassword(e) {
  }
  query;
  contactRelData
  codeType() {
    this.query = new Query()
    .addParams("lang", localStorage.getItem('lang'));
    let data = new DataManager({
      url: `${environment.apiUrl}CodeType/GetDataDropdownlist?lang=${localStorage.getItem('lang')}&codeType=ContactRel`,
      adaptor: new UrlAdaptor,
      crossDomain: true,
    });
    data.executeQuery(this.query.sortBy('guid')).then((x: any)=> {
      this.contactRelData = x.result;
      if (this.model.id > 0 && this.contactRelData.length > 0) {
       
      }
    })
  }
  auditLogsQuery: Query; 
  auditLogsData$: any; 
  locale = localStorage.getItem('lang');
  pageText = 'Total Records Count {{items}} items'
  public path: Object = {
    saveUrl: environment.apiUrl+ `EngineerErrorReport/Save?id=${this.model.id}&type=1` ,
    removeUrl: environment.apiUrl+ `EngineerErrorReport/Remove?id=${this.model.id}&type=1`
};

  auditLogs() {
    this.auditLogsQuery = new Query();
    this.auditLogsData$ = new DataManager({
      url: `${environment.apiUrl}AuditLog/LoadData?lang=${localStorage.getItem('lang')}`,
      adaptor: new UrlAdaptor,
      crossDomain: true,
    });
  }
  

uploadConfig() {
  this.dropElement = document.getElementsByClassName('control-section')[0] as HTMLElement;
  if (Browser.isDevice) { document.getElementById('dropimage').style.padding = '0px 10%'; }
  if (document.getElementById('browse')) {
    document.getElementById('browse').onclick = () => {
      document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
      return false;
  };
  }

 
}
actionCompleteIdCard1(e) {
  this.service.getById(this.id).subscribe(x=> {
    this.model.photoPath = x.photoPath;

  })
}
removeIdCard1Path() {
  this.service.removeFile(this.model.id, "1").subscribe(x=> {
    if (x.success) {
      this.model.photoPath = x.data.photoPath;
    this.uploadObj.remove();
    this.uploadObj.refresh();

    }
  })
}
}
