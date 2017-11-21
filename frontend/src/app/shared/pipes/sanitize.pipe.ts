import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }

  transform(html: string) {
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

}
