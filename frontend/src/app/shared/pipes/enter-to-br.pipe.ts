import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enterToBr'
})
export class EnterToBrPipe implements PipeTransform {

  transform(text: string): string {
    return text.replace(/(\r\n|\r|\n)/g, '<br />');
  }

}
