import 'rxjs/add/operator/do';
import { Component } from '@angular/core';
import { HttpInterceptorService, getHttpHeadersOrInit } from 'ng-http-interceptor';
import { AuthService } from '@services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private httpInterceptor: HttpInterceptorService,
  ) {
    // Declara os interceptors
    httpInterceptor.request().addInterceptor((data, method) => {

      const headers = getHttpHeadersOrInit(data, method);
      headers.set('Content-Type', 'application/json');
      if (this.authService.getToken()) {
        headers.set('Authorization', 'JWT ' + this.authService.getToken());
      }

      return data;
    });

    httpInterceptor.response().addInterceptor((res, method) => {
      return res.do(
        r => {
          if (r.status === 401 || r.status === 403) {
            authService.logout();
          }
        },
        r => {
          if (!r.url.includes('/api-token-auth/') && (r.status === 401 || r.status === 403)) {
            authService.logout();
          }
        }
      );
    });
  }
}
