import {CashbookDao} from '../interface/CashbookDao';
import {Observable, of} from 'rxjs';
import {Cashbook} from '../../../model/Cashbook';
import {TestData} from '../../TestData';

export class CashbookDaoImpl implements CashbookDao {
  add(cashbook: Cashbook): Observable<Cashbook> {
    if (cashbook.id === null || cashbook.id === 0) {
      cashbook.id = this.getLastCashbookId();
    }
    TestData.cashbooks.push(cashbook);
    return of(cashbook);
  }

  delete(id: number): Observable<Cashbook> {
    const cashbookTmp = TestData.cashbooks.find(t => t.id === id);
    const incomesTmp = TestData.incomes.find(t => t.cashbookId === id);
    const costsTmp = TestData.costs.find(t => t.cashbookId === id);
    TestData.cashbooks.splice(TestData.cashbooks.indexOf(cashbookTmp), 1);
    TestData.incomes.splice(TestData.incomes.indexOf(incomesTmp));
    TestData.costs.splice(TestData.costs.indexOf(costsTmp));
    return of(cashbookTmp);
  }

  get(id: number): Observable<Cashbook> {
    return of(TestData.cashbooks.find(cashbook => cashbook.id === id));
  }

  getAll(): Observable<Cashbook[]> {
    return of(TestData.cashbooks);
  }

  update(cashbook: Cashbook): Observable<Cashbook> {
    const cashbookTmp = TestData.cashbooks.find(t => t.id === cashbook.id);
    TestData.cashbooks.splice(TestData.cashbooks.indexOf(cashbookTmp), 1, cashbook);
    console.log(TestData.cashbooks);
    return of(cashbookTmp);
  }

  private getLastCashbookId(): number {
    return Math.max.apply(Math, TestData.cashbooks.map(c => c.id)) + 1;
  }
}
