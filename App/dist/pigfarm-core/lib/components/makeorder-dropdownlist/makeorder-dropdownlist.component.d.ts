import { Query } from '@syncfusion/ej2-data';
import { OnInit, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TranslateService } from '@ngx-translate/core';
import { PigfarmCoreService } from '../../../services';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class MakeorderDropdownlistComponent implements OnInit, OnChanges, AfterViewChecked, OnDestroy {
    private baseUrl;
    trans: TranslateService;
    private cd;
    service: PigfarmCoreService;
    id: string;
    selectedValue: any;
    placeholder: string;
    pigType: string;
    disabled: boolean;
    popupWidth: string;
    change: EventEmitter<any>;
    selectedValueChange: EventEmitter<any>;
    dropdownObj: DropDownListComponent;
    data: any;
    query: Query;
    remoteFields: Object;
    subscription: Subscription;
    subscription2: Subscription;
    constructor(baseUrl: any, trans: TranslateService, cd: ChangeDetectorRef, service: PigfarmCoreService);
    ngOnDestroy(): void;
    ngAfterViewChecked(): void;
    ngOnInit(): void;
    loadData(): void;
    loadDataByPigType(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onChange(args: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MakeorderDropdownlistComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MakeorderDropdownlistComponent, "app-makeorder-dropdownlist", never, { "id": "id"; "selectedValue": "selectedValue"; "placeholder": "placeholder"; "pigType": "pigType"; "disabled": "disabled"; "popupWidth": "popupWidth"; }, { "change": "change"; "selectedValueChange": "selectedValueChange"; }, never, never>;
}

//# sourceMappingURL=makeorder-dropdownlist.component.d.ts.map