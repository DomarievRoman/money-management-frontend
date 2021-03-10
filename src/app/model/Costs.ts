import {MoneyFlow} from './MoneyFlow';

export class Costs extends MoneyFlow{
  to: string;
  fullPaid?: boolean;


  constructor(id: number, flowPurpose: string, payment: number, transactionDate: Date, to: string, fullPaid?: boolean) {
    super(id, flowPurpose, payment, transactionDate);
    this.to = to;
    this.fullPaid = fullPaid;
  }
}
