import {CommonDao} from './CommonDao';
import {Cashbook} from '../../../model/Cashbook';
import {Observable} from 'rxjs';
import {CashbookStatistics} from '../../../model/CashbookStatistics';

export interface CashbookDao extends CommonDao<Cashbook> {

  getStatistics(id: number): Observable<CashbookStatistics>;
}
