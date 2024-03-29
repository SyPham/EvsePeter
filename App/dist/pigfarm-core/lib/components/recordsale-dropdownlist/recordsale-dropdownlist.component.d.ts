import { Query } from '@syncfusion/ej2-data';
import { OnInit, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TranslateService } from '@ngx-translate/core';
import { PigfarmCoreService } from '../../../services';
import * as ɵngcc0 from '@angular/core';
export declare class RecordsaleDropdownlistComponent implements OnInit, OnChanges, AfterViewChecked {
    private baseUrl;
    trans: TranslateService;
    private cd;
    service: PigfarmCoreService;
    id: string;
    selectedValue: any;
    placeholder: string;
    disabled: boolean;
    change: EventEmitter<any>;
    selectedValueChange: EventEmitter<any>;
    dropdownObj: DropDownListComponent;
    data: any;
    query: Query;
    remoteFields: Object;
    onFiltering: any;
    constructor(baseUrl: any, trans: TranslateService, cd: ChangeDetectorRef, service: PigfarmCoreService);
    ngAfterViewChecked(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onChange(args: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RecordsaleDropdownlistComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RecordsaleDropdownlistComponent, "app-recordsale-dropdownlist", never, { "id": "id"; "selectedValue": "selectedValue"; "placeholder": "placeholder"; "disabled": "disabled"; }, { "change": "change"; "selectedValueChange": "selectedValueChange"; }, never, never>;
}

//# sourceMappingURL=recordsale-dropdownlist.component.d.ts.map