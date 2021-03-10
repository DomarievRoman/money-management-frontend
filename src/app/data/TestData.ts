import {Income} from '../model/Income';
import {Costs} from '../model/Costs';
import {Cashbook} from '../model/Cashbook';

export class TestData {
  static incomes: Income[] = [
    {id: 1, flowPurpose: 'salary', payment: 1500, transactionDate: new Date('2021-03-01'), from: 'Some work', regular: true},
    {id: 2, flowPurpose: 'gift', payment: 760, transactionDate: new Date('2021-02-22'), from: 'family', regular: false},
    {id: 3, flowPurpose: 'lottery', payment: 25500.50, transactionDate: new Date('2021-01-27'), from: 'Lottery Ukr', regular: false},
    {id: 4, flowPurpose: 'salary from another work', payment: 3500, transactionDate: new Date('2021-03-08'), from: 'Some work2',
      regular: true}
  ];
  static costs: Costs[] = [
    {id: 1, flowPurpose: 'products', payment: 550.79, transactionDate: new Date('2021-02-18'), to: 'Blyzenko', fullPaid: true},
    {id: 2, flowPurpose: 'iqos sticks', payment: 400, transactionDate: new Date('2021-03-09'), to: 'Auchan', fullPaid: true},
    {id: 3, flowPurpose: 'gift on 8th March', payment: 850.45, transactionDate: new Date('2021-03-07'), to: 'Arsen', fullPaid: true},
    {id: 4, flowPurpose: 'new phone', payment: 30000, transactionDate: new Date('2021-01-28'), to: 'Apple Room', fullPaid: false},
  ];
  static cashbooks: Cashbook[] = [
    {id: 1, name: 'My cashbook', income: [TestData.incomes[0], TestData.incomes[1], TestData.incomes[2], TestData.incomes[3]],
      costs: [TestData.costs[0], TestData.costs[1], TestData.costs[2], TestData.costs[3]], balance: -540.74}
  ];
}
