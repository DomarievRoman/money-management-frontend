import {MoneyFlow} from './MoneyFlow';

export class Income extends MoneyFlow{
  from: string;
  regular?: boolean;


  constructor(id: number, flowPurpose: string, payment: number, transactionDate: Date, from: string, regular?: boolean) {
    super(id, flowPurpose, payment, transactionDate);
    this.from = from;
    this.regular = regular;
  }
}
