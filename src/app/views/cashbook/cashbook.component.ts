import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cashbook} from '../../model/Cashbook';
import {Income} from '../../model/Income';
import {Costs} from '../../model/Costs';
import {MatDialog} from '@angular/material/dialog';
import {EditCashbookDialogComponent} from '../../dialog/edit-cashbook-dialog/edit-cashbook-dialog.component';
import {CashbookDaoImplService} from '../../data/dao/impl/cashbookDao/cashbook-dao-impl.service';
import {CostsDaoImplService} from '../../data/dao/impl/costsDao/costs-dao-impl.service';
import {IncomeDaoImplService} from '../../data/dao/impl/incomeDao/income-dao-impl.service';
import {DialogAction} from '../../dialogResult/DialogResult';

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

  @Output()
  addCashbook = new EventEmitter<Cashbook>();

  constructor(private cashbookService: CashbookDaoImplService, private incomeService: IncomeDaoImplService,
              private costsService: CostsDaoImplService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.fillAllIncomes();
    this.fillAllCosts();
  }

  fillAllCashbooks(): void {
    this.cashbookService.getAll().subscribe((cashbooks: Cashbook[]) => {
      this.cashbooks = cashbooks;
    });
  }

  fillAllIncomes(): void {
    this.incomeService.getAll().subscribe(result => {
      this.incomes = result;
    });
  }

  fillAllCosts(): void {
    this.costsService.getAll().subscribe(result => {
      this.costs = result;
    });
  }

  onUpdateCashbook(cashbook: Cashbook): void {
    this.cashbookService.update(cashbook).subscribe(() => {
      this.fillAllCashbooks();
    });
  }

  onDeleteCashbook(cashbook: Cashbook): void {
    this.cashbookService.delete(cashbook.id).subscribe(() => {
      this.fillAllCashbooks();
    });
  }

  onAddIncome(income: Income): void {
    this.incomeService.add(income).subscribe(() => {
      this.fillAllIncomes();
      this.fillAllCashbooks();
    });
  }

  onUpdateIncome(income: Income): void {
    this.incomeService.update(income).subscribe(() => {
      this.fillAllIncomes();
      this.fillAllCashbooks();
    });
  }

  onDeleteIncome(income: Income): void {
    this.incomeService.delete(income.id).subscribe(() => {
      this.fillAllIncomes();
      this.fillAllCashbooks();
    });
  }

  onAddCost(cost: Costs): void {
    this.costsService.add(cost).subscribe(() => {
      this.fillAllCosts();
      this.fillAllCashbooks();
    });
  }

  onUpdateCosts(costs: Costs): void {
    this.costsService.update(costs).subscribe(() => {
      this.fillAllCosts();
      this.fillAllCashbooks();
    });
  }

  onDeleteCosts(cost: Costs): void {
    this.costsService.delete(cost.id).subscribe(() => {
      this.fillAllCosts();
      this.fillAllCashbooks();
    });
  }

  openAddCashbookDialog(): void {
    const dialogRef = this.dialog.open(EditCashbookDialogComponent, {data: [new Cashbook(null, ''), 'Add cashbook'], width: '400px'});
    dialogRef.afterClosed().subscribe(result => {
      if (!(result)) {
        return;
      }
      if (result.action === DialogAction.SAVE) {
        this.addCashbook.emit(result.obj as Cashbook);
      }
    });
  }
}
