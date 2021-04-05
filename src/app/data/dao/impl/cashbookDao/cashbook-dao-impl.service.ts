import {Injectable} from '@angular/core';
import {CashbookDao} from '../../interface/CashbookDao';
import {Observable} from 'rxjs';
import {Cashbook} from '../../../../model/Cashbook';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CashbookDaoImplService implements CashbookDao {

  url = 'http://localhost:8080/api/v1/cashbook';

  constructor(private httpClient: HttpClient) {
  }

  add(obj: Cashbook): Observable<Cashbook> {
    return this.httpClient.post<Cashbook>(this.url + '/create', obj);
  }

  delete(id: number): Observable<Cashbook> {
    return this.httpClient.delete<Cashbook>(this.url + '/delete/' + id);
  }

  get(id: number): Observable<Cashbook> {
    return undefined;
  }

  getAll(): Observable<Cashbook[]> {
    return this.httpClient.get<Cashbook[]>(this.url + '/getAll');
  }

  update(obj: Cashbook): Observable<Cashbook> {
    return this.httpClient.put<Cashbook>(this.url + '/update', obj);
  }
}
