import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipesService {
  private baseUrl = 'http://127.0.0.1:8000';
  constructor(
    private $http: Http,
  ) {}

  public getRecipe() {
    return this.$http.get(this.baseUrl + '/recipe').map(r => r.json()).toPromise();
  }

  public getHomeRecipes() {
    return this.$http.get(this.baseUrl + '/recipe/home').map(r => r.json()).toPromise();
  }

  public getMostViewedRecipes() {
    return this.$http.get(this.baseUrl + '/recipe/?limit=5&ordering=-views').map(r => r.json().results).toPromise();
  }
}
