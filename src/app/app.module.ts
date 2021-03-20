import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CashbookComponent} from './views/cashbook/cashbook.component';
import {IncomeComponent} from './views/income/income.component';
import {CostsComponent} from './views/costs/costs.component';
import {EditIncomeDialogComponent} from './dialog/edit-income-dialog/edit-income-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { CashbookDatePipePipe } from './pipe/cashbook-date-pipe.pipe';
import {registerLocaleData} from '@angular/common';

import localeEn from '@angular/common/locales/en-001';
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { EditCostsDialogComponent } from './dialog/edit-costs-dialog/edit-costs-dialog.component';

registerLocaleData(localeEn);

@NgModule({
  declarations: [
    AppComponent,
    CashbookComponent,
    IncomeComponent,
    CostsComponent,
    EditIncomeDialogComponent,
    CashbookDatePipePipe,
    ConfirmDialogComponent,
    EditCostsDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [
    EditIncomeDialogComponent,
    ConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
