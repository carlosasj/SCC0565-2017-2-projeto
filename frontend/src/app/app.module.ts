import { SharedModule } from './shared/shared.module';
import { environment } from '@env/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContentModule } from './content/content.module';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';

import { providers } from './app.providers';
import { HttpInterceptorModule } from 'ng-http-interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    ContentModule,
    HttpInterceptorModule,
    SharedModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    ...providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
