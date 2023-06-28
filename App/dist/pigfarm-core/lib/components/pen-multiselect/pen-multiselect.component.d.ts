import { DataManager, Query } from '@syncfusion/ej2-data';
import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TranslateService } from '@ngx-translate/core';
import * as ɵngcc0 from '@angular/core';
export declare class PenMultiselectComponent implements OnInit, OnChanges {
    private baseUrl;
    trans: TranslateService;
    id: string;
    selectedData: any;
    placeholder: string;
    roomGuid: string;
    disabled: boolean;
    change: EventEmitter<any>;
    ngModelChange: EventEmitter<any>;
    selectedValueChange: EventEmitter<any>;
    onblurChange: EventEmitter<any>;
    dropdownObj: DropDownListComponent;
    data: DataManager;
    query: Query;
    popupHeight: string;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PenMultiselectComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PenMultiselectComponent, "app-pen-multiselect", never, { "id": "id"; "selectedData": "selectedData"; "placeholder": "placeholder"; "roomGuid": "roomGuid"; "disabled": "disabled"; "popupHeight": "popupHeight"; "query": "query"; "data": "data"; }, { "change": "change"; "ngModelChange": "ngModelChange"; "selectedValueChange": "selectedValueChange"; "onblurChange": "onblur"; }, never, never>;
}

//# sourceMappingURL=pen-multiselect.component.d.ts.map