import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UtilsService as utils } from '@services/utils.service';
import { Choice } from '@models';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StatesService {

  constructor(
    private $http: Http,
  ) { }

  public list(): Observable<Choice[]> {
    return this.$http.options(utils.endpoint('/account/user/'))
      .map(r => <Choice[]>r.json().actions.POST.state.choices);
  }

}
