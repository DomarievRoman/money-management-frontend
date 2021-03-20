import {Component, Input, OnInit} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Cashbook} from '../../model/Cashbook';
import {Income} from '../../model/Income';
import {Costs} from '../../model/Costs';

@Component({
  selector: 'app-cashbook',
  templateUrl: './cashbook.component.html',
  styleUrls: ['./cashbook.component.css']
})
export class CashbookComponent implements OnInit {

  @Input()
  cashbooks: Cashbook[];
  incomes: Income[];
  income: Income;
  costs: Costs[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
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
}
