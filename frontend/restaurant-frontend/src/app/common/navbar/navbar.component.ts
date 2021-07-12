import { Component } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  links: string[] = [
    "O nas",
    "Zamówienia",
    "Klienci"
  ];
  background: ThemePalette = 'primary';

  constructor(private router: Router) { }

  switchRoute(nav: string): any[] {
    switch (nav) {
      case this.links[1]: return ['/orders'];
      case this.links[2]: return ['/customers'];
      default: return ['/'];
    }
  }

  redirect(link: string) {
    this.router.navigate(this.switchRoute(link))
      .then(r => r.valueOf());
  }
}
