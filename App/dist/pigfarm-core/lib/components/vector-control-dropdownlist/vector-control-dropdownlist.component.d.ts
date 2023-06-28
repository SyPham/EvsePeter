import { DataManager, Query } from '@syncfusion/ej2-data';
import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TranslateService } from '@ngx-translate/core';
import * as ɵngcc0 from '@angular/core';
export declare class VectorControlDropdownlistComponent implements OnInit, OnChanges {
    private baseUrl;
    trans: TranslateService;
    id: string;
    selectedValue: any;
    placeholder: string;
    disabled: boolean;
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
    onOpen(args: any): void;
    onFiltering: any;
    actionComplete(e: any): void;
    constructor(baseUrl: any, trans: TranslateService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onChange(args: any): void;
    onNgModelChange(value: any): void;
    onblur(e: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<VectorControlDropdownlistComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<VectorControlDropdownlistComponent, "app-vector-control-dropdownlist", never, { "id": "id"; "placeholder": "placeholder"; "disabled": "disabled"; "selectedValue": "selectedValue"; }, { "change": "change"; "ngModelChange": "ngModelChange"; "selectedValueChange": "selectedValueChange"; "onblurChange": "onblur"; }, never, never>;
}

//# sourceMappingURL=vector-control-dropdownlist.component.d.ts.map