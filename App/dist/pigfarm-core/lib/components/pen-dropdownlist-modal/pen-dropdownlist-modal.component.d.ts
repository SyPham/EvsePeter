import { DataManager, Query } from '@syncfusion/ej2-data';
import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TranslateService } from '@ngx-translate/core';
import { PigfarmCoreService } from '../../../services';
import * as ɵngcc0 from '@angular/core';
export declare class PenDropdownlistModalComponent implements OnInit, OnChanges {
    private baseUrl;
    trans: TranslateService;
    service: PigfarmCoreService;
    id: string;
    selectedValue: any;
    placeholder: any;
    disabled: boolean;
    change: EventEmitter<any>;
    ngModelChange: EventEmitter<any>;
    selectedValueChange: EventEmitter<any>;
    dropdownObj: DropDownListComponent;
    data: DataManager;
    query: Query;
    remoteFields: Object;
    take: number;
    skip: number;
    roomGuid: string;
    onOpen(args: any): void;
    onFiltering: any;
    actionComplete(e: any): void;
    constructor(baseUrl: any, trans: TranslateService, service: PigfarmCoreService);
    ngOnInit(): Promise<void>;
    loadData(): Promise<void>;
    ngOnChanges(changes: SimpleChanges): void;
    onChange(args: any): void;
    onNgModelChange(value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PenDropdownlistModalComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PenDropdownlistModalComponent, "app-pen-dropdownlist-modal", never, { "id": "id"; "placeholder": "placeholder"; "disabled": "disabled"; "selectedValue": "selectedValue"; }, { "change": "change"; "ngModelChange": "ngModelChange"; "selectedValueChange": "selectedValueChange"; }, never, never>;
}

//# sourceMappingURL=pen-dropdownlist-modal.component.d.ts.map