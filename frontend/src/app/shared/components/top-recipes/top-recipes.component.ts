import { RecipesService } from './../../services/recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-recipes',
  templateUrl: './top-recipes.component.html',
})
export class TopRecipesComponent implements OnInit {
  public recipes;
  constructor(
    private recipesService: RecipesService,
  ) {
    recipesService.getMostViewedRecipes()
    .then(res => {
      this.recipes = res;
    });
  }

  ngOnInit() {
  }

}
