import { AfterViewChecked, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class MaskedtimetextboxComponent implements OnInit, AfterViewChecked {
    private baseUrl;
    private cdRef;
    disabled: boolean;
    selectedValue: string;
    id: number;
    selectedValueChange: EventEmitter<any>;
    onblurChange: EventEmitter<any>;
    constructor(baseUrl: any, cdRef: ChangeDetectorRef);
    ngAfterViewChecked(): void;
    ngOnInit(): void;
    onChange(args: any): void;
    onblur(e: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MaskedtimetextboxComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MaskedtimetextboxComponent, "app-maskedtimetextbox", never, { "disabled": "disabled"; "selectedValue": "selectedValue"; }, { "selectedValueChange": "selectedValueChange"; "onblurChange": "onblur"; }, never, never>;
}

//# sourceMappingURL=maskedtimetextbox.component.d.ts.map