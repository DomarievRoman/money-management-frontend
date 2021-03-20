export class MoneyFlow{
  id: number;
  flowPurpose: string;
  payment: number;
  transactionDate: Date;
  cashbookId: number;

  constructor(id: number, flowPurpose: string, payment: number, transactionDate: Date, cashbookId: number) {
    this.id = id;
    this.flowPurpose = flowPurpose;
    this.payment = payment;
    this.transactionDate = transactionDate;
    this.cashbookId = cashbookId;
  }
}
