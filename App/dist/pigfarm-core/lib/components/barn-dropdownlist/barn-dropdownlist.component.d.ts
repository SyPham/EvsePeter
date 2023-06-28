import { DataManager, Query } from '@syncfusion/ej2-data';
import { OnInit, EventEmitter, OnChanges, SimpleChanges, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TranslateService } from '@ngx-translate/core';
import * as ɵngcc0 from '@angular/core';
export declare class BarnDropdownlistComponent implements OnInit, OnChanges, AfterViewChecked {
    private baseUrl;
    private cd;
    trans: TranslateService;
    id: string;
    selectedValue: any;
    areaGuid: any;
    placeholder: string;
    disabled: boolean;
    autoload: boolean;
    change: EventEmitter<any>;
    ngModelChange: EventEmitter<any>;
    selectedValueChange: EventEmitter<any>;
    dropdownObj: DropDownListComponent;
    onblurChange: EventEmitter<any>;
    data: DataManager;
    query: Query;
    remoteFields: Object;
    take: number;
    skip: number;
    onObarn(args: any): void;
    onFiltering: any;
    actionComplete(e: any): void;
    constructor(baseUrl: any, cd: ChangeDetectorRef, trans: TranslateService);
    ngAfterViewChecked(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onChange(args: any): void;
    onNgModelChange(value: any): void;
    onblur(e: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BarnDropdownlistComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BarnDropdownlistComponent, "app-barn-dropdownlist", never, { "id": "id"; "placeholder": "placeholder"; "disabled": "disabled"; "autoload": "autoload"; "selectedValue": "selectedValue"; "areaGuid": "areaGuid"; }, { "change": "change"; "ngModelChange": "ngModelChange"; "selectedValueChange": "selectedValueChange"; "onblurChange": "onblur"; }, never, never>;
}

//# sourceMappingURL=barn-dropdownlist.component.d.ts.map