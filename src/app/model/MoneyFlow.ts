import {Cashbook} from './Cashbook';

export class MoneyFlow{
  id: number;
  flowPurpose: string;
  payment: number;
  transactionDate: Date;
  cashbook: Cashbook;

  constructor(id: number, flowPurpose: string, payment: number, transactionDate: Date, cashbook: Cashbook) {
    this.id = id;
    this.flowPurpose = flowPurpose;
    this.payment = payment;
    this.transactionDate = transactionDate;
    this.cashbook = cashbook;
  }
}
