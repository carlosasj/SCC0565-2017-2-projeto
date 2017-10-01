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
  ],
  exports: [
    MomentPipe,
    FromNowPipe,
    NavbarComponent,
    FooterComponent,
    RecipeCardComponent,
    NgbModule,
  ],
  providers: [
    RecipesService,
  ]
})
export class SharedModule { }
