import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Cashbook} from '../../model/Cashbook';
import {Income} from '../../model/Income';
import {Costs} from '../../model/Costs';
import {MatDialog} from '@angular/material/dialog';
import {EditCashbookDialogComponent} from '../../dialog/edit-cashbook-dialog/edit-cashbook-dialog.component';

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
  addCashbook = new EventEmitter<string>();

  constructor(private dataHandler: DataHandlerService, private dialog: MatDialog) {
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

  openAddCashbookDialog(): void {
    const dialogRef = this.dialog.open(EditCashbookDialogComponent, {data: ['', 'Add cashbook'], width: '400px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addCashbook.emit(result as string);
      }
    });
  }

  onDeleteCashbook(cashbook: Cashbook): void {
    this.dataHandler.deleteCashbook(cashbook.id);
  }

  onUpdateCashbook(cashbook: Cashbook): void {
    this.dataHandler.updateCashbook(cashbook);
  }
}
