

import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { DropDownListComponent, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { environment } from 'src/environments/environment';
import { ImagePathConstants, MessageConstants } from 'src/app/_core/_constants';
import { AlertifyService, UtilitiesService } from '@pigfarm-core';
import { ElectricityPrice } from 'src/app/_core/_model/evse/model';
import { ElectricityPriceService } from 'src/app/_core/_service/evse/electricity-price.service';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { ToolbarType } from '@syncfusion/ej2-richtexteditor';
@Component({
  selector: 'app-h1-electricity-price',
  templateUrl: './h1-electricity-price.component.html',
  styleUrls: ['./h1-electricity-price.component.scss']
})
export class H1ElectricityPriceComponent implements OnInit {
  offPeakTimeStart: string
  offPeakTimeEnd: string
 peakTimeStart: string
 peakTimeEnd: string
  loading
  model: ElectricityPrice = <ElectricityPrice>{};
  apiHost = environment.apiUrl.replace('/api/', '');
id: any;
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
  public tools: ToolbarModule = {
    type: ToolbarType.Expand,
    enableFloating :false,
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'Formats', 'Alignments', 'NumberFormatList', 'BulletFormatList',
        'Outdent', 'Indent', '|', 'ClearFormat',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
};

  constructor(
    private service: ElectricityPriceService,
    public modalService: NgbModal,
    private alertify: AlertifyService,
    private utilityService: UtilitiesService,
    private datePipe: DatePipe,
    public translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute,

  ) { 

  }
  ngOnInit() {
  
  this.loadDetail().subscribe(model => {
    if (model == null) {
    this.reset();
     
    } else {
      this.id = model['id'];
      this.model = model;
      if (this.model.peakTime) {
        this.peakTimeStart = this.model.peakTime.split(' ~ ')[0]
        this.peakTimeEnd = this.model.peakTime.split(' ~ ')[1]
      }
      if (this.model.offPeakTime) {
        this.offPeakTimeStart = this.model.offPeakTime.split(' ~ ')[0]
        this.offPeakTimeEnd = this.model.offPeakTime.split(' ~ ')[1]
      }
    }
   
  });
  
  }

  
 
  loadDetail() {
   return this.service.getFirst()
  }

  reset() {
    this.id = null;
    this.model = <ElectricityPrice>{};
    this.model.id = 0;
    this.model.status = 1;
   
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
    this.model.peakTime = `${this.peakTimeStart} ~ ${this.peakTimeEnd}`
    this.model.offPeakTime = `${this.offPeakTimeStart} ~ ${this.offPeakTimeEnd}`
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
  locale = localStorage.getItem('lang');
  

  

}
