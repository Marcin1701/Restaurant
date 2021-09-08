import {Component} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  links: string[] = [
    "Zamówienia",
    "Klienci",
    "Menu",
  ];
  background: ThemePalette = 'primary';
  currentNav = '/';

  constructor(private router: Router) {}

  switchRoute(nav: string): any[] {
    this.currentNav = nav;
    switch (nav) {
      case this.links[0]: return ['/orders'];
      case this.links[1]: return ['/customers'];
      case this.links[2]: return ['/meals'];
      default: return ['/'];
    }
  }

  redirect(link: string) {
    if (this.currentNav !== link) {
      this.router.navigate(this.switchRoute(link))
        .then(r => r.valueOf());
    }
  }
}
