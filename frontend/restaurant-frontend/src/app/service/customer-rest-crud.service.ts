import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { CustomerRequest } from 'src/model/request/customerRequest';
import { CustomerResponse } from 'src/model/response/customerResponse';
import { OrderResponse } from 'src/model/response/orderResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerRestCrudService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<CustomerResponse[]> {
    return this.http.get<CustomerResponse[]>(`${this.apiUrl}/take/customer`);
  }

  public getCustomerById(id: number): Observable<CustomerResponse> {
    return this.http.get<CustomerResponse>(`${this.apiUrl}/take/customer/${id}`);
  }

  public getCustomerByRequest(customer: CustomerRequest): Observable<CustomerResponse> {
    return this.http.get<CustomerResponse>(`${this.apiUrl}/take/customer/find`);
  }

  public addCustomer(customer: CustomerRequest) {
    return this.http.post<void>(`${this.apiUrl}/take/customer`, customer);
  }

  public updateCustomer(customer: CustomerResponse) {
    return this.http.put<void>(`${this.apiUrl}/take/customer`, customer);
  }

  public deleteCustomer(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/take/customer/${id}`);
  }

  public getCustomerOrders(customerId: number): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(`${this.apiUrl}/take/${customerId}/orders`);
  }
}
