import {Income} from './Income';
import {Costs} from './Costs';

export class Cashbook {
  id: number;
  name: string;
  income?: Income[];
  costs?: Costs[];
  balance?: number;


  constructor(id: number, name: string, income?: Income[], costs?: Costs[], balance?: number) {
    this.id = id;
    this.name = name;
    this.income = income;
    this.costs = costs;
    this.balance = balance;
  }
}