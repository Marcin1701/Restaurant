import { Injectable } from '@angular/core';
import {Customer} from "../model/RestaurantModel";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerAction {

  constructor() { }

  public addCustomer(customer: Customer): Observable<Customer> {
    console.log(customer);
    return of(customer);
  }
}
