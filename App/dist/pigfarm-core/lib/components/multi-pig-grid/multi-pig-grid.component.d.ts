import { OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../services/alertify.service';
import { PigfarmCoreService } from '../../../services/pigfarm-core.service';
import * as ɵngcc0 from '@angular/core';
export declare class MultiPigGridComponent implements OnInit, OnChanges {
    private baseUrl;
    private service;
    private alertify;
    private translate;
    height: number;
    type: string;
    recordGuid: string;
    penGuid: string;
    checked: string;
    onCheckedChange: EventEmitter<any>;
    pageSettings: {
        pageCount: number;
        pageSizes: number;
        enableQueryString: boolean;
        pageSize: number;
        currentPage: number;
        enableScroll: boolean;
    };
    searchOptions: {
        fields: string[];
        operator: string;
        ignoreCase: boolean;
    };
    model: any;
    alert: {
        updateMessage: any;
        updateTitle: any;
        createMessage: any;
        createTitle: any;
        deleteMessage: any;
        deleteTitle: any;
        cancelMessage: any;
        serverError: any;
        deleted_ok_msg: any;
        created_ok_msg: any;
        updated_ok_msg: any;
        system_error_msg: any;
        exist_message: any;
        choose_farm_message: any;
        select_order_message: any;
        yes_message: any;
        no_message: any;
    };
    pigData: any;
    constructor(baseUrl: any, service: PigfarmCoreService, alertify: AlertifyService, translate: TranslateService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    onChangeChecked(e: any, data: any): void;
    toggle(checked: any, pigGuid: any): void;
    loadDataByRoom(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultiPigGridComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MultiPigGridComponent, "app-multi-pig-grid", never, { "height": "height"; "type": "type"; "recordGuid": "recordGuid"; "penGuid": "penGuid"; "checked": "checked"; "pigData": "pigData"; }, { "onCheckedChange": "onCheckedChange"; }, never, never>;
}

//# sourceMappingURL=multi-pig-grid.component.d.ts.map