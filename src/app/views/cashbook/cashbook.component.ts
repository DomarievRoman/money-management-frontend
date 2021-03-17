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
  income: Income;
  costs: Costs[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
  }

  onUpdateIncome(income: Income): void {
    this.dataHandler.updateIncome(income);
    console.log(TestData.cashbooks);
  }

  onDeleteIncome(income: Income): void {
    this.dataHandler.deleteIncome(income.id);
    console.log(TestData.incomes);
  }
}
