import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IncomeDao} from '../../interface/IncomeDao';
import {Income} from '../../../../model/Income';
import {Observable} from 'rxjs';
import {AbstractSearchValues} from '../../../search/AbstractSearchValues';

@Injectable({
  providedIn: 'root'
})
export class IncomeDaoImplService implements IncomeDao {

  url = 'http://localhost:8080/api/v1/cashbook/income';

  constructor(private httpClient: HttpClient) {
  }

  add(obj: Income): Observable<Income> {
    return this.httpClient.post<Income>(this.url + '/add', obj);
  }

  delete(id: number): Observable<Income> {
    return this.httpClient.delete<Income>(this.url + '/delete/' + id);
  }

  get(id: number): Observable<Income> {
    return this.httpClient.get<Income>(this.url + '/get/' + id);
  }

  getAll(): Observable<Income[]> {
    return this.httpClient.get<Income[]>(this.url + '/getAll');
  }

  update(obj: Income): Observable<Income> {
    return this.httpClient.put<Income>(this.url + '/update', obj);
  }

  findIncomes(abstractSearchValues: AbstractSearchValues): Observable<Income[]> {
    return this.httpClient.post<Income[]>(this.url + '/search', abstractSearchValues);
  }
}
