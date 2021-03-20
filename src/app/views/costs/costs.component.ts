import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cashbook} from '../../model/Cashbook';
import {Costs} from '../../model/Costs';
import {DataHandlerService} from '../../service/data-handler.service';
import {MatDialog} from '@angular/material/dialog';
import {EditCostsDialogComponent} from '../../dialog/edit-costs-dialog/edit-costs-dialog.component';
import {ConfirmDialogComponent} from '../../dialog/confirm-dialog/confirm-dialog.component';
import {TestData} from '../../data/TestData';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css']
})
export class CostsComponent implements OnInit {

  @Input()
  cashbooks: Cashbook[];

  @Input()
  costs: Costs[];

  @Output()
  updateCost = new EventEmitter<Costs>();

  @Output()
  deleteCost = new EventEmitter<Costs>();

  @Output()
  addCost = new EventEmitter<Costs>();

  constructor(private dataHandler: DataHandlerService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataHandler.getCostsData().subscribe(costs => this.costs = costs);
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
}
