import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Costs} from '../../model/Costs';
import {FormControl, Validators} from '@angular/forms';
import {DialogAction, DialogResult} from '../../dialogResult/DialogResult';

@Component({
  selector: 'app-edit-costs-dialog',
  templateUrl: './edit-costs-dialog.component.html',
  styleUrls: ['./edit-costs-dialog.component.css']
})
export class EditCostsDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditCostsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: [Costs, string]) {
  }

  dialogTitle: string;
  costs: Costs;
  tmpFlowPurpose: string;
  tmpDate: Date;
  tmpPayment: number;
  tmpTo: string;

  paymentValidValue = new FormControl('', [Validators.required]);
  purposeValidValue = new FormControl('', [Validators.required]);
  dateValidValue = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.costs = this.data[0];
    this.dialogTitle = this.data[1];
    this.tmpFlowPurpose = this.costs.flowPurpose;
    this.tmpDate = this.costs.transactionDate;
    this.tmpPayment = this.costs.payment;
    this.tmpTo = this.costs.to;
  }

  getErrorMessage(): string {
    if (this.paymentValidValue.hasError('required')) {
      return 'Invalid value';
    }
    if (this.purposeValidValue.hasError('required')) {
      return 'Invalid value';
    }
    if (this.dateValidValue.hasError('required')) {
      return 'Invalid value';
    }
  }

  onConfirm(): void {
    this.costs.flowPurpose = this.tmpFlowPurpose;
    this.costs.transactionDate = this.tmpDate;
    this.costs.payment = this.tmpPayment;
    this.costs.to = this.tmpTo;
    this.dialogRef.close(new DialogResult(DialogAction.SAVE, this.costs));
  }

  onCancel(): void {
    this.dialogRef.close(new DialogResult(DialogAction.CANCEL));
  }

}
