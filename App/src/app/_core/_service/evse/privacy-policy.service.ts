import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PrivacyPolicy } from '../../_model/evse/model';
import { HttpClient } from '@angular/common/http';
import { CURDService, OperationResult, UtilitiesService } from '@pigfarm-core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PrivacyPolicyService extends CURDService<PrivacyPolicy> {

  constructor(http: HttpClient,utilitiesService: UtilitiesService)
  {
    super(environment.apiUrl,http,"PrivacyPolicy", utilitiesService);
  }
 
  getByGuid(guid): Observable<any> {
    return this.http.get<any>(`${this.base}PrivacyPolicy/GetByGuid?guid=${guid}`, {});
  }
  getFirst(): Observable<PrivacyPolicy> {
    return this.http.get<PrivacyPolicy>(`${this.base}PrivacyPolicy/GetFirst`, {});
  }
}
