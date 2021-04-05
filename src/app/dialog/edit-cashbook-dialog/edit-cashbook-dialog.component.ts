import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import {Cashbook} from '../../model/Cashbook';
import {DialogAction, DialogResult} from '../../dialogResult/DialogResult';

@Component({
  selector: 'app-edit-cashbook-dialog',
  templateUrl: './edit-cashbook-dialog.component.html',
  styleUrls: ['./edit-cashbook-dialog.component.css']
})
export class EditCashbookDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditCashbookDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: [Cashbook, string]) {
  }

  dialogTitle: string;
  cashbook: Cashbook;
  cashbookName: string;
  nameValidValue = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.cashbook = this.data[0];
    this.dialogTitle = this.data[1];
    this.cashbookName = this.cashbook.name;
  }

  getErrorMessage(): string {
    if (this.nameValidValue.hasError('required')) {
      return 'Invalid value';
    }
  }

  onConfirm(): void {
    this.cashbook.name = this.cashbookName;
    this.dialogRef.close(new DialogResult(DialogAction.SAVE, this.cashbook));
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
