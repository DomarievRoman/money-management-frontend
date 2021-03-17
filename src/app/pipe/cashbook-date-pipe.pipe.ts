import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'cashbookDatePipe'
})
export class CashbookDatePipePipe extends DatePipe implements PipeTransform {

  transform(date: Date | string, format: string = 'mediumDate'): any {
    if (date == null) {
      return 'None';
    }

    date = new Date(date);

    if (date.getDate() === new Date().getDate()) {
      return 'Today';
    }

    if (date.getDate() === new Date().getDate() - 1) {
      return 'Yesterday';
    }

    return new DatePipe('en-EN').transform(date, format);
  }

}
