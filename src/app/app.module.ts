import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CashbookComponent} from './views/cashbook/cashbook.component';
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
import {CashbookDatePipePipe} from './pipe/cashbook-date-pipe.pipe';
import {registerLocaleData} from '@angular/common';

import localeEn from '@angular/common/locales/en-001';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ConfirmDialogComponent} from './dialog/confirm-dialog/confirm-dialog.component';
import {EditCostsDialogComponent} from './dialog/edit-costs-dialog/edit-costs-dialog.component';
import {EditCashbookDialogComponent} from './dialog/edit-cashbook-dialog/edit-cashbook-dialog.component';
import {IncomeCostComponent} from './views/income-cost/income-cost.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';

registerLocaleData(localeEn);

@NgModule({
  declarations: [
    AppComponent,
    CashbookComponent,
    EditIncomeDialogComponent,
    CashbookDatePipePipe,
    ConfirmDialogComponent,
    EditCostsDialogComponent,
    EditCashbookDialogComponent,
    IncomeCostComponent
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
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [],
  entryComponents: [
    EditIncomeDialogComponent,
    ConfirmDialogComponent,
    EditCostsDialogComponent,
    EditCashbookDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
