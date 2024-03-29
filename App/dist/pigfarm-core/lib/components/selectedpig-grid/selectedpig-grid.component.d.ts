import { EventEmitter, OnInit, SimpleChanges, AfterViewInit, ChangeDetectorRef, OnDestroy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { GridComponent } from "@syncfusion/ej2-angular-grids";
import { Subscription } from "rxjs";
import { PigfarmCoreService } from '../../../services';
import * as ɵngcc0 from '@angular/core';
export declare class SelectedpigGridComponent implements OnInit, AfterViewInit, OnDestroy {
    private baseUrl;
    private trans;
    private cd;
    private service;
    pigName: any;
    selectedPigDataSource: any;
    recordNextDataSource: any;
    recordNext2DataSource: any;
    searchOptions: {
        fields: string[];
        operator: string;
        ignoreCase: boolean;
    };
    grid: GridComponent;
    avgWeightChange: EventEmitter<any>;
    totalWeightChange: EventEmitter<any>;
    avgAmountChange: EventEmitter<any>;
    totalAmountChange: EventEmitter<any>;
    selectedPigDataSourceChange: EventEmitter<any>;
    maleAvgWeightChange: EventEmitter<any>;
    maleTotalWeightChange: EventEmitter<any>;
    maleTotalSelectedChange: EventEmitter<any>;
    femaleAvgWeightChange: EventEmitter<any>;
    femaleTotalWeightChange: EventEmitter<any>;
    femaleTotalSelectedChange: EventEmitter<any>;
    pageSettings: any;
    visibleNextRoom: boolean;
    visibleNextPen: boolean;
    visibleNext2: boolean;
    visibleButton: boolean;
    visibleNext: boolean;
    visibleAmount: boolean;
    visibleDisease: boolean;
    visibleWeight: boolean;
    visibleValue: boolean;
    visiblePigSex: boolean;
    visibleSourceGuid: boolean;
    visibleSource1Guid: boolean;
    visibleSource2Guid: boolean;
    visibleSource3Guid: boolean;
    visibleSemenConcentration: boolean;
    visibleSemenVolume: boolean;
    visibleMalformationRate: boolean;
    visiblePig: boolean;
    visibleRfid: any;
    valueLabel: string;
    pigLabel: string;
    next1Label: string;
    next2Label: string;
    editSettingsPig: {
        showDeleteConfirmDialog: boolean;
        allowEditing: boolean;
        allowAdding: boolean;
        allowDeleting: boolean;
        mode: string;
    };
    avgWeight: number;
    totalWeight: number;
    totalAmount: number;
    avgAmount: number;
    codeType: any;
    codeType2: any;
    maleAvgWeight: number;
    maleTotalWeight: number;
    maleTotalSelected: number;
    femaleAvgWeight: number;
    femaleTotalWeight: number;
    femaleTotalSelected: number;
    index: any;
    diseaseItem: any;
    recordNext: any;
    recordNextndex: any;
    recordNext2: any;
    recordNextndex2: any;
    recordNext2Item: any;
    recordNextItem: any;
    pigSexItem: any;
    pigSexIndex: any;
    subscription: Subscription;
    nextRoomItem: any;
    nextPenItem: any;
    constructor(baseUrl: any, trans: TranslateService, cd: ChangeDetectorRef, service: PigfarmCoreService);
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    created(): void;
    ngOnInit(): void;
    actionBeginPig(e: any): void;
    onChangeRecordNext(e: any, data: any): void;
    onChangeRecordNext2(e: any, data: any): void;
    onChangePigSex(e: any, data: any): void;
    onChangeDisease(e: any, data: any): void;
    onChangeNextRoom(e: any, data: any): void;
    onChangeNextPen(e: any, data: any): void;
    average: (nums: any, length: any) => number;
    total: (nums: any) => any;
    caculator(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SelectedpigGridComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SelectedpigGridComponent, "app-selectedpig-grid", never, { "pigName": "pigName"; "selectedPigDataSource": "selectedPigDataSource"; "recordNextDataSource": "recordNextDataSource"; "recordNext2DataSource": "recordNext2DataSource"; "visibleNextRoom": "visibleNextRoom"; "visibleNextPen": "visibleNextPen"; "visibleNext2": "visibleNext2"; "visibleButton": "visibleButton"; "visibleNext": "visibleNext"; "visibleAmount": "visibleAmount"; "visibleDisease": "visibleDisease"; "visibleWeight": "visibleWeight"; "visibleValue": "visibleValue"; "visiblePigSex": "visiblePigSex"; "visibleSourceGuid": "visibleSourceGuid"; "visibleSource1Guid": "visibleSource1Guid"; "visibleSource2Guid": "visibleSource2Guid"; "visibleSource3Guid": "visibleSource3Guid"; "visibleSemenConcentration": "visibleSemenConcentration"; "visibleSemenVolume": "visibleSemenVolume"; "visibleMalformationRate": "visibleMalformationRate"; "visiblePig": "visiblePig"; "visibleRfid": "visibleRfid"; "valueLabel": "valueLabel"; "pigLabel": "pigLabel"; "next1Label": "next1Label"; "next2Label": "next2Label"; "totalAmount": "totalAmount"; "totalWeight": "totalWeight"; "avgWeight": "avgWeight"; "femaleTotalWeight": "femaleTotalWeight"; "maleTotalWeight": "maleTotalWeight"; "maleAvgWeight": "maleAvgWeight"; "avgAmount": "avgAmount"; "femaleAvgWeight": "femaleAvgWeight"; "femaleTotalSelected": "femaleTotalSelected"; "maleTotalSelected": "maleTotalSelected"; "codeType": "codeType"; "codeType2": "codeType2"; }, { "avgWeightChange": "avgWeightChange"; "totalWeightChange": "totalWeightChange"; "avgAmountChange": "avgAmountChange"; "totalAmountChange": "totalAmountChange"; "selectedPigDataSourceChange": "selectedPigDataSourceChange"; "maleAvgWeightChange": "maleAvgWeightChange"; "maleTotalWeightChange": "maleTotalWeightChange"; "maleTotalSelectedChange": "maleTotalSelectedChange"; "femaleAvgWeightChange": "femaleAvgWeightChange"; "femaleTotalWeightChange": "femaleTotalWeightChange"; "femaleTotalSelectedChange": "femaleTotalSelectedChange"; }, never, never>;
}

//# sourceMappingURL=selectedpig-grid.component.d.ts.map