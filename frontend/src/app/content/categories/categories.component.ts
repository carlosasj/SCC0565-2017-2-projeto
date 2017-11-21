import { RecipesService } from './../../shared/services/recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories;
  constructor(
    private recipesService: RecipesService,
  ) {
    recipesService.getCategories()
      .then(res => {
        this.categories = res;
      });
  }

  ngOnInit() {
  }

}
