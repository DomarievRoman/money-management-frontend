export class MoneyFlow{
  id: number;
  flowPurpose: string;
  payment: number;
  transactionDate: Date;

  constructor(id: number, flowPurpose: string, payment: number, transactionDate: Date) {
    this.id = id;
    this.flowPurpose = flowPurpose;
    this.payment = payment;
    this.transactionDate = transactionDate;
  }
}
