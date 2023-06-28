import { Query } from '@syncfusion/ej2-data';
import { OnInit, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TranslateService } from '@ngx-translate/core';
import { PigfarmCoreService } from '../../../services';
import * as ɵngcc0 from '@angular/core';
export declare class MakeorderDropdownlistToolbarComponent implements OnInit, OnChanges, AfterViewChecked {
    private baseUrl;
    trans: TranslateService;
    private cd;
    service: PigfarmCoreService;
    id: string;
    selectedValue: any;
    placeholder: string;
    popupWidth: any;
    popupHeight: string;
    disabled: boolean;
    change: EventEmitter<any>;
    selectedValueChange: EventEmitter<any>;
    dropdownObj: DropDownListComponent;
    data: any;
    query: Query;
    remoteFields: Object;
    constructor(baseUrl: any, trans: TranslateService, cd: ChangeDetectorRef, service: PigfarmCoreService);
    ngAfterViewChecked(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onChange(args: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MakeorderDropdownlistToolbarComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MakeorderDropdownlistToolbarComponent, "app-makeorder-dropdownlist-toolbar", never, { "id": "id"; "selectedValue": "selectedValue"; "placeholder": "placeholder"; "popupWidth": "popupWidth"; "popupHeight": "popupHeight"; "disabled": "disabled"; }, { "change": "change"; "selectedValueChange": "selectedValueChange"; }, never, never>;
}

//# sourceMappingURL=makeorder-dropdownlist-toolbar.component.d.ts.map