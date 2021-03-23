import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cashbook} from '../../model/Cashbook';
import {Income} from '../../model/Income';
import {DataHandlerService} from '../../service/data-handler.service';
import {MatDialog} from '@angular/material/dialog';
import {TestData} from '../../data/TestData';
import {EditIncomeDialogComponent} from '../../dialog/edit-income-dialog/edit-income-dialog.component';
import {ConfirmDialogComponent} from '../../dialog/confirm-dialog/confirm-dialog.component';
import {EditCashbookDialogComponent} from '../../dialog/edit-cashbook-dialog/edit-cashbook-dialog.component';
import {Costs} from '../../model/Costs';
import {EditCostsDialogComponent} from '../../dialog/edit-costs-dialog/edit-costs-dialog.component';

@Component({
  selector: 'app-income-cost',
  templateUrl: './income-cost.component.html',
  styleUrls: ['./income-cost.component.css']
})
export class IncomeCostComponent implements OnInit {
  @Input()
  cashbooks: Cashbook[];

  @Input()
  incomes: Income[];

  @Input()
  costs: Costs[];

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

  @Output()
  updateCost = new EventEmitter<Costs>();

  @Output()
  deleteCost = new EventEmitter<Costs>();

  @Output()
  addCost = new EventEmitter<Costs>();

  constructor(private dataHandler: DataHandlerService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.dataHandler.getIncomeData().subscribe(incomes => this.incomes = incomes);
    this.dataHandler.getCostsData().subscribe(costs => this.costs = costs);
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

  toggleCostFullPaid(cost: Costs): void {
    cost.fullPaid = !cost.fullPaid;
  }


  findCostsByCashbookId(cashbook: Cashbook): Costs[] {
    // tslint:disable-next-line:only-arrow-functions typedef
    return this.costs.filter(function(cost) {
      return cost.cashbookId === cashbook.id;
    });
  }

  openEditCostsDialog(costs: Costs): void {
    const dialogRef = this.dialog.open(EditCostsDialogComponent, {data: [costs, 'Edit cost data'], autoFocus: false});
    dialogRef.afterClosed().subscribe(result => {
      if (result as Costs) {
        this.updateCost.emit(costs);
        return;
      }
    });
  }

  openDeleteCostDialog(cost: Costs): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '500px',
      data: {
        dialogTitle: 'Confirm your action',
        message: `Are you sure to delete cost: "${cost.flowPurpose}"?`
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteCost.emit(cost);
      }
    });
  }

  openAddCostDialog(cashbook: Cashbook): void {
    const cost = new Costs(null, '', null, null, cashbook.id, '', false);
    const dialogRef = this.dialog.open(EditCostsDialogComponent, {data: [cost, 'Add cost']});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addCost.emit(cost);
      }
    });
  }


  cashbookBalanceCounter(cashbookId: number): number {
    const incomeSum = TestData.incomes.filter(income => income.cashbookId === cashbookId).filter(income => income.payment)
      .reduce((sum, cur) => sum + cur.payment, 0);
    const costsSum = TestData.costs.filter(income => income.cashbookId === cashbookId).filter(cost => cost.payment)
      .reduce((sum, cur) => sum + cur.payment, 0);
    this.cashbooks.filter(c => c.id === cashbookId).filter(d => d.balance = incomeSum - costsSum);
    return this.round(this.cashbooks.find(c => c.id === cashbookId).balance);
  }

  private round(num: number): number {
    return Math.round(num * 100) / 100;
  }
}
