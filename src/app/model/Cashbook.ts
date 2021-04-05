import {Income} from './Income';
import {Costs} from './Costs';

export class Cashbook {
  id: number;
  name: string;
  balance?: number;
  income?: Income[];
  cost?: Costs[];


  constructor(id: number, name: string, balance?: number, income?: Income[], cost?: Costs[]) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.income = income;
    this.cost = cost;
  }
}
