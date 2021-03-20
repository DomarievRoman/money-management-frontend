import {Component, Input, OnInit} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Cashbook} from '../../model/Cashbook';
import {Income} from '../../model/Income';
import {Costs} from '../../model/Costs';
import {TestData} from '../../data/TestData';

@Component({
  selector: 'app-cashbook',
  templateUrl: './cashbook.component.html',
  styleUrls: ['./cashbook.component.css']
})
export class CashbookComponent implements OnInit {

  @Input()
  cashbooks: Cashbook[];
  incomes: Income[];
  costs: Costs[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
  }

  cashbookBalanceCounter(cashbook: Cashbook): number {
    const incomeSum = TestData.incomes.filter(income => income.payment).reduce((sum, cur) => sum + cur.payment, 0);
    const costsSum = TestData.costs.filter(cost => cost.payment).reduce((sum, cur) => sum + cur.payment, 0);
    cashbook.balance = incomeSum - costsSum;
    return this.round(cashbook.balance);
  }

  private round(num: number): number {
    return Math.round(num * 100) / 100;
  }

  onUpdateIncome(income: Income): void {
    this.dataHandler.updateIncome(income);
  }

  onDeleteIncome(income: Income): void {
    this.dataHandler.deleteIncome(income.id);
  }

  updateIncome(): void {
    this.dataHandler.getIncomeData().subscribe((incomes: Income[]) => {
      this.incomes = incomes;
    });
  }

  onAddIncome(income: Income): void {
    this.dataHandler.addIncome(income).subscribe(() => {
      this.updateIncome();
    });
  }

  onUpdateCosts(costs: Costs): void {
    this.dataHandler.updateCosts(costs);
  }

  onDeleteCosts(cost: Costs): void {
    this.dataHandler.deleteCost(cost.id);
  }

  onAddCost(cost: Costs): void {
    this.dataHandler.addCost(cost).subscribe(() => {
      this.updateCost();
    });
  }

  updateCost(): void {
    this.dataHandler.getCostsData().subscribe((costs: Costs[]) => {
      this.costs = costs;
    });
  }
}
