import { Component } from '@angular/core';
import { GlobalConstants } from '../GlobalConstants'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: string = 'restaurant-frontend';

  getBackgroundUrl() {
    return "url(" + GlobalConstants.imageUrl + ")";
  }
}
