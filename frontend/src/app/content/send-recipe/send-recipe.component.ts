import { AuthService } from './../../shared/services/auth.service';
import { RecipesService } from './../../shared/services/recipes.service';
import { Recipe } from './../../models/recipe';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './send-recipe.component.html',
    styleUrls: ['./send-recipe.component.scss']
})
export class SendRecipeComponent implements OnInit {
    public recipe: Recipe;
    public author;
    public categories = [];
    constructor(
        private recipesService: RecipesService,
        private authService: AuthService,
        private router: Router,
    ) {
        this.recipe = new Recipe();
        this.recipe.ingredients.push({
            name: '',
            quantity: '',
            unit: ''
        });
        const user = this.authService.getUserInfo();
        console.log(user);
        this.author = user.username;
        recipesService.getCategories()
            .then(res => {
                this.categories = res;
            });
    }

    ngOnInit() {
    }

    public addIngredient() {
        this.recipe.ingredients.push({
            name: '',
            quantity: '',
            unit: ''
        });
    }

    public sendRecipe() {
        this.recipe.author = undefined;
        this.recipe.category = +this.recipe.category;
        this.recipesService.sendRecipe(this.recipe)
            .then(res => {
                this.router.navigate(['/']);
            });
    }
}
