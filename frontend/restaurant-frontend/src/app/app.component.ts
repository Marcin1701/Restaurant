import { Component } from '@angular/core';
import { environment } from "../environments/environment";
import {HttpService} from "./common/services/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private httpService: HttpService) {
    if (!environment.mockApiUrl) {
      this.httpService.initializeData().subscribe(response => console.log(response));
    }
  }
}
