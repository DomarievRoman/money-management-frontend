import {MoneyFlow} from './MoneyFlow';
import {Cashbook} from './Cashbook';

export class Income extends MoneyFlow {
  from: string;
  regular?: boolean;

  constructor(id: number, flowPurpose: string, payment: number, transactionDate: Date,
              cashbook: Cashbook, from: string, regular?: boolean) {
    super(id, flowPurpose, payment, transactionDate, cashbook);
    this.from = from;
    this.regular = regular;
  }
}
