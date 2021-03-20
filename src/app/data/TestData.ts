import {Income} from '../model/Income';
import {Costs} from '../model/Costs';
import {Cashbook} from '../model/Cashbook';

export class TestData {
  static incomes: Income[] = [
    {id: 1, flowPurpose: 'Salary', payment: 1500, transactionDate: new Date('2021-03-01'), cashbookId: 1, from: 'Some work', regular: true},
    {id: 2, flowPurpose: 'Gift', payment: 760, transactionDate: new Date('2021-02-22'), cashbookId: 1, from: 'Family', regular: false},
    {
      id: 3,
      flowPurpose: 'Lottery',
      payment: 25500.56,
      transactionDate: new Date('2021-01-27'),
      cashbookId: 1,
      from: 'Lottery Ukr',
      regular: false
    },
    {
      id: 4,
      flowPurpose: 'Salary from another work',
      payment: 3500,
      transactionDate: new Date('2021-03-08'),
      cashbookId: 1,
      from: 'Some work2',
      regular: true
    }
  ];
  static costs: Costs[] = [
    {
      id: 1,
      flowPurpose: 'Products',
      payment: 550.79,
      transactionDate: new Date('2021-02-18'),
      cashbookId: 1,
      to: 'Blyzenko',
      fullPaid: true
    },
    {id: 2, flowPurpose: 'Iqos sticks', payment: 400, transactionDate: new Date('2021-03-09'), cashbookId: 1, to: 'Auchan', fullPaid: true},
    {
      id: 3,
      flowPurpose: 'Gift on 8th March',
      payment: 850.45,
      transactionDate: new Date('2021-03-07'),
      cashbookId: 1,
      to: 'Arsen',
      fullPaid: true
    },
    {
      id: 4,
      flowPurpose: 'New phone',
      payment: 30000,
      transactionDate: new Date('2021-01-28'),
      cashbookId: 1,
      to: 'Apple Room',
      fullPaid: false
    },
  ];
  static cashbooks: Cashbook[] = [
    {
      id: 1, name: 'My cashbook'
    }
  ];
}
