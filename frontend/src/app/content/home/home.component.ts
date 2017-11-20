import { RecipesService } from './../../shared/services/recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private recipesService: RecipesService,
  ) {
    recipesService.getRecipe()
      .then(res => {
        console.log(res);
        
      });
  }

  ngOnInit() {
  }

}
