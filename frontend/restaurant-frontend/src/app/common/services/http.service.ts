import { Injectable } from '@angular/core';
import {Customer, MealResponse, OrderRequest, OrderResponse} from "../../model/RestaurantModel";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    if (environment.mockApiUrl) {
      this.apiUrl = environment.jsonServerApiUrl;
    } else {
      this.apiUrl = environment.backendApiUrl;
    }
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl + '/customers');
  }

  getOrders(): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(this.apiUrl + '/orders');
  }

  getMeals(): Observable<MealResponse[]> {
    return this.http.get<MealResponse[]>(this.apiUrl + '/meals');
  }

  addCustomer(customer: Customer) {
    return this.http.post<Customer>(this.apiUrl + '/customer', customer);
  }

  addOrder(order: OrderRequest): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(this.apiUrl + '/order/newOrder', order);
  }
}
