import { Query } from '@syncfusion/ej2-data';
import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TranslateService } from '@ngx-translate/core';
import { Predicate } from '@syncfusion/ej2-angular-grids';
import { PigfarmCoreService } from '../../../services/pigfarm-core.service';
import * as ɵngcc0 from '@angular/core';
export declare class PenDropdownlistComponent implements OnInit, OnChanges {
    private baseUrl;
    trans: TranslateService;
    service: PigfarmCoreService;
    id: string;
    selectedValue: any;
    placeholder: any;
    roomGuid: string;
    disabled: boolean;
    popupWidth: number;
    enabledLoad: boolean;
    predicate: Predicate | null;
    change: EventEmitter<any>;
    ngModelChange: EventEmitter<any>;
    selectedValueChange: EventEmitter<any>;
    selectedNameChange: EventEmitter<any>;
    onblurChange: EventEmitter<any>;
    dropdownObj: DropDownListComponent;
    data: any;
    penGuidName: any;
    query: Query;
    remoteFields: Object;
    take: number;
    skip: number;
    onFiltering: any;
    actionComplete(e: any): void;
    constructor(baseUrl: any, trans: TranslateService, service: PigfarmCoreService);
    ngOnInit(): void;
    loadData(): Promise<void>;
    ngOnChanges(changes: SimpleChanges): Promise<void>;
    onChange(args: any): void;
    onNgModelChange(value: any): void;
    onblur(e: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PenDropdownlistComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PenDropdownlistComponent, "app-pen-dropdownlist", never, { "id": "id"; "placeholder": "placeholder"; "roomGuid": "roomGuid"; "disabled": "disabled"; "popupWidth": "popupWidth"; "enabledLoad": "enabledLoad"; "selectedValue": "selectedValue"; "predicate": "predicate"; }, { "change": "change"; "ngModelChange": "ngModelChange"; "selectedValueChange": "selectedValueChange"; "selectedNameChange": "selectedNameChange"; "onblurChange": "onblur"; }, never, never>;
}

//# sourceMappingURL=pen-dropdownlist.component.d.ts.map