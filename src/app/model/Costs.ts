import {MoneyFlow} from './MoneyFlow';
import {Cashbook} from './Cashbook';

export class Costs extends MoneyFlow {
  to: string;
  fullPaid?: boolean;

  constructor(id: number, flowPurpose: string, payment: number, transactionDate: Date,
              cashbook: Cashbook, to: string, fullPaid?: boolean) {
    super(id, flowPurpose, payment, transactionDate, cashbook);
    this.to = to;
    this.fullPaid = fullPaid;
  }
}
