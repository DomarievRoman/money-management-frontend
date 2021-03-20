import {MoneyFlow} from './MoneyFlow';

export class Costs extends MoneyFlow {
  to: string;
  fullPaid?: boolean;


  constructor(id: number, flowPurpose: string, payment: number, transactionDate: Date, cashbookId: number, to: string, fullPaid?: boolean) {
    super(id, flowPurpose, payment, transactionDate, cashbookId);
    this.to = to;
    this.fullPaid = fullPaid;
  }
}
