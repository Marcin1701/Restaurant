import { Component } from '@angular/core';
import { GlobalConstants } from '../GlobalConstants'
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: string = 'restaurant-frontend';

  constructor(private router: Router) {
  }

  getBackgroundUrl() {
    return "url(" + GlobalConstants.imageUrl + ")";
  }

  goToCustomer() {
    this.router
      .navigate(['/customer'])
      .then(r => r.valueOf())
  }
}
