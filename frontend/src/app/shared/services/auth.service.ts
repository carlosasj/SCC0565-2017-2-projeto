import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NewUser } from '@models';
import { UtilsService as utils } from '@services/utils.service';


@Injectable()
export class AuthService {

  private token = '';

  constructor(
    private $http: Http,
    private router: Router,
  ) {
    this.token = localStorage.getItem('auth:token') || '';
  }

  public getToken(): string {
    return this.token;
  }

  public login(authData: {email: string, password: string}) {
    return (this.$http.post(utils.endpoint('/api-token-auth/'), authData)
            .map(r => {
              const result = r.json();
              this.token = result.token;
              localStorage.setItem('auth:token', this.token);
              return result;
            })
    );
  }

  public logout() {
    this.token = '';
    localStorage.removeItem('auth:token');
    this.router.navigate(['/']);
  }

  public newUser(newUser: NewUser) {
    return (this.$http.post(utils.endpoint('/account/user/'), newUser)
            .map(r => r.json())
    );
  }

  public getUserInfo() {
    return this.parseJwt(this.token);
  }

  private parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

}
