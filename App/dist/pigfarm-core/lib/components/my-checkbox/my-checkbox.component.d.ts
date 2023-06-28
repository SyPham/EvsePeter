import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class MyCheckboxComponent implements OnInit, OnChanges {
    private baseUrl;
    checked: any;
    label: any;
    checkedChange: EventEmitter<any>;
    checkedValue: boolean;
    constructor(baseUrl: any);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    onCheckedChange(value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MyCheckboxComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MyCheckboxComponent, "app-my-checkbox", never, { "label": "label"; "checked": "checked"; }, { "checkedChange": "checkedChange"; }, never, never>;
}

//# sourceMappingURL=my-checkbox.component.d.ts.map