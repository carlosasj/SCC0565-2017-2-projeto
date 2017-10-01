import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from './content.routes';

import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { SendRecipeComponent } from './send-recipe/send-recipe.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(appRoutes),
    SharedModule,
  ],
  declarations: [
    ContentComponent,
    HomeComponent,
    CategoriesComponent,
    LoginComponent,
    SendRecipeComponent,
    SearchResultsComponent,
    SignupComponent,
  ],
  exports: [
    ContentComponent,
  ]
})
export class ContentModule {}
