import { Recipe } from '@models/recipe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RecipesService } from '@services/recipes.service';

@Component({
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public query: string;
  public recipes: Array<Recipe> = [];

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];
    });
    this.recipesService.searchRecipe(this.query)
      .then(res => {
        this.recipes = res;
        console.log(res);
        
      });
  }

}
