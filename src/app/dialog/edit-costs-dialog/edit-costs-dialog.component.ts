import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Income} from '../../model/Income';
import {DataHandlerService} from '../../service/data-handler.service';
import {Costs} from '../../model/Costs';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-costs-dialog',
  templateUrl: './edit-costs-dialog.component.html',
  styleUrls: ['./edit-costs-dialog.component.css']
})
export class EditCostsDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditCostsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: [Costs, string],
              private dataHandler: DataHandlerService,
              private dialog: MatDialog) {
  }

  dialogTitle: string;
  costs: Costs;
  tmpFlowPurpose: string;
  tmpDate: Date;
  tmpPayment: number;
  tmpTo: string;
  tmpFullPaid: boolean;

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
    this.tmpFullPaid = this.costs.fullPaid;
  }

  getErrorMessage(): string {
    if (this.paymentValidValue.hasError('required')) {
      return 'You must enter a valid value';
    }
    if (this.purposeValidValue.hasError('required')) {
      return 'You must enter a valid value';
    }
    if (this.dateValidValue.hasError('required')) {
      return 'You must enter a valid value';
    }
  }

  onConfirm(): void {
    this.costs.flowPurpose = this.tmpFlowPurpose;
    this.costs.transactionDate = this.tmpDate;
    this.costs.payment = this.tmpPayment;
    this.costs.to = this.tmpTo;
    this.costs.fullPaid = this.tmpFullPaid;
    this.dialogRef.close(this.costs);
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

}
