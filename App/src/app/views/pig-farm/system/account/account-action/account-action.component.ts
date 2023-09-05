import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { XAccount } from 'src/app/_core/_model/xaccount';
import { AccountTypeService } from 'src/app/_core/_service/account-type.service';
import { EmployeeService } from 'src/app/_core/_service/employee.service';
import { FarmService } from 'src/app/_core/_service/farms';
import { XAccountGroupService } from 'src/app/_core/_service/xaccount-group.service';
import { XAccountService } from 'src/app/_core/_service/xaccount.service';
import { DataManager, Query, UrlAdaptor, Predicate } from '@syncfusion/ej2-data';
import { XAccountGroup } from 'src/app/_core/_model/xaccount-group';
import { environment } from 'src/environments/environment';
import { ImagePathConstants, MessageConstants } from 'src/app/_core/_constants';
import { AlertifyService, UtilitiesService } from '@pigfarm-core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
declare let $: any;

@Component({
  selector: 'app-account-action',
  templateUrl: './account-action.component.html',
  styleUrls: ['./account-action.component.scss']
})
export class AccountActionComponent implements OnInit {
  loading
  model: XAccount = <XAccount>{};
  file: any;
  employeeFields: object = { text: 'nickName', value: 'guid' };
  farmFields: object = { text: 'farmName', value: 'guid' };
  fields: object = { text: 'groupName', value: 'guid' };
  employeeData: any[];
  farmData: any;
  permissionData: [] = [];
  xaccountGroupFields: object = { text: 'groupName', value: 'guid' };
  xaccountGroupData;
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
  audit: XAccount;
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
  sexData: any;
  checkMobile: any = 1;
  checkaccountIdcard = 1;
  checkContactTel = 1;
  currentDate = new Date();
  currentUser = JSON.parse(localStorage.getItem('user'))
  constructor(
    private service: XAccountService,
    private serviceAccountType: AccountTypeService,
    private serviceEmployee: EmployeeService,
    private xaccountGroupService: XAccountGroupService,
    public modalService: NgbModal,
    private serviceFarm: FarmService,
    private alertify: AlertifyService,
    private utilityService: UtilitiesService,
    private datePipe: DatePipe,
     private config: NgbTooltipConfig,
    public translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute

  ) { }
  role = '';
  isDisabledAll = true;
 async ngOnInit() {
  this.id = +this.route.snapshot.params['id'];
  this.role = this.route.snapshot.data['functionCode'];
  this.isDisabledAll = this.route.snapshot.data['type'] === 'view';

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
  this.model.upwd = null;
    this.getAudit(this.id);
   this.auditLogs();

  }
    this.getEmployeesByXAccountID(0);
    this.loadXAccountGroupData();
    this.loadSexConfig();
   this.codeType();

  }
  getAccountNo() {
    if (this.model?.accountGroup && this.role) {
      this.service.getAccountNo(this.role, this.model.accountGroup).subscribe(res=> {
      this.model.accountNo =  res['value'];
      })
    }
   
  }
  SP_Generate_NO() {
    if (this.model?.accountGroup) {
      this.service.SP_Generate_NO(this.model.accountGroup).subscribe(res=> {
        if ( res) {
          this.model.accountNo =  res['value'];
        }
      })
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
   return this.service.getById(this.id).toPromise()
  }
  loadSexConfig() {
    let query = new Query();
    const accessToken = localStorage.getItem("token");
    const lang = localStorage.getItem("lang");
    new DataManager({
      url: `${environment.apiUrl}CodeType/GetDataDropdownlist?lang=${lang}&codeType=SEX`,
      adaptor: new UrlAdaptor(),
      headers: [{ authorization: `Bearer ${accessToken}` }],
    })
      .executeQuery(query)
      .then((x: any) => {
        console.log(x);
        this.sexData = x.result;
      });
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
    this.id = 0;
    this.model = <XAccount>{};
    this.model.status = '1';
    this.model.accountId = 0;
    this.model.contactRel = '';
    this.contactRel = '';
   
  }
  contactRel = ''
  valueChange(value) {
    this.model.accountGroup = value || "";
  }
  farmValueChange(value) {
    this.model.farmGuid = value || [];
  }

  onFileChangeLogo(args) {
    this.file = args.target.files[0];
  }
  ngModelChange(value) {
    this.model.employeeGuid = value || "";
  }
  getEmployeesByXAccountID(xAccountID) {
    this.serviceEmployee.getEmployeesByAccountID(xAccountID || 0).subscribe(data => {
      this.employeeData = data;
    });
  }
  roles
  roles2
  loadXAccountGroupData() {
      this.xaccountGroupService.getAccountGroup().subscribe((roles: XAccountGroup[])=> {
        this.roles = roles
        let roleTemp = this.roles.filter(x=> x.groupNo == this.role)
        if (roles.length > 0 && this.model.accountId === 0 && this.role === 'Account')   {
          this.model.accountGroup = roles[0].guid
        } else if (roleTemp.length > 0 ) {
          this.model.accountGroup = roleTemp[0].guid
        }
        if (this.model.accountId === 0) {
          this.SP_Generate_NO();
        this.service.getNewId(roles[0].guid).subscribe(res => {
          this.model.accountId = res['value'];
        })

        }
        
      });
  }
  getFarms() {
    this.serviceFarm.getFarms().subscribe(data => {
      this.farmData = data;
    });
  }
  changeStatus(e) {
    if (e.checked) {
      this.model.status = "1"
    } else {
      this.model.status = "0"
    }

  }
  back() {
    if (this.role === 'Account') {
      this.router.navigateByUrl("/system/account")
    }  else if (this.role === 'Engineer') {
      this.router.navigateByUrl("/system/account/engineer")
    }  else if (this.role === 'Investor') {
      this.router.navigateByUrl("/system/account/investor")
    }  else if (this.role === 'Electrician') {
      this.router.navigateByUrl("/system/account/electrician")
    }  else if (this.role === 'Admin2') {
      this.router.navigateByUrl("/system/account/admin2")
    }  else if (this.role === 'Admin') {
      this.router.navigateByUrl("/system/account/admin")
    }  else if (this.role === 'Landlord') {
      this.router.navigateByUrl("/system/account/landlord")
    }
  }
  create() {
  
    this.alertify.confirm4(
       this.alert.yes_message,
       this.alert.no_message,
       this.alert.createTitle,
       this.alert.createMessage,
       () => {
        this.model.contactRel = this.contactRel;
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
        this.model.contactRel = this.contactRel;
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
   
  validateFields() {
    return of(
      !this.model.accountNo ? this.translate.instant("InputDataIncorrect", {field: this.translate.instant(this.role + '_NO') }) :
      !this.model.accountName ? this.translate.instant("InputDataIncorrect", {field: this.translate.instant(this.role + '_Name') }) :
      true
    ).pipe(
      switchMap(validationResult => {
        if (validationResult !== true) {
          this.alertify.error(validationResult, true);
          return of(false);
        }
        
        return this.service.SP_CheckIDCard(this.model.accountIdcard, this.role, this.model?.guid || "").pipe(
          switchMap(checkaccountIdcard => {
            this.checkaccountIdcard = checkaccountIdcard;
            if (checkaccountIdcard == 0) {
              this.alertify.error(this.translate.instant("InputDataIncorrect", {field: this.translate.instant(this.role + '_IDCARD') }), true);
              return of(false);
            }
      
            if (!this.model.uid) {
              this.alertify.error(this.translate.instant("InputDataIncorrect", {field: this.translate.instant(this.role + '_UID') }), true);
              return of(false);
            }
            if (!this.model.upwd && this.id === 0) {
              this.alertify.error(this.translate.instant("InputDataIncorrect", {field: this.translate.instant(this.role + '_PWD') }), true);
              return of(false);
            }
            if (this.model.upwd !== this.model.reupwd && this.model.accountId === 0) {
              this.alertify.error(this.translate.instant("PasswordNotMatch"), true);
              return of(false);
            }

            if (this.model.contactTel) {
             return this.service.SP_CheckContactTel(this.model.contactTel).pipe(
                switchMap(value => {
                  this.checkContactTel = value;
                  if (value === 0) {
                    this.alertify.error(this.translate.instant("Contact Tel Invalid"), true);
                    return of (false);
                  } 
                  return of (true)
                })
              )
           
            }
            if (this.model.accountMobile) {
              return this.service.SP_Check_Mobile(this.model.accountMobile).pipe(
                 switchMap(value => {
                   this.checkMobile = value;
                   if (value === 0) {
                     this.alertify.error(this.translate.instant("Mobile Invalid"), true);
                     return of (false);
                   } 
                   return of (true)
                 })
               )
            
             }
            return of(true);
          }),

          catchError(error => {
            return of(false);
          })
        );
      })
    );
  }
  contactTelChange(value) {
    if (!value) {
      this.checkContactTel = 1
    }
  }
  mobileChange(value) {
    if (!value) {
      this.checkMobile = 1
    }
  }
   save() {
    this.model.uid = this.model.accountNo;
    this.validateFields().subscribe(value => {
      if (value) {
       
        if (this.id > 0) {
          this.update();
        } else {
          this.create();
        }
      }
    })
   
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
      if (this.model.accountId > 0 && this.contactRelData.length > 0) {
        setTimeout (() => {
          this.contactRel = this.model.contactRel;
      
        }, 0)
      }
    })
  }
  auditLogsQuery: Query; 
  auditLogsData$: any; 
  locale = localStorage.getItem('lang');
  pageText = 'Total Records Count {{items}} items'

  auditLogs() {
    this.auditLogsQuery = new Query()
    .where("recordId", 'equal', this.id)
    .where("tableName", 'equal', 'XAccount');
    this.auditLogsData$ = new DataManager({
      url: `${environment.apiUrl}AuditLog/LoadData?lang=${localStorage.getItem('lang')}`,
      adaptor: new UrlAdaptor,
      crossDomain: true,
    },this.auditLogsQuery);
  }
  checked(item, i) {
    if (this.role === 'Account' && this.model.accountId === 0) {
      return i == 0;
    } 
    else if (this.model.accountId > 0) {
      return item.guid === this.model.accountGroup
    } 
    else if (this.model.accountId === 0) {
      return item.groupNo === this.role
    } 
    else {

      return false;

    }
  }
  checkedRole(e) {
    if (e.target.checked) {
      this.model.accountGroup = e.target.defaultValue
     
    }
  }
}
