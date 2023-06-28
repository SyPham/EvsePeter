import { DataManager, Query } from '@syncfusion/ej2-data';
import { OnInit, EventEmitter, SimpleChanges } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TranslateService } from '@ngx-translate/core';
import * as ɵngcc0 from '@angular/core';
export declare class TreatmentDropdownlistComponent implements OnInit {
    private baseUrl;
    trans: TranslateService;
    id: string;
    selectedValue: any;
    placeholder: string;
    disabled: boolean;
    change: EventEmitter<any>;
    ngModelChange: EventEmitter<any>;
    selectedValueChange: EventEmitter<any>;
    popupWidth: any;
    dropdownObj: DropDownListComponent;
    data: DataManager;
    query: Query;
    remoteFields: Object;
    take: number;
    skip: number;
    onFiltering: any;
    actionComplete(e: any): void;
    constructor(baseUrl: any, trans: TranslateService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onChange(args: any): void;
    onNgModelChange(value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TreatmentDropdownlistComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TreatmentDropdownlistComponent, "app-treatment-dropdownlist", never, { "id": "id"; "placeholder": "placeholder"; "disabled": "disabled"; "popupWidth": "popupWidth"; "selectedValue": "selectedValue"; }, { "change": "change"; "ngModelChange": "ngModelChange"; "selectedValueChange": "selectedValueChange"; }, never, never>;
}

//# sourceMappingURL=treatment-dropdownlist.component.d.ts.map