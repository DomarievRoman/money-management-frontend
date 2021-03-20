import {CostsDao} from '../interface/CostsDao';
import {Observable, of} from 'rxjs';
import {Costs} from '../../../model/Costs';
import {TestData} from '../../TestData';

export class CostsDaoImpl implements CostsDao {
  add(cost: Costs): Observable<Costs> {
    if (cost.id === null || cost.id === 0) {
      cost.id = this.getLastCostId();
    }
    TestData.costs.push(cost);
    return of(cost);
  }

  delete(id: number): Observable<Costs> {
    const costTmp = TestData.costs.find(t => t.id === id);
    TestData.costs.splice(TestData.costs.indexOf(costTmp), 1);
    return of(costTmp);
  }

  get(id: number): Observable<Costs> {
    return of(TestData.costs.find(cost => cost.id === id));
  }

  getAll(): Observable<Costs[]> {
    return of(TestData.costs);
  }

  update(costs: Costs): Observable<Costs> {
    const costsTmp = TestData.costs.find(t => t.id === costs.id);
    TestData.costs.splice(TestData.costs.indexOf(costsTmp), 1, costs);
    return of(costs);
  }

  getLastCostId(): number {
    return Math.max.apply(Math, TestData.costs.map(cost => cost.id)) + 1;
  }
}
