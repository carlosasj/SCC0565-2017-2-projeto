import { AuthService } from '@services';
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

  search = ['Frango com Mel','Frango na Cerveja', 'Frango com Gengibre, Salsão e Maçã', 'Abacaxi com Creme de Leite Condensado', 'Trufa Cremosa de Café', 'Bacalhau com Natas', 'Estrogonofe de Camarão', 'Lagostim à Moda', 'Paella Valenciana', 'Beef Wellington', 'Carne Louca de Festa', 'Picanha ao Molho de Mostarda', 'Batata Rosti', 'Macarrão Shimeji', 'Polenta Frita Crocante'];

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  public doLogout() {
    this.isCollapsed = true;
    this.authService.logout();
  }

  public getToken() {
    return Boolean(this.authService.getToken());
  }

  public onSearch() {
    const clone = this.query.trim();
    if (clone) {
      this.query = '';
      this.router.navigate(['/pesquisa'], { queryParams: { q: clone } });
    }
  }

}
