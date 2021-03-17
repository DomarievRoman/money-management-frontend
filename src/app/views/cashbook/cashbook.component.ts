import {Component, OnInit} from '@angular/core';
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
  cashbooks: Cashbook[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.cashbookSubject.subscribe(cashbooks => this.cashbooks = cashbooks);
  }

  toggleIncomeRegular(income: Income): void {
    income.regular = !income.regular;
  }

  toggleCostFullPaid(cost: Costs): void {
    cost.fullPaid = !cost.fullPaid;
  }
}
