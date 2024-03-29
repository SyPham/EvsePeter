import { EventEmitter, OnChanges, OnInit, Query, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { PigfarmCoreService } from '../../../services';
import * as ɵngcc0 from '@angular/core';
export declare class Breeding2SowinDropdownlistComponent implements OnInit, OnChanges {
    private baseUrl;
    trans: TranslateService;
    service: PigfarmCoreService;
    id: string;
    selectedValue: any;
    placeholder: string;
    disabled: boolean;
    breedingGuid: any;
    change: EventEmitter<any>;
    ngModelChange: EventEmitter<any>;
    selectedValueChange: EventEmitter<any>;
    dropdownObj: DropDownListComponent;
    data: any;
    query: Query;
    remoteFields: Object;
    roomGuid: any;
    penGuid: any;
    take: number;
    skip: number;
    onOpen(args: any): void;
    onFiltering: any;
    actionComplete(e: any): void;
    constructor(baseUrl: any, trans: TranslateService, service: PigfarmCoreService);
    ngOnInit(): void;
    loadData(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onChange(args: any): void;
    onNgModelChange(value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Breeding2SowinDropdownlistComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Breeding2SowinDropdownlistComponent, "app-breeding2-sowin-dropdownlist", never, { "id": "id"; "placeholder": "placeholder"; "disabled": "disabled"; "selectedValue": "selectedValue"; "breedingGuid": "breedingGuid"; }, { "change": "change"; "ngModelChange": "ngModelChange"; "selectedValueChange": "selectedValueChange"; }, never, never>;
}

//# sourceMappingURL=breeding2-sowin-dropdownlist.component.d.ts.map