import {CostsDao} from '../interface/CostsDao';
import {Observable, of} from 'rxjs';
import {Costs} from '../../../model/Costs';
import {TestData} from '../../TestData';

export class CostsDaoImpl implements CostsDao {
  add(T): Observable<Costs> {
    return undefined;
  }

  delete(id: number): Observable<Costs> {
    return undefined;
  }

  get(id: number): Observable<Costs> {
    return of(TestData.costs.find(cost => cost.id === id));
  }

  getAll(): Observable<Costs[]> {
    return of(TestData.costs);
  }

  update(T): Observable<Costs> {
    return undefined;
  }
}
