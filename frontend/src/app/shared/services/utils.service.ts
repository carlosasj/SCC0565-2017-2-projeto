import { environment } from '@env/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  static exists = val => typeof val !== 'undefined' && val !== null && Boolean(val);

  static removeFromList(item: any, list: Array<any>) {
    const idx = list.indexOf(item);
    list.splice(idx, 1);
  }

  static strcmp(a: string, b: string) {
    if (a === undefined) {
        return b === undefined ? 0 : 1;
    }
    return a.localeCompare(
        b,
        'pt',
        {
            sensitivity: 'base',
            ignorePunctuation: true,
            numeric: true
        }
    );
  }

  static endpoint(path: string): string {
    return environment.baseUrl + path;
  }

}
