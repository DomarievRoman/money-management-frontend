import {Income} from './Income';
import {Costs} from './Costs';
import {Cashbook} from './Cashbook';

export class CashbookStatistics {
  largestIncomePayment: number;
  largestCostPayment: number;
  allIncomesByMonth: Income[];
  allCostsByMonth: Costs[];
  cashbook: Cashbook;

  constructor(largestIncomePayment: number, largestCostPayment: number, allIncomesByMonth: Income[],
              allCostsByMonth: Costs[], cashbook: Cashbook) {
    this.largestIncomePayment = largestIncomePayment;
    this.largestCostPayment = largestCostPayment;
    this.allIncomesByMonth = allIncomesByMonth;
    this.allCostsByMonth = allCostsByMonth;
    this.cashbook = cashbook;
  }
}
