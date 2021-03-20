import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Cashbook} from '../model/Cashbook';
import {CashbookDaoImpl} from '../data/dao/impl/CashbookDaoImpl';
import {Income} from '../model/Income';
import {IncomeDaoImpl} from '../data/dao/impl/IncomeDaoImpl';
import {CostsDaoImpl} from '../data/dao/impl/CostsDaoImpl';
import {Costs} from '../model/Costs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private cashbookDao = new CashbookDaoImpl();
  private incomeDao = new IncomeDaoImpl();
  private costsDao = new CostsDaoImpl();

  constructor() {
  }

  getCashbookData(): Observable<Cashbook[]> {
    return this.cashbookDao.getAll();
  }

  getIncomeData(): Observable<Income[]> {
    return this.incomeDao.getAll();
  }

  getCostsData(): Observable<Costs[]> {
    return this.costsDao.getAll();
  }

  updateIncome(income: Income): Observable<Income> {
    return this.incomeDao.update(income);
  }

  deleteIncome(id: number): Observable<Income> {
    return this.incomeDao.delete(id);
  }

  addIncome(income: Income): Observable<Income> {
    return this.incomeDao.add(income);
  }

  updateCosts(costs: Costs): Observable<Costs> {
    return this.costsDao.update(costs);
  }

  deleteCost(id: number): Observable<Costs> {
    return this.costsDao.delete(id);
  }

  addCost(cost: Costs): Observable<Costs> {
    return this.costsDao.add(cost);
  }
}
