import { ActivatedRoute } from '@angular/router';
import { RecipesService } from './../../shared/services/recipes.service';
import { Recipe } from './../../models/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  public recipe: Recipe;
  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
  ) {

    this.route.params.subscribe(params => {
      const id = route.snapshot.paramMap.get('id');
      recipesService.getRecipeById(+id)
        .then(res => {
          this.recipe = res;
        });
    });
  }

  ngOnInit() {
  }

}
