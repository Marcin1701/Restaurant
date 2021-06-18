import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderResponse } from 'src/model/response/orderResponse';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { OrderRequest } from 'src/model/request/orderRequest';


@Injectable({
  providedIn: 'root'
})
export class OrderRestCrudService {

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  public getOrders(): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(`${this.apiUrl}/take/order`);
  }

  public getOrderById(id: number): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(`${this.apiUrl}/take/order/${id}`);
  }

  public addOrder(order: OrderRequest) {
    return this.http.post<void>(`${this.apiUrl}/take/order`, order);
  }

  public updateOrder(orderId: number, order: OrderRequest) {
    return this.http.put<void>(`${this.apiUrl}/take/order/${orderId}`, order);
  }

  public deleteOrder(orderId: number) {
    return this.http.delete<void>(`${this.apiUrl}/take/${orderId}`);
  }

  
}
