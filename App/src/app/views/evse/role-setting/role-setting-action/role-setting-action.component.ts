
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '@pigfarm-core';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';
import { from } from 'rxjs';
import { concatMap, map, toArray } from 'rxjs/operators';
import { MessageConstants } from 'src/app/_core/_constants';
import { XAccountGroup } from 'src/app/_core/_model/xaccount-group';
import { CodePermissionService } from 'src/app/_core/_service/code-permission.service';
import { XAccountGroupService } from 'src/app/_core/_service/xaccount-group.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-role-setting-action',
  templateUrl: './role-setting-action.component.html',
  styleUrls: ['./role-setting-action.component.scss']
})
export class RoleSettingActionComponent implements OnInit {
  role: string = '';
  data: any[] = [];
  item: XAccountGroup = <XAccountGroup>{
    id:0,
    status: 1
  };
  baseUrl = environment.apiUrl;
  public query: Query ;
  public remoteFields: Object = { text: 'name', value: 'guid' };
  alert = {
    updateMessage: this.trans.instant(MessageConstants.UPDATE_MESSAGE),
    updateTitle:  this.trans.instant(MessageConstants.UPDATE_TITLE),
    createMessage: this.trans.instant(MessageConstants.CREATE_MESSAGE),
    createTitle:  this.trans.instant(MessageConstants.CREATE_TITLE),
    deleteMessage:  this.trans.instant(MessageConstants.DELETE_MESSAGE),
    deleteTitle:  this.trans.instant(MessageConstants.DELETE_TITLE),
    cancelMessage:  this.trans.instant(MessageConstants.CANCEL_MESSAGE),
    serverError:  this.trans.instant(MessageConstants.SERVER_ERROR),
    deleted_ok_msg:  this.trans.instant(MessageConstants.DELETED_OK_MSG),
    created_ok_msg:  this.trans.instant(MessageConstants.CREATED_OK_MSG),
    updated_ok_msg:  this.trans.instant(MessageConstants.UPDATED_OK_MSG),
    system_error_msg:  this.trans.instant(MessageConstants.SYSTEM_ERROR_MSG),
    exist_message: this.trans.instant( MessageConstants.EXIST_MESSAGE),
    yes_message:  this.trans.instant(MessageConstants.YES_MSG),
    no_message:  this.trans.instant(MessageConstants.NO_MSG),

  };
  model: {guid:string, permission:string} = {guid: null, permission: null}
  data2: any[] = [];
  addPermissions: any = [];
  removePermissions: any = [];
  constructor(
   private xaccountGroup: XAccountGroupService,
   private codePermissionService:CodePermissionService,
   private alertify: AlertifyService,
   private trans: TranslateService,
   private route: ActivatedRoute,
   private router: Router,
   

  ) { }

  ngOnInit() {
    this.getById();
  }
  getById() {
    const id = this.route.snapshot.params['id'];
    if (id && id !== "0") {
      this.xaccountGroup.getById(+id).subscribe(item=> {
        this.item = item;
        this.getPermissions();
      })
    } else {
      this.getPermissions();
      this.item = <XAccountGroup>{}
      this.item.id = 0;
      this.item.status = 1;
    }
  }
  save() {
    const id = this.route.snapshot.params['id'];
    if (id && id !== "0") {
      this.update();
    } else {
      this.create();
    }
  }
 
  checkedPermission(e, data) {
    this.model.permission = data.guid
    if (e.target.checked) {
      this.addPermissions.push(data.guid)
    } else {
      this.removePermissions.push(data.guid)

    }
  }
  getPermissions() {
    this.codePermissionService.getPermissionsByRoleId(this.item.guid || "").pipe(
      ).subscribe((roles: [])=> {
        let length = roles.length
        let rolesTemp = [...roles];
        let flength = Math.ceil(length/2);
        this.data = rolesTemp.splice(0, flength)
         rolesTemp = [...roles];
        this.data2 = rolesTemp.splice(flength, length);
      })
  }
 

   

     create() {
      this.alertify.confirm4(
         this.alert.yes_message,
         this.alert.no_message,
         this.alert.createTitle,
         this.alert.createMessage,
         () => {
          this.item.permissions= {
            permissions: null,
            addPermissions: this.addPermissions,
            removePermissions: this.removePermissions,
            guid: null
          }
           this.xaccountGroup.add(this.item).subscribe(
             (res) => {
               if (res.success === true) {
                 this.alertify.success(this.alert.created_ok_msg);
                 this.router.navigate(['/evse/setting-role']);
               } else {
                 this.alertify.warning(this.alert.system_error_msg);
               }
             },
             (error) => {
               this.alertify.warning(this.alert.system_error_msg);
             }
           );
         }, () => {
           this.alertify.error(this.alert.cancelMessage);
         }
       );
     }
     update() {
      this.alertify.confirm4(
         this.alert.yes_message,
         this.alert.no_message,
         this.alert.updateTitle,
         this.alert.updateMessage,
         () => {
          this.item.permissions= {
            permissions: null,
            addPermissions: this.addPermissions,
            guid: this.item.guid,
            removePermissions: this.removePermissions
          }
       this.xaccountGroup.update(this.item).subscribe(
         (res) => {
           if (res.success === true) {
             this.alertify.success(this.alert.updated_ok_msg);
             this.router.navigate(['/evse/setting-role']);
           } else {
             this.alertify.warning(this.alert.system_error_msg);
           }
         },
         (error) => {
           this.alertify.warning(this.alert.system_error_msg);
         }
       );
         }, () => {
           this.alertify.error(this.alert.cancelMessage);
         }
       );
     }
}
