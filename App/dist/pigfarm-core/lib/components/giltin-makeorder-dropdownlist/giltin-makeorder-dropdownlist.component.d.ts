import { Query } from '@syncfusion/ej2-data';
import { OnInit, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TranslateService } from '@ngx-translate/core';
import { PigfarmCoreService } from '../../../services';
import * as ɵngcc0 from '@angular/core';
export declare class GiltinMakeorderDropdownlistComponent implements OnInit, OnChanges, AfterViewChecked, OnDestroy {
    private baseUrl;
    trans: TranslateService;
    private cd;
    service: PigfarmCoreService;
    id: string;
    selectedValue: any;
    placeholder: string;
    disabled: boolean;
    change: EventEmitter<any>;
    giltInGuidChange: EventEmitter<any>;
    selectedValueChange: EventEmitter<any>;
    dropdownObj: DropDownListComponent;
    data: any;
    query: Query;
    remoteFields: Object;
    constructor(baseUrl: any, trans: TranslateService, cd: ChangeDetectorRef, service: PigfarmCoreService);
    ngOnDestroy(): void;
    ngAfterViewChecked(): void;
    ngOnInit(): void;
    loadData(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onChange(args: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GiltinMakeorderDropdownlistComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GiltinMakeorderDropdownlistComponent, "app-giltin-makeorder-dropdownlist", never, { "id": "id"; "selectedValue": "selectedValue"; "placeholder": "placeholder"; "disabled": "disabled"; }, { "change": "change"; "giltInGuidChange": "giltInGuidChange"; "selectedValueChange": "selectedValueChange"; }, never, never>;
}

//# sourceMappingURL=giltin-makeorder-dropdownlist.component.d.ts.map