import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public errors = [];

  public authData = {
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public login() {
    this.authService.login(this.authData).subscribe(
      res => this.router.navigate(['/']),
      err => {
        console.log(err);
        this.errors = err.json().non_field_errors;
      }
    );
  }

}
