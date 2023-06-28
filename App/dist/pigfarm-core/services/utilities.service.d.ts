import { HttpClient } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class UtilitiesService {
    private http;
    constructor(http: HttpClient);
    UnflatteringForLeftMenu: (arr: any[]) => any[];
    UnflatteringForTree: (arr: any[]) => any[];
    MakeSeoTitle(input: string): string;
    ToFormData(formValue: any): FormData;
    checkExistHost(url: any): boolean;
    checkValidImage(data: any): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UtilitiesService, never>;
}

//# sourceMappingURL=utilities.service.d.ts.map