
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OperationResult } from '../../_model/operation.result';
import { RecordFeeding } from '../../_model/records';
import { CURDService, UtilitiesService } from '@pigfarm-core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RecordFeedingService extends CURDService<RecordFeeding> {
  private recordSource = new BehaviorSubject({} );
  currentRecordFeeding = this.recordSource.asObservable();
  constructor( http: HttpClient,utilitiesService: UtilitiesService)
  {
    super(environment.apiUrl,http,"RecordFeeding", utilitiesService);
  }
  changeRecordFeeding(farm) {
    this.recordSource.next(farm)
  }
  toggleRecordDate(id): Observable<OperationResult> {
    return this.http.get<OperationResult>(`${this.base}RecordFeeding/toggleRecordDate?id=${id}`, {});
  }
  toggleEstDate(id): Observable<OperationResult> {
    return this.http.get<OperationResult>(`${this.base}RecordFeeding/toggleEstDate?id=${id}`, {});
  }
}
