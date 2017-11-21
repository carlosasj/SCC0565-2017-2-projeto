import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipesService } from './services/recipes.service';
import { FromNowPipe } from './pipes/from-now.pipe';
import { MomentPipe } from './pipes/moment.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TopRecipesComponent } from './components/top-recipes/top-recipes.component';
import { EnterToBrPipe } from './pipes/enter-to-br.pipe';
import { SanitizePipe } from './pipes/sanitize.pipe';

@NgModule({
  imports: [
    RouterModule.forChild([]),
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  declarations: [
    MomentPipe,
    FromNowPipe,
    NavbarComponent,
    FooterComponent,
    RecipeCardComponent,
    TopRecipesComponent,
    EnterToBrPipe,
    SanitizePipe,
  ],
  exports: [
    MomentPipe,
    FromNowPipe,
    NavbarComponent,
    FooterComponent,
    RecipeCardComponent,
    TopRecipesComponent,
    NgbModule,
    EnterToBrPipe,
    SanitizePipe,
  ],
  providers: [
    RecipesService,
  ]
})
export class SharedModule { }
