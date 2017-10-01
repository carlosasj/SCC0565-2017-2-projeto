import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {

  transform(date: any, removeSuffix: boolean = false): any {
    return moment(date).fromNow(removeSuffix);
  }

}
