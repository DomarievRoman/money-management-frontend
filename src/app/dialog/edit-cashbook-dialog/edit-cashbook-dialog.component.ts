import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Costs} from '../../model/Costs';
import {DataHandlerService} from '../../service/data-handler.service';
import {FormControl, Validators} from '@angular/forms';
import {Cashbook} from '../../model/Cashbook';

@Component({
  selector: 'app-edit-cashbook-dialog',
  templateUrl: './edit-cashbook-dialog.component.html',
  styleUrls: ['./edit-cashbook-dialog.component.css']
})
export class EditCashbookDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditCashbookDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: [string, string],
              private dataHandler: DataHandlerService,
              private dialog: MatDialog) {
  }

  dialogTitle: string;
  cashbookName: string;
  nameValidValue = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.cashbookName = this.data[0];
    this.dialogTitle = this.data[1];
  }

  getErrorMessage(): string {
    if (this.nameValidValue.hasError('required')) {
      return 'You must enter a valid value';
    }
  }

  onConfirm(): void {
    this.dialogRef.close(this.cashbookName);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
