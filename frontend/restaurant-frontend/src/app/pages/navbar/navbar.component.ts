import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavbarModel } from "./navbarModel";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  navbarContentCRUDOptions = [
    "Przeglądaj", "Dodaj", "Edytuj", "Usuń"
  ]

  navbarModel = {} as NavbarModel[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.navbarModel = [
      { navbarName: "O nas", navbarContent: [] },
      { navbarName: "Klienci", navbarContent: this.navbarContentCRUDOptions },
      { navbarName: "Zamówienia", navbarContent: this.navbarContentCRUDOptions }
    ]
  }

  redirect(route: string) {
    route == "O nas" ?
      this.router.navigate(['/']) :
      this.router.navigate([ '/' + route.toLowerCase() ])
  }

}
