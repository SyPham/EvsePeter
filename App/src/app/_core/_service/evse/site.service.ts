import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Site } from '../../_model/evse/model';
import { HttpClient } from '@angular/common/http';
import { CURDService, OperationResult, UtilitiesService } from '@pigfarm-core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SiteService extends CURDService<Site> {

  constructor(http: HttpClient,utilitiesService: UtilitiesService)
  {
    super(environment.apiUrl,http,"Site", utilitiesService);
  }
  insertForm(model: Site): Observable<OperationResult> {
    for (const key in model) {
      if (Object.prototype.hasOwnProperty.call(model, key)) {
        let item = model[key];
        if (item instanceof Date) {
          model[key] = `${(item as Date).toLocaleDateString()} ${(item as Date).toLocaleTimeString('en-GB')}`
        }
      }
    }
    const file = model.file;
    delete model.file;
    const params = this.utilitiesService.ToFormData(model);
    params.append("file", file);
    return this.http.post<OperationResult>(`${this.base}Site/AddForm`, params).pipe(catchError(this.handleError));
  }
  updateForm(model: Site): Observable<OperationResult> {
    for (const key in model) {
      if (Object.prototype.hasOwnProperty.call(model, key)) {
        let item = model[key];
        if (item instanceof Date) {
          model[key] = `${(item as Date).toLocaleDateString()} ${(item as Date).toLocaleTimeString('en-GB')}`
        }
      }
    }

    const file = model.file;
    delete model.file;
    const params = this.utilitiesService.ToFormData(model);
    params.append("file", file);

    return this.http.put<OperationResult>(`${this.base}Site/updateForm`, params).pipe(catchError(this.handleError));
  }
  getByGuid(guid): Observable<any> {
    return this.http.get<any>(`${this.base}Site/GetByGuid?guid=${guid}`, {});
  }
  getByIdAndLang(id): Observable<any> {
    return this.http.get<any>(`${this.base}Site/GetByIdAndLang?id=${id}&lang=${localStorage.getItem('lang')}`, {});
  }
}
