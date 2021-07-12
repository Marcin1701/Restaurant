import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less']
})
export class CustomersComponent implements OnInit {
  baseRoute: string = "/customers/";

  links: string[] = [
    "Przeglądaj klientów",
    "Nowy klient"
  ];
  activeLink: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  switchRoute(route: string): any[] {
    switch (route) {
      case "Przeglądaj klientów": return [this.baseRoute + 'all'];
      case "Nowy klient": return [this.baseRoute + 'add'];
      default: return [this.baseRoute];
    }
  }

  redirect(route: string) {
    this.router.navigate(this.switchRoute(route));
  }

}
