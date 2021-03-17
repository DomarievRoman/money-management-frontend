import {Component, Input, OnInit, Output} from '@angular/core';
import {Income} from '../../model/Income';
import {Cashbook} from '../../model/Cashbook';
import {DataHandlerService} from '../../service/data-handler.service';
import {EventEmitter} from '@angular/core';
import {EditIncomeDialogComponent} from '../../dialog/edit-income-dialog/edit-income-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../dialog/confirm-dialog/confirm-dialog.component';

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

  constructor(private dataHandler: DataHandlerService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  toggleIncomeRegular(income: Income): void {
    income.regular = !income.regular;
  }

  openEditIncomeDialog(income: Income): void {
    const dialogRef = this.dialog.open(EditIncomeDialogComponent, {data: [income, 'Edit income data'], autoFocus: false});
    dialogRef.afterClosed().subscribe(result => {
      if (result as Income) {
        this.updateIncome.emit(income);
        return;
      }
      if (result === 'delete') {
        this.deleteIncome.emit(income);
        return;
      }
    });
  }

  deleteIncomeDialog(income: Income): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '500px',
      data: {
        dialogTitle: 'Confirm your action',
        message: 'Are you sure to delete income?'
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteIncome.emit(income);
      }
    });
  }
}