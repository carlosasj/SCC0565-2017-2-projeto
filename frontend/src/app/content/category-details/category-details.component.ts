import { ActivatedRoute } from '@angular/router';
import { RecipesService } from './../../shared/services/recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  public recipes;
  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
  ) {
      const id = this.route.snapshot.paramMap.get('id');
      recipesService.getRecipesByCategory(id)
        .subscribe(res => {
          this.recipes = res;
        });
  }

  ngOnInit() {
    
  }

}
