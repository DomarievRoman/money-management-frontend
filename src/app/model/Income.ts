import {MoneyFlow} from './MoneyFlow';

export class Income extends MoneyFlow {
  from: string;
  regular?: boolean;


  // tslint:disable-next-line:max-line-length
  constructor(id: number, flowPurpose: string, payment: number, transactionDate: Date, cashbookId: number, from: string, regular?: boolean) {
    super(id, flowPurpose, payment, transactionDate, cashbookId);
    this.from = from;
    this.regular = regular;
  }
}
