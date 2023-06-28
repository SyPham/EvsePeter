
import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService, BaseComponent, UtilitiesService } from 'herr-core';
import { ImagePathConstants } from 'src/app/_core/_constants';
import { County } from 'src/app/_core/_model/evse/model';
import { CountyService } from 'src/app/_core/_service/evse/county.service';
import { environment } from 'src/environments/environment';
declare let $: any;

@Component({
  selector: 'app-county-action',
  templateUrl: './county-action.component.html',
  styleUrls: ['./county-action.component.css']
})
export class CountyActionComponent extends BaseComponent implements OnInit {
  @Input() title: string = "County_Detail";
  @Input() guid: string | null;
  @Output() saveChange = new EventEmitter()
  model: County
  mode: any = 'add';
  apiHost = environment.apiUrl.replace('/api/', '');
  noImage = ImagePathConstants.NO_IMAGE;
  constructor(
    private modalService: NgbModal,
    private service: CountyService,
    public translate: TranslateService,
    private alertify: AlertifyService,
    private datePipe: DatePipe,
    private utilityService: UtilitiesService,


    ) {
	    super(translate,environment.apiUrl);

     }
  @ViewChild('actionModal') actionModal: TemplateRef<any>;

  ngOnInit() {
  }
  initModel() {
    this.model = {} as County;
    this.guid = null;
  }
  open() {
    if (this.guid) {
      this.service.getByGuid(this.guid).subscribe(data=> {
        this.model = data;
        this.modalService.open(this.actionModal, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
      })
    } else {
      this.modalService.open(this.actionModal, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
    }
   
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
  close() {
		this.modalService.dismissAll();
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
  create() {
    this.alertify.confirm4(
       this.alert.yes_message,
       this.alert.no_message,
       this.alert.createTitle,
       this.alert.createMessage,
       () => {
         delete this.model['column'];
         delete this.model['index'];
         this.service.add(this.ToFormatModel(this.model)).subscribe(
           (res) => {
             if (res.success === true) {
               this.alertify.success(this.alert.created_ok_msg);
               this.saveChange.emit()
               this.close();
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
         delete this.model['column'];
         delete this.model['index'];
         this.service.update(this.ToFormatModel(this.model)).subscribe(
           (res) => {
             if (res.success === true) {
               this.alertify.success(this.alert.updated_ok_msg);
               this.saveChange.emit();
               this.close();
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
       }
     );
 
   }
   save() {

    if (this.mode == 'edit') {
      this.update();
    } else {
      this.create();
    }
  }
}
