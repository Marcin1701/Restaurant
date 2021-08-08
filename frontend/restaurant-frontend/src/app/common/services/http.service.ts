import { Injectable } from '@angular/core';
import {Customer} from "../../model/RestaurantModel";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  mockApiUrl: string;

  constructor(private http: HttpClient) {
    if (environment.mockApiUrl) {
      this.mockApiUrl = environment.jsonServerApiUrl;
    } else {
      this.mockApiUrl = environment.backendApiUrl;
    }
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.mockApiUrl + '/customers')
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.mockApiUrl + '/customers', customer);
  }
}
