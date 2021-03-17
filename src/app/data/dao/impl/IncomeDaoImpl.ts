import {IncomeDao} from '../interface/IncomeDao';
import {Observable, of} from 'rxjs';
import {Income} from '../../../model/Income';
import {TestData} from '../../TestData';

export class IncomeDaoImpl implements IncomeDao {
  add(T): Observable<Income> {
    return undefined;
  }

  delete(id: number): Observable<Income> {
    const incomeTmp = TestData.incomes.find(t => t.id === id);
    TestData.incomes.splice(TestData.incomes.indexOf(incomeTmp), 1);
    return of(incomeTmp);
  }

  get(id: number): Observable<Income> {
    return of(TestData.incomes.find(income => income.id === id));
  }

  getAll(): Observable<Income[]> {
    return of(TestData.incomes);
  }

  update(income: Income): Observable<Income> {
    const incomeTmp = TestData.incomes.find(t => t.id === income.id);
    TestData.incomes.splice(TestData.incomes.indexOf(incomeTmp), 1, income);
    console.log(income);
    return of(income);
  }
}
