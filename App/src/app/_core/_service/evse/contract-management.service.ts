import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContractManagement } from '../../_model/evse/model';
import { HttpClient } from '@angular/common/http';
import { CURDService, OperationResult, UtilitiesService } from '@pigfarm-core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContractManagementService extends CURDService<ContractManagement> {

  constructor(http: HttpClient,utilitiesService: UtilitiesService)
  {
    super(environment.apiUrl,http,"ContractManagement", utilitiesService);
  }
 
  getByGuid(guid): Observable<any> {
    return this.http.get<any>(`${this.base}ContractManagement/GetByGuid?guid=${guid}`, {});
  }
  getFirst(): Observable<ContractManagement> {
    return this.http.get<ContractManagement>(`${this.base}ContractManagement/GetFirst`, {});
  }
}
