import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Income} from '../../model/Income';
import {Cashbook} from '../../model/Cashbook';
import {DataHandlerService} from '../../service/data-handler.service';
import {EditIncomeDialogComponent} from '../../dialog/edit-income-dialog/edit-income-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../dialog/confirm-dialog/confirm-dialog.component';
import {TestData} from '../../data/TestData';
import {EditCashbookDialogComponent} from '../../dialog/edit-cashbook-dialog/edit-cashbook-dialog.component';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  @Input()
  cashbooks: Cashbook[];

  @Input()
  incomes: Income[];

  @Output()
  updateIncome = new EventEmitter<Income>();

  @Output()
  deleteIncome = new EventEmitter<Income>();

  @Output()
  addIncome = new EventEmitter<Income>();

  @Output()
  deleteCashbook = new EventEmitter<Cashbook>();

  @Output()
  updateCashbook = new EventEmitter<Cashbook>();

  constructor(private dataHandler: DataHandlerService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.dataHandler.getIncomeData().subscribe(incomes => this.incomes = incomes);
  }

  toggleIncomeRegular(income: Income): void {
    income.regular = !income.regular;
    this.updateIncome.emit(income);
    console.log(TestData.cashbooks);
    console.log(TestData.incomes);
    console.log(TestData.costs);
  }

  findIncomeByCashbookId(cashbook: Cashbook): Income[] {
    // tslint:disable-next-line:only-arrow-functions typedef
    return this.incomes.filter(function(income) {
      return income.cashbookId === cashbook.id;
    });
  }

  openEditIncomeDialog(income: Income): void {
    const dialogRef = this.dialog.open(EditIncomeDialogComponent, {data: [income, 'Edit income data'], autoFocus: false});
    dialogRef.afterClosed().subscribe(result => {
      if (result as Income) {
        this.updateIncome.emit(income);
        return;
      }
    });
  }

  openDeleteIncomeDialog(income: Income): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '500px',
      data: {
        dialogTitle: 'Confirm your action',
        message: `Are you sure to delete income: "${income.flowPurpose}"?`
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteIncome.emit(income);
      }
    });
  }

  openAddIncomeDialog(cashbook: Cashbook): void {
    const income = new Income(null, '', null, null, cashbook.id, '', false);
    const dialogRef = this.dialog.open(EditIncomeDialogComponent, {data: [income, 'Add income']});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addIncome.emit(income);
      }
    });
  }

  openDeleteCashbookDialog(cashbook: Cashbook): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '500px',
      data: {
        dialogTitle: 'Confirm your action',
        message: `Are you sure to delete cashbook: "${cashbook.name}"?`
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteCashbook.emit(cashbook);
      }
    });
  }

  openEditCashbookDialog(cashbook: Cashbook): void {
    const dialogRef = this.dialog.open(EditCashbookDialogComponent, {data: [cashbook.name, 'Edit cashbook data'], width: '400px'});
    dialogRef.afterClosed().subscribe(result => {
      if (typeof (result) === 'string') {
        cashbook.name = result as string;
        this.updateCashbook.emit(cashbook);
      }
    });
  }
}
