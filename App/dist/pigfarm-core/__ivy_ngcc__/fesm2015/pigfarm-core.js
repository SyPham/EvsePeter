import * as i1 from '@angular/common/http';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import * as i0 from '@angular/core';
import { Injectable, Inject, EventEmitter, Component, ChangeDetectorRef, Input, Output, ViewChild, NgModule } from '@angular/core';
import { BehaviorSubject, throwError, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Query, DataManager, UrlAdaptor, Predicate } from '@syncfusion/ej2-data';
import * as i1$1 from '@ngx-translate/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { DropDownListComponent, DropDownListModule, MultiSelectAllModule, ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __awaiter } from 'tslib';
import { UploaderComponent, MaskedTextBoxModule, UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { CookieService } from 'ngx-cookie-service';
import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';
import { EditService, GridAllModule } from '@syncfusion/ej2-angular-grids';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { hideSpinner, createSpinner, showSpinner } from '@syncfusion/ej2-popups';
import { Browser, detach, isNullOrUndefined, createElement, EventHandler } from '@syncfusion/ej2-base';
import { CommonModule } from '@angular/common';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common/http';
import * as ɵngcc2 from '@ngx-translate/core';
import * as ɵngcc3 from '@syncfusion/ej2-angular-dropdowns';
import * as ɵngcc4 from '@angular/forms';
import * as ɵngcc5 from '@syncfusion/ej2-angular-inputs';
import * as ɵngcc6 from 'ngx-cookie-service';
import * as ɵngcc7 from '@syncfusion/ej2-angular-buttons';
import * as ɵngcc8 from '@syncfusion/ej2-angular-grids';
import * as ɵngcc9 from '@angular/common';
import * as ɵngcc10 from '@syncfusion/ej2-angular-richtexteditor';

const _c0 = ["barnRemote"];
const _c1 = ["areaRemote"];
const _c2 = ".e-input-group[_ngcontent-%COMP%]{box-shadow:.5px .5px 1px;padding:3px}";
const _c3 = ["penmulti"];
const _c4 = ["feedRemote"];
const _c5 = ["farmRemote"];
const _c6 = ["pigRemote"];
const _c7 = ["penRemote"];
const _c8 = ["codeTypeRemote"];
const _c9 = ["materialRemote"];
const _c10 = ".e-input-group[_ngcontent-%COMP%]{box-shadow:.5px .5px 1px!important;padding:3px!important}";
const _c11 = ["diseaseRemote"];
const _c12 = ["remote"];
const _c13 = ["bomRemote"];
const _c14 = ["customerRemote"];
const _c15 = ["vectorControlRemote"];
const _c16 = ["disinfectionRemote"];
const _c17 = ["cullingTankRemote"];
const _c18 = ["thingRemote"];
const _c19 = ["xacccountRemote"];
function MultiPigGridComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ejs-checkbox", 4, 5);
    ɵngcc0.ɵɵlistener("change", function MultiPigGridComponent_ng_template_5_Template_ejs_checkbox_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const data_r3 = ctx.$implicit; const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onChangeChecked($event, data_r3); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("label", data_r3.name)("checked", data_r3.checked);
} }
const _c20 = function () { return ["Search"]; };
const _c21 = ["pen2Remote"];
const _c22 = ["grid"];
function SelectedpigGridComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 23);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.valueLabel);
} }
function SelectedpigGridComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "app-disease-dropdownlist", 24);
    ɵngcc0.ɵɵlistener("selectedValueChange", function SelectedpigGridComponent_ng_template_18_Template_app_disease_dropdownlist_selectedValueChange_0_listener($event) { const data_r24 = ctx.$implicit; return data_r24.recordDisease = $event; })("change", function SelectedpigGridComponent_ng_template_18_Template_app_disease_dropdownlist_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); const data_r24 = ctx.$implicit; const ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.onChangeDisease($event, data_r24); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r24 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("selectedValue", data_r24.recordDisease);
} }
function SelectedpigGridComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const data_r28 = ctx.$implicit;
    ɵngcc0.ɵɵtextInterpolate1(" ", data_r28.recordDiseaseName, " ");
} }
function SelectedpigGridComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r31 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "app-code-type-dropdownlist", 25);
    ɵngcc0.ɵɵlistener("change", function SelectedpigGridComponent_ng_template_24_Template_app_code_type_dropdownlist_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r31); const data_r29 = ctx.$implicit; const ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.onChangeRecordNext($event, data_r29); })("selectedValueChange", function SelectedpigGridComponent_ng_template_24_Template_app_code_type_dropdownlist_selectedValueChange_0_listener($event) { const data_r29 = ctx.$implicit; return data_r29.recordNext = $event; });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r29 = ctx.$implicit;
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("codeType", ctx_r8.codeType)("selectedValue", data_r29.recordNext);
} }
function SelectedpigGridComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
    ɵngcc0.ɵɵpipe(1, "translate");
} if (rf & 2) {
    const data_r33 = ctx.$implicit;
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(1, 1, data_r33.recordNextName), " ");
} }
function SelectedpigGridComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r36 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "app-code-type-dropdownlist", 26);
    ɵngcc0.ɵɵlistener("change", function SelectedpigGridComponent_ng_template_30_Template_app_code_type_dropdownlist_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r36); const data_r34 = ctx.$implicit; const ctx_r35 = ɵngcc0.ɵɵnextContext(); return ctx_r35.onChangeRecordNext2($event, data_r34); })("selectedValueChange", function SelectedpigGridComponent_ng_template_30_Template_app_code_type_dropdownlist_selectedValueChange_0_listener($event) { const data_r34 = ctx.$implicit; return data_r34.recordNext2 = $event; });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r34 = ctx.$implicit;
    const ctx_r12 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("codeType", ctx_r12.codeType2)("selectedValue", data_r34.recordNext2);
} }
function SelectedpigGridComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
    ɵngcc0.ɵɵpipe(1, "translate");
} if (rf & 2) {
    const data_r38 = ctx.$implicit;
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(1, 1, data_r38.recordNext2Name), " ");
} }
function SelectedpigGridComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r41 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "app-room-dropdownlist", 27);
    ɵngcc0.ɵɵlistener("change", function SelectedpigGridComponent_ng_template_36_Template_app_room_dropdownlist_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r41); const data_r39 = ctx.$implicit; const ctx_r40 = ɵngcc0.ɵɵnextContext(); return ctx_r40.onChangeNextRoom($event, data_r39); })("selectedValueChange", function SelectedpigGridComponent_ng_template_36_Template_app_room_dropdownlist_selectedValueChange_0_listener($event) { const data_r39 = ctx.$implicit; return data_r39.nextRoom = $event; });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r39 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("selectedValue", data_r39.nextRoom);
} }
function SelectedpigGridComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
    ɵngcc0.ɵɵpipe(1, "translate");
} if (rf & 2) {
    const data_r43 = ctx.$implicit;
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(1, 1, data_r43.nextRoomName), " ");
} }
function SelectedpigGridComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    const _r46 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "app-pen-dropdownlist", 28);
    ɵngcc0.ɵɵlistener("change", function SelectedpigGridComponent_ng_template_42_Template_app_pen_dropdownlist_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r46); const data_r44 = ctx.$implicit; const ctx_r45 = ɵngcc0.ɵɵnextContext(); return ctx_r45.onChangeNextPen($event, data_r44); })("selectedValueChange", function SelectedpigGridComponent_ng_template_42_Template_app_pen_dropdownlist_selectedValueChange_0_listener($event) { const data_r44 = ctx.$implicit; return data_r44.nextPen = $event; });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r44 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("selectedValue", data_r44.nextPen);
} }
function SelectedpigGridComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
    ɵngcc0.ɵɵpipe(1, "translate");
} if (rf & 2) {
    const data_r48 = ctx.$implicit;
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(1, 1, data_r48.nextPenName), " ");
} }
const _c23 = function () { return { maxLength: 40 }; };
const _c24 = function () { return { decimals: 2, min: 0, max: 0.9 }; };
const _c25 = function (a0) { return { params: a0 }; };
const _c26 = ["treatmentMasterRemote"];
const _c27 = ["semenRemote"];
const _c28 = ["breedingRemote"];
const _c29 = ["previewupload"];
function UploadDocumentComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r2.file == null ? null : ctx_r2.file.name, " ");
} }
function UploadDocumentComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵelement(1, "img", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("alt", ctx_r3.file == null ? null : ctx_r3.file.name);
    ɵngcc0.ɵɵproperty("src", ctx_r3.downloadUrl, ɵngcc0.ɵɵsanitizeUrl);
} }
function UploadDocumentComponent_div_2_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function UploadDocumentComponent_div_2_button_8_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.removeFile(); });
    ɵngcc0.ɵɵelement(1, "i", 12);
    ɵngcc0.ɵɵelementEnd();
} }
function UploadDocumentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "ul", 3);
    ɵngcc0.ɵɵelementStart(2, "li", 4);
    ɵngcc0.ɵɵtemplate(3, UploadDocumentComponent_div_2_div_3_Template, 2, 1, "div", 2);
    ɵngcc0.ɵɵtemplate(4, UploadDocumentComponent_div_2_div_4_Template, 2, 2, "div", 5);
    ɵngcc0.ɵɵelementStart(5, "div");
    ɵngcc0.ɵɵelementStart(6, "button", 6);
    ɵngcc0.ɵɵlistener("click", function UploadDocumentComponent_div_2_Template_button_click_6_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.download(); });
    ɵngcc0.ɵɵelement(7, "i", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(8, UploadDocumentComponent_div_2_button_8_Template, 2, 0, "button", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.showImgFile);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.showImgFile);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.enabled);
} }
const _c30 = ["giltinRemote"];
const _c31 = ["boartestingRemote"];
const _c32 = ["BomGiltRemote"];
const _c33 = ["BomBoarRemote"];
const _c34 = ["recordSaleRemote"];
function PigfarmRichtexteditorComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p");
    ɵngcc0.ɵɵtext(1, "The Rich Text Editor component is WYSIWYG (\"what you see is what you get\") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "p");
    ɵngcc0.ɵɵelementStart(3, "b");
    ɵngcc0.ɵɵtext(4, "Key features:");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "ul");
    ɵngcc0.ɵɵelementStart(6, "li");
    ɵngcc0.ɵɵelementStart(7, "p");
    ɵngcc0.ɵɵtext(8, "Provides <IFRAME> and <DIV> modes");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(9, "li");
    ɵngcc0.ɵɵelementStart(10, "p");
    ɵngcc0.ɵɵtext(11, "Capable of handling markdown editing.");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(12, "li");
    ɵngcc0.ɵɵelementStart(13, "p");
    ɵngcc0.ɵɵtext(14, "Contains a modular library to load the necessary functionality on demand.");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(15, "li");
    ɵngcc0.ɵɵelementStart(16, "p");
    ɵngcc0.ɵɵtext(17, "Provides a fully customizable toolbar.");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(18, "li");
    ɵngcc0.ɵɵelementStart(19, "p");
    ɵngcc0.ɵɵtext(20, "Provides HTML view to edit the source directly for developers.");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(21, "li");
    ɵngcc0.ɵɵelementStart(22, "p");
    ɵngcc0.ɵɵtext(23, "Supports third-party library integration.");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(24, "li");
    ɵngcc0.ɵɵelementStart(25, "p");
    ɵngcc0.ɵɵtext(26, "Allows preview of modified content before saving it.");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(27, "li");
    ɵngcc0.ɵɵelementStart(28, "p");
    ɵngcc0.ɵɵtext(29, "Handles images, hyperlinks, video, hyperlinks, uploads, etc.");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(30, "li");
    ɵngcc0.ɵɵelementStart(31, "p");
    ɵngcc0.ɵɵtext(32, "Contains undo/redo manager.");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(33, "li");
    ɵngcc0.ɵɵelementStart(34, "p");
    ɵngcc0.ɵɵtext(35, "Creates bulleted and numbered lists.");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
class PigfarmCoreService {
    constructor(http, base) {
        this.http = http;
        this.base = base;
        this.recordSource = new BehaviorSubject({});
        this.currentRecordEarTag = this.recordSource.asObservable();
        this.recordLabelSource = new BehaviorSubject(null);
        this.currentRecordLabel = this.recordLabelSource.asObservable();
    }
    changeRecordEarTag(farm) {
        this.recordSource.next(farm);
    }
    changLable(value) {
        this.recordLabelSource.next(value);
    }
    getBreedingByFarmGuid(farmGuid) {
        return this.http.get(`${this.base}Breeding/GetBreedingByFarmGuid?farmGuid=${farmGuid}`, {});
    }
    getMakeOrderByFarmGuid(farmGuid) {
        return this.http.get(`${this.base}MakeOrder/GetMakeOrderByFarmGuid?farmGuid=${farmGuid}`, {});
    }
    getMakeOrderByFarmGuidAndPigType(farmGuid, pigType) {
        return this.http.get(`${this.base}MakeOrder/GetMakeOrderByFarmGuidAndPigType?farmGuid=${farmGuid}&pigType=${pigType}`, {});
    }
    removeRecord2Pig(model) {
        return this.http
            .post(`${this.base}Record/RemoveRecord2Pen`, model)
            .pipe(catchError(this.handleError));
    }
    addRecord2Pig(model) {
        return this.http
            .post(`${this.base}Record/AddRecord2Pen`, model)
            .pipe(catchError(this.handleError));
    }
    getPensByFarmGuidOrRoomGuid(farmGuid, roomGuid) {
        return this.http.get(`${this.base}Pen/getPensByFarmGuidOrRoomGuid?farmGuid=${farmGuid}&roomGuid=${roomGuid}`, {});
    }
    getByFarmGuid(farmGuid) {
        return this.http.get(`${this.base}RecordSale/GetByFarmGuid?farmGuid=${farmGuid}`, {});
    }
    getRoomsByFarmGuid(farmGuid, barnGuid, makeOrderGuid) {
        return this.http.get(`${this.base}Room/GetRoomsByFarmGuid?farmGuid=${farmGuid}&barnGuid=${barnGuid}&makeOrderGuid=${makeOrderGuid}`, {});
    }
    getBreeding2SowInByBreedingGuid(breedingGuid) {
        return this.http.get(`${this.base}Breeding/GetBreeding2SowInByBreedingGuid?breedingGuid=${breedingGuid}`, {});
    }
    handleError(errorResponse) {
        if (errorResponse instanceof HttpErrorResponse) {
            if (errorResponse.status === 401) {
                return throwError(errorResponse.statusText);
            }
            const applicationError = errorResponse.headers.get('Application-Error');
            if (applicationError) {
                console.error(applicationError);
                return throwError(applicationError);
            }
            const serverError = errorResponse.error;
            let modalStateErrors = '';
            if (serverError && typeof serverError === 'object') {
                for (const key in serverError) {
                    if (serverError[key]) {
                        modalStateErrors += serverError[key] + '\n';
                    }
                }
            }
            return throwError(modalStateErrors || serverError || 'Server Error');
        }
    }
}
PigfarmCoreService.ɵfac = function PigfarmCoreService_Factory(t) { return new (t || PigfarmCoreService)(ɵngcc0.ɵɵinject(ɵngcc1.HttpClient), ɵngcc0.ɵɵinject("Env")); };
PigfarmCoreService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PigfarmCoreService_Factory() { return new PigfarmCoreService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject("Env")); }, token: PigfarmCoreService, providedIn: "root" });
PigfarmCoreService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PigfarmCoreService, [{
        type: Injectable,
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }]; }, null); })();

class BarnDropdownlistComponent {
    constructor(baseUrl, cd, trans) {
        this.baseUrl = baseUrl;
        this.cd = cd;
        this.trans = trans;
        this.id = "barn-remote";
        this.placeholder = "";
        this.disabled = false;
        this.autoload = true;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.onblurChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['barnName', 'barnNo']);
                e.updateData(this.data, query);
            }
        };
    }
    onObarn(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        e.result = e.result.map(x => {
            let name = x.id === 0 ? this.trans.instant(x.name) : x.name;
            return {
                guid: x.guid,
                name: name
            };
        });
    }
    ngAfterViewChecked() {
        this.selectedValue = this.selectedValue || "";
        this.cd.detectChanges();
    }
    ngOnInit() {
        if (this.autoload) {
            this.query = new Query()
                .where('farmGuid', 'equal', localStorage.getItem('farmGuid'))
                .where('status', 'equal', 1);
            this.data = new DataManager({
                url: `${this.baseUrl}Barn/GetDataDropdownlist`,
                adaptor: new UrlAdaptor,
                crossDomain: true,
            }, this.query.sortBy('barnNo'));
        }
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty("selectedValue")) {
            if ((changes === null || changes === void 0 ? void 0 : changes.selectedValue.currentValue) != (changes === null || changes === void 0 ? void 0 : changes.selectedValue.previousValue) && !(changes === null || changes === void 0 ? void 0 : changes.selectedValue.firstChange)) {
                this.ngModelChange.emit(this.selectedValue);
                this.selectedValueChange.emit(this.selectedValue);
            }
        }
        if (changes.hasOwnProperty("areaGuid")) {
            if ((changes === null || changes === void 0 ? void 0 : changes.areaGuid.currentValue) != (changes === null || changes === void 0 ? void 0 : changes.areaGuid.previousValue)) {
                this.query = new Query()
                    .skip(this.skip)
                    .take(this.take)
                    .where('farmGuid', 'equal', localStorage.getItem('farmGuid'))
                    .where('status', 'equal', 1)
                    .where('areaGuid', 'equal', this.areaGuid);
                this.data = new DataManager({
                    url: `${this.baseUrl}Barn/GetDataDropdownlist`,
                    adaptor: new UrlAdaptor,
                    crossDomain: true,
                }, this.query.sortBy('barnNo'));
            }
        }
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
    onblur(e) {
        this.onblurChange.emit(e);
    }
}
BarnDropdownlistComponent.ɵfac = function BarnDropdownlistComponent_Factory(t) { return new (t || BarnDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
BarnDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BarnDropdownlistComponent, selectors: [["app-barn-dropdownlist"]], viewQuery: function BarnDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", autoload: "autoload", selectedValue: "selectedValue", areaGuid: "areaGuid" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange", onblurChange: "onblur" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "actionComplete", "blur"], ["barnRemote", ""]], template: function BarnDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function BarnDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function BarnDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function BarnDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function BarnDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("actionComplete", function BarnDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); })("blur", function BarnDropdownlistComponent_Template_ejs_dropdownlist_blur_0_listener($event) { return ctx.onblur($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c2] });
BarnDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: ChangeDetectorRef },
    { type: TranslateService }
];
BarnDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    areaGuid: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    autoload: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['barnRemote',] }],
    onblurChange: [{ type: Output, args: ['onblur',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BarnDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-barn-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #barnRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n  (blur)='onblur($event)'\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], autoload: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], onblurChange: [{
            type: Output,
            args: ['onblur']
        }], selectedValue: [{
            type: Input
        }], areaGuid: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['barnRemote']
        }] }); })();

class AreaDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "area-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.onblurChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['areaName', 'areaNo']);
                e.updateData(this.data, query);
            }
        };
    }
    onOarea(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        e.result = e.result.map(x => {
            let name = x.id === 0 ? this.trans.instant(x.name) : x.name;
            return {
                guid: x.guid,
                name: name
            };
        });
    }
    ngOnInit() {
        this.query = new Query()
            .where('farmGuid', 'equal', localStorage.getItem('farmGuid'))
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}Area/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query.sortBy('areaNo'));
    }
    ngOnChanges(changes) {
        this.selectedValue = this.selectedValue || "";
        if (changes['selectedValue']) {
            if ((changes === null || changes === void 0 ? void 0 : changes.selectedValue.currentValue) != (changes === null || changes === void 0 ? void 0 : changes.selectedValue.previousValue) && !(changes === null || changes === void 0 ? void 0 : changes.selectedValue.firstChange)) {
                this.ngModelChange.emit(this.selectedValue);
                this.selectedValueChange.emit(this.selectedValue);
            }
        }
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
    onblur(e) {
        this.onblurChange.emit(e);
    }
}
AreaDropdownlistComponent.ɵfac = function AreaDropdownlistComponent_Factory(t) { return new (t || AreaDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
AreaDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AreaDropdownlistComponent, selectors: [["app-area-dropdownlist"]], viewQuery: function AreaDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange", onblurChange: "onblur" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "actionComplete", "blur"], ["areaRemote", ""]], template: function AreaDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function AreaDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function AreaDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function AreaDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function AreaDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("actionComplete", function AreaDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); })("blur", function AreaDropdownlistComponent_Template_ejs_dropdownlist_blur_0_listener($event) { return ctx.onblur($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c2] });
AreaDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
AreaDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['areaRemote',] }],
    onblurChange: [{ type: Output, args: ['onblur',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AreaDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-area-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #areaRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n  (blur)='onblur($event)'\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], onblurChange: [{
            type: Output,
            args: ['onblur']
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['areaRemote']
        }] }); })();

class PenMultiselectComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "pen-multi";
        this.selectedData = [];
        this.placeholder = "";
        this.roomGuid = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.onblurChange = new EventEmitter();
        this.popupHeight = '350px';
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['penName', 'penNo']);
                e.updateData(this.data, query);
            }
        };
    }
    actionComplete(e) {
        e.result = e.result.filter(x => x.guid != "");
    }
    ngOnInit() {
        this.query = new Query()
            .where('farmGuid', 'equal', localStorage.getItem('farmGuid'))
            .where('status', 'equal', 1);
        if (this.roomGuid) {
            this.query.where('roomGuid', 'equal', this.roomGuid);
        }
        this.data = new DataManager({
            url: `${this.baseUrl}Pen/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
PenMultiselectComponent.ɵfac = function PenMultiselectComponent_Factory(t) { return new (t || PenMultiselectComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
PenMultiselectComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PenMultiselectComponent, selectors: [["app-pen-multiselect"]], viewQuery: function PenMultiselectComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c3, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", selectedData: "selectedData", placeholder: "placeholder", roomGuid: "roomGuid", disabled: "disabled", popupHeight: "popupHeight", query: "query", data: "data" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange", onblurChange: "onblur" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [["mode", "CheckBox", "showSelectAll", "true", 3, "id", "allowFiltering", "dataSource", "fields", "popupHeight", "showDropDownIcon", "ngModel", "disabled", "filtering", "ngModelChange", "change"], ["penmulti", ""]], template: function PenMultiselectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-multiselect", 0, 1);
        ɵngcc0.ɵɵlistener("filtering", function PenMultiselectComponent_Template_ejs_multiselect_filtering_0_listener($event) { return ctx.onFiltering($event); })("ngModelChange", function PenMultiselectComponent_Template_ejs_multiselect_ngModelChange_0_listener($event) { return ctx.selectedData = $event; })("ngModelChange", function PenMultiselectComponent_Template_ejs_multiselect_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("change", function PenMultiselectComponent_Template_ejs_multiselect_change_0_listener($event) { return ctx.onChange($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("allowFiltering", true)("dataSource", ctx.data)("fields", ctx.remoteFields)("popupHeight", ctx.popupHeight)("showDropDownIcon", true)("ngModel", ctx.selectedData)("disabled", ctx.disabled);
    } }, directives: [ɵngcc3.MultiSelectComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [""] });
PenMultiselectComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
PenMultiselectComponent.propDecorators = {
    id: [{ type: Input }],
    selectedData: [{ type: Input }],
    placeholder: [{ type: Input }],
    roomGuid: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    onblurChange: [{ type: Output, args: ['onblur',] }],
    dropdownObj: [{ type: ViewChild, args: ['penmulti',] }],
    data: [{ type: Input }],
    query: [{ type: Input }],
    popupHeight: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PenMultiselectComponent, [{
        type: Component,
        args: [{
                selector: 'app-pen-multiselect',
                template: "<ejs-multiselect\r\n  #penmulti\r\n  [id]=\"id\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  mode=\"CheckBox\"\r\n  [popupHeight]=\"popupHeight\"\r\n  [showDropDownIcon]=\"true\"\r\n  [(ngModel)]=\"selectedData\"\r\n  [disabled]=\"disabled\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  (change)=\"onChange($event)\"\r\n  showSelectAll=\"true\"\r\n></ejs-multiselect>\r\n",
                styles: [""]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], selectedData: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], roomGuid: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], onblurChange: [{
            type: Output,
            args: ['onblur']
        }], popupHeight: [{
            type: Input
        }], query: [{
            type: Input
        }], data: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['penmulti']
        }] }); })();

class FeedDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "feed-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['feedName', 'feedNo']);
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query()
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}Feed/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
FeedDropdownlistComponent.ɵfac = function FeedDropdownlistComponent_Factory(t) { return new (t || FeedDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
FeedDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FeedDropdownlistComponent, selectors: [["app-feed-dropdownlist"]], viewQuery: function FeedDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c4, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["feedRemote", ""]], template: function FeedDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function FeedDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function FeedDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function FeedDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function FeedDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function FeedDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function FeedDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c10] });
FeedDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
FeedDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['feedRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FeedDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-feed-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #feedRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['feedRemote']
        }] }); })();

class FarmDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "farm-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, 'name');
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query()
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}Farm/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
FarmDropdownlistComponent.ɵfac = function FarmDropdownlistComponent_Factory(t) { return new (t || FarmDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
FarmDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FarmDropdownlistComponent, selectors: [["app-farm-dropdownlist"]], viewQuery: function FarmDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c5, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["farmRemote", ""]], template: function FarmDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function FarmDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function FarmDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function FarmDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function FarmDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function FarmDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function FarmDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c2] });
FarmDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
FarmDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['farmRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FarmDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-farm-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #farmRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['farmRemote']
        }] }); })();

class PigDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "pig-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 1000;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, 'name');
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        e.result = e.result.map(x => {
            let name = x.id === 0 ? this.trans.instant(x.name) : x.name;
            return {
                guid: x.guid,
                name: name
            };
        });
    }
    ngOnInit() {
        this.query = new Query()
            .skip(this.skip)
            .take(this.take)
            .where('farmGuid', 'equal', localStorage.getItem('farmGuid'))
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}Pig/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
PigDropdownlistComponent.ɵfac = function PigDropdownlistComponent_Factory(t) { return new (t || PigDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
PigDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PigDropdownlistComponent, selectors: [["app-pig-dropdownlist"]], viewQuery: function PigDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c6, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 11, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "showClearButton", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["pigRemote", ""]], template: function PigDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function PigDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function PigDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function PigDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function PigDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function PigDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function PigDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵpipe(2, "translate");
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ɵngcc0.ɵɵpipeBind1(2, 9, "No Item"))("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query)("showClearButton", true);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], pipes: [ɵngcc2.TranslatePipe], styles: [".e-input-group.e-control-wrapper[_ngcontent-%COMP%]{box-shadow:.5px .5px 1px;padding:3px}"] });
PigDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
PigDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['pigRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PigDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-pig-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"'No Item' | translate\"\r\n  #pigRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  [showClearButton]=\"true\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group.e-control-wrapper{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['pigRemote']
        }] }); })();

class PenDropdownlistComponent {
    constructor(baseUrl, trans, service) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.service = service;
        this.id = "pen-remote";
        this.placeholder = this.trans.instant("No Item");
        this.roomGuid = "";
        this.disabled = false;
        this.popupWidth = 300;
        this.enabledLoad = true;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.selectedNameChange = new EventEmitter();
        this.onblurChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 1000;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.search(e.text, ['penName', 'penNo']);
                e.updateData(this.data, query);
            }
        };
    }
    actionComplete(e) {
        e.result = e.result.map(x => {
            let name = x.guid === "" ? this.trans.instant(x.name) : x.name;
            return {
                guid: x.guid,
                name: name
            };
        });
    }
    ngOnInit() {
    }
    loadData() {
        return __awaiter(this, void 0, void 0, function* () {
            this.data = yield this.service.getPensByFarmGuidOrRoomGuid(localStorage.getItem("farmGuid"), this.roomGuid).toPromise();
            // this.query = new Query()
            //   .where('farmGuid', 'equal', localStorage.getItem('farmGuid'))
            //   .where('status', 'equal', 1);
            //   if (this.roomGuid) {
            //     this.query.where('roomGuid', 'equal', this.roomGuid);
            //   }
            // this.data = new DataManager({
            //   url: `${this.baseUrl}Pen/GetDataDropdownlist`,
            //   adaptor: new UrlAdaptor,
            //   crossDomain: true,
            // }, this.query.sortBy('penNo'));
        });
    }
    ngOnChanges(changes) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.selectedValue = this.selectedValue || "";
            if (this.dropdownObj && !this.selectedValue) {
                this.dropdownObj.value = null;
            }
            if (changes['enabledLoad'] && changes.enabledLoad.currentValue) {
                yield this.loadData();
                this.selectedValue = (_a = changes['selectedValue']) === null || _a === void 0 ? void 0 : _a.currentValue;
            }
            if (changes['roomGuid'] && changes.roomGuid.currentValue) {
                yield this.loadData();
                this.selectedValue = (_b = changes['selectedValue']) === null || _b === void 0 ? void 0 : _b.currentValue;
            }
        });
    }
    onChange(args) {
        var _a, _b, _c, _d;
        this.penGuidName = (_a = args.itemData) === null || _a === void 0 ? void 0 : _a.name;
        this.selectedNameChange.emit(((_b = args.itemData) === null || _b === void 0 ? void 0 : _b.name) || '');
        this.selectedValueChange.emit((_c = args.itemData) === null || _c === void 0 ? void 0 : _c.guid);
        this.ngModelChange.emit((_d = args.itemData) === null || _d === void 0 ? void 0 : _d.guid);
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
    onblur(e) {
        this.onblurChange.emit(e);
    }
}
PenDropdownlistComponent.ɵfac = function PenDropdownlistComponent_Factory(t) { return new (t || PenDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService), ɵngcc0.ɵɵdirectiveInject(PigfarmCoreService)); };
PenDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PenDropdownlistComponent, selectors: [["app-pen-dropdownlist"]], viewQuery: function PenDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c7, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", roomGuid: "roomGuid", disabled: "disabled", popupWidth: "popupWidth", enabledLoad: "enabledLoad", selectedValue: "selectedValue", predicate: "predicate" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange", selectedNameChange: "selectedNameChange", onblurChange: "onblur" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 7, consts: [[3, "id", "value", "allowFiltering", "enabled", "placeholder", "dataSource", "fields", "valueChange", "filtering", "change", "ngModelChange", "actionComplete", "blur"], ["penRemote", ""]], template: function PenDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("valueChange", function PenDropdownlistComponent_Template_ejs_dropdownlist_valueChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function PenDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function PenDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function PenDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("actionComplete", function PenDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); })("blur", function PenDropdownlistComponent_Template_ejs_dropdownlist_blur_0_listener($event) { return ctx.onblur($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("value", ctx.selectedValue)("allowFiltering", true)("enabled", !ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields);
    } }, directives: [ɵngcc3.DropDownListComponent], styles: [_c2] });
PenDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService },
    { type: PigfarmCoreService }
];
PenDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    roomGuid: [{ type: Input }],
    disabled: [{ type: Input }],
    popupWidth: [{ type: Input }],
    enabledLoad: [{ type: Input }],
    predicate: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    selectedNameChange: [{ type: Output }],
    onblurChange: [{ type: Output, args: ['onblur',] }],
    dropdownObj: [{ type: ViewChild, args: ['penRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PenDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-pen-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(value)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [enabled]=\"!disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #penRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n  (blur)='onblur($event)'\r\n\r\n>\r\n</ejs-dropdownlist>",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }, { type: PigfarmCoreService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], roomGuid: [{
            type: Input
        }], disabled: [{
            type: Input
        }], popupWidth: [{
            type: Input
        }], enabledLoad: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedNameChange: [{
            type: Output
        }], onblurChange: [{
            type: Output,
            args: ['onblur']
        }], selectedValue: [{
            type: Input
        }], predicate: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['penRemote']
        }] }); })();

class CodeTypeDropdownlistComponent {
    constructor(baseUrl, cd, trans) {
        this.baseUrl = baseUrl;
        this.cd = cd;
        this.trans = trans;
        this.id = "codeType-remote";
        this.placeholder = this.trans.instant("No item");
        this.codeType = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.selectedNameChange = new EventEmitter();
        this.onblurChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, 'name');
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        e.result = e.result.map(x => {
            let name = x.guid === "" ? this.trans.instant(x.name) : x.name;
            return {
                guid: x.guid,
                name: name
            };
        });
    }
    ngAfterViewChecked() {
        this.selectedValue = this.selectedValue || "";
        this.id = this.id || Math.random() + '';
        this.cd.detectChanges();
    }
    ngOnInit() {
        this.query = new Query()
            .addParams("lang", localStorage.getItem('lang'));
        let data = new DataManager({
            url: `${this.baseUrl}CodeType/GetDataDropdownlist?lang=${localStorage.getItem('lang')}&codeType=${this.codeType}`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        });
        data.executeQuery(this.query.sortBy('guid')).then((x) => {
            this.data = x.result.sort((a, b) => +a.guid - +b.guid);
            if (this.data.length > 0) {
                this.firstValue = this.data[0].guid;
            }
        });
    }
    ngOnChanges(changes) {
        if (changes['codeType'] && changes['codeType'].currentValue === 'Employee_Status') {
            if (changes['selectedValue'] && changes['selectedValue'].currentValue) {
                this.selectedValue = changes['selectedValue'].currentValue + '';
            }
        }
    }
    onChange(args) {
        var _a, _b;
        this.change.emit(args);
        this.selectedNameChange.emit((_a = args.itemData) === null || _a === void 0 ? void 0 : _a.name);
        this.selectedValueChange.emit((_b = args.itemData) === null || _b === void 0 ? void 0 : _b.guid);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
    onblur(e) {
        this.onblurChange.emit(e);
    }
}
CodeTypeDropdownlistComponent.ɵfac = function CodeTypeDropdownlistComponent_Factory(t) { return new (t || CodeTypeDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
CodeTypeDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CodeTypeDropdownlistComponent, selectors: [["app-code-type-dropdownlist"]], viewQuery: function CodeTypeDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c8, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", codeType: "codeType", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange", selectedNameChange: "selectedNameChange", onblurChange: "onblur" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 9, consts: [[3, "id", "value", "allowFiltering", "showClearButton", "enabled", "placeholder", "dataSource", "fields", "query", "valueChange", "filtering", "change", "ngModelChange", "actionComplete", "blur"], ["codeTypeRemote", ""]], template: function CodeTypeDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("valueChange", function CodeTypeDropdownlistComponent_Template_ejs_dropdownlist_valueChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function CodeTypeDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function CodeTypeDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function CodeTypeDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("actionComplete", function CodeTypeDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); })("blur", function CodeTypeDropdownlistComponent_Template_ejs_dropdownlist_blur_0_listener($event) { return ctx.onblur($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("value", ctx.selectedValue)("allowFiltering", true)("showClearButton", true)("enabled", !ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent], styles: [_c2] });
CodeTypeDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: ChangeDetectorRef },
    { type: TranslateService }
];
CodeTypeDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    codeType: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    selectedNameChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['codeTypeRemote',] }],
    onblurChange: [{ type: Output, args: ['onblur',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CodeTypeDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-code-type-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(value)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [showClearButton]=\"true\"\r\n  [enabled]=\"!disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #codeTypeRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n  (blur)='onblur($event)'\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], codeType: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedNameChange: [{
            type: Output
        }], onblurChange: [{
            type: Output,
            args: ['onblur']
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['codeTypeRemote']
        }] }); })();

class MaterialDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "material-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, 'name');
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query()
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}Material/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
MaterialDropdownlistComponent.ɵfac = function MaterialDropdownlistComponent_Factory(t) { return new (t || MaterialDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
MaterialDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MaterialDropdownlistComponent, selectors: [["app-material-dropdownlist"]], viewQuery: function MaterialDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c9, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["materialRemote", ""]], template: function MaterialDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function MaterialDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function MaterialDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function MaterialDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function MaterialDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function MaterialDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function MaterialDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c10] });
MaterialDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
MaterialDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['materialRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MaterialDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-material-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #materialRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['materialRemote']
        }] }); })();

class MaskedtimetextboxComponent {
    constructor(baseUrl, cdRef) {
        this.baseUrl = baseUrl;
        this.cdRef = cdRef;
        this.disabled = true;
        this.selectedValue = "";
        this.id = Math.random();
        this.selectedValueChange = new EventEmitter();
        this.onblurChange = new EventEmitter();
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    ngOnInit() {
    }
    onChange(args) {
        var _a;
        this.selectedValue = args.value || "";
        if (((_a = this.selectedValue) === null || _a === void 0 ? void 0 : _a.length) === 4) {
            let array = this.selectedValue.split('');
            this.selectedValue = `${array[0]}${array[1]}:${array[2]}${array[3]}`;
        }
        this.selectedValueChange.emit(this.selectedValue);
    }
    onblur(e) {
        this.onblurChange.emit(e);
    }
}
MaskedtimetextboxComponent.ɵfac = function MaskedtimetextboxComponent_Factory(t) { return new (t || MaskedtimetextboxComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MaskedtimetextboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MaskedtimetextboxComponent, selectors: [["app-maskedtimetextbox"]], inputs: { disabled: "disabled", selectedValue: "selectedValue" }, outputs: { selectedValueChange: "selectedValueChange", onblurChange: "onblur" }, decls: 1, vars: 3, consts: [["mask", "[0-2][0-9]:[0-5][0-9]", 3, "id", "enabled", "value", "blur", "valueChange", "change"]], template: function MaskedtimetextboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-maskedtextbox", 0);
        ɵngcc0.ɵɵlistener("blur", function MaskedtimetextboxComponent_Template_ejs_maskedtextbox_blur_0_listener($event) { return ctx.onblur($event); })("valueChange", function MaskedtimetextboxComponent_Template_ejs_maskedtextbox_valueChange_0_listener($event) { return ctx.selectedValue = $event; })("change", function MaskedtimetextboxComponent_Template_ejs_maskedtextbox_change_0_listener($event) { return ctx.onChange($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("enabled", ctx.disabled)("value", ctx.selectedValue);
    } }, directives: [ɵngcc5.MaskedTextBoxComponent], styles: [_c2] });
MaskedtimetextboxComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: ChangeDetectorRef }
];
MaskedtimetextboxComponent.propDecorators = {
    disabled: [{ type: Input }],
    selectedValue: [{ type: Input }],
    selectedValueChange: [{ type: Output }],
    onblurChange: [{ type: Output, args: ['onblur',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MaskedtimetextboxComponent, [{
        type: Component,
        args: [{
                selector: 'app-maskedtimetextbox',
                template: "<ejs-maskedtextbox\r\n  [id]=\"id\"\r\n  [enabled]=\"disabled\"\r\n  (blur)='onblur($event)'\r\n  [(value)]=\"selectedValue\"\r\n  (change)=\"onChange($event)\"\r\n  mask=\"[0-2][0-9]:[0-5][0-9]\"\r\n></ejs-maskedtextbox>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc0.ChangeDetectorRef }]; }, { disabled: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], selectedValueChange: [{
            type: Output
        }], onblurChange: [{
            type: Output,
            args: ['onblur']
        }] }); })();

class DiseaseDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "disease-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['name', 'no']);
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query()
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}Disease/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query.sortBy("no"));
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
DiseaseDropdownlistComponent.ɵfac = function DiseaseDropdownlistComponent_Factory(t) { return new (t || DiseaseDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
DiseaseDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DiseaseDropdownlistComponent, selectors: [["app-disease-dropdownlist"]], viewQuery: function DiseaseDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c11, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["diseaseRemote", ""]], template: function DiseaseDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function DiseaseDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function DiseaseDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function DiseaseDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function DiseaseDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function DiseaseDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function DiseaseDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c10] });
DiseaseDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
DiseaseDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['diseaseRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DiseaseDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-disease-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #diseaseRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['diseaseRemote']
        }] }); })();

class MedicineDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "medicine-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueName = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['medicineNo', 'medicineName', 'medicineType']);
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
    }
    ngOnInit() {
        this.query = new Query()
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}Medicine/GetDataDropdownlistByLang?lang=${localStorage.getItem('lang')}`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        // only run when property "data" changed
        if (changes['selectedValue']) {
            this.selectedValueChange.emit(this.selectedValue);
        }
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
        this.selectedValueName.emit(args.itemData.name || '');
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
MedicineDropdownlistComponent.ɵfac = function MedicineDropdownlistComponent_Factory(t) { return new (t || MedicineDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
MedicineDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MedicineDropdownlistComponent, selectors: [["app-medicine-dropdownlist"]], viewQuery: function MedicineDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c12, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueName: "selectedValueName", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["remote", ""]], template: function MedicineDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function MedicineDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function MedicineDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function MedicineDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function MedicineDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function MedicineDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function MedicineDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c2] });
MedicineDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
MedicineDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueName: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['remote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MedicineDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-medicine-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #remote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueName: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['remote']
        }] }); })();

class BomDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "bom-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, 'name');
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query()
            .skip(this.skip)
            .take(this.take)
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}Bom/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
BomDropdownlistComponent.ɵfac = function BomDropdownlistComponent_Factory(t) { return new (t || BomDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
BomDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BomDropdownlistComponent, selectors: [["app-bom-dropdownlist"]], viewQuery: function BomDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c13, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["bomRemote", ""]], template: function BomDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function BomDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function BomDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function BomDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function BomDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function BomDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function BomDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c10] });
BomDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
BomDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['bomRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BomDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-bom-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #bomRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['bomRemote']
        }] }); })();

class CustomerDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "customer-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 1000;
        this.skip = 0;
        this.onFiltering = (e) => {
            let query = new Query();
            //frame the query based on search string with filter type.
            let predicate = new Predicate('name', 'contains', e.text);
            predicate = predicate.or('no', 'contains', e.text);
            query = (e.text != "") ? query.where(predicate) : query;
            //pass the filter data source, filter query to updateData method.
            e.updateData(this.data, query);
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query();
        new DataManager({
            url: `${this.baseUrl}Customer/GetCustomersSP`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }).executeQuery(this.query).then((x) => {
            this.data = x.result;
        });
    }
    ngOnChanges(changes) {
        console.log('Customer/GetCustomersSP', this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        var _a;
        this.change.emit(args);
        this.selectedValueChange.emit((_a = args.itemData) === null || _a === void 0 ? void 0 : _a.guid);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
CustomerDropdownlistComponent.ɵfac = function CustomerDropdownlistComponent_Factory(t) { return new (t || CustomerDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
CustomerDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CustomerDropdownlistComponent, selectors: [["app-customer-dropdownlist"]], viewQuery: function CustomerDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c14, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 7, consts: [[3, "id", "value", "allowFiltering", "enabled", "placeholder", "dataSource", "fields", "valueChange", "filtering", "change", "ngModelChange", "actionComplete"], ["customerRemote", ""]], template: function CustomerDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("valueChange", function CustomerDropdownlistComponent_Template_ejs_dropdownlist_valueChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function CustomerDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function CustomerDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function CustomerDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("actionComplete", function CustomerDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("value", ctx.selectedValue)("allowFiltering", true)("enabled", !ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields);
    } }, directives: [ɵngcc3.DropDownListComponent], styles: [_c10] });
CustomerDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
CustomerDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['customerRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CustomerDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-customer-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(value)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [enabled]=\"!disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #customerRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['customerRemote']
        }] }); })();

class VectorControlDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "vectorControl-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.onblurChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, 'name');
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query()
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}VectorControl/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
        this.selectedValueChange.emit(args.itemData.guid);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
    onblur(e) {
        this.onblurChange.emit(e);
    }
}
VectorControlDropdownlistComponent.ɵfac = function VectorControlDropdownlistComponent_Factory(t) { return new (t || VectorControlDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
VectorControlDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: VectorControlDropdownlistComponent, selectors: [["app-vector-control-dropdownlist"]], viewQuery: function VectorControlDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c15, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange", onblurChange: "onblur" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [[3, "id", "ngModel", "allowFiltering", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "blur"], ["vectorControlremote", ""]], template: function VectorControlDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function VectorControlDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function VectorControlDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function VectorControlDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("open", function VectorControlDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("blur", function VectorControlDropdownlistComponent_Template_ejs_dropdownlist_blur_0_listener($event) { return ctx.onblur($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c2] });
VectorControlDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
VectorControlDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['vectorControlRemote',] }],
    onblurChange: [{ type: Output, args: ['onblur',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(VectorControlDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-vector-control-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  #vectorControlremote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (blur)='onblur($event)'\r\n></ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], onblurChange: [{
            type: Output,
            args: ['onblur']
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['vectorControlRemote']
        }] }); })();

class DisinfectionDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "disinfection-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['disinfectionNo', 'disinfectionName']);
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
    }
    ngOnInit() {
        this.query = new Query()
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}Disinfection/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
DisinfectionDropdownlistComponent.ɵfac = function DisinfectionDropdownlistComponent_Factory(t) { return new (t || DisinfectionDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
DisinfectionDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DisinfectionDropdownlistComponent, selectors: [["app-disinfection-dropdownlist"]], viewQuery: function DisinfectionDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c16, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["disinfectionRemote", ""]], template: function DisinfectionDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function DisinfectionDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function DisinfectionDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function DisinfectionDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function DisinfectionDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function DisinfectionDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function DisinfectionDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c10] });
DisinfectionDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
DisinfectionDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['disinfectionRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DisinfectionDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-disinfection-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #disinfectionRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['disinfectionRemote']
        }] }); })();

class AlertifyService {
    constructor(trans) {
        this.trans = trans;
        this.$swal = Swal;
        this.Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });
    }
    showLoading(timer = 2000) {
        {
            Swal({
                title: this.trans.instant('Now loading'),
                allowEscapeKey: false,
                allowOutsideClick: false,
                timer,
                onOpen: () => {
                    Swal.showLoading();
                }
            }).then(() => { }, (dismiss) => {
                if (dismiss === 'timer') {
                    Swal({
                        title: this.trans.instant('Finished!'),
                        type: 'success',
                        timer: 2000,
                        showConfirmButton: false
                    });
                }
            });
        }
    }
    confirm(title, message, okCallback) {
        Swal.fire({
            title,
            // text: message,
            html: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: this.trans.instant('Yes'),
            cancelButtonText: this.trans.instant('No!')
        }).then((result) => {
            if (result.value) {
                okCallback();
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(this.trans.instant('Cancelled'), this.trans.instant('Your imaginary file is safe :)'), this.trans.instant('error'));
            }
        });
    }
    errorConfirm(title, message, okCallback) {
        Swal.fire({
            title,
            text: message,
            icon: 'warning',
            showCancelButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonText: this.trans.instant('Yes'),
        }).then((result) => {
            okCallback();
        });
    }
    confirm2(title, message, okCallback, cancelCallback) {
        Swal.fire({
            title,
            html: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: this.trans.instant('Yes'),
            cancelButtonText: this.trans.instant('No!')
        }).then((result) => {
            if (result.value) {
                okCallback();
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                cancelCallback();
            }
        });
    }
    confirm4(confirmButtonText = 'Yes', cancelButtonText = 'No', title, message, okCallback, cancelCallback, icon = 'warning') {
        Swal.fire({
            title,
            html: message,
            icon: icon,
            showCancelButton: true,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
        }).then((result) => {
            if (result.value) {
                okCallback();
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                cancelCallback();
            }
        });
    }
    deleteConfirm(confirmButtonText = 'Yes', cancelButtonText = 'No', title, message, okCallback, cancelCallback) {
        Swal.fire({
            title,
            html: message,
            icon: 'question',
            iconHtml: '<i class="fa fa-exclamation" aria-hidden="true"></i>',
            showCancelButton: true,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
        }).then((result) => {
            if (result.value) {
                okCallback();
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                cancelCallback();
            }
        });
    }
    confirm5(confirmButtonText = 'Yes', cancelButtonText = 'No', title, message, okCallback, cancelCallback) {
        Swal.fire({
            title,
            html: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
        }).then((result) => {
            if (result.value) {
                okCallback();
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                cancelCallback();
            }
        });
    }
    confirm3(title, message, confirmButtonText, cancelButtonText, okCallback, cancelCallback) {
        Swal.fire({
            title,
            html: message,
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText,
            allowOutsideClick: false
        }).then((result) => {
            if (result.value) {
                okCallback();
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                cancelCallback();
            }
        });
    }
    valid(title, message) {
        return new Promise((res, rejects) => {
            Swal.fire({
                title,
                text: message,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: this.trans.instant('Yes'),
                cancelButtonText: this.trans.instant('No')
            }).then((result) => {
                if (result.value) {
                    res(true);
                }
                else if (result.dismiss === Swal.DismissReason.cancel) {
                    rejects(false);
                }
            });
        });
    }
    validation(title, message) {
        Swal.fire(title, message, 'warning');
    }
    success(message, noToast) {
        if (!noToast) {
            this.Toast.fire({
                icon: 'success',
                title: message
            });
        }
        else {
            Swal.fire(this.trans.instant('Successfully!'), message, 'success');
        }
    }
    errorBackToLogin(message, btnText, callBack, showCancelButton = false, errorCallBack = () => { }) {
        Swal.fire({
            text: message,
            icon: 'error',
            showCancelButton: showCancelButton,
            allowOutsideClick: false,
            confirmButtonText: `<i class="fa fa-backward"></i> ${this.trans.instant(btnText)}`,
            cancelButtonText: this.trans.instant('No') || 'No'
        }).then((result) => {
            if (result.value) {
                callBack();
            }
            else {
                errorCallBack();
            }
        });
    }
    error(message, noToast) {
        if (!noToast) {
            this.Toast.fire({
                icon: 'error',
                title: message
            });
        }
        else {
            Swal.fire(this.trans.instant('Error!'), message, 'error');
        }
    }
    warning(message, noToast) {
        if (!noToast) {
            this.Toast.fire({
                icon: 'warning',
                title: message
            });
        }
        else {
            Swal.fire(this.trans.instant('Warning!'), message, 'warning');
        }
    }
    message(message, noToast) {
        if (!noToast) {
            this.Toast.fire({
                icon: 'info',
                title: message
            });
        }
        else {
            Swal.fire(this.trans.instant('Info!'), message, 'info');
        }
    }
    messagePreventClosed(message, okCallback) {
        Swal.fire({
            html: message,
            icon: 'info',
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonText: this.trans.instant('Confirm'),
            cancelButtonText: this.trans.instant('No!')
        }).then((result) => {
            if (result.value) {
                okCallback();
            }
        });
    }
}
AlertifyService.ɵfac = function AlertifyService_Factory(t) { return new (t || AlertifyService)(ɵngcc0.ɵɵinject(ɵngcc2.TranslateService)); };
AlertifyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlertifyService_Factory() { return new AlertifyService(i0.ɵɵinject(i1$1.TranslateService)); }, token: AlertifyService, providedIn: "root" });
AlertifyService.ctorParameters = () => [
    { type: TranslateService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AlertifyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc2.TranslateService }]; }, null); })();

class BaseService {
    constructor() {
        this.valueSource = new BehaviorSubject(null);
        this.currentValue = this.valueSource.asObservable();
    }
    handleError(errorResponse) {
        if (errorResponse instanceof HttpErrorResponse) {
            if (errorResponse.status === 401) {
                return throwError(errorResponse.statusText);
            }
            const applicationError = errorResponse.headers.get('Application-Error');
            if (applicationError) {
                console.error(applicationError);
                return throwError(applicationError);
            }
            const serverError = errorResponse.error;
            let modalStateErrors = '';
            if (serverError && typeof serverError === 'object') {
                for (const key in serverError) {
                    if (serverError[key]) {
                        modalStateErrors += serverError[key] + '\n';
                    }
                }
            }
            return throwError(modalStateErrors || serverError || 'Server Error');
        }
    }
    changeValue(message) {
        this.valueSource.next(message);
    }
}

class VersionCheckService {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        // this will be replaced by actual hash post-build.js
        this.currentHash = '{{POST_BUILD_ENTERS_HASH_HERE}}';
        //console.log(this.currentHash)
    }
    /**
    * Checks in every set frequency the version of frontend application
    * @param url
    * @param {number} frequency - in milliseconds, defaults to 30 minutes
    */
    initVersionCheck(url, frequency = 1000 * 60 * 30) {
        setInterval(() => {
            this.checkVersion(url);
        }, frequency);
        this.checkVersion(url);
    }
    /**
    * Will do the call and check if the hash has changed or not
    * @param url
    */
    checkVersion(url) {
        // timestamp these requests to invalidate caches
        this.http.get(url + '?t=' + new Date().getTime())
            .subscribe((response) => {
            // console.log('current Hash',this.currentHash);
            const hash = response.hash;
            //  console.log('new Hash',hash);
            const hashChanged = this.hasHashChanged(this.currentHash, hash);
            // If new version, do something
            // console.log('If new version, do something',hashChanged);
            if (hashChanged) {
                // console.log(`There is a new update version ${response.version}` + ' current Hash',this.currentHash);
                localStorage.setItem('version', response.version);
                this.currentHash = hash;
                // this.cookieService.deleteAll('/');
                window.location.reload();
                // ENTER YOUR CODE TO DO SOMETHING UPON VERSION CHANGE
                // for an example: location.reload();
            }
            this.currentHash = hash;
            // store the new hash so we wouldn't trigger versionChange again
            // only necessary in case you did not force refresh
        }, (err) => {
            console.error(err, 'Could not get version');
        });
    }
    /**
    * Checks if hash has changed.
    * This file has the JS hash, if it is a different one than in the version.json
    * we are dealing with version change
    * @param currentHash
    * @param newHash
    * @returns {boolean}
    */
    hasHashChanged(currentHash, newHash) {
        if (!currentHash || currentHash === '{{POST_BUILD_ENTERS_HASH_HERE}}') {
            return false;
        }
        return currentHash !== newHash;
    }
}
VersionCheckService.ɵfac = function VersionCheckService_Factory(t) { return new (t || VersionCheckService)(ɵngcc0.ɵɵinject(ɵngcc1.HttpClient), ɵngcc0.ɵɵinject(ɵngcc6.CookieService)); };
VersionCheckService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: VersionCheckService, factory: VersionCheckService.ɵfac });
VersionCheckService.ctorParameters = () => [
    { type: HttpClient },
    { type: CookieService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(VersionCheckService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.HttpClient }, { type: ɵngcc6.CookieService }]; }, null); })();

class UtilitiesService {
    constructor(http) {
        this.http = http;
        this.UnflatteringForLeftMenu = (arr) => {
            const map = {};
            const roots = [];
            for (let i = 0; i < arr.length; i++) {
                const node = arr[i];
                node.children = [];
                map[node.id] = i; // use map to look-up the parents
                if (node.parentId !== null) {
                    delete node.children;
                    arr[map[node.parentId]].children.push(node);
                }
                else {
                    roots.push(node);
                }
            }
            return roots;
        };
        this.UnflatteringForTree = (arr) => {
            const map = {};
            const roots = [];
            let node = {
                data: {
                    id: '',
                    parentId: ''
                },
                expanded: true,
                children: []
            };
            for (let i = 0; i < arr.length; i += 1) {
                map[arr[i].id] = i; // initialize the map
                arr[i].data = arr[i]; // initialize the data
                arr[i].children = []; // initialize the children
            }
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < arr.length; i += 1) {
                node = arr[i];
                if (node.data.parentId !== null && arr[map[node.data.parentId]] !== undefined) {
                    arr[map[node.data.parentId]].children.push(node);
                }
                else {
                    roots.push(node);
                }
            }
            return roots;
        };
    }
    MakeSeoTitle(input) {
        if (input === undefined || input === '') {
            return '';
        }
        // Đổi chữ hoa thành chữ thường
        let slug = input.toLowerCase();
        // Đổi ký tự có dấu thành không dấu
        slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
        slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        slug = slug.replace(/đ/gi, 'd');
        // Xóa các ký tự đặt biệt
        slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
        // Đổi khoảng trắng thành ký tự gạch ngang
        slug = slug.replace(/ /gi, '-');
        // Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
        // Phòng trường hợp người nhập vào quá nhiều ký tự trắng
        slug = slug.replace(/\-\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-/gi, '-');
        slug = slug.replace(/\-\-/gi, '-');
        // Xóa các ký tự gạch ngang ở đầu và cuối
        slug = '@' + slug + '@';
        slug = slug.replace(/\@\-|\-\@|\@/gi, '');
        return slug;
    }
    ToFormData(formValue) {
        const formData = new FormData();
        for (const key of Object.keys(formValue)) {
            const value = formValue[key];
            let value2;
            if (value) {
                value2 = value;
                if (value2 instanceof Date) {
                    value2 = `${value2.toLocaleDateString()} ${value2.toLocaleTimeString('en-GB')}`;
                }
                formData.append(key, value);
            }
        }
        return formData;
    }
    checkExistHost(url) {
        const check = new RegExp("^(http|https)://", "i").test(url);
        return check;
    }
    checkValidImage(data) {
        const valid = new RegExp(".(?:jpg|gif|png)", "g").test(data);
        return valid;
    }
}
UtilitiesService.ɵfac = function UtilitiesService_Factory(t) { return new (t || UtilitiesService)(ɵngcc0.ɵɵinject(ɵngcc1.HttpClient)); };
UtilitiesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UtilitiesService_Factory() { return new UtilitiesService(i0.ɵɵinject(i1.HttpClient)); }, token: UtilitiesService, providedIn: "root" });
UtilitiesService.ctorParameters = () => [
    { type: HttpClient }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(UtilitiesService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc1.HttpClient }]; }, null); })();

// export * from './CURD.service';

class RoomDropdownlistComponent {
    constructor(baseUrl, trans, cd, service) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.cd = cd;
        this.service = service;
        this.id = "room-remote";
        this.placeholder = "";
        this.disabled = false;
        this.autoload = true;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.onblurChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['roomName', 'roomNo']);
                e.updateData(this.data, query);
            }
        };
    }
    onOroom(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        e.result = e.result.map(x => {
            let name = x.id === 0 ? this.trans.instant(x.name) : x.name;
            return {
                guid: x.guid,
                name: name
            };
        });
    }
    ngAfterViewChecked() {
    }
    ngOnInit() {
        if (this.autoload) {
            this.service.getRoomsByFarmGuid(localStorage.getItem('farmGuid'), this.barnGuid || "", this.makeOrderGuid || '').subscribe(x => {
                this.data = x;
            });
        }
    }
    ngOnChanges(changes) {
        if (this.selectedValue === "" && this.dropdownObj) {
            this.dropdownObj.value = null;
            this.cd.detectChanges();
        }
        if (changes['selectedValue'] && changes['selectedValue'].currentValue) {
            setTimeout(() => {
                this.selectedValue = changes['selectedValue'].currentValue;
            }, 0);
        }
        if (changes['barnGuid']) {
            this.service.getRoomsByFarmGuid(localStorage.getItem('farmGuid'), this.barnGuid || "", this.makeOrderGuid || '').subscribe(x => {
                this.data = x;
            });
        }
        if (changes['makeOrderGuid']) {
            this.service.getRoomsByFarmGuid(localStorage.getItem('farmGuid'), this.barnGuid || "", this.makeOrderGuid || '').subscribe(x => {
                this.data = x;
            });
        }
    }
    onChange(args) {
        var _a, _b, _c;
        this.change.emit(args);
        this.roomGuidName = (_a = args.itemData) === null || _a === void 0 ? void 0 : _a.name;
        this.selectedValueChange.emit((_b = args.itemData) === null || _b === void 0 ? void 0 : _b.guid);
        this.ngModelChange.emit((_c = args.itemData) === null || _c === void 0 ? void 0 : _c.guid);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
    onblur(e) {
        this.onblurChange.emit(e);
    }
}
RoomDropdownlistComponent.ɵfac = function RoomDropdownlistComponent_Factory(t) { return new (t || RoomDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(PigfarmCoreService)); };
RoomDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RoomDropdownlistComponent, selectors: [["app-room-dropdownlist"]], viewQuery: function RoomDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(DropDownListComponent, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", autoload: "autoload", selectedValue: "selectedValue", barnGuid: "barnGuid", makeOrderGuid: "makeOrderGuid" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange", onblurChange: "onblur" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 7, consts: [[3, "id", "value", "allowFiltering", "enabled", "placeholder", "dataSource", "fields", "valueChange", "change", "ngModelChange"], ["roomRemote", ""]], template: function RoomDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("valueChange", function RoomDropdownlistComponent_Template_ejs_dropdownlist_valueChange_0_listener($event) { return ctx.selectedValue = $event; })("change", function RoomDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function RoomDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("value", ctx.selectedValue)("allowFiltering", true)("enabled", !ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields);
    } }, directives: [ɵngcc3.DropDownListComponent], styles: [_c2] });
RoomDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService },
    { type: ChangeDetectorRef },
    { type: PigfarmCoreService }
];
RoomDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    barnGuid: [{ type: Input }],
    makeOrderGuid: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    autoload: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: [DropDownListComponent,] }],
    onblurChange: [{ type: Output, args: ['onblur',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(RoomDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-room-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(value)]=\"selectedValue\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [enabled]=\"!disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #roomRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }, { type: ɵngcc0.ChangeDetectorRef }, { type: PigfarmCoreService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], autoload: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], onblurChange: [{
            type: Output,
            args: ['onblur']
        }], selectedValue: [{
            type: Input
        }], barnGuid: [{
            type: Input
        }], makeOrderGuid: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: [DropDownListComponent]
        }] }); })();

class CullingTankDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "cullingTank-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['cullingTankName', 'cullingTankNo']);
                e.updateData(this.data, query);
            }
        };
    }
    onOcullingTank(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        e.result = e.result.map(x => {
            let name = x.id === 0 ? this.trans.instant(x.name) : x.name;
            return {
                guid: x.guid,
                name: name
            };
        });
    }
    ngOnInit() {
        this.query = new Query()
            .where('farmGuid', 'equal', localStorage.getItem('farmGuid'))
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}CullingTank/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
CullingTankDropdownlistComponent.ɵfac = function CullingTankDropdownlistComponent_Factory(t) { return new (t || CullingTankDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
CullingTankDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CullingTankDropdownlistComponent, selectors: [["app-culling-tank-dropdownlist"]], viewQuery: function CullingTankDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c17, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "actionComplete"], ["cullingTankRemote", ""]], template: function CullingTankDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function CullingTankDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function CullingTankDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function CullingTankDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function CullingTankDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("actionComplete", function CullingTankDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c2] });
CullingTankDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
CullingTankDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['cullingTankRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CullingTankDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-culling-tank-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #cullingTankRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['cullingTankRemote']
        }] }); })();

class PenDropdownlistModalComponent {
    constructor(baseUrl, trans, service) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.service = service;
        this.id = "pen-remote";
        this.placeholder = this.trans.instant("No Item");
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.roomGuid = '';
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.search(e.text, ['penName', 'penNo']);
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        e.result = e.result.map(x => {
            let name = x.id === 0 ? this.trans.instant(x.name) : x.name;
            return {
                guid: x.guid,
                name: name
            };
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadData();
        });
    }
    loadData() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.service.getPensByFarmGuidOrRoomGuid(localStorage.getItem("farmGuid"), this.roomGuid).toPromise();
            this.data = data;
            // this.query = new Query()
            //   .where('farmGuid', 'equal', localStorage.getItem('farmGuid'))
            //   .where('status', 'equal', 1);
            //   if (this.roomGuid) {
            //     this.query.where('roomGuid', 'equal', this.roomGuid);
            //   }
            // this.data = new DataManager({
            //   url: `${this.baseUrl}Pen/GetDataDropdownlist`,
            //   adaptor: new UrlAdaptor,
            //   crossDomain: true,
            // }, this.query.sortBy('penNo'));
        });
    }
    ngOnChanges(changes) {
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
PenDropdownlistModalComponent.ɵfac = function PenDropdownlistModalComponent_Factory(t) { return new (t || PenDropdownlistModalComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService), ɵngcc0.ɵɵdirectiveInject(PigfarmCoreService)); };
PenDropdownlistModalComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PenDropdownlistModalComponent, selectors: [["app-pen-dropdownlist-modal"]], viewQuery: function PenDropdownlistModalComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c7, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["penRemote", ""]], template: function PenDropdownlistModalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function PenDropdownlistModalComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function PenDropdownlistModalComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function PenDropdownlistModalComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function PenDropdownlistModalComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function PenDropdownlistModalComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function PenDropdownlistModalComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c2] });
PenDropdownlistModalComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService },
    { type: PigfarmCoreService }
];
PenDropdownlistModalComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['penRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PenDropdownlistModalComponent, [{
        type: Component,
        args: [{
                selector: 'app-pen-dropdownlist-modal',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #penRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }, { type: PigfarmCoreService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['penRemote']
        }] }); })();

class MyCheckboxComponent {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.label = '';
        this.checkedChange = new EventEmitter();
        this.checkedValue = false;
    }
    ngOnChanges(changes) {
        if (this.checked != changes.checked.currentValue) {
            this.checked = changes.checked.currentValue;
            this.checkedValue = this.checked === 1 ? true : false;
        }
        if (changes.checked.firstChange) {
            this.checked = changes.checked.currentValue;
            this.checkedValue = this.checked === 1 ? true : false;
        }
    }
    ngOnInit() {
    }
    onCheckedChange(value) {
        this.checked = value === true ? 1 : 0;
        console.log(this.checked);
        this.checkedChange.emit(this.checked);
    }
}
MyCheckboxComponent.ɵfac = function MyCheckboxComponent_Factory(t) { return new (t || MyCheckboxComponent)(ɵngcc0.ɵɵdirectiveInject("Env")); };
MyCheckboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MyCheckboxComponent, selectors: [["app-my-checkbox"]], inputs: { label: "label", checked: "checked" }, outputs: { checkedChange: "checkedChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 2, consts: [[3, "label", "ngModel", "ngModelChange"]], template: function MyCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-checkbox", 0);
        ɵngcc0.ɵɵlistener("ngModelChange", function MyCheckboxComponent_Template_ejs_checkbox_ngModelChange_0_listener($event) { return ctx.checkedValue = $event; })("ngModelChange", function MyCheckboxComponent_Template_ejs_checkbox_ngModelChange_0_listener($event) { return ctx.onCheckedChange($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("label", ctx.label)("ngModel", ctx.checkedValue);
    } }, directives: [ɵngcc7.CheckBoxComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [""] });
MyCheckboxComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] }
];
MyCheckboxComponent.propDecorators = {
    checked: [{ type: Input }],
    label: [{ type: Input }],
    checkedChange: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MyCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'app-my-checkbox',
                template: "<ejs-checkbox [label]=\"label\" [(ngModel)]=\"checkedValue\" (ngModelChange)=\"onCheckedChange($event)\"></ejs-checkbox>\r\n",
                styles: [""]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }]; }, { label: [{
            type: Input
        }], checkedChange: [{
            type: Output
        }], checked: [{
            type: Input
        }] }); })();

class ThingDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "thing-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, 'name');
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query()
            .skip(this.skip)
            .take(this.take)
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}Thing/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
ThingDropdownlistComponent.ɵfac = function ThingDropdownlistComponent_Factory(t) { return new (t || ThingDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
ThingDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ThingDropdownlistComponent, selectors: [["app-thing-dropdownlist"]], viewQuery: function ThingDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c18, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["thingRemote", ""]], template: function ThingDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function ThingDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function ThingDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function ThingDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function ThingDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function ThingDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function ThingDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c10] });
ThingDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
ThingDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['thingRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ThingDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-thing-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #thingRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['thingRemote']
        }] }); })();

class AccountDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "xacccount-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, 'name');
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        e.result = e.result.map(x => {
            let name = x.guid === "" ? this.trans.instant(x.name) : x.name;
            return {
                guid: x.guid,
                name: name
            };
        });
    }
    ngOnInit() {
        this.query = new Query()
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}XAccount/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
AccountDropdownlistComponent.ɵfac = function AccountDropdownlistComponent_Factory(t) { return new (t || AccountDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
AccountDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AccountDropdownlistComponent, selectors: [["app-account-dropdownlist"]], viewQuery: function AccountDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c19, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "value", "allowFiltering", "enabled", "placeholder", "dataSource", "fields", "query", "valueChange", "filtering", "change", "ngModelChange", "open", "actionComplete"], ["xacccountRemote", ""]], template: function AccountDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("valueChange", function AccountDropdownlistComponent_Template_ejs_dropdownlist_valueChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function AccountDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function AccountDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function AccountDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function AccountDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function AccountDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("value", ctx.selectedValue)("allowFiltering", true)("enabled", !ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent], styles: [_c10] });
AccountDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
AccountDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['xacccountRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AccountDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-account-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(value)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [enabled]=\"!disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #xacccountRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['xacccountRemote']
        }] }); })();

class StatusConstants {
    constructor() {
        this.Default = 1;
        this.Agree = 2;
        this.Execute = 3;
        this.Close = 3;
        this.Reject = 5;
        this.Delete = -1;
    }
}
class SystemConstant {
}
SystemConstant.ROOT_LEVEL = 1;
SystemConstant.BUILDING_LEVEL = 2;
SystemConstant.LINE_LEVEL = 3;
class BOM_TAB_Constant {
}
BOM_TAB_Constant.Move = 'Move';
BOM_TAB_Constant.Feeding = 'Feeding';
BOM_TAB_Constant.Immunization = 'Immunization';
BOM_TAB_Constant.Treatment = 'Treatment';
BOM_TAB_Constant.Disinfection = 'Disinfection';
BOM_TAB_Constant.VectorControl = 'VectorControl';
class BIO_SECURITY_TAB_Constant {
}
BIO_SECURITY_TAB_Constant.Detail = 'Detail';
BIO_SECURITY_TAB_Constant.Pen = 'Pen';
BIO_SECURITY_TAB_Constant.Pig = 'Pig';
BIO_SECURITY_TAB_Constant.Record = 'Record';
class INVENTORY_TAB_Constant {
}
INVENTORY_TAB_Constant.Detail = 'Detail';
INVENTORY_TAB_Constant.ChangeThing = 'Change Thing';
INVENTORY_TAB_Constant.ChangeMaterial = 'Change Material';
INVENTORY_TAB_Constant.Scrap = 'Scrapn';
class ACCEPTANCE_TAB_Constant {
}
ACCEPTANCE_TAB_Constant.Detail = 'Detail';
ACCEPTANCE_TAB_Constant.Check = 'Check';
ACCEPTANCE_TAB_Constant.CheckIn = 'Check In';
ACCEPTANCE_TAB_Constant.Inspection = 'Inspection';
class BIO_SECURITY_MASTER_PIG_TYPE_Constant {
}
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Sow = 'Sow';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Boar = 'Boar';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.NewBoar = 'New Boar';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Gilt = 'Gilt';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Suckling = 'Suckling';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Pig = 'Pig';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Finisher = 'Finisher';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Nursery = 'Nursery';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Grower = 'Grower';
class REPAIR_TAB_Constant {
}
REPAIR_TAB_Constant.Detail = 'Detail';
REPAIR_TAB_Constant.Record = 'Record';
class SALE_ORDER_TAB_Constant {
}
SALE_ORDER_TAB_Constant.Detail = 'Detail';
SALE_ORDER_TAB_Constant.CheckOut = 'Check Out';
class REQUISITION_TAB_Constant {
}
REQUISITION_TAB_Constant.Detail = 'Detail';
REQUISITION_TAB_Constant.Feed = 'Feed';
REQUISITION_TAB_Constant.Material = 'Material';
REQUISITION_TAB_Constant.Medicine = 'Medicine';
REQUISITION_TAB_Constant.Thing = 'Thing';
class PIG_DISEASE_TAB_Constant {
}
PIG_DISEASE_TAB_Constant.Culling = 'Culling';
PIG_DISEASE_TAB_Constant.Detail = 'Detail';
class PIG_HOUSE_CLEANING_TAB_Constant {
}
PIG_HOUSE_CLEANING_TAB_Constant.Plan = 'Plan';
PIG_HOUSE_CLEANING_TAB_Constant.Detail = 'Detail';
class PIG_FARM_VECTOR_TAB_Constant {
}
PIG_FARM_VECTOR_TAB_Constant.Plan = 'Plan';
PIG_FARM_VECTOR_TAB_Constant.Detail = 'Detail';
class PIG_SETTING_TAB_Constant {
}
PIG_SETTING_TAB_Constant.Code = 'Code';
PIG_SETTING_TAB_Constant.Detail = 'Detail';
PIG_SETTING_TAB_Constant.Testing = 'Testing';
PIG_SETTING_TAB_Constant.Genetic = 'Genetic';
PIG_SETTING_TAB_Constant.Pedigree = 'Pedigree';
class RECORD_TAB_Constant {
}
RECORD_TAB_Constant.Detail = 'Detail';
RECORD_TAB_Constant.Move = 'Move';
RECORD_TAB_Constant.Feeding = 'Feeding';
RECORD_TAB_Constant.Death = 'Death';
RECORD_TAB_Constant.Culling = 'Culling';
RECORD_TAB_Constant.EarTag = 'EarTag';
RECORD_TAB_Constant.Weighing = 'Weighing';
class MessageConstants {
}
MessageConstants.SYSTEM_ERROR_MSG = 'An error occurred while connecting to the server';
MessageConstants.CONFIRM_LOCK_MSG = 'Are you sure you want to lock this account?';
MessageConstants.CONFIRM_UNLOCK_MSG = 'Are you sure you want to unlock this account?';
MessageConstants.CONFIRM_LOCK_STATUS_MSG = 'Are you sure you want to lock this record?';
MessageConstants.CONFIRM_UNLOCK_STATUS_MSG = 'Are you sure you want to unlock this record?';
MessageConstants.CONFIRM_STATUS_TITLE_MSG = 'Lock/Unlock record?';
MessageConstants.CONFIRM_FEEDBACK_STATUS_MSG = 'Are you sure you want to reply to this message??';
MessageConstants.CONFIRM_UNFEEDBACK_STATUS_MSG = 'Are you sure you want to change the status of this message??';
MessageConstants.CONFIRM_FEEDBACK_STATUS_TITLE_MSG = 'Reply/Unresponsive to mail?';
MessageConstants.CONFIRM_DELETE_MSG = 'Are you sure you want to delete this record?';
MessageConstants.CONFIRM_DELETE_RANGE_MSG = 'Are you sure you want to delete these records?';
MessageConstants.CONFIRM_LOCK_TITLE_MSG = 'Lock/Unlock account?';
MessageConstants.CONFIRM_TITLE_MSG = 'Delete record?';
MessageConstants.CONFIRM_DELETE_RANGE_TITLE_MSG = 'Delete multiple records?';
MessageConstants.CONFIRM_PAY_MSG = 'Are you sure you want to pay this?';
MessageConstants.CONFIRM_SET_DEFAULT_MSG = 'Are you sure you want to default to this record?';
MessageConstants.CONFIRM_SET_IS_HOME_MSG = 'Are you sure you want to display this record on the homepage?';
MessageConstants.CONFIRM_SET_NOT_IS_HOME_MSG = 'Are you sure you want to undisplay this record on the homepage?';
MessageConstants.CONFIRM_PUBLISH_POST = 'Are you sure you want to publish this article??';
MessageConstants.LOGIN_AGAIN_MSG = 'Your login session is over. Please login again.';
MessageConstants.CREATED_OK_MSG = 'Create Successfully';
MessageConstants.UPDATED_OK_MSG = 'Update successfully';
MessageConstants.DELETED_OK_MSG = 'Delete successfully';
MessageConstants.LOCKED_OK_MSG = 'Locked successfully';
MessageConstants.UNLOCKED_OK_MSG = 'Unlock successfully';
MessageConstants.SET_DEFAULT_OK_MSG = 'Default set success';
MessageConstants.SET_IS_HOME_OK_MSG = 'Set homepage display successfully';
MessageConstants.SET_NOT_IS_HOME_OK_MSG = 'Successfully undisplaying homepage';
MessageConstants.FORBIDDEN = 'You are blocked from accessing';
MessageConstants.CANNOT_EDIT_MULTIPLE = 'You cannot edit more than 1 record.';
MessageConstants.NOT_CHOOSE_ANY_RECORD = 'You must select at least one record.';
MessageConstants.UPLOAD_OK_MSG = 'Upload successful';
MessageConstants.REQUIRED_ERROR_MSG = 'Data cannot be empty';
MessageConstants.RELOAD_MENU = 'Reload menu';
MessageConstants.SELECT_RECORD = 'Please select at least 1 record to delete!';
MessageConstants.SEND_MAIL_OK_MSG = 'Email was sent. Please check your email';
MessageConstants.SEND_MAIL_FAILED_MSG = 'Failure sending email error!';
MessageConstants.CREATE_TITLE = 'Create record';
MessageConstants.CREATE_MESSAGE = 'Are you sure you want to create this record?';
MessageConstants.UPDATE_TITLE = 'Update record';
MessageConstants.UPDATE_MESSAGE = 'Are you sure you want to update this record?';
MessageConstants.DELETE_TITLE = 'Delete record';
MessageConstants.DELETE_MESSAGE = 'Are you sure you want to delete this record?';
MessageConstants.CANCEL_MESSAGE = 'Your data is safe!';
MessageConstants.SERVER_ERROR = 'Server Error!';
MessageConstants.EXIST_MESSAGE = 'The key already exist!';
MessageConstants.EXIST_USERNAME_MESSAGE = 'The username already exist!';
MessageConstants.CHOOSE_FARM_MESSAGE = 'Please choose a farm!';
MessageConstants.SELECT_ORDER_MESSAGE = 'Please select a order!';
MessageConstants.VALID_CHANGE_PASSWORD_MSG = "The new password and confirm password are empty!";
MessageConstants.CONFIRM_CHANGE_PASSWORD_MSG = "Password and Confirm Password Validation";
MessageConstants.YES_MSG = "Yes";
MessageConstants.NO_MSG = "No";
class ActionConstants {
}
ActionConstants.ADD = 'add';
ActionConstants.EDIT = 'edit';
ActionConstants.VIEW = 'getall';
ActionConstants.DELETE_RANGE = 'deleterange';
ActionConstants.DELETE = 'delete';
ActionConstants.EDIT_TITLE = 'Edit';
ActionConstants.ADD_TITLE = 'Add new';
ActionConstants.Add = 'add';
ActionConstants.Edit = 'edit';
class ImagePathConstants {
}
ImagePathConstants.NO_IMAGE = '/assets/images/default-avatar-male.png';
ImagePathConstants.NO_IMAGE_COMPONENT = '/assets/images/pages/content-img-4.jpg';
ImagePathConstants.NO_IMAGE_ACTION_COMPONENT = '/assets/images/no-image.png';
class SystemConfigConst {
}
SystemConfigConst.Order_Amount = "ORDER_AMOUNT";
SystemConfigConst.Order = "Order";
SystemConfigConst.Pig_NO = "ID_NO";
SystemConfigConst.Pig = "Pig";
SystemConfigConst.GrowDays = "GrowDays";
SystemConfigConst.Finisher = "Finisher";
SystemConfigConst.Grower = "Grower";
SystemConfigConst.Nursry = "Nursery";
SystemConfigConst.Sucking = "Suckling";
SystemConfigConst.Sale = "Sale";

class RoleConstant {
}
RoleConstant.ADMIN = 1;
RoleConstant.SUPER_ADMIN = 8;
RoleConstant.SUPERVISOR = 2;
RoleConstant.STAFF = 3;
RoleConstant.WORKER = 4;
RoleConstant.DISPATCHER = 6;

class ActionConstant {
}
ActionConstant.CREATE = 'Add';
ActionConstant.EDIT = 'Edit';
ActionConstant.DELETE = 'Delete';
ActionConstant.VIEW = 'Read';
ActionConstant.APPROVAL = 'APPROVAL';
ActionConstant.EXCEL_EXPORT = 'ExcelExport';
ActionConstant.EXCEL_IMPORT = 'EXCEL_IMPORT';
ActionConstant.PRINT = 'PRINT';
ActionConstant.DONE = 'DONE';
ActionConstant.FINISH = 'FINISH';
ActionConstant.RELEASE = 'RELEASE';
ActionConstant.REJECT = 'REJECT';
ActionConstant.CLONE = 'CLONE';

class MultiPigGridComponent {
    constructor(baseUrl, service, alertify, translate) {
        this.baseUrl = baseUrl;
        this.service = service;
        this.alertify = alertify;
        this.translate = translate;
        this.height = 300;
        this.type = '';
        this.recordGuid = '';
        this.penGuid = '';
        this.checked = '';
        this.onCheckedChange = new EventEmitter();
        this.pageSettings = {
            pageCount: 10,
            pageSizes: 20,
            enableQueryString: true,
            pageSize: 10,
            currentPage: 1,
            enableScroll: true,
        };
        this.searchOptions = { fields: ['name'], operator: 'contains', ignoreCase: true };
        this.alert = {
            updateMessage: this.translate.instant(MessageConstants.UPDATE_MESSAGE),
            updateTitle: this.translate.instant(MessageConstants.UPDATE_TITLE),
            createMessage: this.translate.instant(MessageConstants.CREATE_MESSAGE),
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
    }
    ngOnChanges(changes) {
        // if (changes.pigData.currentValue != changes.pigData.previousValue) {
        //   this.pigData = changes.pigData.currentValue;
        // }
    }
    ngOnInit() {
    }
    onChangeChecked(e, data) {
        let checked = e.checked;
        this.onCheckedChange.emit(e);
        this.toggle(checked, data.guid);
    }
    toggle(checked, pigGuid) {
        if (checked === false && this.recordGuid) {
            this.model = {
                recordGuid: this.recordGuid || "",
                pigGuid,
                type: this.type
            };
            this.service.removeRecord2Pig(this.model).subscribe((res) => {
                if (res.success === true) {
                    this.alertify.success(this.alert.deleted_ok_msg);
                    this.loadDataByRoom();
                }
                else {
                    this.alertify.warning(this.alert.system_error_msg);
                }
            }, (error) => {
                this.alertify.warning(this.alert.system_error_msg);
            });
        }
        else {
            if (this.recordGuid) {
                this.model = {
                    recordGuid: this.recordGuid || "",
                    pigGuid,
                    type: this.type
                };
                this.service.addRecord2Pig(this.model).subscribe((res) => {
                    if (res.success === true) {
                        this.alertify.success(this.alert.created_ok_msg);
                        this.loadDataByRoom();
                    }
                    else {
                        this.alertify.warning(this.alert.system_error_msg);
                    }
                }, (error) => {
                    this.alertify.warning(this.alert.system_error_msg);
                });
            }
        }
    }
    loadDataByRoom() {
        const accessToken = localStorage.getItem("token");
        this.pigData = new DataManager({
            url: `${this.baseUrl}Pen/GetPigsByPen?penGuid=${this.penGuid || ""}&recordGuid=${this.recordGuid || ""}&type=${this.type || ""}`,
            adaptor: new UrlAdaptor(),
            headers: [{ authorization: `Bearer ${accessToken}` }],
        });
    }
}
MultiPigGridComponent.ɵfac = function MultiPigGridComponent_Factory(t) { return new (t || MultiPigGridComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(PigfarmCoreService), ɵngcc0.ɵɵdirectiveInject(AlertifyService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
MultiPigGridComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MultiPigGridComponent, selectors: [["app-multi-pig-grid"]], inputs: { height: "height", type: "type", recordGuid: "recordGuid", penGuid: "penGuid", checked: "checked", pigData: "pigData" }, outputs: { onCheckedChange: "onCheckedChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 7, vars: 16, consts: [["id", "pig-grid", "gridLines", "Both", 3, "dataSource", "enableInfiniteScrolling", "allowPaging", "pageSettings", "searchSettings", "toolbar", "height"], ["piggrid", ""], ["field", "name", "textAlign", "Left", "headerTextAlign", "Center", "width", "80", "headerTextAlign", "Center", 3, "allowSorting", "allowSearching", "allowGrouping", "allowFiltering", "allowEditing", "headerText"], ["template", ""], [3, "label", "checked", "change"], ["checkbox", ""]], template: function MultiPigGridComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-grid", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "e-columns");
        ɵngcc0.ɵɵelementStart(3, "e-column", 2);
        ɵngcc0.ɵɵpipe(4, "translate");
        ɵngcc0.ɵɵtemplate(5, MultiPigGridComponent_ng_template_5_Template, 2, 2, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("dataSource", ctx.pigData)("enableInfiniteScrolling", true)("allowPaging", false)("pageSettings", ctx.pageSettings)("searchSettings", ctx.searchOptions)("toolbar", ɵngcc0.ɵɵpureFunction0(15, _c20))("height", ctx.height + "px");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(4, 13, "PIG"));
        ɵngcc0.ɵɵproperty("allowSorting", false)("allowSearching", false)("allowGrouping", false)("allowFiltering", true)("allowEditing", false);
    } }, directives: [ɵngcc8.GridComponent, ɵngcc8.ColumnsDirective, ɵngcc8.AggregateColumnsDirective, ɵngcc8.ColumnDirective, ɵngcc8.AggregateColumnDirective, ɵngcc7.CheckBoxComponent], pipes: [ɵngcc2.TranslatePipe], styles: [""] });
MultiPigGridComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: PigfarmCoreService },
    { type: AlertifyService },
    { type: TranslateService }
];
MultiPigGridComponent.propDecorators = {
    height: [{ type: Input }],
    type: [{ type: Input }],
    recordGuid: [{ type: Input }],
    penGuid: [{ type: Input }],
    checked: [{ type: Input }],
    onCheckedChange: [{ type: Output, args: ['onCheckedChange',] }],
    pigData: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MultiPigGridComponent, [{
        type: Component,
        args: [{
                selector: 'app-multi-pig-grid',
                template: "<ejs-grid\r\n#piggrid\r\nid=\"pig-grid\"\r\n[dataSource]=\"pigData\"\r\n[enableInfiniteScrolling]=\"true\"\r\n[allowPaging]=\"false\"\r\n[pageSettings]=\"pageSettings\"\r\n[searchSettings]=\"searchOptions\"\r\n[toolbar]=\"['Search']\"\r\n[height]=\"height + 'px'\"\r\ngridLines=\"Both\"\r\n>\r\n<e-columns>\r\n<e-column\r\n  field=\"name\"\r\n  [allowSorting]=\"false\"\r\n  [allowSearching]=\"false\"\r\n  [allowGrouping]=\"false\"\r\n  [allowFiltering]=\"true\"\r\n  [allowEditing]=\"false\"\r\n  textAlign=\"Left\"\r\n          headerTextAlign=\"Center\"\r\n  width=\"80\"\r\n  headerTextAlign=\"Center\"\r\n  headerText=\"{{ 'PIG' | translate }}\"\r\n>\r\n  <ng-template #template let-data>\r\n    <ejs-checkbox #checkbox (change)=\"onChangeChecked($event, data)\" [label]=\"data.name\" [checked]=\"data.checked\"></ejs-checkbox>\r\n  </ng-template>\r\n</e-column>\r\n\r\n</e-columns>\r\n</ejs-grid>\r\n",
                styles: [""]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: PigfarmCoreService }, { type: AlertifyService }, { type: ɵngcc2.TranslateService }]; }, { height: [{
            type: Input
        }], type: [{
            type: Input
        }], recordGuid: [{
            type: Input
        }], penGuid: [{
            type: Input
        }], checked: [{
            type: Input
        }], onCheckedChange: [{
            type: Output,
            args: ['onCheckedChange']
        }], pigData: [{
            type: Input
        }] }); })();

class Record2PenComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "pen2-remote";
        this.placeholder = "";
        this.roomGuid = false;
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.onblurChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['penName', 'penNo']);
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        e.result = e.result.map(x => {
            let name = x.id === 0 ? this.trans.instant(x.name) : x.name;
            return {
                guid: x.guid,
                name: name
            };
        });
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
    onblur(e) {
        this.onblurChange.emit(e);
    }
}
Record2PenComponent.ɵfac = function Record2PenComponent_Factory(t) { return new (t || Record2PenComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
Record2PenComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Record2PenComponent, selectors: [["app-record2-pen"]], viewQuery: function Record2PenComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c21, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", roomGuid: "roomGuid", disabled: "disabled", selectedValue: "selectedValue", data: "data", query: "query" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange", onblurChange: "onblur" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete", "blur"], ["pen2Remote", ""]], template: function Record2PenComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function Record2PenComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function Record2PenComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function Record2PenComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function Record2PenComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function Record2PenComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function Record2PenComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); })("blur", function Record2PenComponent_Template_ejs_dropdownlist_blur_0_listener($event) { return ctx.onblur($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c2] });
Record2PenComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
Record2PenComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    roomGuid: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    onblurChange: [{ type: Output, args: ['onblur',] }],
    dropdownObj: [{ type: ViewChild, args: ['pen2Remote',] }],
    data: [{ type: Input }],
    query: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(Record2PenComponent, [{
        type: Component,
        args: [{
                selector: 'app-record2-pen',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #pen2Remote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n  (blur)='onblur($event)'\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], roomGuid: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], onblurChange: [{
            type: Output,
            args: ['onblur']
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['pen2Remote']
        }], data: [{
            type: Input
        }], query: [{
            type: Input
        }] }); })();

class Record2RoomComponent {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    ngOnInit() {
    }
}
Record2RoomComponent.ɵfac = function Record2RoomComponent_Factory(t) { return new (t || Record2RoomComponent)(ɵngcc0.ɵɵdirectiveInject("Env")); };
Record2RoomComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Record2RoomComponent, selectors: [["app-record2-room"]], decls: 2, vars: 0, template: function Record2RoomComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, " record2-room works!\n");
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [""] });
Record2RoomComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(Record2RoomComponent, [{
        type: Component,
        args: [{
                selector: 'app-record2-room',
                template: "<p>\r\n  record2-room works!\r\n</p>\r\n",
                styles: [""]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }]; }, null); })();

class MakeorderDropdownlistComponent {
    constructor(baseUrl, trans, cd, service) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.cd = cd;
        this.service = service;
        this.id = "makeorder-remote";
        this.selectedValue = '';
        this.placeholder = "";
        this.pigType = "";
        this.disabled = false;
        this.popupWidth = 'auto';
        this.change = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'orderName', value: 'guid' };
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.subscription2) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
    ngAfterViewChecked() {
        this.selectedValue = this.selectedValue || "";
        this.cd.detectChanges();
    }
    ngOnInit() {
        if (!this.pigType) {
            this.loadData();
        }
    }
    loadData() {
        this.subscription = this.service.getMakeOrderByFarmGuid(localStorage.getItem('farmGuid')).subscribe(x => {
            this.data = x;
        });
    }
    loadDataByPigType() {
        this.subscription2 = this.service.getMakeOrderByFarmGuidAndPigType(localStorage.getItem('farmGuid'), this.pigType).subscribe(x => {
            this.data = x;
        });
    }
    ngOnChanges(changes) {
        if (changes['selectedValue']) {
            this.selectedValueChange.emit(this.selectedValue);
        }
        if (changes['pigType'] && changes['pigType'].currentValue) {
            this.loadDataByPigType();
        }
    }
    onChange(args) {
        this.change.emit(args);
        this.selectedValueChange.emit(args.value);
    }
}
MakeorderDropdownlistComponent.ɵfac = function MakeorderDropdownlistComponent_Factory(t) { return new (t || MakeorderDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(PigfarmCoreService)); };
MakeorderDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MakeorderDropdownlistComponent, selectors: [["app-makeorder-dropdownlist"]], viewQuery: function MakeorderDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c12, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", selectedValue: "selectedValue", placeholder: "placeholder", pigType: "pigType", disabled: "disabled", popupWidth: "popupWidth" }, outputs: { change: "change", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "value", "allowFiltering", "enabled", "placeholder", "dataSource", "popupWidth", "fields", "valueChange", "change"], ["remote", ""]], template: function MakeorderDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("valueChange", function MakeorderDropdownlistComponent_Template_ejs_dropdownlist_valueChange_0_listener($event) { return ctx.selectedValue = $event; })("change", function MakeorderDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("value", ctx.selectedValue)("allowFiltering", true)("enabled", !ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("popupWidth", ctx.popupWidth)("fields", ctx.remoteFields);
    } }, directives: [ɵngcc3.DropDownListComponent], styles: [_c10] });
MakeorderDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService },
    { type: ChangeDetectorRef },
    { type: PigfarmCoreService }
];
MakeorderDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    pigType: [{ type: Input }],
    disabled: [{ type: Input }],
    popupWidth: [{ type: Input }],
    change: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['remote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MakeorderDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-makeorder-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(value)]=\"selectedValue\"\r\n  (change)=\"onChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [enabled]=\"!disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #remote\r\n  [dataSource]=\"data\"\r\n  [popupWidth]=\"popupWidth\"\r\n  [fields]=\"remoteFields\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }, { type: ɵngcc0.ChangeDetectorRef }, { type: PigfarmCoreService }]; }, { id: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], pigType: [{
            type: Input
        }], disabled: [{
            type: Input
        }], popupWidth: [{
            type: Input
        }], change: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], dropdownObj: [{
            type: ViewChild,
            args: ['remote']
        }] }); })();

class SelectedpigGridComponent {
    constructor(baseUrl, trans, cd, service) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.cd = cd;
        this.service = service;
        this.pigName = 'Gilt';
        this.selectedPigDataSource = [];
        this.recordNextDataSource = ["CullingSale", "Chemical", "Buried"];
        this.recordNext2DataSource = ["CullingSale", "Chemical", "Buried"];
        this.searchOptions = { fields: ["name"], operator: "contains", ignoreCase: true };
        this.avgWeightChange = new EventEmitter();
        this.totalWeightChange = new EventEmitter();
        this.avgAmountChange = new EventEmitter();
        this.totalAmountChange = new EventEmitter();
        this.selectedPigDataSourceChange = new EventEmitter();
        this.maleAvgWeightChange = new EventEmitter();
        this.maleTotalWeightChange = new EventEmitter();
        this.maleTotalSelectedChange = new EventEmitter();
        this.femaleAvgWeightChange = new EventEmitter();
        this.femaleTotalWeightChange = new EventEmitter();
        this.femaleTotalSelectedChange = new EventEmitter();
        this.visibleNextRoom = false;
        this.visibleNextPen = false;
        this.visibleNext2 = false;
        this.visibleButton = false;
        this.visibleNext = true;
        this.visibleAmount = true;
        this.visibleDisease = true;
        this.visibleWeight = true;
        this.visibleValue = false;
        this.visiblePigSex = false;
        this.visibleSourceGuid = false;
        this.visibleSource1Guid = false;
        this.visibleSource2Guid = false;
        this.visibleSource3Guid = false;
        this.visibleSemenConcentration = false;
        this.visibleSemenVolume = false;
        this.visibleMalformationRate = false;
        this.visiblePig = true;
        this.visibleRfid = false;
        this.valueLabel = "";
        this.pigLabel = "Pig";
        this.next1Label = "Next1";
        this.next2Label = "Next2";
        this.editSettingsPig = {
            showDeleteConfirmDialog: false,
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            mode: "Normal",
        };
        this.subscription = new Subscription();
        this.average = (nums, length) => {
            if (nums.length > 0) {
                return nums.reduce((a, b) => a + b) / length;
            }
            return 0;
        };
        this.total = (nums) => {
            if (nums.length > 0) {
                return nums.reduce((a, b) => a + b);
            }
            return 0;
        };
        let user = JSON.parse(localStorage.getItem("user"));
        let pageSize = Number(user === null || user === void 0 ? void 0 : user.pageSizeSettingValue) || 10;
        let pageSizesTemp = (user === null || user === void 0 ? void 0 : user.pageSizeSettingList) || ["5", "10", "12", "20"];
        let pageSizes = pageSizesTemp.map((x) => +x);
        this.pageSettings = {
            pageSizes: pageSizes,
            enableQueryString: true,
            pageSize: pageSize,
            currentPage: 1,
            enableScroll: true,
        };
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterViewInit() {
        let buttons = document.getElementsByClassName("btn");
        for (let button of Array.from(buttons)) {
            button.addEventListener("click", () => {
                var _a;
                (_a = this.grid) === null || _a === void 0 ? void 0 : _a.endEdit();
            });
        }
    }
    ngOnChanges(changes) {
        if (changes["selectedPigDataSource"]) {
            this.caculator();
            this.cd.detectChanges();
        }
    }
    created() {
        this.subscription.add(this.service.currentRecordLabel.subscribe((data) => {
            if (data) {
                this.valueLabel = data;
                this.grid.refreshHeader();
            }
        }));
    }
    ngOnInit() {
        this.totalAmount = 0;
        this.totalWeight = 0;
        this.avgWeight = 0;
        this.femaleTotalWeight = 0;
        this.maleTotalWeight = 0;
        this.maleAvgWeight = 0;
        this.maleAvgWeight = 0;
    }
    actionBeginPig(e) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (e.action === "edit" && e.requestType === "save") {
            if (this.diseaseItem) {
                e.data.recordDisease = (_a = this.diseaseItem) === null || _a === void 0 ? void 0 : _a.guid;
                e.data.recordDiseaseName = (_b = this.diseaseItem) === null || _b === void 0 ? void 0 : _b.name;
            }
            if (this.recordNextItem) {
                e.data.recordNext = (_c = this.recordNextItem) === null || _c === void 0 ? void 0 : _c.guid;
                e.data.recordNextName = (_d = this.recordNextItem) === null || _d === void 0 ? void 0 : _d.name;
            }
            if (this.recordNext2Item) {
                e.data.recordNext2 = (_e = this.recordNext2Item) === null || _e === void 0 ? void 0 : _e.guid;
                e.data.recordNext2Name = (_f = this.recordNext2Item) === null || _f === void 0 ? void 0 : _f.name;
            }
            if (this.nextRoomItem) {
                e.data.nextRoom = (_g = this.nextRoomItem) === null || _g === void 0 ? void 0 : _g.guid;
                e.data.nextRoomName = (_h = this.nextRoomItem) === null || _h === void 0 ? void 0 : _h.name;
            }
            const index = e.rowIndex;
            if (index !== -1) {
                this.selectedPigDataSource[index].rfid = e.data.rfid;
                this.selectedPigDataSource[index].recordValue = e.data.recordValue;
                this.selectedPigDataSource[index].recordAmount = e.data.recordAmount;
                this.selectedPigDataSource[index].recordWeight = e.data.recordWeight;
                this.selectedPigDataSource[index].sourceGuid = e.data.sourceGuid;
                this.selectedPigDataSource[index].source1Guid = e.data.source1Guid;
                this.selectedPigDataSource[index].source2Guid = e.data.source2Guid;
                this.selectedPigDataSource[index].source3Guid = e.data.source3Guid;
                this.selectedPigDataSource[index].semenConcentration = e.data.semenConcentration;
                this.selectedPigDataSource[index].semenVolume = e.data.semenVolume;
                this.selectedPigDataSource[index].malformationRate = e.data.malformationRate;
                this.selectedPigDataSource[index].recordNext = (_j = this.recordNextItem) === null || _j === void 0 ? void 0 : _j.guid;
                this.selectedPigDataSource[index].recordNext2 = (_k = this.recordNext2Item) === null || _k === void 0 ? void 0 : _k.guid;
                this.selectedPigDataSource[index].recordNextName = (_l = this.recordNextItem) === null || _l === void 0 ? void 0 : _l.name;
                this.selectedPigDataSource[index].recordNext2Name = (_m = this.recordNext2Item) === null || _m === void 0 ? void 0 : _m.name;
                this.selectedPigDataSource[index].nextRoomName = (_o = this.nextRoomItem) === null || _o === void 0 ? void 0 : _o.name;
                this.selectedPigDataSource[index].nextPenName = (_p = this.nextPenItem) === null || _p === void 0 ? void 0 : _p.name;
                this.cd.detectChanges();
                this.caculator();
            }
        }
    }
    onChangeRecordNext(e, data) {
        var _a, _b, _c, _d;
        if (e.isInteracted) {
            data.recordNext = (_a = e.itemData) === null || _a === void 0 ? void 0 : _a.guid;
            data.recordNextName = (_b = e.itemData) === null || _b === void 0 ? void 0 : _b.name;
            this.recordNextItem = e.itemData;
            this.recordNextndex = this.selectedPigDataSource.findIndex((obj) => obj.pigGuid === data.pigGuid);
            if (this.recordNextndex !== -1) {
                this.selectedPigDataSource[this.recordNextndex].recordNext = (_c = e.itemData) === null || _c === void 0 ? void 0 : _c.guid;
                this.selectedPigDataSource[this.recordNextndex].recordNextName = (_d = e.itemData) === null || _d === void 0 ? void 0 : _d.name;
                this.cd.detectChanges();
            }
        }
    }
    onChangeRecordNext2(e, data) {
        var _a, _b, _c, _d;
        if (e.isInteracted) {
            data.recordNext2 = (_a = e.itemData) === null || _a === void 0 ? void 0 : _a.guid;
            data.recordNext2Name = (_b = e.itemData) === null || _b === void 0 ? void 0 : _b.name;
            this.recordNext2Item = e.itemData;
            this.recordNextndex2 = this.selectedPigDataSource.findIndex((obj) => obj.pigGuid === data.pigGuid);
            if (this.recordNextndex2 !== -1) {
                this.selectedPigDataSource[this.recordNextndex2].recordNext2 = (_c = e.itemData) === null || _c === void 0 ? void 0 : _c.guid;
                this.selectedPigDataSource[this.recordNextndex2].recordNext2Name = (_d = e.itemData) === null || _d === void 0 ? void 0 : _d.name;
                this.cd.detectChanges();
            }
        }
    }
    onChangePigSex(e, data) {
        var _a, _b, _c, _d;
        if (e.isInteracted) {
            data.pigSex = (_a = e.itemData) === null || _a === void 0 ? void 0 : _a.guid;
            data.pigSexName = (_b = e.itemData) === null || _b === void 0 ? void 0 : _b.name;
            this.pigSexItem = e.itemData;
            this.pigSexIndex = this.selectedPigDataSource.findIndex((obj) => obj.pigGuid === data.pigGuid);
            if (this.pigSexIndex !== -1) {
                this.selectedPigDataSource[this.pigSexIndex].pigSex = (_c = e.itemData) === null || _c === void 0 ? void 0 : _c.guid;
                this.selectedPigDataSource[this.pigSexIndex].pigSexName = (_d = e.itemData) === null || _d === void 0 ? void 0 : _d.name;
                this.cd.detectChanges();
            }
        }
    }
    onChangeDisease(e, data) {
        var _a, _b, _c, _d;
        if (e.isInteracted) {
            data.recordDisease = (_a = e.itemData) === null || _a === void 0 ? void 0 : _a.guid;
            data.recordDiseaseName = (_b = e.itemData) === null || _b === void 0 ? void 0 : _b.name;
            this.diseaseItem = e.itemData;
            this.index = this.selectedPigDataSource.findIndex((obj) => obj.pigGuid === data.pigGuid);
            if (this.index !== -1) {
                this.selectedPigDataSource[this.index].recordDisease = (_c = e.itemData) === null || _c === void 0 ? void 0 : _c.guid;
                this.selectedPigDataSource[this.index].recordDiseaseName = (_d = e.itemData) === null || _d === void 0 ? void 0 : _d.name;
                // this.selectedPigDataSourceChange.emit(this.selectedPigDataSource);
                this.cd.detectChanges();
            }
        }
    }
    onChangeNextRoom(e, data) {
        var _a, _b, _c, _d;
        if (e.isInteracted) {
            data.nextRoom = (_a = e.itemData) === null || _a === void 0 ? void 0 : _a.guid;
            data.nextRoomName = (_b = e.itemData) === null || _b === void 0 ? void 0 : _b.name;
            this.nextRoomItem = e.itemData;
            const index = this.selectedPigDataSource.findIndex((obj) => obj.nextRoom === data.nextRoom);
            if (index !== -1) {
                this.selectedPigDataSource[index].nextRoom = (_c = e.itemData) === null || _c === void 0 ? void 0 : _c.guid;
                this.selectedPigDataSource[index].nextRoomName = (_d = e.itemData) === null || _d === void 0 ? void 0 : _d.name;
                // this.selectedPigDataSourceChange.emit(this.selectedPigDataSource);
                this.cd.detectChanges();
            }
        }
    }
    onChangeNextPen(e, data) {
        var _a, _b, _c, _d;
        if (e.isInteracted) {
            data.nextPen = (_a = e.itemData) === null || _a === void 0 ? void 0 : _a.guid;
            data.nextPenName = (_b = e.itemData) === null || _b === void 0 ? void 0 : _b.name;
            this.nextPenItem = e.itemData;
            const index = this.selectedPigDataSource.findIndex((obj) => obj.nextPen === data.nextPen);
            if (index !== -1) {
                this.selectedPigDataSource[index].nextPen = (_c = e.itemData) === null || _c === void 0 ? void 0 : _c.guid;
                this.selectedPigDataSource[index].nextPenName = (_d = e.itemData) === null || _d === void 0 ? void 0 : _d.name;
                // this.selectedPigDataSourceChange.emit(this.selectedPigDataSource);
                this.cd.detectChanges();
            }
        }
    }
    caculator() {
        const weights = this.selectedPigDataSource
            .filter((x) => x.recordWeight > 0)
            .map((x) => x.recordWeight);
        const amounts = this.selectedPigDataSource
            .filter((x) => x.recordAmount > 0)
            .map((x) => x.recordAmount);
        let length = this.selectedPigDataSource.length;
        this.avgWeight = +this.average(weights, length).toFixed(0);
        this.avgAmount = +this.average(amounts, length).toFixed(0);
        this.totalWeight = +this.total(weights).toFixed(0);
        this.totalAmount = +this.total(amounts).toFixed(0);
        const maleWeights = this.selectedPigDataSource
            .filter((x) => x.pigSex == "1")
            .map((x) => x.recordWeight);
        const femaleWeights = this.selectedPigDataSource
            .filter((x) => x.pigSex !== "1")
            .map((x) => x.recordWeight);
        let femalelength = femaleWeights.length;
        this.femaleAvgWeight = +this.average(femaleWeights, femalelength).toFixed(0);
        this.femaleTotalWeight = +this.total(femaleWeights).toFixed(0);
        this.femaleTotalSelected = femalelength;
        this.femaleAvgWeightChange.emit(this.femaleAvgWeight);
        this.femaleTotalWeightChange.emit(this.femaleTotalWeight);
        this.femaleTotalSelectedChange.emit(this.femaleTotalSelected);
        let malelength = maleWeights.length;
        this.maleAvgWeight = +this.average(maleWeights, malelength).toFixed(0);
        this.maleTotalWeight = +this.total(maleWeights).toFixed(0);
        this.maleTotalSelected = malelength;
        this.maleAvgWeightChange.emit(this.maleAvgWeight);
        this.maleTotalWeightChange.emit(this.maleTotalWeight);
        this.maleTotalSelectedChange.emit(this.maleTotalSelected);
        this.selectedPigDataSourceChange.emit(this.selectedPigDataSource);
        this.avgAmountChange.emit(this.avgAmount);
        this.avgWeightChange.emit(this.avgWeight);
        this.totalAmountChange.emit(this.totalAmount);
        this.totalWeightChange.emit(this.totalWeight);
        this.cd.detectChanges();
    }
}
SelectedpigGridComponent.ɵfac = function SelectedpigGridComponent_Factory(t) { return new (t || SelectedpigGridComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(PigfarmCoreService)); };
SelectedpigGridComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SelectedpigGridComponent, selectors: [["app-selectedpig-grid"]], viewQuery: function SelectedpigGridComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c22, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.grid = _t.first);
    } }, inputs: { pigName: "pigName", selectedPigDataSource: "selectedPigDataSource", recordNextDataSource: "recordNextDataSource", recordNext2DataSource: "recordNext2DataSource", visibleNextRoom: "visibleNextRoom", visibleNextPen: "visibleNextPen", visibleNext2: "visibleNext2", visibleButton: "visibleButton", visibleNext: "visibleNext", visibleAmount: "visibleAmount", visibleDisease: "visibleDisease", visibleWeight: "visibleWeight", visibleValue: "visibleValue", visiblePigSex: "visiblePigSex", visibleSourceGuid: "visibleSourceGuid", visibleSource1Guid: "visibleSource1Guid", visibleSource2Guid: "visibleSource2Guid", visibleSource3Guid: "visibleSource3Guid", visibleSemenConcentration: "visibleSemenConcentration", visibleSemenVolume: "visibleSemenVolume", visibleMalformationRate: "visibleMalformationRate", visiblePig: "visiblePig", visibleRfid: "visibleRfid", valueLabel: "valueLabel", pigLabel: "pigLabel", next1Label: "next1Label", next2Label: "next2Label", totalAmount: "totalAmount", totalWeight: "totalWeight", avgWeight: "avgWeight", femaleTotalWeight: "femaleTotalWeight", maleTotalWeight: "maleTotalWeight", maleAvgWeight: "maleAvgWeight", avgAmount: "avgAmount", femaleAvgWeight: "femaleAvgWeight", femaleTotalSelected: "femaleTotalSelected", maleTotalSelected: "maleTotalSelected", codeType: "codeType", codeType2: "codeType2" }, outputs: { avgWeightChange: "avgWeightChange", totalWeightChange: "totalWeightChange", avgAmountChange: "avgAmountChange", totalAmountChange: "totalAmountChange", selectedPigDataSourceChange: "selectedPigDataSourceChange", maleAvgWeightChange: "maleAvgWeightChange", maleTotalWeightChange: "maleTotalWeightChange", maleTotalSelectedChange: "maleTotalSelectedChange", femaleAvgWeightChange: "femaleAvgWeightChange", femaleTotalWeightChange: "femaleTotalWeightChange", femaleTotalSelectedChange: "femaleTotalSelectedChange" }, features: [ɵngcc0.ɵɵProvidersFeature([EditService]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 60, vars: 98, consts: [["id", "grid-detail", "gridLines", "Both", 3, "dataSource", "enableInfiniteScrolling", "allowPaging", "pageSettings", "editSettings", "searchSettings", "toolbar", "height", "actionBegin", "created"], ["grid", ""], ["field", "name", "textAlign", "Left", "headerTextAlign", "Center", "headerTextAlign", "Center", 3, "allowSorting", "visible", "allowSearching", "allowGrouping", "allowFiltering", "allowEditing", "headerText"], ["field", "pigSexName", "textAlign", "Left", "headerTextAlign", "Center", 3, "visible", "allowEditing", "headerText"], ["field", "rfid", "textAlign", "Left", "headerTextAlign", "Center", 3, "visible", "validationRules", "headerText"], ["field", "recordValue", "textAlign", "Left", "headerTextAlign", "Center", 3, "visible"], ["headerTemplate", ""], ["field", "recordAmount", "textAlign", "Left", "headerTextAlign", "Center", "editType", "numericEdit", 3, "visible", "headerText"], ["field", "recordWeight", "textAlign", "Left", "headerTextAlign", "Center", "editType", "numericEdit", 3, "visible", "headerText"], ["field", "recordDiseaseName", "textAlign", "Left", "headerTextAlign", "Center", 3, "visible", "headerText"], ["editTemplate", ""], ["template", ""], ["field", "recordNext", "textAlign", "Left", "headerTextAlign", "Center", 3, "visible", "headerText"], ["field", "recordNext2", "textAlign", "Left", "headerTextAlign", "Center", 3, "visible", "headerText"], ["field", "nextRoom", "textAlign", "Left", "headerTextAlign", "Center", 3, "visible", "headerText"], ["field", "nextPen", "textAlign", "Left", "headerTextAlign", "Center", 3, "visible", "headerText"], ["field", "sourceGuid", "textAlign", "Left", "headerTextAlign", "Center", 3, "validationRules", "visible", "headerText"], ["field", "source1Guid", "textAlign", "Left", "headerTextAlign", "Center", 3, "validationRules", "visible", "headerText"], ["field", "source2Guid", "textAlign", "Left", "headerTextAlign", "Center", 3, "validationRules", "visible", "headerText"], ["field", "source3Guid", "textAlign", "Left", "headerTextAlign", "Center", 3, "validationRules", "visible", "headerText"], ["field", "semenConcentration ", "textAlign", "Left", "headerTextAlign", "Center", "editType", "numericEdit", 3, "visible", "headerText"], ["field", "semenVolume", "textAlign", "Left", "headerTextAlign", "Center", "editType", "numericEdit", 3, "visible", "headerText"], ["field", "malformationRate", "textAlign", "Left", "headerTextAlign", "Center", "editType", "numericEdit", 3, "visible", "edit", "headerText"], [1, "e-headertext"], [3, "selectedValue", "selectedValueChange", "change"], ["id", "recordNext", 3, "codeType", "selectedValue", "change", "selectedValueChange"], ["id", "recordNext2", 3, "codeType", "selectedValue", "change", "selectedValueChange"], ["id", "nextRoom", 3, "selectedValue", "change", "selectedValueChange"], ["id", "nextPen", 3, "selectedValue", "change", "selectedValueChange"]], template: function SelectedpigGridComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-grid", 0, 1);
        ɵngcc0.ɵɵlistener("actionBegin", function SelectedpigGridComponent_Template_ejs_grid_actionBegin_0_listener($event) { return ctx.actionBeginPig($event); })("created", function SelectedpigGridComponent_Template_ejs_grid_created_0_listener() { return ctx.created(); });
        ɵngcc0.ɵɵelementStart(2, "e-columns");
        ɵngcc0.ɵɵelement(3, "e-column", 2);
        ɵngcc0.ɵɵpipe(4, "translate");
        ɵngcc0.ɵɵelement(5, "e-column", 3);
        ɵngcc0.ɵɵpipe(6, "translate");
        ɵngcc0.ɵɵelement(7, "e-column", 4);
        ɵngcc0.ɵɵpipe(8, "translate");
        ɵngcc0.ɵɵelementStart(9, "e-column", 5);
        ɵngcc0.ɵɵtemplate(10, SelectedpigGridComponent_ng_template_10_Template, 2, 1, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(12, "e-column", 7);
        ɵngcc0.ɵɵpipe(13, "translate");
        ɵngcc0.ɵɵelement(14, "e-column", 8);
        ɵngcc0.ɵɵpipe(15, "translate");
        ɵngcc0.ɵɵelementStart(16, "e-column", 9);
        ɵngcc0.ɵɵpipe(17, "translate");
        ɵngcc0.ɵɵtemplate(18, SelectedpigGridComponent_ng_template_18_Template, 1, 1, "ng-template", null, 10, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(20, SelectedpigGridComponent_ng_template_20_Template, 1, 1, "ng-template", null, 11, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(22, "e-column", 12);
        ɵngcc0.ɵɵpipe(23, "translate");
        ɵngcc0.ɵɵtemplate(24, SelectedpigGridComponent_ng_template_24_Template, 1, 2, "ng-template", null, 10, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(26, SelectedpigGridComponent_ng_template_26_Template, 2, 3, "ng-template", null, 11, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(28, "e-column", 13);
        ɵngcc0.ɵɵpipe(29, "translate");
        ɵngcc0.ɵɵtemplate(30, SelectedpigGridComponent_ng_template_30_Template, 1, 2, "ng-template", null, 10, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(32, SelectedpigGridComponent_ng_template_32_Template, 2, 3, "ng-template", null, 11, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(34, "e-column", 14);
        ɵngcc0.ɵɵpipe(35, "translate");
        ɵngcc0.ɵɵtemplate(36, SelectedpigGridComponent_ng_template_36_Template, 1, 1, "ng-template", null, 10, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(38, SelectedpigGridComponent_ng_template_38_Template, 2, 3, "ng-template", null, 11, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(40, "e-column", 15);
        ɵngcc0.ɵɵpipe(41, "translate");
        ɵngcc0.ɵɵtemplate(42, SelectedpigGridComponent_ng_template_42_Template, 1, 1, "ng-template", null, 10, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(44, SelectedpigGridComponent_ng_template_44_Template, 2, 3, "ng-template", null, 11, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(46, "e-column", 16);
        ɵngcc0.ɵɵpipe(47, "translate");
        ɵngcc0.ɵɵelement(48, "e-column", 17);
        ɵngcc0.ɵɵpipe(49, "translate");
        ɵngcc0.ɵɵelement(50, "e-column", 18);
        ɵngcc0.ɵɵpipe(51, "translate");
        ɵngcc0.ɵɵelement(52, "e-column", 19);
        ɵngcc0.ɵɵpipe(53, "translate");
        ɵngcc0.ɵɵelement(54, "e-column", 20);
        ɵngcc0.ɵɵpipe(55, "translate");
        ɵngcc0.ɵɵelement(56, "e-column", 21);
        ɵngcc0.ɵɵpipe(57, "translate");
        ɵngcc0.ɵɵelement(58, "e-column", 22);
        ɵngcc0.ɵɵpipe(59, "translate");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("dataSource", ctx.selectedPigDataSource)("enableInfiniteScrolling", true)("allowPaging", false)("pageSettings", ctx.pageSettings)("editSettings", ctx.editSettingsPig)("searchSettings", ctx.searchOptions)("toolbar", ɵngcc0.ɵɵpureFunction0(89, _c20))("height", 300 + "px");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(4, 55, ctx.pigName));
        ɵngcc0.ɵɵproperty("allowSorting", false)("visible", ctx.visiblePig)("allowSearching", false)("allowGrouping", false)("allowFiltering", false)("allowEditing", false);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(6, 57, "PigSex"));
        ɵngcc0.ɵɵproperty("visible", ctx.visiblePigSex)("allowEditing", false);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(8, 59, "RFID"));
        ɵngcc0.ɵɵproperty("visible", ctx.visibleRfid)("validationRules", ɵngcc0.ɵɵpureFunction0(90, _c23));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("visible", ctx.visibleValue);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(13, 61, "Amount"));
        ɵngcc0.ɵɵproperty("visible", ctx.visibleAmount);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(15, 63, "Weight"));
        ɵngcc0.ɵɵproperty("visible", ctx.visibleWeight);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(17, 65, "Disease"));
        ɵngcc0.ɵɵproperty("visible", ctx.visibleDisease);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(23, 67, ctx.next1Label));
        ɵngcc0.ɵɵproperty("visible", ctx.visibleNext);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(29, 69, ctx.next2Label));
        ɵngcc0.ɵɵproperty("visible", ctx.visibleNext2);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(35, 71, "NextRoom"));
        ɵngcc0.ɵɵproperty("visible", ctx.visibleNextRoom);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(41, 73, "NextPen"));
        ɵngcc0.ɵɵproperty("visible", ctx.visibleNextPen);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(47, 75, "SourceGuid"));
        ɵngcc0.ɵɵproperty("validationRules", ɵngcc0.ɵɵpureFunction0(91, _c23))("visible", ctx.visibleSourceGuid);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(49, 77, "Source1Guid"));
        ɵngcc0.ɵɵproperty("validationRules", ɵngcc0.ɵɵpureFunction0(92, _c23))("visible", ctx.visibleSource1Guid);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(51, 79, "Source2Guid"));
        ɵngcc0.ɵɵproperty("validationRules", ɵngcc0.ɵɵpureFunction0(93, _c23))("visible", ctx.visibleSource2Guid);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(53, 81, "Source3Guid"));
        ɵngcc0.ɵɵproperty("validationRules", ɵngcc0.ɵɵpureFunction0(94, _c23))("visible", ctx.visibleSource3Guid);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(55, 83, "SemenConcentration "));
        ɵngcc0.ɵɵproperty("visible", ctx.visibleSemenConcentration);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(57, 85, "Source2Guid"));
        ɵngcc0.ɵɵproperty("visible", ctx.visibleSemenVolume);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("headerText", ɵngcc0.ɵɵpipeBind1(59, 87, "MalformationRate"));
        ɵngcc0.ɵɵproperty("visible", ctx.visibleMalformationRate)("edit", ɵngcc0.ɵɵpureFunction1(96, _c25, ɵngcc0.ɵɵpureFunction0(95, _c24)));
    } }, directives: [ɵngcc8.GridComponent, ɵngcc8.ColumnsDirective, ɵngcc8.AggregateColumnsDirective, ɵngcc8.ColumnDirective, ɵngcc8.AggregateColumnDirective, DiseaseDropdownlistComponent, CodeTypeDropdownlistComponent, RoomDropdownlistComponent, PenDropdownlistComponent], pipes: [ɵngcc2.TranslatePipe], styles: [""] });
SelectedpigGridComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService },
    { type: ChangeDetectorRef },
    { type: PigfarmCoreService }
];
SelectedpigGridComponent.propDecorators = {
    pigName: [{ type: Input }],
    selectedPigDataSource: [{ type: Input }],
    recordNextDataSource: [{ type: Input }],
    recordNext2DataSource: [{ type: Input }],
    grid: [{ type: ViewChild, args: ["grid",] }],
    avgWeightChange: [{ type: Output }],
    totalWeightChange: [{ type: Output }],
    avgAmountChange: [{ type: Output }],
    totalAmountChange: [{ type: Output }],
    selectedPigDataSourceChange: [{ type: Output }],
    maleAvgWeightChange: [{ type: Output }],
    maleTotalWeightChange: [{ type: Output }],
    maleTotalSelectedChange: [{ type: Output }],
    femaleAvgWeightChange: [{ type: Output }],
    femaleTotalWeightChange: [{ type: Output }],
    femaleTotalSelectedChange: [{ type: Output }],
    visibleNextRoom: [{ type: Input }],
    visibleNextPen: [{ type: Input }],
    visibleNext2: [{ type: Input }],
    visibleButton: [{ type: Input }],
    visibleNext: [{ type: Input }],
    visibleAmount: [{ type: Input }],
    visibleDisease: [{ type: Input }],
    visibleWeight: [{ type: Input }],
    visibleValue: [{ type: Input }],
    visiblePigSex: [{ type: Input }],
    visibleSourceGuid: [{ type: Input }],
    visibleSource1Guid: [{ type: Input }],
    visibleSource2Guid: [{ type: Input }],
    visibleSource3Guid: [{ type: Input }],
    visibleSemenConcentration: [{ type: Input }],
    visibleSemenVolume: [{ type: Input }],
    visibleMalformationRate: [{ type: Input }],
    visiblePig: [{ type: Input }],
    visibleRfid: [{ type: Input }],
    valueLabel: [{ type: Input }],
    pigLabel: [{ type: Input }],
    next1Label: [{ type: Input }],
    next2Label: [{ type: Input }],
    avgWeight: [{ type: Input }],
    totalWeight: [{ type: Input }],
    totalAmount: [{ type: Input }],
    avgAmount: [{ type: Input }],
    codeType: [{ type: Input }],
    codeType2: [{ type: Input }],
    maleAvgWeight: [{ type: Input }],
    maleTotalWeight: [{ type: Input }],
    maleTotalSelected: [{ type: Input }],
    femaleAvgWeight: [{ type: Input }],
    femaleTotalWeight: [{ type: Input }],
    femaleTotalSelected: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SelectedpigGridComponent, [{
        type: Component,
        args: [{
                selector: "app-selectedpig-grid",
                template: "<ejs-grid\r\n          #grid\r\n          id=\"grid-detail\"\r\n          [dataSource]=\"selectedPigDataSource\"\r\n          [enableInfiniteScrolling]=\"true\"\r\n          [allowPaging]=\"false\"\r\n          [pageSettings]=\"pageSettings\"\r\n          [editSettings]=\"editSettingsPig\"\r\n          [searchSettings]=\"searchOptions\"\r\n          (actionBegin)=\"actionBeginPig($event)\"\r\n          (created)=\"created()\"\r\n          [toolbar]=\"['Search']\"\r\n          [height]=\"300 + 'px'\"\r\n          gridLines=\"Both\"\r\n        >\r\n          <e-columns>\r\n            <e-column\r\n              field=\"name\"\r\n              [allowSorting]=\"false\"\r\n              [visible]=\"visiblePig\"\r\n\r\n              [allowSearching]=\"false\"\r\n              [allowGrouping]=\"false\"\r\n              [allowFiltering]=\"false\"\r\n              [allowEditing]=\"false\"\r\n              textAlign=\"Left\"\r\n              headerTextAlign=\"Center\"\r\n              headerTextAlign=\"Center\"\r\n              headerText=\"{{ pigName | translate }}\"\r\n            >\r\n            </e-column>\r\n            \r\n\r\n            <e-column\r\n            field=\"pigSexName\"\r\n            [visible]=\"visiblePigSex\"\r\n            [allowEditing]=\"false\"\r\n            textAlign=\"Left\"\r\n            headerTextAlign=\"Center\"\r\n            headerText=\"{{ 'PigSex' | translate }}\"\r\n          >\r\n          </e-column>\r\n\r\n          <e-column\r\n          field=\"rfid\"\r\n          [visible]=\"visibleRfid\"\r\n          textAlign=\"Left\"\r\n          [validationRules]=\" {maxLength: 40 }\"\r\n          headerTextAlign=\"Center\"\r\n          headerText=\"{{ 'RFID' | translate }}\"\r\n        >\r\n        </e-column>\r\n            <e-column\r\n              field=\"recordValue\"\r\n              [visible]=\"visibleValue\"\r\n              textAlign=\"Left\"\r\n              headerTextAlign=\"Center\"\r\n            >\r\n            <ng-template #headerTemplate let-data>\r\n              <span class=\"e-headertext\" >{{valueLabel}}</span>\r\n          </ng-template>\r\n            </e-column>\r\n            <e-column\r\n              field=\"recordAmount\"\r\n              [visible]=\"visibleAmount\"\r\n              textAlign=\"Left\"\r\n              headerTextAlign=\"Center\"\r\n              editType=\"numericEdit\"\r\n              headerText=\"{{ 'Amount' | translate }}\"\r\n            >\r\n            </e-column>\r\n            <e-column\r\n              field=\"recordWeight\"\r\n              textAlign=\"Left\"\r\n              headerTextAlign=\"Center\"\r\n              [visible]=\"visibleWeight\"\r\n              editType=\"numericEdit\"\r\n              headerText=\"{{ 'Weight' | translate }}\"\r\n            >\r\n            </e-column>\r\n            <e-column\r\n              field=\"recordDiseaseName\"\r\n              [visible]=\"visibleDisease\"\r\n              textAlign=\"Left\"\r\n              headerTextAlign=\"Center\"\r\n              headerText=\"{{ 'Disease' | translate }}\"\r\n            >\r\n            <ng-template #editTemplate let-data>\r\n              <app-disease-dropdownlist [(selectedValue)]=\"data.recordDisease\" (change)=\"onChangeDisease($event,data)\">\r\n              </app-disease-dropdownlist>\r\n            </ng-template>\r\n            <ng-template #template let-data>\r\n              {{ data.recordDiseaseName }}\r\n            </ng-template>\r\n            </e-column>\r\n            <e-column\r\n              field=\"recordNext\"\r\n              [visible]=\"visibleNext\"\r\n              textAlign=\"Left\"\r\n              headerTextAlign=\"Center\"\r\n              headerText=\"{{ next1Label | translate }}\"\r\n            >\r\n            <ng-template #editTemplate let-data>\r\n              <app-code-type-dropdownlist\r\n              id=\"recordNext\"\r\n              [codeType]=\"codeType\"\r\n              (change)=\"onChangeRecordNext($event, data)\"\r\n              [(selectedValue)]=\"data.recordNext\"\r\n            >\r\n            </app-code-type-dropdownlist>\r\n            </ng-template>\r\n            <ng-template #template let-data>\r\n              {{ data.recordNextName | translate }}\r\n            </ng-template>\r\n            </e-column>\r\n\r\n            <e-column\r\n              field=\"recordNext2\"\r\n              [visible]=\"visibleNext2\"\r\n              textAlign=\"Left\"\r\n              headerTextAlign=\"Center\"\r\n              headerText=\"{{ next2Label | translate }}\"\r\n            >\r\n            <ng-template #editTemplate let-data>\r\n              <app-code-type-dropdownlist\r\n              id=\"recordNext2\"\r\n              [codeType]=\"codeType2\"\r\n              (change)=\"onChangeRecordNext2($event, data)\"\r\n              [(selectedValue)]=\"data.recordNext2\"\r\n            >\r\n            </app-code-type-dropdownlist>\r\n            </ng-template>\r\n            <ng-template #template let-data>\r\n              {{ data.recordNext2Name | translate }}\r\n            </ng-template>\r\n            </e-column>\r\n\r\n            <e-column\r\n            field=\"nextRoom\"\r\n            [visible]=\"visibleNextRoom\"\r\n            textAlign=\"Left\"\r\n            headerTextAlign=\"Center\"\r\n            headerText=\"{{ 'NextRoom' | translate }}\"\r\n          >\r\n          <ng-template #editTemplate let-data>\r\n            <app-room-dropdownlist\r\n            id=\"nextRoom\"\r\n            (change)=\"onChangeNextRoom($event, data)\"\r\n            [(selectedValue)]=\"data.nextRoom\"\r\n          >\r\n          </app-room-dropdownlist>\r\n          </ng-template>\r\n          <ng-template #template let-data>\r\n            {{ data.nextRoomName | translate }}\r\n          </ng-template>\r\n          </e-column>\r\n\r\n          \r\n          <e-column\r\n          field=\"nextPen\"\r\n          [visible]=\"visibleNextPen\"\r\n          textAlign=\"Left\"\r\n          headerTextAlign=\"Center\"\r\n          headerText=\"{{ 'NextPen' | translate }}\"\r\n        >\r\n        <ng-template #editTemplate let-data>\r\n          <app-pen-dropdownlist\r\n          id=\"nextPen\"\r\n          (change)=\"onChangeNextPen($event, data)\"\r\n          [(selectedValue)]=\"data.nextPen\"\r\n        >\r\n        </app-pen-dropdownlist>\r\n        </ng-template>\r\n        <ng-template #template let-data>\r\n          {{ data.nextPenName | translate }}\r\n        </ng-template>\r\n        </e-column>\r\n\r\n\r\n        <e-column\r\n        field=\"sourceGuid\"\r\n        textAlign=\"Left\"\r\n        headerTextAlign=\"Center\"\r\n        [validationRules]=' { maxLength: 40 }'\r\n        [visible]=\"visibleSourceGuid\"\r\n        headerText=\"{{ 'SourceGuid' | translate }}\"\r\n      >\r\n      </e-column>\r\n      <e-column\r\n      field=\"source1Guid\"\r\n      [validationRules]=' { maxLength: 40 }'\r\n      textAlign=\"Left\"\r\n      headerTextAlign=\"Center\"\r\n      [visible]=\"visibleSource1Guid\"\r\n      headerText=\"{{ 'Source1Guid' | translate }}\"\r\n    >\r\n    </e-column>\r\n\r\n\r\n      <e-column\r\n      field=\"source2Guid\"\r\n      [validationRules]=' { maxLength: 40 }'\r\n      textAlign=\"Left\"\r\n      headerTextAlign=\"Center\"\r\n      [visible]=\"visibleSource2Guid\"\r\n      headerText=\"{{ 'Source2Guid' | translate }}\"\r\n    >\r\n    </e-column>\r\n\r\n\r\n      <e-column\r\n      field=\"source3Guid\"\r\n      [validationRules]=' { maxLength: 40 }'\r\n      textAlign=\"Left\"\r\n      headerTextAlign=\"Center\"\r\n      [visible]=\"visibleSource3Guid\"\r\n      headerText=\"{{ 'Source3Guid' | translate }}\"\r\n    >\r\n    </e-column>\r\n\r\n    <e-column\r\n    field=\"semenConcentration \"\r\n    textAlign=\"Left\"\r\n    headerTextAlign=\"Center\"\r\n    [visible]=\"visibleSemenConcentration\"\r\n    editType=\"numericEdit\"\r\n    headerText=\"{{ 'SemenConcentration ' | translate }}\"\r\n  >\r\n  </e-column>\r\n\r\n\r\n    <e-column\r\n    field=\"semenVolume\"\r\n    textAlign=\"Left\"\r\n    headerTextAlign=\"Center\"\r\n    [visible]=\"visibleSemenVolume\"\r\n    editType=\"numericEdit\"\r\n    headerText=\"{{ 'Source2Guid' | translate }}\"\r\n  >\r\n  </e-column>\r\n\r\n\r\n    <e-column\r\n    field=\"malformationRate\"\r\n    textAlign=\"Left\"\r\n    headerTextAlign=\"Center\"\r\n    [visible]=\"visibleMalformationRate\"\r\n    editType=\"numericEdit\"\r\n    [edit]=\"{ params: { decimals: 2, min: 0, max: 0.9 } }\"\r\n    headerText=\"{{ 'MalformationRate' | translate }}\"\r\n  >\r\n  </e-column>\r\n\r\n\r\n          </e-columns>\r\n        </ejs-grid>\r\n",
                providers: [EditService],
                styles: [""]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }, { type: ɵngcc0.ChangeDetectorRef }, { type: PigfarmCoreService }]; }, { pigName: [{
            type: Input
        }], selectedPigDataSource: [{
            type: Input
        }], recordNextDataSource: [{
            type: Input
        }], recordNext2DataSource: [{
            type: Input
        }], avgWeightChange: [{
            type: Output
        }], totalWeightChange: [{
            type: Output
        }], avgAmountChange: [{
            type: Output
        }], totalAmountChange: [{
            type: Output
        }], selectedPigDataSourceChange: [{
            type: Output
        }], maleAvgWeightChange: [{
            type: Output
        }], maleTotalWeightChange: [{
            type: Output
        }], maleTotalSelectedChange: [{
            type: Output
        }], femaleAvgWeightChange: [{
            type: Output
        }], femaleTotalWeightChange: [{
            type: Output
        }], femaleTotalSelectedChange: [{
            type: Output
        }], visibleNextRoom: [{
            type: Input
        }], visibleNextPen: [{
            type: Input
        }], visibleNext2: [{
            type: Input
        }], visibleButton: [{
            type: Input
        }], visibleNext: [{
            type: Input
        }], visibleAmount: [{
            type: Input
        }], visibleDisease: [{
            type: Input
        }], visibleWeight: [{
            type: Input
        }], visibleValue: [{
            type: Input
        }], visiblePigSex: [{
            type: Input
        }], visibleSourceGuid: [{
            type: Input
        }], visibleSource1Guid: [{
            type: Input
        }], visibleSource2Guid: [{
            type: Input
        }], visibleSource3Guid: [{
            type: Input
        }], visibleSemenConcentration: [{
            type: Input
        }], visibleSemenVolume: [{
            type: Input
        }], visibleMalformationRate: [{
            type: Input
        }], visiblePig: [{
            type: Input
        }], visibleRfid: [{
            type: Input
        }], valueLabel: [{
            type: Input
        }], pigLabel: [{
            type: Input
        }], next1Label: [{
            type: Input
        }], next2Label: [{
            type: Input
        }], totalAmount: [{
            type: Input
        }], totalWeight: [{
            type: Input
        }], avgWeight: [{
            type: Input
        }], femaleTotalWeight: [{
            type: Input
        }], maleTotalWeight: [{
            type: Input
        }], maleAvgWeight: [{
            type: Input
        }], avgAmount: [{
            type: Input
        }], femaleAvgWeight: [{
            type: Input
        }], femaleTotalSelected: [{
            type: Input
        }], maleTotalSelected: [{
            type: Input
        }], grid: [{
            type: ViewChild,
            args: ["grid"]
        }], codeType: [{
            type: Input
        }], codeType2: [{
            type: Input
        }] }); })();

class TreatmentDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "treatmentMaster-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.popupWidth = '350px';
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 1000;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, 'name');
                e.updateData(this.data, query);
            }
        };
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query();
        this.data = new DataManager({
            url: `${this.baseUrl}TreatmentMaster/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        var _a;
        this.change.emit(args);
        this.selectedValueChange.emit((_a = args.itemData) === null || _a === void 0 ? void 0 : _a.guid);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
TreatmentDropdownlistComponent.ɵfac = function TreatmentDropdownlistComponent_Factory(t) { return new (t || TreatmentDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
TreatmentDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TreatmentDropdownlistComponent, selectors: [["app-treatment-dropdownlist"]], viewQuery: function TreatmentDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c26, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", popupWidth: "popupWidth", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [[3, "ngModel", "allowFiltering", "dataSource", "fields", "query", "popupWidth", "ngModelChange", "change", "actionComplete"], ["treatmentTemplate", ""]], template: function TreatmentDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function TreatmentDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("change", function TreatmentDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("actionComplete", function TreatmentDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngModel", ctx.selectedValue)("allowFiltering", true)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query)("popupWidth", ctx.popupWidth);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c2] });
TreatmentDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
TreatmentDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    popupWidth: [{ type: Input }],
    dropdownObj: [{ type: ViewChild, args: ['treatmentMasterRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TreatmentDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-treatment-dropdownlist',
                template: "<ejs-dropdownlist\r\n[(ngModel)]=\"selectedValue\"\r\n(change)=\"onChange($event)\"\r\n[allowFiltering]=\"true\"\r\n#treatmentTemplate\r\n[dataSource]=\"data\"\r\n[fields]=\"remoteFields\"\r\n[query]=\"query\"\r\n[popupWidth]='popupWidth'\r\n(actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], popupWidth: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['treatmentMasterRemote']
        }] }); })();

class MakeorderDropdownlistToolbarComponent {
    constructor(baseUrl, trans, cd, service) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.cd = cd;
        this.service = service;
        this.id = "makeorder-remote";
        this.selectedValue = '';
        this.placeholder = "";
        this.popupWidth = '350px';
        this.popupHeight = '200px';
        this.disabled = false;
        this.change = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'orderName', value: 'guid' };
    }
    ngAfterViewChecked() {
        this.selectedValue = this.selectedValue || "";
        this.cd.detectChanges();
    }
    ngOnInit() {
        this.service.getMakeOrderByFarmGuid(localStorage.getItem('farmGuid')).subscribe(x => {
            this.data = x;
        });
    }
    ngOnChanges(changes) {
        if (changes['selectedValue']) {
            this.selectedValueChange.emit(this.selectedValue);
        }
    }
    onChange(args) {
        this.change.emit(args);
        this.selectedValueChange.emit(args.value);
    }
}
MakeorderDropdownlistToolbarComponent.ɵfac = function MakeorderDropdownlistToolbarComponent_Factory(t) { return new (t || MakeorderDropdownlistToolbarComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(PigfarmCoreService)); };
MakeorderDropdownlistToolbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MakeorderDropdownlistToolbarComponent, selectors: [["app-makeorder-dropdownlist-toolbar"]], viewQuery: function MakeorderDropdownlistToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c12, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", selectedValue: "selectedValue", placeholder: "placeholder", popupWidth: "popupWidth", popupHeight: "popupHeight", disabled: "disabled" }, outputs: { change: "change", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "value", "allowFiltering", "enabled", "placeholder", "popupWidth", "dataSource", "fields", "valueChange", "change"], ["remote", ""]], template: function MakeorderDropdownlistToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-combobox", 0, 1);
        ɵngcc0.ɵɵlistener("valueChange", function MakeorderDropdownlistToolbarComponent_Template_ejs_combobox_valueChange_0_listener($event) { return ctx.selectedValue = $event; })("change", function MakeorderDropdownlistToolbarComponent_Template_ejs_combobox_change_0_listener($event) { return ctx.onChange($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("value", ctx.selectedValue)("allowFiltering", true)("enabled", !ctx.disabled)("placeholder", ctx.placeholder)("popupWidth", ctx.popupWidth)("dataSource", ctx.data)("fields", ctx.remoteFields);
    } }, directives: [ɵngcc3.ComboBoxComponent], styles: [""] });
MakeorderDropdownlistToolbarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService },
    { type: ChangeDetectorRef },
    { type: PigfarmCoreService }
];
MakeorderDropdownlistToolbarComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    popupWidth: [{ type: Input }],
    popupHeight: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['remote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MakeorderDropdownlistToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'app-makeorder-dropdownlist-toolbar',
                template: "<ejs-combobox\r\n  [id]=\"id\"\r\n  [(value)]=\"selectedValue\"\r\n  (change)=\"onChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [enabled]=\"!disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #remote\r\n  [popupWidth]='popupWidth'\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n\r\n>\r\n\r\n</ejs-combobox>\r\n",
                styles: [""]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }, { type: ɵngcc0.ChangeDetectorRef }, { type: PigfarmCoreService }]; }, { id: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], popupWidth: [{
            type: Input
        }], popupHeight: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], dropdownObj: [{
            type: ViewChild,
            args: ['remote']
        }] }); })();

class XaccountGroupComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "xacccount-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, 'groupName');
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        e.result = e.result.map(x => {
            let name = x.guid === "" ? this.trans.instant(x.groupName) : x.groupName;
            return {
                guid: x.guid,
                name: name
            };
        });
    }
    ngOnInit() {
        this.query = new Query()
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}XAccountGroup/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
XaccountGroupComponent.ɵfac = function XaccountGroupComponent_Factory(t) { return new (t || XaccountGroupComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
XaccountGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: XaccountGroupComponent, selectors: [["app-xaccount-group"]], viewQuery: function XaccountGroupComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c19, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["xacccountRemote", ""]], template: function XaccountGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function XaccountGroupComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function XaccountGroupComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function XaccountGroupComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function XaccountGroupComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function XaccountGroupComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function XaccountGroupComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c10] });
XaccountGroupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
XaccountGroupComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['xacccountRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(XaccountGroupComponent, [{
        type: Component,
        args: [{
                selector: 'app-xaccount-group',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #xacccountRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['xacccountRemote']
        }] }); })();

class RecordsaleDropdownlistComponent {
    constructor(baseUrl, trans, cd, service) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.cd = cd;
        this.service = service;
        this.id = "recordsale-remote";
        this.selectedValue = '';
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['name', 'no']);
                e.updateData(this.data, query);
            }
        };
    }
    ngAfterViewChecked() {
        this.selectedValue = this.selectedValue || "";
        this.cd.detectChanges();
    }
    ngOnInit() {
        this.service.getByFarmGuid(localStorage.getItem('farmGuid')).subscribe(x => {
            this.data = x;
        });
    }
    ngOnChanges(changes) {
    }
    onChange(args) {
        this.change.emit(args);
        this.selectedValueChange.emit(args.value);
    }
}
RecordsaleDropdownlistComponent.ɵfac = function RecordsaleDropdownlistComponent_Factory(t) { return new (t || RecordsaleDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(PigfarmCoreService)); };
RecordsaleDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RecordsaleDropdownlistComponent, selectors: [["app-recordsale-dropdownlist"]], viewQuery: function RecordsaleDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c12, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", selectedValue: "selectedValue", placeholder: "placeholder", disabled: "disabled" }, outputs: { change: "change", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 7, consts: [[3, "id", "value", "allowFiltering", "enabled", "placeholder", "dataSource", "fields", "valueChange", "change", "filtering"], ["remote", ""]], template: function RecordsaleDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("valueChange", function RecordsaleDropdownlistComponent_Template_ejs_dropdownlist_valueChange_0_listener($event) { return ctx.selectedValue = $event; })("change", function RecordsaleDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("filtering", function RecordsaleDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("value", ctx.selectedValue)("allowFiltering", true)("enabled", !ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields);
    } }, directives: [ɵngcc3.DropDownListComponent], styles: [_c10] });
RecordsaleDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService },
    { type: ChangeDetectorRef },
    { type: PigfarmCoreService }
];
RecordsaleDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['remote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(RecordsaleDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-recordsale-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(value)]=\"selectedValue\"\r\n  (change)=\"onChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [enabled]=\"!disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  #remote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }, { type: ɵngcc0.ChangeDetectorRef }, { type: PigfarmCoreService }]; }, { id: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], dropdownObj: [{
            type: ViewChild,
            args: ['remote']
        }] }); })();

class DynamicGridComponent {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    ngOnInit() {
    }
}
DynamicGridComponent.ɵfac = function DynamicGridComponent_Factory(t) { return new (t || DynamicGridComponent)(ɵngcc0.ɵɵdirectiveInject("Env")); };
DynamicGridComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DynamicGridComponent, selectors: [["app-dynamic-grid"]], decls: 2, vars: 0, template: function DynamicGridComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, " dynamic-grid works!\n");
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [""] });
DynamicGridComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DynamicGridComponent, [{
        type: Component,
        args: [{
                selector: 'app-dynamic-grid',
                template: "<p>\r\n  dynamic-grid works!\r\n</p>\r\n",
                styles: [""]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }]; }, null); })();

class SemenDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "semen-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['semenName', 'semenNo']);
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query()
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}Semen/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
SemenDropdownlistComponent.ɵfac = function SemenDropdownlistComponent_Factory(t) { return new (t || SemenDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
SemenDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SemenDropdownlistComponent, selectors: [["app-semen-dropdownlist"]], viewQuery: function SemenDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c27, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["semenRemote", ""]], template: function SemenDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function SemenDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function SemenDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function SemenDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function SemenDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function SemenDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function SemenDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c10] });
SemenDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
SemenDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['semenRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SemenDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-semen-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #semenRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['semenRemote']
        }] }); })();

class BreedingDropdownlistComponent {
    constructor(baseUrl, trans, service) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.service = service;
        this.id = "breeding-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.roomGuid = "";
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                //const query = this.dropdownObj.query.clone().search(e.text, 'name');
                e.updateData(this.data, new Query().search(e.text, 'name'));
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
    }
    ngOnInit() {
        this.service.getBreedingByFarmGuid(localStorage.getItem('farmGuid')).subscribe(x => {
            this.data = x;
        });
    }
    ngOnChanges(changes) {
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        var _a, _b, _c, _d;
        this.change.emit(args);
        this.ngModelChange.emit((_a = args.itemData) === null || _a === void 0 ? void 0 : _a.guid);
        this.roomGuid = (_b = args.itemData) === null || _b === void 0 ? void 0 : _b.roomGuid;
        this.penGuid = (_c = args.itemData) === null || _c === void 0 ? void 0 : _c.penGuid;
        this.selectedValueChange.emit((_d = args.itemData) === null || _d === void 0 ? void 0 : _d.guid);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
BreedingDropdownlistComponent.ɵfac = function BreedingDropdownlistComponent_Factory(t) { return new (t || BreedingDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService), ɵngcc0.ɵɵdirectiveInject(PigfarmCoreService)); };
BreedingDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BreedingDropdownlistComponent, selectors: [["app-breeding-dropdownlist"]], viewQuery: function BreedingDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c28, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 10, consts: [[3, "id", "value", "allowFiltering", "enabled", "placeholder", "dataSource", "fields", "showClearButton", "valueChange", "filtering", "change", "ngModelChange", "open", "actionComplete"], ["breedingRemote", ""]], template: function BreedingDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("valueChange", function BreedingDropdownlistComponent_Template_ejs_dropdownlist_valueChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function BreedingDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function BreedingDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function BreedingDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function BreedingDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function BreedingDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵpipe(2, "translate");
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("value", ctx.selectedValue)("allowFiltering", true)("enabled", !ctx.disabled)("placeholder", ɵngcc0.ɵɵpipeBind1(2, 8, "No Item"))("dataSource", ctx.data)("fields", ctx.remoteFields)("showClearButton", true);
    } }, directives: [ɵngcc3.DropDownListComponent], pipes: [ɵngcc2.TranslatePipe], styles: [_c10] });
BreedingDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService },
    { type: PigfarmCoreService }
];
BreedingDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['breedingRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BreedingDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-breeding-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(value)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [enabled]=\"!disabled\"\r\n  [placeholder]=\"'No Item' | translate\"\r\n  #breedingRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [showClearButton]=\"true\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }, { type: PigfarmCoreService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['breedingRemote']
        }] }); })();

class BreedingDropdownlistToolbarComponent {
    constructor(baseUrl, trans, service) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.service = service;
        this.popupWidth = '350px';
        this.popupHeight = '200px';
        this.id = "breeding-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, 'name');
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
    }
    ngOnInit() {
        this.service.getBreedingByFarmGuid(localStorage.getItem('farmGuid')).subscribe(x => {
            this.data = x;
        });
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
BreedingDropdownlistToolbarComponent.ɵfac = function BreedingDropdownlistToolbarComponent_Factory(t) { return new (t || BreedingDropdownlistToolbarComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService), ɵngcc0.ɵɵdirectiveInject(PigfarmCoreService)); };
BreedingDropdownlistToolbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BreedingDropdownlistToolbarComponent, selectors: [["app-breeding-dropdownlist-toolbar"]], viewQuery: function BreedingDropdownlistToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c28, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { popupWidth: "popupWidth", popupHeight: "popupHeight", id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 11, consts: [[3, "id", "value", "allowFiltering", "enabled", "placeholder", "popupWidth", "dataSource", "showClearButton", "fields", "valueChange", "change"], ["remote", ""]], template: function BreedingDropdownlistToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-combobox", 0, 1);
        ɵngcc0.ɵɵlistener("valueChange", function BreedingDropdownlistToolbarComponent_Template_ejs_combobox_valueChange_0_listener($event) { return ctx.selectedValue = $event; })("change", function BreedingDropdownlistToolbarComponent_Template_ejs_combobox_change_0_listener($event) { return ctx.onChange($event); });
        ɵngcc0.ɵɵpipe(2, "translate");
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("value", ctx.selectedValue)("allowFiltering", true)("enabled", !ctx.disabled)("placeholder", ɵngcc0.ɵɵpipeBind1(2, 9, "No Item"))("popupWidth", ctx.popupWidth)("dataSource", ctx.data)("showClearButton", true)("fields", ctx.remoteFields);
    } }, directives: [ɵngcc3.ComboBoxComponent], pipes: [ɵngcc2.TranslatePipe], styles: [""] });
BreedingDropdownlistToolbarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService },
    { type: PigfarmCoreService }
];
BreedingDropdownlistToolbarComponent.propDecorators = {
    popupWidth: [{ type: Input }],
    popupHeight: [{ type: Input }],
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['breedingRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BreedingDropdownlistToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'app-breeding-dropdownlist-toolbar',
                template: "<ejs-combobox\r\n  [id]=\"id\"\r\n  [(value)]=\"selectedValue\"\r\n  (change)=\"onChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [enabled]=\"!disabled\"\r\n  [placeholder]=\"'No Item' | translate\"\r\n  #remote\r\n  [popupWidth]='popupWidth'\r\n  [dataSource]=\"data\"\r\n  [showClearButton]=\"true\"\r\n  [fields]=\"remoteFields\"\r\n\r\n>\r\n\r\n</ejs-combobox>\r\n",
                styles: [""]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }, { type: PigfarmCoreService }]; }, { popupWidth: [{
            type: Input
        }], popupHeight: [{
            type: Input
        }], id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['breedingRemote']
        }] }); })();

class CustomerDropdownlistToolbarComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "customer-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 1000;
        this.skip = 0;
        this.onFiltering = (e) => {
            let query = new Query();
            //frame the query based on search string with filter type.
            let predicate = new Predicate('name', 'contains', e.text);
            predicate = predicate.or('no', 'contains', e.text);
            query = (e.text != "") ? query.where(predicate) : query;
            //pass the filter data source, filter query to updateData method.
            e.updateData(this.data, query);
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query();
        new DataManager({
            url: `${this.baseUrl}Customer/GetCustomersSP`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }).executeQuery(this.query).then((x) => {
            this.data = x.result;
        });
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
CustomerDropdownlistToolbarComponent.ɵfac = function CustomerDropdownlistToolbarComponent_Factory(t) { return new (t || CustomerDropdownlistToolbarComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
CustomerDropdownlistToolbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CustomerDropdownlistToolbarComponent, selectors: [["app-customer-dropdownlist-toolbar"]], viewQuery: function CustomerDropdownlistToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c14, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 7, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["customerRemote", ""]], template: function CustomerDropdownlistToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function CustomerDropdownlistToolbarComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function CustomerDropdownlistToolbarComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function CustomerDropdownlistToolbarComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function CustomerDropdownlistToolbarComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function CustomerDropdownlistToolbarComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function CustomerDropdownlistToolbarComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [""] });
CustomerDropdownlistToolbarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
CustomerDropdownlistToolbarComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['customerRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CustomerDropdownlistToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'app-customer-dropdownlist-toolbar',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #customerRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [""]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['customerRemote']
        }] }); })();

class UploadMultiDocumentComponent {
    constructor(baseUrl, alertify, cd, http, translate) {
        this.baseUrl = baseUrl;
        this.alertify = alertify;
        this.cd = cd;
        this.http = http;
        this.translate = translate;
        this.allowExtensions = ".doc, .xls, .xlsx, .pdf, .odt, .odf, .jpg, .gif, .png";
        this.filesName = [];
        this.filesDetails = [];
        this.filesList = [];
        this.allowedExtensions = ".doc, .xls, .xlsx, .pdf, .odt, .odf, .jpg, .gif, .png";
        this.multiple = false;
        this.autoUpload = true;
        this.enabled = true;
        this.files = [];
        this.showFile = false;
        this.alert = {
            updateMessage: this.translate.instant(MessageConstants.UPDATE_MESSAGE),
            updateTitle: this.translate.instant(MessageConstants.UPDATE_TITLE),
            createMessage: this.translate.instant(MessageConstants.CREATE_MESSAGE),
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
    }
    ngOnInit() {
        this.path = {
            saveUrl: `${this.baseUrl}${this.controlerName}/Save?id=${this.id}`,
            removeUrl: `${this.baseUrl}${this.controlerName}/remove?id=${this.id}`,
        };
        this.dropElement = document.getElementsByClassName("control-section")[0];
        if (Browser.isDevice) {
            document.getElementById("dropimage").style.padding = "0px 10%";
        }
        document.getElementById("browse").onclick = () => {
            document
                .getElementsByClassName("e-file-select-wrap")[0]
                .querySelector("button")
                .click();
            return false;
        };
        document.getElementById("clearbtn").onclick = () => {
            if (!this.dropElement.querySelector("ul")) {
                return;
            }
            detach(this.dropElement.querySelector("ul"));
            this.filesList = [];
            this.filesDetails = [];
            this.filesName = [];
            if (this.dropElement
                .querySelector("#dropArea")
                .classList.contains("e-spinner-pane")) {
                hideSpinner(this.dropElement.querySelector("#dropArea"));
                detach(this.dropElement.querySelector(".e-spinner-pane"));
            }
        };
        document.getElementById("uploadbtn").onclick = () => {
            if (this.dropElement.querySelector("ul") &&
                this.filesDetails.length > 0) {
                this.uploadObj.upload(this.filesDetails, true);
            }
        };
    }
    onSelect(args) {
        if (!this.dropElement.querySelector("li")) {
            this.filesDetails = [];
        }
        if (isNullOrUndefined(document.getElementById("dropArea").querySelector(".e-upload-files"))) {
            this.parentElement = createElement("ul", { className: "e-upload-files" });
            document
                .getElementsByClassName("e-upload")[0]
                .appendChild(this.parentElement);
        }
        let validFiles = this.validateFiles(args, this.filesDetails);
        if (validFiles.length === 0) {
            args.cancel = true;
            return;
        }
        for (let i = 0; i < validFiles.length; i++) {
            this.formSelectedData(validFiles[i], this);
        }
        this.filesDetails = this.filesDetails.concat(validFiles);
        args.cancel = true;
    }
    validateFiles(args, viewedFiles) {
        let modifiedFiles = [];
        let validFiles = [];
        let isModified = false;
        if (args.event.type === "drop") {
            isModified = true;
            let allImages = ["png", "jpg", "jpeg"];
            let files = args.filesData;
            for (let file of files) {
                if (allImages.indexOf(file.type) !== -1) {
                    modifiedFiles.push(file);
                }
            }
        }
        let files = modifiedFiles.length > 0 || isModified ? modifiedFiles : args.filesData;
        if (this.filesName.length > 0) {
            for (let file of files) {
                if (this.filesName.indexOf(file.name) === -1) {
                    this.filesName.push(file.name);
                    validFiles.push(file);
                }
            }
        }
        else {
            for (let file of files) {
                this.filesName.push(file.name);
                validFiles.push(file);
            }
        }
        return validFiles;
    }
    formSelectedData(file, proxy) {
        let liEle = createElement("li", {
            className: "e-upload-file-list",
            attrs: { "data-file-name": file.name },
        });
        let imageTag = createElement("IMG", {
            className: "upload-image",
            attrs: { alt: "Image" },
        });
        let wrapper = createElement("span", { className: "wrapper" });
        wrapper.appendChild(imageTag);
        liEle.appendChild(wrapper);
        liEle.appendChild(createElement("div", {
            className: "name file-name",
            innerHTML: file.name,
            attrs: { title: file.name },
        }));
        liEle.appendChild(createElement("div", {
            className: "file-size",
            innerHTML: proxy.uploadObj.bytesToSize(file.size),
        }));
        let clearbtn;
        let uploadbtn;
        clearbtn = createElement("span", {
            id: "removeIcon",
            className: "e-icons e-file-remove-btn",
            attrs: { title: "Remove" },
        });
        EventHandler.add(clearbtn, "click", this.removeFiles, proxy);
        liEle.setAttribute("title", "Ready to Upload");
        uploadbtn = createElement("span", {
            className: "e-upload-icon e-icons e-file-remove-btn",
            attrs: { title: "Upload" },
        });
        uploadbtn.setAttribute("id", "iconUpload");
        EventHandler.add(uploadbtn, "click", this.uploadFile, proxy);
        let progressbarContainer;
        progressbarContainer = createElement("progress", {
            className: "progressbar",
            id: "progressBar",
            attrs: { value: "0", max: "100" },
        });
        liEle.appendChild(clearbtn);
        liEle.appendChild(uploadbtn);
        liEle.appendChild(progressbarContainer);
        this.readURL(liEle, file);
        document.querySelector(".e-upload-files").appendChild(liEle);
        proxy.filesList.push(liEle);
    }
    uploadFile(args) {
        this.uploadObj.upload([
            this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)],
        ], true);
    }
    removeFiles(args) {
        let removeFile = this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)];
        let statusCode = removeFile.statusCode;
        if (statusCode === "2" || statusCode === "1") {
            this.uploadObj.remove(removeFile, true);
            this.uploadObj.element.value = "";
        }
        let index = this.filesList.indexOf(args.currentTarget.parentElement);
        this.filesList.splice(index, 1);
        this.filesDetails.splice(index, 1);
        this.filesName.splice(this.filesName.indexOf(removeFile.name), 1);
        if (statusCode !== "2") {
            detach(args.currentTarget.parentElement);
        }
    }
    onFileUpload(args) {
        let li = document
            .getElementById("dropArea")
            .querySelector('[data-file-name="' + args.file.name + '"]');
        let iconEle = li.querySelector("#iconUpload");
        iconEle.style.cursor = "not-allowed";
        iconEle.classList.add("e-uploaded");
        EventHandler.remove(li.querySelector("#iconUpload"), "click", this.uploadFile);
        let progressValue = Math.round((args.e.loaded / args.e.total) * 100);
        if (!isNaN(progressValue) && li.querySelector(".progressbar")) {
            li.getElementsByTagName("progress")[0].value = progressValue;
        }
    }
    onUploadSuccess(args) {
        let spinnerElement = document.getElementById("dropArea");
        let li = document
            .getElementById("dropArea")
            .querySelector('[data-file-name="' + args.file.name + '"]');
        if (li && !isNullOrUndefined(li.querySelector(".progressbar"))) {
            li.querySelector(".progressbar").style.visibility =
                "hidden";
        }
        if (args.operation === "upload") {
            EventHandler.remove(li.querySelector("#iconUpload"), "click", this.uploadFile);
            li.setAttribute("title", args.e.currentTarget.statusText);
            li.querySelector(".file-name").style.color = "green";
            li.querySelector(".e-icons").onclick = () => {
                this.generateSpinner(this.dropElement.querySelector("#dropArea"));
            };
        }
        else {
            if (!isNullOrUndefined(li)) {
                detach(li);
            }
            if (!isNullOrUndefined(spinnerElement)) {
                hideSpinner(spinnerElement);
                detach(spinnerElement.querySelector(".e-spinner-pane"));
            }
        }
        li.querySelector("#removeIcon").removeAttribute(".e-file-remove-btn");
        li.querySelector("#removeIcon").setAttribute("class", "e-icons e-file-delete-btn");
    }
    generateSpinner(targetElement) {
        createSpinner({ target: targetElement, width: "25px" });
        showSpinner(targetElement);
    }
    onUploadFailed(args) {
        let li = document
            .getElementById("dropArea")
            .querySelector('[data-file-name="' + args.file.name + '"]');
        li.querySelector(".file-name").style.color = "red";
        li.setAttribute("title", args.e.currentTarget.statusText);
        if (args.operation === "upload") {
            EventHandler.remove(li.querySelector("#iconUpload"), "click", this.uploadFile);
            li.querySelector(".progressbar").style.visibility =
                "hidden";
        }
    }
    readURL(li, args) {
        let preview = li.querySelector(".upload-image");
        let file = args.rawFile;
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            preview.src = reader.result;
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    onFileRemove(args) {
        args.postRawFile = false;
    }
}
UploadMultiDocumentComponent.ɵfac = function UploadMultiDocumentComponent_Factory(t) { return new (t || UploadMultiDocumentComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(AlertifyService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
UploadMultiDocumentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: UploadMultiDocumentComponent, selectors: [["app-upload-multi-document"]], viewQuery: function UploadMultiDocumentComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c29, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.uploadObj = _t.first);
    } }, inputs: { allowedExtensions: "allowedExtensions", multiple: "multiple", autoUpload: "autoUpload", enabled: "enabled", files: "files", path: "path", id: "id", service: "service", controlerName: "controlerName" }, decls: 14, vars: 13, consts: [[1, "control-section"], [1, "col-12"], [1, "control_wrapper"], [1, "imagepreview"], ["id", "dropArea", 2, "height", "auto"], ["id", "dropimage"], ["href", "", "id", "browse"], ["id", "previewfileupload", 3, "asyncSettings", "multiple", "autoUpload", "enabled", "dropArea", "allowedExtensions", "selected", "success", "progress", "failure", "removing"], ["previewupload", ""]], template: function UploadMultiDocumentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "span", 5);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵpipe(7, "translate");
        ɵngcc0.ɵɵelementStart(8, "a", 6);
        ɵngcc0.ɵɵelementStart(9, "u");
        ɵngcc0.ɵɵtext(10);
        ɵngcc0.ɵɵpipe(11, "translate");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "ejs-uploader", 7, 8);
        ɵngcc0.ɵɵlistener("selected", function UploadMultiDocumentComponent_Template_ejs_uploader_selected_12_listener($event) { return ctx.onSelect($event); })("success", function UploadMultiDocumentComponent_Template_ejs_uploader_success_12_listener($event) { return ctx.onUploadSuccess($event); })("progress", function UploadMultiDocumentComponent_Template_ejs_uploader_progress_12_listener($event) { return ctx.onFileUpload($event); })("failure", function UploadMultiDocumentComponent_Template_ejs_uploader_failure_12_listener($event) { return ctx.onUploadFailed($event); })("removing", function UploadMultiDocumentComponent_Template_ejs_uploader_removing_12_listener($event) { return ctx.onFileRemove($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(7, 9, "Drop image (.doc, .xls, .xlsx, .pdf, .odt, .odf, .jpg, .gif, .png) files here or"), " ");
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(11, 11, "Browse"));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("asyncSettings", ctx.path)("multiple", ctx.multiple)("asyncSettings", ctx.path)("autoUpload", ctx.autoUpload)("enabled", ctx.enabled)("dropArea", ctx.dropElement)("allowedExtensions", ctx.allowExtensions);
    } }, directives: [ɵngcc5.UploaderComponent], pipes: [ɵngcc2.TranslatePipe], styles: [".control_wrapper[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]{max-width:505px;margin:auto}.e-upload[_ngcontent-%COMP%]{float:none}.imagepreview[_ngcontent-%COMP%]   .e-file-select-wrap[_ngcontent-%COMP%]{display:none}.imagepreview[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%]{border:none;margin-top:10px;width:100%}.imagepreview[_ngcontent-%COMP%]   #dropimage[_ngcontent-%COMP%]{font-size:14px}.e-bigger[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropimage[_ngcontent-%COMP%]{font-size:15px}.imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]{border:1px dashed #c3c3cc;position:relative;text-align:center;padding:15px 0 5px;display:block;width:100%;overflow:hidden}.e-bigger[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]{padding:20px 0 10px}.imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]{text-align:initial;border-top:none}.imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-file-delete-btn.e-icons[_ngcontent-%COMP%], .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-file-remove-btn.e-icons[_ngcontent-%COMP%]{top:120px;background-color:#fff;border-radius:50%;font-size:12px;left:80px}.imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .e-file-remove-btn.e-icons.e-upload-icon[_ngcontent-%COMP%]{font-size:14px;left:20px}.imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .e-icons[_ngcontent-%COMP%]{visibility:visible}.imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .e-icons[_ngcontent-%COMP%]{visibility:hidden}@font-face{font-family:Uploader_Icon;src:url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj1tSfIAAAEoAAAAVmNtYXDnEOdVAAABiAAAADZnbHlmoZcPvgAAAcgAAABAaGVhZBLQTSUAAADQAAAANmhoZWEINQQDAAAArAAAACRobXR4CAAAAAAAAYAAAAAIbG9jYQAgAAAAAAHAAAAABm1heHABDgAdAAABCAAAACBuYW1lQySinQAAAggAAAIxcG9zdLfl0usAAAQ8AAAAMgABAAAEAAAAAFwEAAAAAAAD2AABAAAAAAAAAAAAAAAAAAAAAgABAAAAAQAA2vKJUF8PPPUACwQAAAAAANftBBgAAAAA1+0EGAAAAAAD2AP4AAAACAACAAAAAAAAAAEAAAACABEAAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAAQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAAAAACAAAAAwAAABQAAwABAAAAFAAEACIAAAAEAAQAAQAA5wD//wAA5wD//wAAAAEABAAAAAEAAAAAAAAAIAAAAAIAAAAAA9gD+AAHABAAADchESMVITUjEzM3ETMRFzMBKAOwPvzMPp1mtUC1Zv7FCAF6vb0BO7X+EAHwtQE7AAAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAAgAAQABAAAAAAACAAcACQABAAAAAAADAAgAEAABAAAAAAAEAAgAGAABAAAAAAAFAAsAIAABAAAAAAAGAAgAKwABAAAAAAAKACwAMwABAAAAAAALABIAXwADAAEECQAAAAIAcQADAAEECQABABAAcwADAAEECQACAA4AgwADAAEECQADABAAkQADAAEECQAEABAAoQADAAEECQAFABYAsQADAAEECQAGABAAxwADAAEECQAKAFgA1wADAAEECQALACQBLyBVcGxvYWRlclJlZ3VsYXJVcGxvYWRlclVwbG9hZGVyVmVyc2lvbiAxLjBVcGxvYWRlckZvbnQgZ2VuZXJhdGVkIHVzaW5nIFN5bmNmdXNpb24gTWV0cm8gU3R1ZGlvd3d3LnN5bmNmdXNpb24uY29tACAAVQBwAGwAbwBhAGQAZQByAFIAZQBnAHUAbABhAHIAVQBwAGwAbwBhAGQAZQByAFUAcABsAG8AYQBkAGUAcgBWAGUAcgBzAGkAbwBuACAAMQAuADAAVQBwAGwAbwBhAGQAZQByAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBAgEDAAhVcGxvYWRlcgAAAAA=) format(\"truetype\");font-weight:400;font-style:normal}.imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-icons.e-upload-icon[_ngcontent-%COMP%]{font-family:Uploader_Icon;speak:none;font-size:16px;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-icons.e-upload-icon[_ngcontent-%COMP%]:before{content:\"\\e700\"}.imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-icons[_ngcontent-%COMP%]:not(.e-uploaded):hover{background-color:#e6e6e6;border-color:#adadad;color:#333}.bootstrap5-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-icons[_ngcontent-%COMP%], .bootstrap-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-icons[_ngcontent-%COMP%], .fabric-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-icons[_ngcontent-%COMP%], .material-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-icons[_ngcontent-%COMP%], .tailwind-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-icons[_ngcontent-%COMP%]{color:#333}.highcontrast[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-file-delete-btn.e-icons[_ngcontent-%COMP%], .highcontrast[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-file-remove-btn.e-icons[_ngcontent-%COMP%]{background-color:#ffd939}.highcontrast[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-file-delete-btn.e-icons[_ngcontent-%COMP%]:before, .highcontrast[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-file-remove-btn.e-icons[_ngcontent-%COMP%]:before{color:#000}.imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-upload-file-list[_ngcontent-%COMP%]{border:0;display:inline-block;width:165px}.imagepreview[_ngcontent-%COMP%]   .upload-image[_ngcontent-%COMP%]{width:150px;height:150px;display:inline-flex;background-size:contain;margin:7px;text-align:center;line-height:10;border-radius:5px}.imagepreview[_ngcontent-%COMP%]   .upload-image[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:6px;left:6px;width:inherit;height:inherit;background:#d3d3d3 url(http://via.placeholder.com/300?text=Loading...) no-repeat 50%;color:transparent;border-radius:5px}.bootstrap5-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   div.file-name[_ngcontent-%COMP%], .bootstrap-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   div.file-name[_ngcontent-%COMP%], .fabric-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   div.file-name[_ngcontent-%COMP%], .fluent-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   div.file-name[_ngcontent-%COMP%], .highcontrast[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   div.file-name[_ngcontent-%COMP%], .material-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   div.file-name[_ngcontent-%COMP%], .tailwind-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   div.file-name[_ngcontent-%COMP%]{color:#fff}.imagepreview[_ngcontent-%COMP%]   div.file-name[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);font-size:14px;padding:3px 10px;overflow:hidden;text-overflow:ellipsis;width:90%;white-space:nowrap}.highcontrast[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   div.file-size[_ngcontent-%COMP%]{color:#fff}.imagepreview[_ngcontent-%COMP%]   div.file-size[_ngcontent-%COMP%]{font-size:13px;padding:3px 10px;overflow:hidden}.imagepreview[_ngcontent-%COMP%]   .progressbar[_ngcontent-%COMP%]{background:#ff4081;border:none;border-radius:10px;height:4px;margin-left:7px;width:90%;top:-60px;position:relative}.bootstrap5[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   .progressbar[_ngcontent-%COMP%], .bootstrap5-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   .progressbar[_ngcontent-%COMP%], .fluent-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   .progressbar[_ngcontent-%COMP%], .tailwind-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   .progressbar[_ngcontent-%COMP%], .tailwind[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   .progressbar[_ngcontent-%COMP%]{top:-70px}.imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]{border:none;background:#fff}.bootstrap5-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%], .bootstrap-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%], .fabric-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%], .highcontrast[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%], .material-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%], .tailwind-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]{border:none;background:#000}.imagepreview[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-webkit-progress-bar{border:none;background-color:#fff}.highcontrast[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-webkit-progress-bar{border:none;background-color:#000}.imagepreview[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-webkit-progress-value, .material[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-webkit-progress-value{border-radius:2px;background-color:#ff4081}.bootstrap[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-webkit-progress-value{border-radius:2px;background-color:#1f496e}.fabric[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#1763ff;border-radius:2px;top:-66px}.highcontrast[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#ffd939;border-radius:2px}.imagepreview[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-moz-progress-bar, .material[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-moz-progress-bar{border-radius:2px;background-color:#ff4081}.bootstrap[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-moz-progress-bar{border-radius:2px;background-color:#1f496e}.fabric[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-moz-progress-bar{background-color:#1763ff;border-radius:2px;top:-66px}.highcontrast[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-moz-progress-bar{background-color:#ffd939;border-radius:2px}.imagepreview[_ngcontent-%COMP%]   #dropimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .material[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ff4081}.fabric[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#1763ff}.bootstrap[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#1f496e}.highcontrast[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ffd939}.material-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#56a4fd}.fabric-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#0074cc}.bootstrap-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#0070f0}.bootstrap5-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#0d6efd}.tailwind-dark[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#22d3ee}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.e-bigger[_ngcontent-%COMP%]   .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-file-remove-btn.e-icons[_ngcontent-%COMP%], .imagepreview[_ngcontent-%COMP%]   #dropArea[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%]   .e-upload-files[_ngcontent-%COMP%]   .e-file-remove-btn.e-icons[_ngcontent-%COMP%]{padding:18px 25px 18px 12px}}"] });
UploadMultiDocumentComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: AlertifyService },
    { type: ChangeDetectorRef },
    { type: HttpClient },
    { type: TranslateService }
];
UploadMultiDocumentComponent.propDecorators = {
    uploadObj: [{ type: ViewChild, args: ["previewupload",] }],
    path: [{ type: Input }],
    allowedExtensions: [{ type: Input }],
    id: [{ type: Input }],
    multiple: [{ type: Input }],
    autoUpload: [{ type: Input }],
    enabled: [{ type: Input }],
    service: [{ type: Input }],
    files: [{ type: Input }],
    controlerName: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(UploadMultiDocumentComponent, [{
        type: Component,
        args: [{
                selector: "app-upload-multi-document",
                template: "<div class=\"control-section\">\r\n  <div class=\"col-12\">\r\n      <div class=\"control_wrapper\">\r\n          <div class='imagepreview'>\r\n              <div id='dropArea' style='height: auto'>\r\n                  <span id='dropimage'> {{ 'Drop image (.doc, .xls, .xlsx, .pdf, .odt, .odf, .jpg, .gif, .png) files here or' | translate}} <a href=\"\" id='browse'><u>{{'Browse' | translate}}</u></a> </span>\r\n                  <ejs-uploader #previewupload id='previewfileupload' [asyncSettings]='path'\r\n                  [multiple]=\"multiple\"\r\n                  [asyncSettings]=\"path\"\r\n                  [autoUpload]=\"autoUpload\"\r\n                  [enabled]=\"enabled\"\r\n                  [dropArea]='dropElement' [allowedExtensions]='allowExtensions' (selected)='onSelect($event)'\r\n                      (success)='onUploadSuccess($event)' (progress)='onFileUpload($event)' (failure)='onUploadFailed($event)' (removing)='onFileRemove($event)'>\r\n                  </ejs-uploader>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".control_wrapper .imagepreview{max-width:505px;margin:auto}.e-upload{float:none}.imagepreview .e-file-select-wrap{display:none}.imagepreview .e-upload{border:none;margin-top:10px;width:100%}.imagepreview #dropimage{font-size:14px}.e-bigger .imagepreview #dropimage{font-size:15px}.imagepreview #dropArea{border:1px dashed #c3c3cc;position:relative;text-align:center;padding:15px 0 5px;display:block;width:100%;overflow:hidden}.e-bigger .imagepreview #dropArea{padding:20px 0 10px}.imagepreview #dropArea .e-upload .e-upload-files{text-align:initial;border-top:none}.imagepreview #dropArea .e-upload-files .e-file-delete-btn.e-icons,.imagepreview #dropArea .e-upload-files .e-file-remove-btn.e-icons{top:120px;background-color:#fff;border-radius:50%;font-size:12px;left:80px}.imagepreview #dropArea .e-upload-files li .e-file-remove-btn.e-icons.e-upload-icon{font-size:14px;left:20px}.imagepreview #dropArea .e-upload-files li:hover .e-icons{visibility:visible}.imagepreview #dropArea .e-upload-files li .e-icons{visibility:hidden}@font-face{font-family:Uploader_Icon;src:url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj1tSfIAAAEoAAAAVmNtYXDnEOdVAAABiAAAADZnbHlmoZcPvgAAAcgAAABAaGVhZBLQTSUAAADQAAAANmhoZWEINQQDAAAArAAAACRobXR4CAAAAAAAAYAAAAAIbG9jYQAgAAAAAAHAAAAABm1heHABDgAdAAABCAAAACBuYW1lQySinQAAAggAAAIxcG9zdLfl0usAAAQ8AAAAMgABAAAEAAAAAFwEAAAAAAAD2AABAAAAAAAAAAAAAAAAAAAAAgABAAAAAQAA2vKJUF8PPPUACwQAAAAAANftBBgAAAAA1+0EGAAAAAAD2AP4AAAACAACAAAAAAAAAAEAAAACABEAAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAAQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAAAAACAAAAAwAAABQAAwABAAAAFAAEACIAAAAEAAQAAQAA5wD//wAA5wD//wAAAAEABAAAAAEAAAAAAAAAIAAAAAIAAAAAA9gD+AAHABAAADchESMVITUjEzM3ETMRFzMBKAOwPvzMPp1mtUC1Zv7FCAF6vb0BO7X+EAHwtQE7AAAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAAgAAQABAAAAAAACAAcACQABAAAAAAADAAgAEAABAAAAAAAEAAgAGAABAAAAAAAFAAsAIAABAAAAAAAGAAgAKwABAAAAAAAKACwAMwABAAAAAAALABIAXwADAAEECQAAAAIAcQADAAEECQABABAAcwADAAEECQACAA4AgwADAAEECQADABAAkQADAAEECQAEABAAoQADAAEECQAFABYAsQADAAEECQAGABAAxwADAAEECQAKAFgA1wADAAEECQALACQBLyBVcGxvYWRlclJlZ3VsYXJVcGxvYWRlclVwbG9hZGVyVmVyc2lvbiAxLjBVcGxvYWRlckZvbnQgZ2VuZXJhdGVkIHVzaW5nIFN5bmNmdXNpb24gTWV0cm8gU3R1ZGlvd3d3LnN5bmNmdXNpb24uY29tACAAVQBwAGwAbwBhAGQAZQByAFIAZQBnAHUAbABhAHIAVQBwAGwAbwBhAGQAZQByAFUAcABsAG8AYQBkAGUAcgBWAGUAcgBzAGkAbwBuACAAMQAuADAAVQBwAGwAbwBhAGQAZQByAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBAgEDAAhVcGxvYWRlcgAAAAA=) format(\"truetype\");font-weight:400;font-style:normal}.imagepreview #dropArea .e-upload .e-upload-files .e-icons.e-upload-icon{font-family:Uploader_Icon;speak:none;font-size:16px;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.imagepreview #dropArea .e-upload .e-upload-files .e-icons.e-upload-icon:before{content:\"\\e700\"}.imagepreview #dropArea .e-upload .e-upload-files .e-icons:not(.e-uploaded):hover{background-color:#e6e6e6;border-color:#adadad;color:#333}.bootstrap5-dark .imagepreview #dropArea .e-upload .e-upload-files .e-icons,.bootstrap-dark .imagepreview #dropArea .e-upload .e-upload-files .e-icons,.fabric-dark .imagepreview #dropArea .e-upload .e-upload-files .e-icons,.material-dark .imagepreview #dropArea .e-upload .e-upload-files .e-icons,.tailwind-dark .imagepreview #dropArea .e-upload .e-upload-files .e-icons{color:#333}.highcontrast .imagepreview #dropArea .e-upload-files .e-file-delete-btn.e-icons,.highcontrast .imagepreview #dropArea .e-upload-files .e-file-remove-btn.e-icons{background-color:#ffd939}.highcontrast .imagepreview #dropArea .e-upload .e-upload-files .e-file-delete-btn.e-icons:before,.highcontrast .imagepreview #dropArea .e-upload .e-upload-files .e-file-remove-btn.e-icons:before{color:#000}.imagepreview #dropArea .e-upload .e-upload-files .e-upload-file-list{border:0;display:inline-block;width:165px}.imagepreview .upload-image{width:150px;height:150px;display:inline-flex;background-size:contain;margin:7px;text-align:center;line-height:10;border-radius:5px}.imagepreview .upload-image:after{content:\"\";position:absolute;top:6px;left:6px;width:inherit;height:inherit;background:#d3d3d3 url(http://via.placeholder.com/300?text=Loading...) no-repeat 50%;color:transparent;border-radius:5px}.bootstrap5-dark .imagepreview div.file-name,.bootstrap-dark .imagepreview div.file-name,.fabric-dark .imagepreview div.file-name,.fluent-dark .imagepreview div.file-name,.highcontrast .imagepreview div.file-name,.material-dark .imagepreview div.file-name,.tailwind-dark .imagepreview div.file-name{color:#fff}.imagepreview div.file-name{color:rgba(0,0,0,.87);font-size:14px;padding:3px 10px;overflow:hidden;text-overflow:ellipsis;width:90%;white-space:nowrap}.highcontrast .imagepreview div.file-size{color:#fff}.imagepreview div.file-size{font-size:13px;padding:3px 10px;overflow:hidden}.imagepreview .progressbar{background:#ff4081;border:none;border-radius:10px;height:4px;margin-left:7px;width:90%;top:-60px;position:relative}.bootstrap5 .imagepreview .progressbar,.bootstrap5-dark .imagepreview .progressbar,.fluent-dark .imagepreview .progressbar,.tailwind-dark .imagepreview .progressbar,.tailwind .imagepreview .progressbar{top:-70px}.imagepreview #dropArea progress{border:none;background:#fff}.bootstrap5-dark .imagepreview #dropArea progress,.bootstrap-dark .imagepreview #dropArea progress,.fabric-dark .imagepreview #dropArea progress,.highcontrast .imagepreview #dropArea progress,.material-dark .imagepreview #dropArea progress,.tailwind-dark .imagepreview #dropArea progress{border:none;background:#000}.imagepreview progress::-webkit-progress-bar{border:none;background-color:#fff}.highcontrast .imagepreview progress::-webkit-progress-bar{border:none;background-color:#000}.imagepreview progress::-webkit-progress-value,.material .imagepreview progress::-webkit-progress-value{border-radius:2px;background-color:#ff4081}.bootstrap .imagepreview progress::-webkit-progress-value{border-radius:2px;background-color:#1f496e}.fabric .imagepreview progress::-webkit-progress-value{background-color:#1763ff;border-radius:2px;top:-66px}.highcontrast .imagepreview progress::-webkit-progress-value{background-color:#ffd939;border-radius:2px}.imagepreview progress::-moz-progress-bar,.material .imagepreview progress::-moz-progress-bar{border-radius:2px;background-color:#ff4081}.bootstrap .imagepreview progress::-moz-progress-bar{border-radius:2px;background-color:#1f496e}.fabric .imagepreview progress::-moz-progress-bar{background-color:#1763ff;border-radius:2px;top:-66px}.highcontrast .imagepreview progress::-moz-progress-bar{background-color:#ffd939;border-radius:2px}.imagepreview #dropimage a,.material .imagepreview #dropimage a{color:#ff4081}.fabric .imagepreview #dropimage a{color:#1763ff}.bootstrap .imagepreview #dropimage a{color:#1f496e}.highcontrast .imagepreview #dropimage a{color:#ffd939}.material-dark .imagepreview #dropimage a{color:#56a4fd}.fabric-dark .imagepreview #dropimage a{color:#0074cc}.bootstrap-dark .imagepreview #dropimage a{color:#0070f0}.bootstrap5-dark .imagepreview #dropimage a{color:#0d6efd}.tailwind-dark .imagepreview #dropimage a{color:#22d3ee}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.e-bigger .imagepreview #dropArea .e-upload .e-upload-files .e-file-remove-btn.e-icons,.imagepreview #dropArea .e-upload .e-upload-files .e-file-remove-btn.e-icons{padding:18px 25px 18px 12px}}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: AlertifyService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.HttpClient }, { type: ɵngcc2.TranslateService }]; }, { allowedExtensions: [{
            type: Input
        }], multiple: [{
            type: Input
        }], autoUpload: [{
            type: Input
        }], enabled: [{
            type: Input
        }], files: [{
            type: Input
        }], path: [{
            type: Input
        }], uploadObj: [{
            type: ViewChild,
            args: ["previewupload"]
        }], id: [{
            type: Input
        }], service: [{
            type: Input
        }], controlerName: [{
            type: Input
        }] }); })();

class Breeding2SowinDropdownlistComponent {
    constructor(baseUrl, trans, service) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.service = service;
        this.id = "breeding-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, 'name');
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
    }
    ngOnInit() {
    }
    loadData() {
        this.service.getBreeding2SowInByBreedingGuid(this.breedingGuid || '').subscribe(x => {
            this.data = x;
        });
    }
    ngOnChanges(changes) {
        this.selectedValue = this.selectedValue || "";
        if (changes['breedingGuid']) {
            this.loadData();
        }
    }
    onChange(args) {
        var _a, _b, _c, _d;
        this.roomGuid = (_a = args.itemData) === null || _a === void 0 ? void 0 : _a.roomGuid;
        this.penGuid = (_b = args.itemData) === null || _b === void 0 ? void 0 : _b.penGuid;
        this.change.emit(args);
        this.ngModelChange.emit((_c = args.itemData) === null || _c === void 0 ? void 0 : _c.guid);
        this.selectedValueChange.emit((_d = args.itemData) === null || _d === void 0 ? void 0 : _d.guid);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
Breeding2SowinDropdownlistComponent.ɵfac = function Breeding2SowinDropdownlistComponent_Factory(t) { return new (t || Breeding2SowinDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService), ɵngcc0.ɵɵdirectiveInject(PigfarmCoreService)); };
Breeding2SowinDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Breeding2SowinDropdownlistComponent, selectors: [["app-breeding2-sowin-dropdownlist"]], viewQuery: function Breeding2SowinDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c28, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue", breedingGuid: "breedingGuid" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 10, consts: [[3, "id", "value", "allowFiltering", "enabled", "placeholder", "dataSource", "fields", "showClearButton", "valueChange", "filtering", "change", "ngModelChange", "open", "actionComplete"], ["breedingRemote", ""]], template: function Breeding2SowinDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("valueChange", function Breeding2SowinDropdownlistComponent_Template_ejs_dropdownlist_valueChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function Breeding2SowinDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function Breeding2SowinDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function Breeding2SowinDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function Breeding2SowinDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function Breeding2SowinDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵpipe(2, "translate");
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("value", ctx.selectedValue)("allowFiltering", true)("enabled", !ctx.disabled)("placeholder", ɵngcc0.ɵɵpipeBind1(2, 8, "No Item"))("dataSource", ctx.data)("fields", ctx.remoteFields)("showClearButton", true);
    } }, directives: [ɵngcc3.DropDownListComponent], pipes: [ɵngcc2.TranslatePipe], styles: [_c10] });
Breeding2SowinDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService },
    { type: PigfarmCoreService }
];
Breeding2SowinDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    breedingGuid: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['breedingRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(Breeding2SowinDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-breeding2-sowin-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(value)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [enabled]=\"!disabled\"\r\n  [placeholder]=\"'No Item' | translate\"\r\n  #breedingRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [showClearButton]=\"true\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }, { type: PigfarmCoreService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], breedingGuid: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['breedingRemote']
        }] }); })();

class UploadDocumentComponent {
    constructor(baseUrl, alertify, cd, http, translate) {
        this.baseUrl = baseUrl;
        this.alertify = alertify;
        this.cd = cd;
        this.http = http;
        this.translate = translate;
        this.allowedExtensions = ".doc, .xls, .xlsx, .pdf, .odt, .odf, .jpg, .gif, .png";
        this.multiple = false;
        this.autoUpload = true;
        this.enabled = true;
        this.files = [];
        this.showFile = false;
        this.showImgFile = false;
        this.alert = {
            updateMessage: this.translate.instant(MessageConstants.UPDATE_MESSAGE),
            updateTitle: this.translate.instant(MessageConstants.UPDATE_TITLE),
            createMessage: this.translate.instant(MessageConstants.CREATE_MESSAGE),
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
        this.allImages = ['.jpg', '.gif', '.png'];
        this.onUploadSuccess = (args) => {
            this.getFileInfo();
            this.uploadObj.clearAll();
        };
    }
    ngOnChanges(changes) {
        if (changes['service'] && changes.service.currentValue) {
            this.initialUploader();
            this.cd.detectChanges();
        }
    }
    ngAfterViewInit() {
        // this.initialUploader();
        // this.cd.detectChanges();
    }
    ngOnInit() { }
    beforeUpload(args) {
        args.statusText = args.response.statusText;
    }
    initialUploader() {
        if (!this.path) {
            this.path = {
                saveUrl: `${this.baseUrl}${this.controlerName}/Save?id=${this.id}`,
                removeUrl: `${this.baseUrl}${this.controlerName}/remove?id=${this.id}`,
            };
        }
        this.downloadUrl = `${this.baseUrl}${this.controlerName}/Download?id=${this.id}`;
        this.getFileInfo();
    }
    getFileInfo() {
        this.service.getFilesById(this.id).subscribe((file) => {
            if (file.name !== "") {
                this.files = [file];
                this.file = file;
                this.showFile = true;
                this.showImgFile = this.allImages.indexOf(file.type) !== -1;
            }
            else {
                this.files = null;
                this.file = null;
                this.showFile = false;
                this.showImgFile = false;
                this.uploadObj.refresh();
            }
        }, (error) => {
            this.files = null;
            this.file = null;
            this.showFile = false;
            this.uploadObj.refresh();
        });
    }
    onSelected(args) {
        args.filesData.splice(5);
        let filesData = args.filesData;
        let allFiles = filesData.concat(args.filesData);
        if (allFiles.length > 5) {
            for (let i = 0; i < allFiles.length; i++) {
                if (allFiles.length > 5) {
                    allFiles.shift();
                }
            }
            args.filesData = allFiles;
            args.modifiedFilesData = args.filesData;
        }
        this.showFile = args.filesData.length > 0;
        if (this.showFile) {
            this.showImgFile = this.allImages.indexOf(this.showFile[0].type) !== -1;
        }
        args.isModified = true;
    }
    onFileRemove(args) {
        args.postRawFile = false;
    }
    removeFile() {
        this.remove();
    }
    remove() {
        this.alertify.confirm4(this.alert.yes_message, this.alert.no_message, this.alert.deleteTitle, this.alert.deleteMessage, () => {
            let ajax = new XMLHttpRequest();
            ajax.open("POST", `${this.baseUrl}${this.controlerName}/remove?id=${this.id}`);
            ajax.onload = () => {
                this.getFileInfo();
                this.alertify.success(this.alert.deleted_ok_msg);
            };
            ajax.send();
        }, () => {
            this.alertify.error(this.alert.cancelMessage);
        });
    }
    download() {
        let downloadLink = document.createElement("a");
        downloadLink.href = this.downloadUrl;
        downloadLink.setAttribute("download", this.file.name);
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }
}
UploadDocumentComponent.ɵfac = function UploadDocumentComponent_Factory(t) { return new (t || UploadDocumentComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(AlertifyService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
UploadDocumentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: UploadDocumentComponent, selectors: [["app-upload-document"]], viewQuery: function UploadDocumentComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(UploaderComponent, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.uploadObj = _t.first);
    } }, inputs: { allowedExtensions: "allowedExtensions", multiple: "multiple", autoUpload: "autoUpload", enabled: "enabled", files: "files", path: "path", id: "id", service: "service", controlerName: "controlerName" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 6, consts: [["id", "defaultfileupload", 3, "allowedExtensions", "multiple", "asyncSettings", "autoUpload", "enabled", "selected", "failure", "success", "removing"], ["defaultupload", ""], [4, "ngIf"], [1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", 2, "color", "green"], ["class", "text-center", 4, "ngIf"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "fa", "fa-file-download", "mx-2", 2, "cursor", "pointer"], ["class", "btn btn-sm btn-danger", 3, "click", 4, "ngIf"], [1, "text-center"], [1, "rounded", 3, "src", "alt"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "fa", "fa-trash", 2, "cursor", "pointer"]], template: function UploadDocumentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-uploader", 0, 1);
        ɵngcc0.ɵɵlistener("selected", function UploadDocumentComponent_Template_ejs_uploader_selected_0_listener($event) { return ctx.onSelected($event); })("failure", function UploadDocumentComponent_Template_ejs_uploader_failure_0_listener($event) { return ctx.beforeUpload($event); })("success", function UploadDocumentComponent_Template_ejs_uploader_success_0_listener($event) { return ctx.onUploadSuccess($event); })("removing", function UploadDocumentComponent_Template_ejs_uploader_removing_0_listener($event) { return ctx.onFileRemove($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, UploadDocumentComponent_div_2_Template, 9, 3, "div", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("allowedExtensions", ctx.allowedExtensions)("multiple", ctx.multiple)("asyncSettings", ctx.path)("autoUpload", ctx.autoUpload)("enabled", ctx.enabled);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showFile);
    } }, directives: [ɵngcc5.UploaderComponent, ɵngcc9.NgIf], styles: [".a[_ngcontent-%COMP%]{cursor:pointer}"] });
UploadDocumentComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: AlertifyService },
    { type: ChangeDetectorRef },
    { type: HttpClient },
    { type: TranslateService }
];
UploadDocumentComponent.propDecorators = {
    uploadObj: [{ type: ViewChild, args: [UploaderComponent,] }],
    path: [{ type: Input }],
    allowedExtensions: [{ type: Input }],
    id: [{ type: Input }],
    multiple: [{ type: Input }],
    autoUpload: [{ type: Input }],
    enabled: [{ type: Input }],
    service: [{ type: Input }],
    files: [{ type: Input }],
    controlerName: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(UploadDocumentComponent, [{
        type: Component,
        args: [{
                selector: "app-upload-document",
                template: "<ejs-uploader\r\n  [allowedExtensions]=\"allowedExtensions\"\r\n  (selected)=\"onSelected($event)\"\r\n  #defaultupload\r\n  id=\"defaultfileupload\"\r\n  (failure)=\"beforeUpload($event)\"\r\n  [multiple]=\"multiple\"\r\n  [asyncSettings]=\"path\"\r\n  [autoUpload]=\"autoUpload\"\r\n  [enabled]=\"enabled\"\r\n  (success)=\"onUploadSuccess($event)\"\r\n  (removing)=\"onFileRemove($event)\"\r\n>\r\n</ejs-uploader>\r\n\r\n<div *ngIf=\"showFile\">\r\n  <ul class=\"list-group\">\r\n    <li\r\n      class=\"list-group-item d-flex justify-content-between align-items-center\"\r\n      style=\"color: green\"\r\n    >\r\n      <div *ngIf=\"!showImgFile\">\r\n        {{ file?.name }}\r\n      </div>\r\n      <div class=\"text-center\" *ngIf=\"showImgFile\">\r\n        <img [src]=\"downloadUrl\" class=\"rounded\" alt=\"{{ file?.name }}\">\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-sm btn-primary\" (click)=\"download()\">\r\n          <i\r\n          class=\"fa fa-file-download mx-2\"\r\n          style=\"cursor: pointer\"\r\n        ></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-danger\" (click)=\"removeFile()\" *ngIf=\"enabled\">\r\n        <i class=\"fa fa-trash\" style=\"cursor: pointer\" ></i>\r\n        </button>\r\n\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n",
                styles: [".a{cursor:pointer}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: AlertifyService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.HttpClient }, { type: ɵngcc2.TranslateService }]; }, { allowedExtensions: [{
            type: Input
        }], multiple: [{
            type: Input
        }], autoUpload: [{
            type: Input
        }], enabled: [{
            type: Input
        }], files: [{
            type: Input
        }], path: [{
            type: Input
        }], uploadObj: [{
            type: ViewChild,
            args: [UploaderComponent]
        }], id: [{
            type: Input
        }], service: [{
            type: Input
        }], controlerName: [{
            type: Input
        }] }); })();

class BaseComponent {
    constructor(translate, url) {
        var _a;
        this.translate = translate;
        this.url = url;
        this.statusConts = new StatusConstants();
        this.isodsExport = true;
        this.globalLang = localStorage.getItem('lang');
        this.skip = 0;
        this.take = 10;
        this.sortOptions = { columns: [{ field: 'estDate', direction: 'Descending' }, { field: 'id', direction: 'Descending' }] };
        this.isAdmin = ((_a = JSON.parse(localStorage.getItem('user'))) === null || _a === void 0 ? void 0 : _a.groupCode) === 'ADMIN';
        this.baseUrl = '';
        this.alert = {
            updateMessage: this.translate.instant(MessageConstants.UPDATE_MESSAGE),
            updateTitle: this.translate.instant(MessageConstants.UPDATE_TITLE),
            createMessage: this.translate.instant(MessageConstants.CREATE_MESSAGE),
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
        this.validationGrid = {
            requireField: 'This field is require.',
            textLength: 'Text Length',
        };
        this.editSettingsTree = { allowEditing: false, allowAdding: false, allowDeleting: false, newRowPosition: 'Child', mode: 'Row' };
        this.editSettings = { showDeleteConfirmDialog: false, allowEditing: false, allowAdding: false, allowDeleting: false, mode: 'Normal' };
        this.toolbarOptions = ['ExcelExport', 'Add', 'Edit', 'Delete', 'Cancel', 'Search'];
        this.toolbarOptionsTree = [
            'Add',
            'Delete',
            'Search',
            'ExpandAll',
            'CollapseAll',
            'ExcelExport'
        ];
        this.contextMenuItems = [
            {
                text: 'Add Child',
                iconCss: ' e-icons e-add',
                target: '.e-content',
                id: 'Add-Sub-Item'
            },
            {
                text: 'Delete',
                iconCss: ' e-icons e-delete',
                target: '.e-content',
                id: 'DeleteOC'
            }
        ];
        this.average = (nums) => {
            if (nums.length === 0)
                return 0;
            if (nums.length > 0 && nums) {
                nums = nums.filter(e => e !== null);
                if (nums.length === 0)
                    return 0;
                return nums.reduce((a, b) => (a + b)) / nums.length;
            }
            return 0;
        };
        this.total = (nums) => {
            if (nums.length === 0)
                return 0;
            if (nums.length > 0 && nums) {
                nums = nums.filter(e => e !== null);
                if (nums.length === 0)
                    return 0;
                return nums.reduce((a, b) => (a + b));
            }
            return 0;
        };
        this.baseUrl = url;
        let user = JSON.parse(localStorage.getItem('user'));
        let pageSize = Number(user === null || user === void 0 ? void 0 : user.pageSizeSettingValue) || 10;
        let pageSizesTemp = (user === null || user === void 0 ? void 0 : user.pageSizeSettingList) || ['5', '10', '12', '20'];
        let pageSizes = pageSizesTemp.map(x => {
            if (isNaN(+x))
                return x;
            return +x;
        });
        this.pageSettings = { pageSizes: pageSizes, enableQueryString: true, pageSize: pageSize, currentPage: 1, enableScroll: true };
        this.take = this.pageSettings.pageSize;
    }
    Permission(route) {
        const functionCode = route.snapshot.data.functionCode;
        this.functions = JSON.parse(localStorage.getItem('functions')).filter(x => x.functionCode === functionCode) || [];
        for (const item of this.functions) {
            const toolbarOptions = [];
            for (const action of item.childrens) {
                const optionItem = this.makeAction(action.code);
                toolbarOptions.push(...optionItem.filter(Boolean));
            }
            toolbarOptions.push('Search');
            const uniqueOptionItem = toolbarOptions.filter((elem, index, self) => {
                return index === self.indexOf(elem);
            });
            this.toolbarOptions = uniqueOptionItem;
        }
    }
    PermissionForTreeGrid(route) {
        this.contextMenuItems = [];
        this.functions = JSON.parse(localStorage.getItem('functions'));
        for (const item of this.functions) {
            if (route.snapshot.data.functionCode.includes(item.functionCode)) {
                const toolbarOptionsTree = [];
                for (const action of item.childrens) {
                    const optionItem = this.makeActionTreeGrid(action.code);
                    toolbarOptionsTree.push(...optionItem.filter(Boolean));
                }
                toolbarOptionsTree.push(...['Search',
                    'ExpandAll',
                    'CollapseAll',
                    'ExcelExport']);
                const uniqueOptionItem = toolbarOptionsTree.filter((elem, index, self) => {
                    return index === self.indexOf(elem);
                });
                this.toolbarOptionsTree = uniqueOptionItem;
                break;
            }
        }
    }
    // Đổi action code thanh action của ej2-grid
    makeAction(input) {
        switch (input) {
            case ActionConstant.CREATE:
                this.editSettings.allowAdding = true;
                return ['Add'];
            case ActionConstant.EDIT:
                this.editSettings.allowEditing = false;
                return [];
            case ActionConstant.DELETE:
                this.editSettings.allowDeleting = false;
                return [];
            case ActionConstant.EXCEL_EXPORT:
                return ['ExcelExport'];
            default:
                return [undefined];
        }
    }
    makeActionTreeGrid(input) {
        switch (input) {
            case ActionConstant.EXCEL_EXPORT:
                return ['ExcelExport'];
            case ActionConstant.CREATE:
                this.editSettingsTree.allowAdding = true;
                this.contextMenuItems.push({
                    text: 'Add Child',
                    iconCss: ' e-icons e-add',
                    target: '.e-content',
                    id: 'Add-Sub-Item'
                });
                return ['Add'];
            case ActionConstant.EDIT:
                this.editSettingsTree.allowEditing = false;
                return [undefined];
            case ActionConstant.DELETE:
                this.editSettingsTree.allowDeleting = false;
                this.contextMenuItems.push({
                    text: 'Delete',
                    iconCss: ' e-icons e-delete',
                    target: '.e-content',
                    id: 'DeleteOC'
                });
                return [undefined];
            default:
                return [undefined];
        }
    }
    convertDate(data) {
        if (data instanceof Date) {
            return data.toLocaleDateString();
        }
        return data;
    }
    visibledApply(model) {
        return !(model.id > 0) || !model.applyDate;
    }
    visibledAgree(model) {
        return model.id > 0 && !model.agreeGuid && model.status === this.statusConts.Default;
    }
    visibledReject(model) {
        return model.id > 0 && (model.status === this.statusConts.Agree || model.status === this.statusConts.Default);
    }
    visibledExecute(model) {
        return model.id > 0 && (model.status === this.statusConts.Agree || model.status === this.statusConts.Default);
    }
    visibledInventory(model) {
        return model.id > 0 && (model.status === this.statusConts.Agree || model.status === this.statusConts.Default);
    }
    visibledFinance(model) {
        return model.id > 0 && (model.status === this.statusConts.Agree || model.status === this.statusConts.Default);
    }
    disabledApplyReason(model) {
        return model.id > 0;
    }
    disabledAgreeReason(model) {
        return model.status === this.statusConts.Agree || model.status === this.statusConts.Execute || model.status === this.statusConts.Reject;
    }
    disabledRejectReason(model) {
        return model.status === this.statusConts.Agree || model.status === this.statusConts.Execute || model.status === this.statusConts.Reject;
    }
}

class BaseDetailComponent {
    constructor(translate, url) {
        this.translate = translate;
        this.url = url;
        this.globalLang = localStorage.getItem('lang');
        this.skip = 0;
        this.take = 10;
        this.baseUrl = '';
        this.alert = {
            updateMessage: MessageConstants.UPDATE_MESSAGE,
            updateTitle: MessageConstants.UPDATE_TITLE,
            createMessage: MessageConstants.CREATE_MESSAGE,
            createTitle: MessageConstants.CREATE_TITLE,
            deleteMessage: MessageConstants.DELETE_MESSAGE,
            deleteTitle: MessageConstants.DELETE_TITLE,
            cancelMessage: MessageConstants.CANCEL_MESSAGE,
            serverError: MessageConstants.SERVER_ERROR,
            deleted_ok_msg: MessageConstants.DELETED_OK_MSG,
            created_ok_msg: MessageConstants.CREATED_OK_MSG,
            updated_ok_msg: MessageConstants.UPDATED_OK_MSG,
            system_error_msg: MessageConstants.SYSTEM_ERROR_MSG,
            exist_message: MessageConstants.EXIST_MESSAGE,
            choose_farm_message: MessageConstants.CHOOSE_FARM_MESSAGE,
            select_order_message: MessageConstants.SELECT_ORDER_MESSAGE,
            yes_message: MessageConstants.YES_MSG,
            no_message: MessageConstants.NO_MSG,
        };
        this.validationGrid = {
            requireField: 'This field is require.',
            textLength: 'Text Length',
        };
        this.editSettingsTree = { allowEditing: false, allowAdding: false, allowDeleting: false, newRowPosition: 'Child', mode: 'Row' };
        this.editSettings = { showDeleteConfirmDialog: false, allowEditing: false, allowAdding: false, allowDeleting: false, mode: 'Normal' };
        this.toolbarOptions = ['ExcelExport', 'Add', 'Edit', 'Delete', 'Cancel', 'Search'];
        this.toolbarOptionsTree = [
            'Add',
            'Delete',
            'Search',
            'ExpandAll',
            'CollapseAll',
            'ExcelExport'
        ];
        this.contextMenuItems = [
            {
                text: 'Add Child',
                iconCss: ' e-icons e-add',
                target: '.e-content',
                id: 'Add-Sub-Item'
            },
            {
                text: 'Delete',
                iconCss: ' e-icons e-delete',
                target: '.e-content',
                id: 'DeleteOC'
            }
        ];
        this.baseUrl = url;
        this.getAlertTranslator();
    }
    Permission(route) {
        const functionCode = route.snapshot.data.functionCode;
        this.functions = JSON.parse(localStorage.getItem('functions')).filter(x => x.functionCode === functionCode) || [];
        for (const item of this.functions) {
            const toolbarOptions = [];
            for (const action of item.childrens) {
                const optionItem = this.makeAction(action.code);
                toolbarOptions.push(...optionItem.filter(Boolean));
            }
            toolbarOptions.push('Search');
            const uniqueOptionItem = toolbarOptions.filter((elem, index, self) => {
                return index === self.indexOf(elem);
            });
            this.toolbarOptions = uniqueOptionItem;
        }
    }
    PermissionForTreeGrid(route) {
        this.contextMenuItems = [];
        this.functions = JSON.parse(localStorage.getItem('functions'));
        for (const item of this.functions) {
            if (route.snapshot.data.functionCode.includes(item.functionCode)) {
                const toolbarOptionsTree = [];
                for (const action of item.childrens) {
                    const optionItem = this.makeActionTreeGrid(action.code);
                    toolbarOptionsTree.push(...optionItem.filter(Boolean));
                }
                toolbarOptionsTree.push(...['Search',
                    'ExpandAll',
                    'CollapseAll',
                    'ExcelExport']);
                const uniqueOptionItem = toolbarOptionsTree.filter((elem, index, self) => {
                    return index === self.indexOf(elem);
                });
                this.toolbarOptionsTree = uniqueOptionItem;
                break;
            }
        }
    }
    // Đổi action code thanh action của ej2-grid
    makeAction(input) {
        switch (input) {
            case ActionConstant.CREATE:
                this.editSettings.allowAdding = true;
                return ['Add'];
            case ActionConstant.EDIT:
                this.editSettings.allowEditing = false;
                return [];
            case ActionConstant.DELETE:
                this.editSettings.allowDeleting = false;
                return [];
            case ActionConstant.EXCEL_EXPORT:
                return ['ExcelExport'];
            default:
                return [undefined];
        }
    }
    makeActionTreeGrid(input) {
        switch (input) {
            case ActionConstant.EXCEL_EXPORT:
                return ['ExcelExport'];
            case ActionConstant.CREATE:
                this.editSettingsTree.allowAdding = true;
                this.contextMenuItems.push({
                    text: 'Add Child',
                    iconCss: ' e-icons e-add',
                    target: '.e-content',
                    id: 'Add-Sub-Item'
                });
                return ['Add'];
            case ActionConstant.EDIT:
                this.editSettingsTree.allowEditing = false;
                return [undefined];
            case ActionConstant.DELETE:
                this.editSettingsTree.allowDeleting = false;
                this.contextMenuItems.push({
                    text: 'Delete',
                    iconCss: ' e-icons e-delete',
                    target: '.e-content',
                    id: 'DeleteOC'
                });
                return [undefined];
            default:
                return [undefined];
        }
    }
    getAlertTranslator() {
        this.translate.get(this.alert.updateMessage).subscribe((res) => {
            if (res) {
                this.alert.updateMessage = res;
            }
        });
        this.translate.get(this.alert.updateTitle).subscribe((res) => {
            if (res) {
                this.alert.updateTitle = res;
            }
        });
        this.translate.get(this.alert.createMessage).subscribe((res) => {
            if (res) {
                this.alert.createMessage = res;
            }
        });
        this.translate.get(this.alert.createTitle).subscribe((res) => {
            if (res) {
                this.alert.createTitle = res;
            }
        });
        this.translate.get(this.alert.deleteMessage).subscribe((res) => {
            if (res) {
                this.alert.deleteMessage = res;
            }
        });
        this.translate.get(this.alert.deleteTitle).subscribe((res) => {
            if (res) {
                this.alert.deleteTitle = res;
            }
        });
        this.translate.get(this.alert.serverError).subscribe((res) => {
            if (res) {
                this.alert.serverError = res;
            }
        });
        this.translate.get(this.alert.cancelMessage).subscribe((res) => {
            if (res) {
                this.alert.cancelMessage = res;
            }
        });
        this.translate.get(this.alert.choose_farm_message).subscribe((res) => {
            if (res) {
                this.alert.choose_farm_message = res;
            }
        });
        this.translate.get(this.validationGrid.requireField).subscribe((res) => {
            if (res) {
                this.validationGrid.requireField = res;
            }
        });
        this.translate.get(this.validationGrid.textLength).subscribe((res) => {
            if (res) {
                this.validationGrid.textLength = res;
            }
        });
    }
}

class GiltInDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "giltin-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'inOutNo', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['inOutNo']);
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query()
            .where('status', 'lessthan', 99);
        this.data = new DataManager({
            url: `${this.baseUrl}GiltIn/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
GiltInDropdownlistComponent.ɵfac = function GiltInDropdownlistComponent_Factory(t) { return new (t || GiltInDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
GiltInDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GiltInDropdownlistComponent, selectors: [["app-gilt-in-dropdownlist"]], viewQuery: function GiltInDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c30, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["giltinRemote", ""]], template: function GiltInDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function GiltInDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function GiltInDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function GiltInDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function GiltInDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function GiltInDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function GiltInDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c2] });
GiltInDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
GiltInDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['giltinRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(GiltInDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-gilt-in-dropdownlist',
                template: "<ejs-dropdownlist\n  [id]=\"id\"\n  [(ngModel)]=\"selectedValue\"\n  (filtering)=\"onFiltering($event)\"\n  (change)=\"onChange($event)\"\n  (ngModelChange)=\"onNgModelChange($event)\"\n  [allowFiltering]=\"true\"\n  [disabled]=\"disabled\"\n  [placeholder]=\"placeholder\"\n  #giltinRemote\n  [dataSource]=\"data\"\n  [fields]=\"remoteFields\"\n  [query]=\"query\"\n  (open)=\"onOpen($event)\"\n  (actionComplete)=\"actionComplete($event)\"\n\n>\n\n</ejs-dropdownlist>\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['giltinRemote']
        }] }); })();

class BoarTestingDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "boartesting-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'guid', value: 'guid' };
        this.take = 10;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['guid']);
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query()
            .where('status', 'lessthan', 99);
        this.data = new DataManager({
            url: `${this.baseUrl}BoarTesting/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
BoarTestingDropdownlistComponent.ɵfac = function BoarTestingDropdownlistComponent_Factory(t) { return new (t || BoarTestingDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
BoarTestingDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BoarTestingDropdownlistComponent, selectors: [["app-boar-testing-dropdownlist"]], viewQuery: function BoarTestingDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c31, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["giltinRemote", ""]], template: function BoarTestingDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function BoarTestingDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function BoarTestingDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function BoarTestingDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function BoarTestingDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function BoarTestingDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function BoarTestingDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [""] });
BoarTestingDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
BoarTestingDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['boartestingRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BoarTestingDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-boar-testing-dropdownlist',
                template: "<ejs-dropdownlist\n  [id]=\"id\"\n  [(ngModel)]=\"selectedValue\"\n  (filtering)=\"onFiltering($event)\"\n  (change)=\"onChange($event)\"\n  (ngModelChange)=\"onNgModelChange($event)\"\n  [allowFiltering]=\"true\"\n  [disabled]=\"disabled\"\n  [placeholder]=\"placeholder\"\n  #giltinRemote\n  [dataSource]=\"data\"\n  [fields]=\"remoteFields\"\n  [query]=\"query\"\n  (open)=\"onOpen($event)\"\n  (actionComplete)=\"actionComplete($event)\"\n\n>\n\n</ejs-dropdownlist>\n",
                styles: [""]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['boartestingRemote']
        }] }); })();

class GiltinMakeorderDropdownlistComponent {
    constructor(baseUrl, trans, cd, service) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.cd = cd;
        this.service = service;
        this.id = "makeorder2-remote";
        this.selectedValue = '';
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.giltInGuidChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
    }
    ngOnDestroy() {
    }
    ngAfterViewChecked() {
        this.selectedValue = this.selectedValue || "";
        this.cd.detectChanges();
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        this.query = new Query()
            .where('farmGuid', 'equal', localStorage.getItem('farmGuid'));
        this.data = new DataManager({
            url: `${this.baseUrl}GiltIn/LoadDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
    }
    onChange(args) {
        var _a;
        this.change.emit(args);
        this.giltInGuidChange.emit((_a = args.itemData) === null || _a === void 0 ? void 0 : _a.giltInGuid);
        this.selectedValueChange.emit(args.value);
    }
}
GiltinMakeorderDropdownlistComponent.ɵfac = function GiltinMakeorderDropdownlistComponent_Factory(t) { return new (t || GiltinMakeorderDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(PigfarmCoreService)); };
GiltinMakeorderDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GiltinMakeorderDropdownlistComponent, selectors: [["app-giltin-makeorder-dropdownlist"]], viewQuery: function GiltinMakeorderDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c12, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", selectedValue: "selectedValue", placeholder: "placeholder", disabled: "disabled" }, outputs: { change: "change", giltInGuidChange: "giltInGuidChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 7, consts: [[3, "id", "value", "allowFiltering", "enabled", "placeholder", "dataSource", "fields", "valueChange", "change"], ["remote", ""]], template: function GiltinMakeorderDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("valueChange", function GiltinMakeorderDropdownlistComponent_Template_ejs_dropdownlist_valueChange_0_listener($event) { return ctx.selectedValue = $event; })("change", function GiltinMakeorderDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("value", ctx.selectedValue)("allowFiltering", true)("enabled", !ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields);
    } }, directives: [ɵngcc3.DropDownListComponent], styles: [_c10] });
GiltinMakeorderDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService },
    { type: ChangeDetectorRef },
    { type: PigfarmCoreService }
];
GiltinMakeorderDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    giltInGuidChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['remote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(GiltinMakeorderDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-giltin-makeorder-dropdownlist',
                template: "<ejs-dropdownlist\n  [id]=\"id\"\n  [(value)]=\"selectedValue\"\n  (change)=\"onChange($event)\"\n  [allowFiltering]=\"true\"\n  [enabled]=\"!disabled\"\n  [placeholder]=\"placeholder\"\n  #remote\n  [dataSource]=\"data\"\n  [fields]=\"remoteFields\"\n\n>\n\n</ejs-dropdownlist>\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }, { type: ɵngcc0.ChangeDetectorRef }, { type: PigfarmCoreService }]; }, { id: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], giltInGuidChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], dropdownObj: [{
            type: ViewChild,
            args: ['remote']
        }] }); })();

class BomGiltDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "BomGilt-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, 'name');
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query()
            .skip(this.skip)
            .take(this.take)
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}BomGilt/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
BomGiltDropdownlistComponent.ɵfac = function BomGiltDropdownlistComponent_Factory(t) { return new (t || BomGiltDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
BomGiltDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BomGiltDropdownlistComponent, selectors: [["app-bom-gilt-dropdownlist"]], viewQuery: function BomGiltDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c32, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["BomGiltRemote", ""]], template: function BomGiltDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function BomGiltDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function BomGiltDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function BomGiltDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function BomGiltDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function BomGiltDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function BomGiltDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c10] });
BomGiltDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
BomGiltDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['BomGiltRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BomGiltDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-bom-gilt-dropdownlist',
                template: "<ejs-dropdownlist\n  [id]=\"id\"\n  [(ngModel)]=\"selectedValue\"\n  (filtering)=\"onFiltering($event)\"\n  (change)=\"onChange($event)\"\n  (ngModelChange)=\"onNgModelChange($event)\"\n  [allowFiltering]=\"true\"\n  [disabled]=\"disabled\"\n  [placeholder]=\"placeholder\"\n  #BomGiltRemote\n  [dataSource]=\"data\"\n  [fields]=\"remoteFields\"\n  [query]=\"query\"\n  (open)=\"onOpen($event)\"\n  (actionComplete)=\"actionComplete($event)\"\n\n>\n\n</ejs-dropdownlist>\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['BomGiltRemote']
        }] }); })();

class BomBoarDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "BomBoar-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, 'name');
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query()
            .skip(this.skip)
            .take(this.take)
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}BomBoar/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
BomBoarDropdownlistComponent.ɵfac = function BomBoarDropdownlistComponent_Factory(t) { return new (t || BomBoarDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
BomBoarDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BomBoarDropdownlistComponent, selectors: [["app-bom-boar-dropdownlist"]], viewQuery: function BomBoarDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c33, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["BomBoarRemote", ""]], template: function BomBoarDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function BomBoarDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function BomBoarDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function BomBoarDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function BomBoarDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function BomBoarDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function BomBoarDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c10] });
BomBoarDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
BomBoarDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['BomBoarRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BomBoarDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-bom-boar-dropdownlist',
                template: "<ejs-dropdownlist\n  [id]=\"id\"\n  [(ngModel)]=\"selectedValue\"\n  (filtering)=\"onFiltering($event)\"\n  (change)=\"onChange($event)\"\n  (ngModelChange)=\"onNgModelChange($event)\"\n  [allowFiltering]=\"true\"\n  [disabled]=\"disabled\"\n  [placeholder]=\"placeholder\"\n  #BomBoarRemote\n  [dataSource]=\"data\"\n  [fields]=\"remoteFields\"\n  [query]=\"query\"\n  (open)=\"onOpen($event)\"\n  (actionComplete)=\"actionComplete($event)\"\n\n>\n\n</ejs-dropdownlist>\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['BomBoarRemote']
        }] }); })();

class RecordSaleDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "record-sale-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'salesOrderName', value: 'guid' };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['salesOrderName', 'salesOrderNo']);
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
        console.log(e);
    }
    ngOnInit() {
        this.query = new Query();
        this.data = new DataManager({
            url: `${this.baseUrl}RecordSale/GetDataDropdownlist?lang=${localStorage.getItem('lang')}&farmGuid=${localStorage.getItem('farmGuid')}`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        console.log(this.selectedValue);
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
RecordSaleDropdownlistComponent.ɵfac = function RecordSaleDropdownlistComponent_Factory(t) { return new (t || RecordSaleDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
RecordSaleDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RecordSaleDropdownlistComponent, selectors: [["app-record-sale-dropdownlist"]], viewQuery: function RecordSaleDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c34, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["recordSaleRemote", ""]], template: function RecordSaleDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function RecordSaleDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function RecordSaleDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function RecordSaleDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function RecordSaleDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function RecordSaleDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function RecordSaleDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c10] });
RecordSaleDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
RecordSaleDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['recordSaleRemote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(RecordSaleDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-record-sale-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #recordSaleRemote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px!important;padding:3px!important}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['recordSaleRemote']
        }] }); })();

class ParkinglotDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "site-remote";
        this.placeholder = "";
        this.disabled = false;
        this.enabledLoad = true;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueName = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: "name", value: "guid" };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === "") {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query
                    .clone()
                    .search(e.text, ["parkingLotNo", "parkingLotName"]);
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) { }
    ngOnInit() { }
    loadData() {
        this.query = new Query().where("status", "equal", 1);
        if (this.siteGuid) {
            this.query.where("siteGuid", "equal", this.siteGuid);
        }
        this.data = new DataManager({
            url: `${this.baseUrl}ParkingLot/GetDataDropdownlist`,
            adaptor: new UrlAdaptor(),
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        var _a;
        // only run when property "data" changed
        if (changes["selectedValue"]) {
            this.selectedValueChange.emit(this.selectedValue);
        }
        this.selectedValue = this.selectedValue || "";
        if (changes["siteGuid"] && changes["siteGuid"].currentValue) {
            this.loadData();
        }
        if (changes["enabledLoad"] && changes["enabledLoad"].currentValue == true && !((_a = changes["siteGuid"]) === null || _a === void 0 ? void 0 : _a.currentValue)) {
            this.loadData();
        }
    }
    onChange(args) {
        this.change.emit(args);
        this.selectedValueName.emit(args.itemData.name || "");
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
ParkinglotDropdownlistComponent.ɵfac = function ParkinglotDropdownlistComponent_Factory(t) { return new (t || ParkinglotDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
ParkinglotDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ParkinglotDropdownlistComponent, selectors: [["app-parkinglot-dropdownlist"]], viewQuery: function ParkinglotDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c12, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", enabledLoad: "enabledLoad", selectedValue: "selectedValue", siteGuid: "siteGuid" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueName: "selectedValueName", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["remote", ""]], template: function ParkinglotDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function ParkinglotDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function ParkinglotDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function ParkinglotDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function ParkinglotDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function ParkinglotDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function ParkinglotDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c2] });
ParkinglotDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
ParkinglotDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    siteGuid: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    enabledLoad: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueName: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ["remote",] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ParkinglotDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: "app-parkinglot-dropdownlist",
                template: "<ejs-dropdownlist\n  [id]=\"id\"\n  [(ngModel)]=\"selectedValue\"\n  (filtering)=\"onFiltering($event)\"\n  (change)=\"onChange($event)\"\n  (ngModelChange)=\"onNgModelChange($event)\"\n  [allowFiltering]=\"true\"\n  [disabled]=\"disabled\"\n  [placeholder]=\"placeholder\"\n  #remote\n  [dataSource]=\"data\"\n  [fields]=\"remoteFields\"\n  [query]=\"query\"\n  (open)=\"onOpen($event)\"\n  (actionComplete)=\"actionComplete($event)\"\n\n>\n\n</ejs-dropdownlist>\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], enabledLoad: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueName: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], siteGuid: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ["remote"]
        }] }); })();

class LandlordDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "landlord-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueName = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'landLordName', value: 'guid' };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['landLordNo', 'landLordName']);
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
    }
    ngOnInit() {
        this.query = new Query()
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}Landlord/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        // only run when property "data" changed
        if (changes['selectedValue']) {
            this.selectedValueChange.emit(this.selectedValue);
        }
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
        this.selectedValueName.emit(args.itemData.name || '');
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
LandlordDropdownlistComponent.ɵfac = function LandlordDropdownlistComponent_Factory(t) { return new (t || LandlordDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
LandlordDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LandlordDropdownlistComponent, selectors: [["app-landlord-dropdownlist"]], viewQuery: function LandlordDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c12, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueName: "selectedValueName", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["remote", ""]], template: function LandlordDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function LandlordDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function LandlordDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function LandlordDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function LandlordDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function LandlordDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function LandlordDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c2] });
LandlordDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
LandlordDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueName: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['remote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LandlordDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-landlord-dropdownlist',
                template: "<ejs-dropdownlist\n  [id]=\"id\"\n  [(ngModel)]=\"selectedValue\"\n  (filtering)=\"onFiltering($event)\"\n  (change)=\"onChange($event)\"\n  (ngModelChange)=\"onNgModelChange($event)\"\n  [allowFiltering]=\"true\"\n  [disabled]=\"disabled\"\n  [placeholder]=\"placeholder\"\n  #remote\n  [dataSource]=\"data\"\n  [fields]=\"remoteFields\"\n  [query]=\"query\"\n  (open)=\"onOpen($event)\"\n  (actionComplete)=\"actionComplete($event)\"\n\n>\n\n</ejs-dropdownlist>\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueName: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['remote']
        }] }); })();

class PigfarmRichtexteditorComponent {
    constructor() { }
    ngOnInit() {
    }
}
PigfarmRichtexteditorComponent.ɵfac = function PigfarmRichtexteditorComponent_Factory(t) { return new (t || PigfarmRichtexteditorComponent)(); };
PigfarmRichtexteditorComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PigfarmRichtexteditorComponent, selectors: [["pigfarm-richtexteditor"]], decls: 4, vars: 0, consts: [["id", "defaultRTE"], ["defaultRTE", ""], ["valueTemplate", ""]], template: function PigfarmRichtexteditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-richtexteditor", 0, 1);
        ɵngcc0.ɵɵtemplate(2, PigfarmRichtexteditorComponent_ng_template_2_Template, 36, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
    } }, directives: [ɵngcc10.RichTextEditorComponent], styles: [""] });
PigfarmRichtexteditorComponent.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PigfarmRichtexteditorComponent, [{
        type: Component,
        args: [{
                selector: 'pigfarm-richtexteditor',
                template: "<ejs-richtexteditor #defaultRTE id='defaultRTE'>\n  <ng-template #valueTemplate>\n      <p>The Rich Text Editor component is WYSIWYG (\"what you see is what you get\") editor\n      that provides the best user experience to create and update the content.\n      Users can format their content using standard toolbar commands.</p>\n\n      <p><b>Key features:</b></p>\n\n      <ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li>\n      <li><p>Capable of handling markdown editing.</p></li>\n      <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>\n      <li><p>Provides a fully customizable toolbar.</p></li>\n      <li><p>Provides HTML view to edit the source directly for developers.</p></li>\n      <li><p>Supports third-party library integration.</p></li>\n      <li><p>Allows preview of modified content before saving it.</p></li>\n      <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>\n      <li><p>Contains undo/redo manager.</p></li>\n      <li><p>Creates bulleted and numbered lists.</p></li>\n      </ul>\n  </ng-template>\n  </ejs-richtexteditor>",
                styles: [""]
            }]
    }], function () { return []; }, null); })();

class BankDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "landlord-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueName = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'bankName', value: 'guid' };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['bankNo', 'bankName']);
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
    }
    ngOnInit() {
        this.query = new Query();
        this.data = new DataManager({
            url: `${this.baseUrl}Bank/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        // only run when property "data" changed
        if (changes['selectedValue']) {
            this.selectedValueChange.emit(this.selectedValue);
        }
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
        this.selectedValueName.emit(args.itemData.name || '');
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
BankDropdownlistComponent.ɵfac = function BankDropdownlistComponent_Factory(t) { return new (t || BankDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
BankDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BankDropdownlistComponent, selectors: [["app-bank-dropdownlist"]], viewQuery: function BankDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c12, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueName: "selectedValueName", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["remote", ""]], template: function BankDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function BankDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function BankDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function BankDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function BankDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function BankDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function BankDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c2] });
BankDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
BankDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueName: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['remote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BankDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-bank-dropdownlist',
                template: "<ejs-dropdownlist\n  [id]=\"id\"\n  [(ngModel)]=\"selectedValue\"\n  (filtering)=\"onFiltering($event)\"\n  (change)=\"onChange($event)\"\n  (ngModelChange)=\"onNgModelChange($event)\"\n  [allowFiltering]=\"true\"\n  [disabled]=\"disabled\"\n  [placeholder]=\"placeholder\"\n  #remote\n  [dataSource]=\"data\"\n  [fields]=\"remoteFields\"\n  [query]=\"query\"\n  (open)=\"onOpen($event)\"\n  (actionComplete)=\"actionComplete($event)\"\n\n>\n\n</ejs-dropdownlist>\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueName: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['remote']
        }] }); })();

class DeviceDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "device-remote";
        this.placeholder = "";
        this.disabled = false;
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueName = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: 'name', value: 'guid' };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query.clone().search(e.text, ['deviceNo', 'deviceName']);
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) {
    }
    ngOnInit() {
        this.query = new Query()
            .where('status', 'equal', 1);
        this.data = new DataManager({
            url: `${this.baseUrl}Device/GetDataDropdownlist`,
            adaptor: new UrlAdaptor,
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        // only run when property "data" changed
        if (changes['selectedValue']) {
            this.selectedValueChange.emit(this.selectedValue);
        }
        this.selectedValue = this.selectedValue || "";
    }
    onChange(args) {
        this.change.emit(args);
        this.selectedValueName.emit(args.itemData.name || '');
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
DeviceDropdownlistComponent.ɵfac = function DeviceDropdownlistComponent_Factory(t) { return new (t || DeviceDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
DeviceDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DeviceDropdownlistComponent, selectors: [["app-device-dropdownlist"]], viewQuery: function DeviceDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c12, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueName: "selectedValueName", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["remote", ""]], template: function DeviceDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function DeviceDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function DeviceDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function DeviceDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function DeviceDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function DeviceDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function DeviceDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c2] });
DeviceDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
DeviceDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueName: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ['remote',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DeviceDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: 'app-device-dropdownlist',
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #remote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueName: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ['remote']
        }] }); })();

class SiteDropdownlistComponent {
    constructor(baseUrl, trans) {
        this.baseUrl = baseUrl;
        this.trans = trans;
        this.id = "site-remote";
        this.placeholder = "";
        this.disabled = false;
        this.enabledLoad = true;
        this.landlordGuid = "";
        this.change = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.selectedValueName = new EventEmitter();
        this.selectedValueChange = new EventEmitter();
        this.remoteFields = { text: "name", value: "guid" };
        this.take = 100;
        this.skip = 0;
        this.onFiltering = (e) => {
            if (e.text === "") {
                e.updateData(this.data);
            }
            else {
                const query = this.dropdownObj.query
                    .clone()
                    .search(e.text, ["siteNo", "siteName"]);
                e.updateData(this.data, query);
            }
        };
    }
    onOpen(args) {
        // let start: number = this.take;
        // let end: number = 5;
        // let listElement: HTMLElement = (this.dropdownObj as any).list;
        // listElement.addEventListener('scroll', () => {
        //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
        //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {
        //     let filterQuery = this.dropdownObj.query.clone();
        //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
        //       start = end;
        //       end += 5;
        //       // const unique = [...new Set(event.result.map(item => item.group))];
        //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
        //     }).catch((e: Object) => {
        //     });
        //   }
        // })
    }
    actionComplete(e) { }
    ngOnInit() { }
    loadData() {
        this.query = new Query().where("status", "equal", 1);
        if (this.landlordGuid) {
            this.query.where("landlordGuid", "equal", this.landlordGuid);
        }
        this.data = new DataManager({
            url: `${this.baseUrl}Site/GetDataDropdownlist`,
            adaptor: new UrlAdaptor(),
            crossDomain: true,
        }, this.query);
    }
    ngOnChanges(changes) {
        var _a;
        // only run when property "data" changed
        if (changes["selectedValue"]) {
            this.selectedValueChange.emit(this.selectedValue);
        }
        this.selectedValue = this.selectedValue || "";
        if (changes["landlordGuid"] && changes["landlordGuid"].currentValue) {
            this.loadData();
        }
        if (changes["enabledLoad"] && changes["enabledLoad"].currentValue == true && !((_a = changes["landlordGuid"]) === null || _a === void 0 ? void 0 : _a.currentValue)) {
            this.loadData();
        }
    }
    onChange(args) {
        this.change.emit(args);
        this.selectedValueName.emit(args.itemData.name || "");
    }
    onNgModelChange(value) {
        this.ngModelChange.emit(value);
        this.selectedValueChange.emit(value);
    }
}
SiteDropdownlistComponent.ɵfac = function SiteDropdownlistComponent_Factory(t) { return new (t || SiteDropdownlistComponent)(ɵngcc0.ɵɵdirectiveInject("Env"), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService)); };
SiteDropdownlistComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SiteDropdownlistComponent, selectors: [["app-site-dropdownlist"]], viewQuery: function SiteDropdownlistComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c12, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownObj = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", disabled: "disabled", enabledLoad: "enabledLoad", landlordGuid: "landlordGuid", selectedValue: "selectedValue" }, outputs: { change: "change", ngModelChange: "ngModelChange", selectedValueName: "selectedValueName", selectedValueChange: "selectedValueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "id", "ngModel", "allowFiltering", "disabled", "placeholder", "dataSource", "fields", "query", "ngModelChange", "filtering", "change", "open", "actionComplete"], ["remote", ""]], template: function SiteDropdownlistComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ejs-dropdownlist", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function SiteDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("filtering", function SiteDropdownlistComponent_Template_ejs_dropdownlist_filtering_0_listener($event) { return ctx.onFiltering($event); })("change", function SiteDropdownlistComponent_Template_ejs_dropdownlist_change_0_listener($event) { return ctx.onChange($event); })("ngModelChange", function SiteDropdownlistComponent_Template_ejs_dropdownlist_ngModelChange_0_listener($event) { return ctx.onNgModelChange($event); })("open", function SiteDropdownlistComponent_Template_ejs_dropdownlist_open_0_listener($event) { return ctx.onOpen($event); })("actionComplete", function SiteDropdownlistComponent_Template_ejs_dropdownlist_actionComplete_0_listener($event) { return ctx.actionComplete($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.selectedValue)("allowFiltering", true)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("dataSource", ctx.data)("fields", ctx.remoteFields)("query", ctx.query);
    } }, directives: [ɵngcc3.DropDownListComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [_c2] });
SiteDropdownlistComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: TranslateService }
];
SiteDropdownlistComponent.propDecorators = {
    id: [{ type: Input }],
    selectedValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    enabledLoad: [{ type: Input }],
    landlordGuid: [{ type: Input }],
    change: [{ type: Output }],
    ngModelChange: [{ type: Output }],
    selectedValueName: [{ type: Output }],
    selectedValueChange: [{ type: Output }],
    dropdownObj: [{ type: ViewChild, args: ["remote",] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SiteDropdownlistComponent, [{
        type: Component,
        args: [{
                selector: "app-site-dropdownlist",
                template: "<ejs-dropdownlist\r\n  [id]=\"id\"\r\n  [(ngModel)]=\"selectedValue\"\r\n  (filtering)=\"onFiltering($event)\"\r\n  (change)=\"onChange($event)\"\r\n  (ngModelChange)=\"onNgModelChange($event)\"\r\n  [allowFiltering]=\"true\"\r\n  [disabled]=\"disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  #remote\r\n  [dataSource]=\"data\"\r\n  [fields]=\"remoteFields\"\r\n  [query]=\"query\"\r\n  (open)=\"onOpen($event)\"\r\n  (actionComplete)=\"actionComplete($event)\"\r\n\r\n>\r\n\r\n</ejs-dropdownlist>\r\n",
                styles: [".e-input-group{box-shadow:.5px .5px 1px;padding:3px}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc2.TranslateService }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], enabledLoad: [{
            type: Input
        }], landlordGuid: [{
            type: Input
        }], change: [{
            type: Output
        }], ngModelChange: [{
            type: Output
        }], selectedValueName: [{
            type: Output
        }], selectedValueChange: [{
            type: Output
        }], selectedValue: [{
            type: Input
        }], dropdownObj: [{
            type: ViewChild,
            args: ["remote"]
        }] }); })();

const commponents = [
    PigDropdownlistComponent,
    PenDropdownlistComponent,
    RoomDropdownlistComponent,
    CodeTypeDropdownlistComponent,
    FarmDropdownlistComponent,
    FeedDropdownlistComponent,
    MaterialDropdownlistComponent,
    MaskedtimetextboxComponent,
    DiseaseDropdownlistComponent,
    MedicineDropdownlistComponent,
    BomDropdownlistComponent,
    CustomerDropdownlistComponent,
    VectorControlDropdownlistComponent,
    DisinfectionDropdownlistComponent,
    CullingTankDropdownlistComponent,
    PenDropdownlistModalComponent,
    MyCheckboxComponent,
    ThingDropdownlistComponent,
    AccountDropdownlistComponent,
    MultiPigGridComponent,
    Record2RoomComponent,
    Record2PenComponent,
    PenMultiselectComponent,
    MakeorderDropdownlistComponent,
    AreaDropdownlistComponent,
    BarnDropdownlistComponent,
    SelectedpigGridComponent,
    TreatmentDropdownlistComponent,
    MakeorderDropdownlistToolbarComponent,
    XaccountGroupComponent,
    RecordsaleDropdownlistComponent,
    SemenDropdownlistComponent,
    BreedingDropdownlistComponent,
    DynamicGridComponent,
    BreedingDropdownlistToolbarComponent,
    CustomerDropdownlistToolbarComponent,
    UploadMultiDocumentComponent,
    Breeding2SowinDropdownlistComponent,
    UploadDocumentComponent,
    GiltInDropdownlistComponent,
    BoarTestingDropdownlistComponent,
    GiltinMakeorderDropdownlistComponent,
    BomBoarDropdownlistComponent,
    BomGiltDropdownlistComponent,
    RecordSaleDropdownlistComponent,
    SiteDropdownlistComponent,
    DeviceDropdownlistComponent,
    PigfarmRichtexteditorComponent,
    LandlordDropdownlistComponent,
    BankDropdownlistComponent,
    ParkinglotDropdownlistComponent
];
class PigfarmCoreModule {
    static forRoot(environment) {
        return {
            ngModule: PigfarmCoreModule,
            providers: [
                EditService,
                PigfarmCoreService,
                AlertifyService,
                { provide: 'Env', useValue: environment }
            ]
        };
    }
}
PigfarmCoreModule.ɵfac = function PigfarmCoreModule_Factory(t) { return new (t || PigfarmCoreModule)(); };
PigfarmCoreModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PigfarmCoreModule });
PigfarmCoreModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ providers: [
        EditService,
        PigfarmCoreService,
        AlertifyService
    ], imports: [[
            DropDownListModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MaskedTextBoxModule,
            CheckBoxAllModule,
            TranslateModule,
            GridAllModule,
            MultiSelectAllModule,
            DatePickerAllModule,
            ComboBoxModule,
            UploaderModule,
            RichTextEditorAllModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PigfarmCoreModule, { declarations: function () { return [PigDropdownlistComponent, PenDropdownlistComponent, RoomDropdownlistComponent, CodeTypeDropdownlistComponent, FarmDropdownlistComponent, FeedDropdownlistComponent, MaterialDropdownlistComponent, MaskedtimetextboxComponent, DiseaseDropdownlistComponent, MedicineDropdownlistComponent, BomDropdownlistComponent, CustomerDropdownlistComponent, VectorControlDropdownlistComponent, DisinfectionDropdownlistComponent, CullingTankDropdownlistComponent, PenDropdownlistModalComponent, MyCheckboxComponent, ThingDropdownlistComponent, AccountDropdownlistComponent, MultiPigGridComponent, Record2RoomComponent, Record2PenComponent, PenMultiselectComponent, MakeorderDropdownlistComponent, AreaDropdownlistComponent, BarnDropdownlistComponent, SelectedpigGridComponent, TreatmentDropdownlistComponent, MakeorderDropdownlistToolbarComponent, XaccountGroupComponent, RecordsaleDropdownlistComponent, SemenDropdownlistComponent, BreedingDropdownlistComponent, DynamicGridComponent, BreedingDropdownlistToolbarComponent, CustomerDropdownlistToolbarComponent, UploadMultiDocumentComponent, Breeding2SowinDropdownlistComponent, UploadDocumentComponent, GiltInDropdownlistComponent, BoarTestingDropdownlistComponent, GiltinMakeorderDropdownlistComponent, BomBoarDropdownlistComponent, BomGiltDropdownlistComponent, RecordSaleDropdownlistComponent, SiteDropdownlistComponent, DeviceDropdownlistComponent, PigfarmRichtexteditorComponent, LandlordDropdownlistComponent, BankDropdownlistComponent, ParkinglotDropdownlistComponent]; }, imports: function () { return [DropDownListModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaskedTextBoxModule,
        CheckBoxAllModule,
        TranslateModule,
        GridAllModule,
        MultiSelectAllModule,
        DatePickerAllModule,
        ComboBoxModule,
        UploaderModule,
        RichTextEditorAllModule]; }, exports: function () { return [PigDropdownlistComponent, PenDropdownlistComponent, RoomDropdownlistComponent, CodeTypeDropdownlistComponent, FarmDropdownlistComponent, FeedDropdownlistComponent, MaterialDropdownlistComponent, MaskedtimetextboxComponent, DiseaseDropdownlistComponent, MedicineDropdownlistComponent, BomDropdownlistComponent, CustomerDropdownlistComponent, VectorControlDropdownlistComponent, DisinfectionDropdownlistComponent, CullingTankDropdownlistComponent, PenDropdownlistModalComponent, MyCheckboxComponent, ThingDropdownlistComponent, AccountDropdownlistComponent, MultiPigGridComponent, Record2RoomComponent, Record2PenComponent, PenMultiselectComponent, MakeorderDropdownlistComponent, AreaDropdownlistComponent, BarnDropdownlistComponent, SelectedpigGridComponent, TreatmentDropdownlistComponent, MakeorderDropdownlistToolbarComponent, XaccountGroupComponent, RecordsaleDropdownlistComponent, SemenDropdownlistComponent, BreedingDropdownlistComponent, DynamicGridComponent, BreedingDropdownlistToolbarComponent, CustomerDropdownlistToolbarComponent, UploadMultiDocumentComponent, Breeding2SowinDropdownlistComponent, UploadDocumentComponent, GiltInDropdownlistComponent, BoarTestingDropdownlistComponent, GiltinMakeorderDropdownlistComponent, BomBoarDropdownlistComponent, BomGiltDropdownlistComponent, RecordSaleDropdownlistComponent, SiteDropdownlistComponent, DeviceDropdownlistComponent, PigfarmRichtexteditorComponent, LandlordDropdownlistComponent, BankDropdownlistComponent, ParkinglotDropdownlistComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PigfarmCoreModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ...commponents
                ],
                imports: [
                    DropDownListModule,
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MaskedTextBoxModule,
                    CheckBoxAllModule,
                    TranslateModule,
                    GridAllModule,
                    MultiSelectAllModule,
                    DatePickerAllModule,
                    ComboBoxModule,
                    UploaderModule,
                    RichTextEditorAllModule,
                ],
                exports: [
                    ...commponents,
                ],
                providers: [
                    EditService,
                    PigfarmCoreService,
                    AlertifyService
                ]
            }]
    }], null, null); })();

class CURDService extends BaseService {
    //#endregion
    //#region Ctor
    constructor(env, http, entity, utilitiesService) {
        super();
        this.env = env;
        this.http = http;
        this.entity = entity;
        this.utilitiesService = utilitiesService;
        this.audits = ["updateDate", "createDate", "deleteDate", "lastLoginDate"];
        this.base = this.env;
        //#region Field
        this._sharedHeaders = new HttpHeaders();
        this._sharedHeaders = this._sharedHeaders.set("Content-Type", "application/json");
    }
    //#endregion
    //#region LoadData
    getAll() {
        return this.http
            .get(`${this.base}${this.entity}/getall`, {})
            .pipe(catchError(this.handleError));
    }
    getById(id) {
        return this.http
            .get(`${this.base}${this.entity}/getById?id=${id}`, {})
            .pipe(catchError(this.handleError));
    }
    //#endregion
    //#region Action
    insertWithFormData(model) {
        const params = this.utilitiesService.ToFormData(model);
        return this.http
            .post(`${this.base}${this.entity}/insert`, params)
            .pipe(catchError(this.handleError));
    }
    updateWithFormData(model) {
        const params = this.utilitiesService.ToFormData(model);
        return this.http
            .put(`${this.base}${this.entity}/update`, params)
            .pipe(catchError(this.handleError));
    }
    add(model) {
        for (const audit of this.audits) {
            let value2 = model[audit];
            if (value2 instanceof Date) {
                model[audit] = `${value2.toLocaleDateString()} ${value2.toLocaleTimeString("en-GB")}`;
            }
        }
        return this.http.post(`${this.base}${this.entity}/add`, model);
    }
    addRange(model) {
        for (const audit of this.audits) {
            for (const ml of model) {
                let value2 = model[audit];
                if (value2 instanceof Date) {
                    model[audit] = `${value2.toLocaleDateString()} ${value2.toLocaleTimeString("en-GB")}`;
                }
            }
        }
        return this.http
            .post(`${this.base}${this.entity}/addRange`, model)
            .pipe(catchError(this.handleError));
    }
    updateRange(model) {
        for (const audit of this.audits) {
            for (const ml of model) {
                let value2 = model[audit];
                if (value2 instanceof Date) {
                    model[audit] = `${value2.toLocaleDateString()} ${value2.toLocaleTimeString("en-GB")}`;
                }
            }
        }
        return this.http
            .put(`${this.base}${this.entity}/updateRange`, model)
            .pipe(catchError(this.handleError));
    }
    update(model) {
        for (const audit of this.audits) {
            let value2 = model[audit];
            if (value2 instanceof Date) {
                model[audit] = `${value2.toLocaleDateString()} ${value2.toLocaleTimeString("en-GB")}`;
            }
        }
        return this.http.put(`${this.base}${this.entity}/update`, model);
    }
    updatestatus(id) {
        return this.http
            .put(`${this.base}${this.entity}/updatestatus?id=${id}`, {})
            .pipe(catchError(this.handleError));
    }
    delete(id) {
        return this.http.delete(`${this.base}${this.entity}/delete?id=${id}`);
    }
    deleterange(ids) {
        let query = "";
        for (const id of ids) {
            query += `id=${id}&`;
        }
        return this.http
            .delete(`${this.base}${this.entity}/deleterange?${query}`)
            .pipe(catchError(this.handleError));
    }
    //#endregion
    getAudit(id) {
        return this.http.get(`${this.base}${this.entity}/GetAudit?id=${id}`, {});
    }
    downloadODSFile(model) {
        const params = this.utilitiesService.ToFormData(model);
        return this.http.post(`${this.base}Files/ExcelExportToDOS`, params, {
            responseType: "blob",
            observe: "response",
        });
    }
    downloadExcelFile(recordGuid) {
        return this.http.get(`${this.base}Files/DownloadTemplateFile?recordGuid=${recordGuid}`, {
            responseType: "blob",
            observe: "response",
        });
    }
    excelExportRecordSale(p) {
        return this.http.post(`${this.base}Files/ExcelExportRecordSale`, p, {
            responseType: "blob",
            observe: "response",
        });
    }
    downloadBlob(data, fileName, mimeType) {
        var blob, url;
        blob = new Blob([data], {
            type: mimeType,
        });
        url = window.URL.createObjectURL(blob);
        var a;
        a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.style = "display: none";
        a.click();
        a.remove();
        setTimeout(function () {
            return window.URL.revokeObjectURL(url);
        }, 1000);
    }
}
CURDService.ɵfac = function CURDService_Factory(t) { return new (t || CURDService)(ɵngcc0.ɵɵinject("Env"), ɵngcc0.ɵɵinject(ɵngcc1.HttpClient), ɵngcc0.ɵɵinject(String), ɵngcc0.ɵɵinject(UtilitiesService)); };
CURDService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CURDService, factory: CURDService.ɵfac });
CURDService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["Env",] }] },
    { type: HttpClient },
    { type: String, decorators: [{ type: Inject, args: [String,] }] },
    { type: UtilitiesService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CURDService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["Env"]
            }] }, { type: ɵngcc1.HttpClient }, { type: String, decorators: [{
                type: Inject,
                args: [String]
            }] }, { type: UtilitiesService }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AccountDropdownlistComponent, AlertifyService, AreaDropdownlistComponent, BankDropdownlistComponent, BarnDropdownlistComponent, BaseComponent, BaseDetailComponent, BaseService, BoarTestingDropdownlistComponent, BomBoarDropdownlistComponent, BomDropdownlistComponent, BomGiltDropdownlistComponent, Breeding2SowinDropdownlistComponent, BreedingDropdownlistComponent, BreedingDropdownlistToolbarComponent, CURDService, CodeTypeDropdownlistComponent, CullingTankDropdownlistComponent, CustomerDropdownlistComponent, CustomerDropdownlistToolbarComponent, DeviceDropdownlistComponent, DiseaseDropdownlistComponent, DisinfectionDropdownlistComponent, DynamicGridComponent, FarmDropdownlistComponent, FeedDropdownlistComponent, GiltInDropdownlistComponent, GiltinMakeorderDropdownlistComponent, LandlordDropdownlistComponent, MakeorderDropdownlistComponent, MakeorderDropdownlistToolbarComponent, MaskedtimetextboxComponent, MaterialDropdownlistComponent, MedicineDropdownlistComponent, MultiPigGridComponent, MyCheckboxComponent, ParkinglotDropdownlistComponent, PenDropdownlistComponent, PenDropdownlistModalComponent, PenMultiselectComponent, PigDropdownlistComponent, PigfarmCoreModule, PigfarmCoreService, PigfarmRichtexteditorComponent, Record2PenComponent, Record2RoomComponent, RecordSaleDropdownlistComponent, RecordsaleDropdownlistComponent, RoomDropdownlistComponent, SelectedpigGridComponent, SemenDropdownlistComponent, SiteDropdownlistComponent, ThingDropdownlistComponent, TreatmentDropdownlistComponent, UploadDocumentComponent, UploadMultiDocumentComponent, UtilitiesService, VectorControlDropdownlistComponent, XaccountGroupComponent, PigfarmCoreService as ɵa, UploadDocumentComponent as ɵb, BoarTestingDropdownlistComponent as ɵc, GiltinMakeorderDropdownlistComponent as ɵd, BomBoarDropdownlistComponent as ɵe, BomGiltDropdownlistComponent as ɵf, RecordSaleDropdownlistComponent as ɵg, AlertifyService as ɵh, UtilitiesService as ɵi };

//# sourceMappingURL=pigfarm-core.js.map