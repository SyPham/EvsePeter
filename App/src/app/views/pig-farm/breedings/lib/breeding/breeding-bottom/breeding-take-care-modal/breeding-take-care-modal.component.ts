import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {NgbActiveModal, NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-breeding-take-care-modal',
  templateUrl: './breeding-take-care-modal.component.html',
  styleUrls: ['./breeding-take-care-modal.component.scss']
})
export class BreedingTakeCareModalComponent implements OnInit {
  audit: any
  model: any
  dataSource: any
  editSettings: any
  pageSettings: any
  title: any = '選配作業'
  user = JSON.parse(localStorage.getItem('user'))
  locale = localStorage.getItem("lang");
  commands = [
    {
      type: "Delete",
      buttonOption: {
        iconCss: "e-icons e-delete",
        cssClass: "e-flat delete-grid",
      },
    },
  ];

  @ViewChild("breedingtakecareModal") templateRef: TemplateRef<any>;

  constructor(
    public modalService: NgbModal,
    public modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }
  actionComplete(e) {}
  actionBegin(e) {}
  open() { this.modalService.open(this.templateRef, {
    size: "xl",
    backdrop: "static",
  }); }
}
