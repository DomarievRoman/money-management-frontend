import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Income} from '../../model/Income';
import {DataHandlerService} from '../../service/data-handler.service';
import {FormControl, Validators} from '@angular/forms';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-edit-income-dialog',
  templateUrl: './edit-income-dialog.component.html',
  styleUrls: ['./edit-income-dialog.component.css']
})
export class EditIncomeDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditIncomeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: [Income, string],
              private dataHandler: DataHandlerService,
              private dialog: MatDialog) {
  }

  dialogTitle: string;
  income: Income;
  tmpFlowPurpose: string;
  tmpDate: Date;
  tmpPayment: number;
  tmpFrom: string;
  tmpRegular: boolean;

  paymentValidValue = new FormControl('', [Validators.required]);
  purposeValidValue = new FormControl('', [Validators.required]);
  dateValidValue = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.income = this.data[0];
    this.dialogTitle = this.data[1];
    this.tmpFlowPurpose = this.income.flowPurpose;
    this.tmpDate = this.income.transactionDate;
    this.tmpPayment = this.income.payment;
    this.tmpFrom = this.income.from;
    this.tmpRegular = this.income.regular;
  }

  getErrorMessage(): string {
    if (this.paymentValidValue.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.purposeValidValue.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.dateValidValue.hasError('required')) {
      return 'You must enter a value';
    }
  }

  onConfirm(): void {
    this.income.flowPurpose = this.tmpFlowPurpose;
    this.income.transactionDate = this.tmpDate;
    this.income.payment = this.tmpPayment;
    this.income.from = this.tmpFrom;
    this.income.regular = this.tmpRegular;
    this.dialogRef.close(this.income);
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}
