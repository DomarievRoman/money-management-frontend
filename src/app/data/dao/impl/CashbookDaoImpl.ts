import {CashbookDao} from '../interface/CashbookDao';
import {Observable, of} from 'rxjs';
import {Cashbook} from '../../../model/Cashbook';
import {TestData} from '../../TestData';

export class CashbookDaoImpl implements CashbookDao {
  add(T): Observable<Cashbook> {
    return undefined;
  }

  delete(id: number): Observable<Cashbook> {
    return undefined;
  }

  get(id: number): Observable<Cashbook> {
    return of(TestData.cashbooks.find(cashbook => cashbook.id === id));
  }

  getAll(): Observable<Cashbook[]> {
    return of(TestData.cashbooks);
  }

  update(T): Observable<Cashbook> {
    return undefined;
  }

}
