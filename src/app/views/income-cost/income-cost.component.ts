import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Cashbook} from '../../model/Cashbook';
import {Income} from '../../model/Income';
import {MatDialog} from '@angular/material/dialog';
import {EditIncomeDialogComponent} from '../../dialog/edit-income-dialog/edit-income-dialog.component';
import {ConfirmDialogComponent} from '../../dialog/confirm-dialog/confirm-dialog.component';
import {EditCashbookDialogComponent} from '../../dialog/edit-cashbook-dialog/edit-cashbook-dialog.component';
import {Costs} from '../../model/Costs';
import {EditCostsDialogComponent} from '../../dialog/edit-costs-dialog/edit-costs-dialog.component';
import {DialogAction} from '../../dialogResult/DialogResult';
import {AbstractSearchValues} from '../../data/search/AbstractSearchValues';
import {CashbookStatistics} from '../../model/CashbookStatistics';
import {CashbookDaoImplService} from '../../data/dao/impl/cashbookDao/cashbook-dao-impl.service';

@Component({
  selector: 'app-income-cost',
  templateUrl: './income-cost.component.html',
  styleUrls: ['./income-cost.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IncomeCostComponent implements OnInit {
  @Input()
  cashbooks: Cashbook[];

  @Input()
  incomes: Income[];

  @Input()
  costs: Costs[];

  @Input()
  abstractSearchValues: AbstractSearchValues;

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

  @Output()
  searchIncomes = new EventEmitter<AbstractSearchValues>();

  @Output()
  searchCosts = new EventEmitter<AbstractSearchValues>();

  filterIncomeFlowPurpose: string;

  filterCostsFlowPurpose: string;

  filterIncomeChanged: boolean;

  filterCostsChanged: boolean;

  cashbookStatistics: CashbookStatistics;

  showStats: boolean;

  constructor(private dialog: MatDialog, private cashbookService: CashbookDaoImplService) {
  }

  ngOnInit(): void {
    this.showStats = true;
  }

  closeStats(): void {
    this.showStats = false;
  }

  toggleIncomeRegular(income: Income): void {
    income.regular = !income.regular;
    this.updateIncome.emit(income as Income);
  }

  toggleCostFullPaid(cost: Costs): void {
    cost.fullPaid = !cost.fullPaid;
    this.updateCost.emit(cost as Costs);
  }

  openAddIncomeDialog(cashbook: Cashbook): void {
    const income = new Income(null, '', null, null, cashbook, '', false);
    const dialogRef = this.dialog.open(EditIncomeDialogComponent, {data: [income, 'Add income']});
    dialogRef.afterClosed().subscribe(result => {
      if (!(result)) {
        return;
      }
      if (result.action === DialogAction.SAVE) {
        this.addIncome.emit(result.obj as Income);
      }
    });
  }

  openEditIncomeDialog(income: Income): void {
    const dialogRef = this.dialog.open(EditIncomeDialogComponent, {
      data: [new Income(income.id, income.flowPurpose, income.payment,
        income.transactionDate, income.cashbook, income.from, income.regular), 'Edit income data'], autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!(result)) {
        return;
      }
      if (result.action === DialogAction.SAVE) {
        this.updateIncome.emit(result.obj as Income);
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
      if (!(result)) {
        return;
      }
      if (result.action === DialogAction.DELETE) {
        this.deleteIncome.emit(income);
      }
    });
  }

  openEditCashbookDialog(cashbook: Cashbook): void {
    const dialogRef = this.dialog.open(EditCashbookDialogComponent, {data: [cashbook, 'Edit cashbook data'], width: '400px'});
    dialogRef.afterClosed().subscribe(result => {
      if (!(result)) {
        return;
      }
      if (result.action === DialogAction.SAVE) {
        this.updateCashbook.emit(result.obj as Cashbook);
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
      if (!(result)) {
        return;
      }
      if (result.action === DialogAction.DELETE) {
        this.deleteCashbook.emit(cashbook);
      }
    });
  }

  openAddCostDialog(cashbook: Cashbook): void {
    const cost = new Costs(null, '', null, null, cashbook, '', true);
    const dialogRef = this.dialog.open(EditCostsDialogComponent, {data: [cost, 'Add cost']});
    dialogRef.afterClosed().subscribe(result => {
      if (!(result)) {
        return;
      }
      if (result.action === DialogAction.SAVE) {
        this.addCost.emit(result.obj as Costs);
      }
    });
  }

  openEditCostsDialog(costs: Costs): void {
    const dialogRef = this.dialog.open(EditCostsDialogComponent, {data: [costs, 'Edit cost data'], autoFocus: false});
    dialogRef.afterClosed().subscribe(result => {
      if (!(result)) {
        return;
      }
      if (result.action === DialogAction.SAVE) {
        this.updateCost.emit(result.obj as Costs);
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
      if (!(result)) {
        return;
      }
      if (result.action === DialogAction.DELETE) {
        this.deleteCost.emit(cost);
      }
    });
  }

  findIncomeByCashbookId(cashbook: Cashbook): Income[] {
    if (this.incomes) {
      return this.incomes.filter(t => t.cashbook.id === cashbook.id);
    } else {
      return [];
    }
  }


  findCostsByCashbookId(cashbook: Cashbook): Costs[] {
    if (this.costs) {
      return this.costs.filter(t => t.cashbook.id === cashbook.id);
    } else {
      return [];
    }
  }

  searchIncome(): void {
    this.filterIncomeChanged = false;
    if (!this.abstractSearchValues) {
      return;
    }
    this.abstractSearchValues.flowPurpose = this.filterIncomeFlowPurpose;
    this.searchIncomes.emit(this.abstractSearchValues);
  }

  searchCost(): void {
    this.filterCostsChanged = false;
    if (!this.abstractSearchValues) {
      return;
    }
    this.abstractSearchValues.flowPurpose = this.filterCostsFlowPurpose;
    this.searchCosts.emit(this.abstractSearchValues);
  }

  clearAndSearchIncome(): void {
    this.filterIncomeFlowPurpose = null;
    this.searchIncome();
  }

  checkIncomeFilterChanged(): boolean {
    this.filterIncomeChanged = this.filterIncomeFlowPurpose !== this.abstractSearchValues.flowPurpose;
    return this.filterIncomeChanged;
  }

  clearAndSearchCosts(): void {
    this.filterCostsFlowPurpose = null;
    this.searchCost();
  }

  checkCostsFilterChanged(): boolean {
    this.filterCostsChanged = this.filterCostsFlowPurpose !== this.abstractSearchValues.flowPurpose;
    return this.filterCostsChanged;
  }

  getCashbookStatistics(cashbook: Cashbook): void {
    if (this.showStats) {
      this.cashbookService.getStatistics(cashbook.id).subscribe(result => {
        this.cashbookStatistics = result;
      });
    }
    this.showStats = true;
  }
}
