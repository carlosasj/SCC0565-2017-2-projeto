import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipesService {

  constructor(
    private $http: Http,
  ) {}

  public getRecipe() {
    return this.$http.get('http://127.0.0.1:8000/recipe').map(r => r.json()).toPromise();
  }
}
