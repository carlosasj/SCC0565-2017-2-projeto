import { Routes } from '@angular/router';

import { SearchResultsComponent } from './search-results/search-results.component';
import { LoginComponent } from './login/login.component';
import { SendRecipeComponent } from './send-recipe/send-recipe.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'categorias',
        component: CategoriesComponent,
      },
      {
        path: 'incluir-receita',
        component: SendRecipeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'pesquisa',
        component: SearchResultsComponent,
      },
      {
        path: 'cadastro',
        component: SignupComponent,
      }
    ]
  },
];
