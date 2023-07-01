import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HelpCenter } from '../../_model/evse/model';
import { HttpClient } from '@angular/common/http';
import { CURDService, OperationResult, UtilitiesService } from '@pigfarm-core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HelpCenterService extends CURDService<HelpCenter> {

  constructor(http: HttpClient,utilitiesService: UtilitiesService)
  {
    super(environment.apiUrl,http,"HelpCenter", utilitiesService);
  }
 
  getByGuid(guid): Observable<any> {
    return this.http.get<any>(`${this.base}HelpCenter/GetByGuid?guid=${guid}`, {});
  }
}
