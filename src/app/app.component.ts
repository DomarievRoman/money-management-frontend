import {Component, OnInit} from '@angular/core';
import {Cashbook} from './model/Cashbook';
import {CashbookDaoImplService} from './data/dao/impl/cashbookDao/cashbook-dao-impl.service';
import {Costs} from './model/Costs';
import {Income} from './model/Income';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Financial Project';
  cashbooks: Cashbook[];
  incomes: Income[];
  costs: Costs[];

  constructor(private cashbookService: CashbookDaoImplService) {
  }

  ngOnInit(): void {
    this.fillAllCashbooks();
  }

  fillAllCashbooks(): void {
    this.cashbookService.getAll().subscribe(result => {
      this.cashbooks = result;
    });
  }

  onAddCashbook(cashbook: Cashbook): void {
    this.cashbookService.add(cashbook).subscribe(() => {
      this.fillAllCashbooks();
    });
  }
}
