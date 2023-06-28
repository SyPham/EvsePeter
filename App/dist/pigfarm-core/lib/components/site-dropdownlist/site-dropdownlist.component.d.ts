import { DataManager, Query } from "@syncfusion/ej2-data";
import { OnInit, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { DropDownListComponent } from "@syncfusion/ej2-angular-dropdowns";
import { TranslateService } from "@ngx-translate/core";
import * as ɵngcc0 from '@angular/core';
export declare class SiteDropdownlistComponent implements OnInit, OnChanges {
    private baseUrl;
    trans: TranslateService;
    id: string;
    selectedValue: any;
    placeholder: string;
    disabled: boolean;
    enabledLoad: boolean;
    landlordGuid: string;
    change: EventEmitter<any>;
    ngModelChange: EventEmitter<any>;
    selectedValueName: EventEmitter<any>;
    selectedValueChange: EventEmitter<any>;
    dropdownObj: DropDownListComponent;
    data: DataManager;
    query: Query;
    remoteFields: Object;
    take: number;
    skip: number;
    onOpen(args: any): void;
    onFiltering: any;
    actionComplete(e: any): void;
    constructor(baseUrl: any, trans: TranslateService);
    ngOnInit(): void;
    loadData(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onChange(args: any): void;
    onNgModelChange(value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SiteDropdownlistComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SiteDropdownlistComponent, "app-site-dropdownlist", never, { "id": "id"; "placeholder": "placeholder"; "disabled": "disabled"; "enabledLoad": "enabledLoad"; "landlordGuid": "landlordGuid"; "selectedValue": "selectedValue"; }, { "change": "change"; "ngModelChange": "ngModelChange"; "selectedValueName": "selectedValueName"; "selectedValueChange": "selectedValueChange"; }, never, never>;
}

//# sourceMappingURL=site-dropdownlist.component.d.ts.map