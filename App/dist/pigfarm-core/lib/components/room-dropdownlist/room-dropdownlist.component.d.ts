import { Query } from '@syncfusion/ej2-data';
import { OnInit, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TranslateService } from '@ngx-translate/core';
import { PigfarmCoreService } from '../../../services';
import * as ɵngcc0 from '@angular/core';
export declare class RoomDropdownlistComponent implements OnInit, OnChanges, AfterViewChecked {
    private baseUrl;
    trans: TranslateService;
    private cd;
    service: PigfarmCoreService;
    id: string;
    barnGuid: any;
    makeOrderGuid: any;
    selectedValue: any;
    placeholder: string;
    disabled: boolean;
    autoload: boolean;
    change: EventEmitter<any>;
    ngModelChange: EventEmitter<any>;
    selectedValueChange: EventEmitter<any>;
    dropdownObj: DropDownListComponent;
    onblurChange: EventEmitter<any>;
    data: any;
    query: Query;
    remoteFields: Object;
    take: number;
    roomGuidName: any;
    skip: number;
    onOroom(args: any): void;
    onFiltering: any;
    actionComplete(e: any): void;
    constructor(baseUrl: any, trans: TranslateService, cd: ChangeDetectorRef, service: PigfarmCoreService);
    ngAfterViewChecked(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onChange(args: any): void;
    onNgModelChange(value: any): void;
    onblur(e: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RoomDropdownlistComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RoomDropdownlistComponent, "app-room-dropdownlist", never, { "id": "id"; "placeholder": "placeholder"; "disabled": "disabled"; "autoload": "autoload"; "selectedValue": "selectedValue"; "barnGuid": "barnGuid"; "makeOrderGuid": "makeOrderGuid"; }, { "change": "change"; "ngModelChange": "ngModelChange"; "selectedValueChange": "selectedValueChange"; "onblurChange": "onblur"; }, never, never>;
}

//# sourceMappingURL=room-dropdownlist.component.d.ts.map