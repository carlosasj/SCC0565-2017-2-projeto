import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  public query = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public onSearch() {
    const clone = this.query.trim();
    if (clone) {
      this.query = '';
      this.router.navigate(['/pesquisa'], { queryParams: { q: clone } });
    }
  }

}
