import {Injectable} from '@angular/core';
import {Costs} from '../../../../model/Costs';
import {CostsDao} from '../../interface/CostsDao';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostsDaoImplService implements CostsDao {

  url = 'http://localhost:8080/api/v1/cashbook/costs';

  constructor(private httpClient: HttpClient) {
  }

  add(obj: Costs): Observable<Costs> {
    return this.httpClient.post<Costs>(this.url + '/add', obj);
  }

  delete(id: number): Observable<Costs> {
    return this.httpClient.delete<Costs>(this.url + '/delete/' + id);
  }

  get(id: number): Observable<Costs> {
    return this.httpClient.get<Costs>(this.url + '/get/' + id);
  }

  getAll(): Observable<Costs[]> {
    return this.httpClient.get<Costs[]>(this.url + '/getAll');
  }

  update(obj: Costs): Observable<Costs> {
    return this.httpClient.put<Costs>(this.url + '/update', obj);
  }
}
