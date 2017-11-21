import { ActivatedRoute } from '@angular/router';
import { RecipesService } from './../../shared/services/recipes.service';
import { Recipe } from './../../models/recipe';
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { ɵgetDOM, ɵDomAdapter, DOCUMENT } from '@angular/platform-browser';



@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  public recipe: Recipe;
  private dom: ɵDomAdapter;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private recipesService: RecipesService,
    private route: ActivatedRoute,
  ) {

    this.dom = ɵgetDOM();

    this.route.params.subscribe(params => {
      const id = route.snapshot.paramMap.get('id');
      recipesService.getRecipeById(+id)
        .then(res => {
          this.recipe = res;
          this.setJsonLD(this.recipe);
        });
    });
  }

  private minToCookTime(minutes: number) {
    if (minutes >= 60) {
      let partial = 'PT' + (Math.floor(minutes / 60)) + 'H';
      if (minutes % 60) {
        partial += (minutes % 60) + 'M';
      }
    }
    return 'PT' + minutes + 'M';
  }

  private setJsonLD(recipe: Recipe) {
    let script = document.querySelector('script[type="application/ld+json"]');
    if (script) {
      script.innerHTML = '';
    } else {
      script = document.createElement('script');
      document.head.appendChild(script);
      script.setAttribute('type', 'application/ld+json');
    }

    const jsonld: any = {
      '@context': 'http://schema.org',
      '@type': 'Recipe',
      'name': recipe.name,
      'author': recipe.author.name,
      'datePublished': recipe.publish_date.split('T')[0],
      'image': '',
      'description': recipe.description,
      'cookTime': this.minToCookTime(recipe.ready_in_time),
      'recipeIngredient': recipe.ingredients.map(ing => '' + ing.quantity + ing.unit + ing.name),
      'recipeInstructions': recipe.instructions.split(/(\r\n|\r|\n)/g).filter(c => !['\n', '\r', '\r\n'].includes(c)),
      'recipeYield': '' + recipe.portions + ' porção'
    };

    script.innerHTML = JSON.stringify(jsonld);
  }

  ngOnInit() {

  }

}
