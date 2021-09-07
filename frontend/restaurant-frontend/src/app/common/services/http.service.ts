import { Injectable } from '@angular/core';
import {
  Customer,
  Quantity,
  Meal,
  Order,
  //CustomerRequest,
  IngredientResponse,
  MealNamesRequest,
  Ingredient,
  MealResponse,
  OrderRequest,
  OrderResponse,
  QuantitiesResponse,
} from '../../model/RestaurantModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
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

  initializeData(): Observable<any> {
    return this.http.get(this.apiUrl + '/h2', { responseType: 'text' });
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl + '/customer');
  }

  getIngredients(): Observable<IngredientResponse[]> {
    return this.http.get<IngredientResponse[]>(this.apiUrl + '/ingredient');
  }

  getMeals(): Observable<MealResponse[]> {
    return this.http.get<MealResponse[]>(this.apiUrl + '/meal');
  }

  getOrders(): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(this.apiUrl + '/order');
  }

  getQuantities(): Observable<QuantitiesResponse[]> {
    return this.http.get<QuantitiesResponse[]>(this.apiUrl + '/quantity');
  }

  getCustomerById(id: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl + '/customer/' + id);
  }

  getIngredientById(id: number): Observable<IngredientResponse[]> {
    return this.http.get<IngredientResponse[]>(
      this.apiUrl + '/ingredient/' + id
    );
  }

  getMealById(id: number): Observable<MealResponse[]> {
    return this.http.get<MealResponse[]>(this.apiUrl + '/meal/' + id);
  }

  getOrderById(id: number): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(this.apiUrl + '/order/' + id);
  }

  getQuantityById(id: number): Observable<QuantitiesResponse[]> {
    return this.http.get<QuantitiesResponse[]>(this.apiUrl + '/quantity/' + id);
  }

  getMealsByOrderId(id: number): Observable<MealResponse[]> {
    return this.http.get<MealResponse[]>(
      this.apiUrl + '/order/' + id + '/meals'
    );
  }

  getMealsByNames(mealNames: any): Observable<MealResponse[]> {
    return this.http.post<MealResponse[]>(
      this.apiUrl + '/meal/names',
      mealNames
    );
  }

  addCustomer(customer: Customer) {
    return this.http.post<Customer>(this.apiUrl + '/customer', customer);
  }

  addIngredient(ingredient: Ingredient) {
    return this.http.post<Ingredient>(this.apiUrl + '/ingredient', ingredient)
  }

  addMeal(meal: Meal) {
    return this.http.post<Meal>(this.apiUrl + '/meal', meal);
  }

  addQuantity(quantity: Quantity) {
    return this.http.post<Quantity>(this.apiUrl + '/quantity', quantity);
  }

  addOrder(order: OrderRequest): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(
      this.apiUrl + '/order/newOrder',
      order
    );
  }

  editCustomer(customer: Customer) {
    return this.http.post<Customer>(this.apiUrl + '/customer', customer);
  }

  editIngredient(ingredient: Ingredient) {
    return this.http.post<Ingredient>(this.apiUrl + '/ingredient', ingredient)
  }

  editMeal(meal: Meal) {
    return this.http.post<Meal>(this.apiUrl + '/meal', meal);
  }

  editQuantity(quantity: Quantity) {
    return this.http.post<Quantity>(this.apiUrl + '/quantity', quantity);
  }

  editOrder(order: OrderRequest): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(
      this.apiUrl + '/order/newOrder',
      order
    );
  }

  deleteMeal(id: number) {
    return this.http.delete(this.apiUrl + '/meal/' + id);
  }

  deleteOrder(id: number) {
    return this.http.delete(this.apiUrl + '/order/' + id);
  }

  deleteQuantities(id: number) {
    return this.http.delete(this.apiUrl + '/quantities/' + id);
  }

  deleteIngredients(id: number) {
    return this.http.delete(this.apiUrl + '/ingredients/' + id);
  }

  deleteMeals(id: number) {
    return this.http.delete(this.apiUrl + '/meals/' + id);
  }  
}
