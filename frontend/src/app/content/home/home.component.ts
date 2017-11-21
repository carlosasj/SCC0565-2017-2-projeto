import { RecipesService } from './../../shared/services/recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public categories;
  constructor(
    private recipesService: RecipesService,
  ) {
    recipesService.getHomeRecipes()
      .then(res => {
        console.log(res);
        this.categories = res;
      });
  }

  ngOnInit() {
  }

}
