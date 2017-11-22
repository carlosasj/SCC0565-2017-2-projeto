import { UtilsService as utils } from '@services';
import { Recipe } from '@models/recipe';
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
    return this.$http.get(utils.endpoint('/recipe/')).map(r => r.json()).toPromise();
  }

  public getRecipeById(id: number) {
    return this.$http.get(utils.endpoint('/recipe/' + id)).map(r => r.json()).toPromise();
  }

  public getHomeRecipes() {
    return this.$http.get(utils.endpoint('/recipe/home')).map(r => r.json()).toPromise();
  }

  public getMostViewedRecipes() {
    return this.$http.get(utils.endpoint('/recipe/?limit=5&ordering=-views')).map(r => r.json().results).toPromise();
  }

  public getRecipesByCategory(id) {
    return this.$http.get(utils.endpoint('/recipe/?category__id=' + id)).map(r => r.json());
  }

  public getCategoryById(id) {
    return this.$http.get(utils.endpoint('/recipe/category/' + id)).map(r => r.json());
  }

  public getCategories() {
    return this.$http.get(utils.endpoint('/recipe/category')).map(r => r.json()).toPromise();
  }

  public sendRecipe(recipe: Recipe) {
    return this.$http.post(utils.endpoint('/recipe/'), recipe).map(r => r.json()).toPromise();
  }

  public searchRecipe(query: string) {
    return this.$http.get(utils.endpoint('/recipe/?search=' + query)).map(r => r.json()).toPromise();
  }
}
