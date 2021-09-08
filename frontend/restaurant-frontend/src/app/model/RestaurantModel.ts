export interface Customer {
  customerId?: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  orderList?: OrderResponse[];
}

// export interface CustomerRequest {
//   customerId: number;
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   orderList?: OrderResponse[];
// }

export interface Ingredient {
  ingredientId?: number;
  name: string;
}

export interface Quantity {
  quantityId?: number;
  quantity: number;
  unit: string;
  ingredient: IngredientResponse[];
  meal: MealResponse[];
}

export interface Meal {
  mealId?: number;
  id?: number;
  name: string;
}

export interface Order {
  customerId: number;
  price: number;
  orderDate: '2021-10-10T00:00:00';
  cardPayment: boolean;
  table: number;
  takeAway: boolean;
  mealList: MealResponse[];
}

export interface OrderRequest {
  cardPayment: boolean;
  table: number | null;
  takeAway: boolean;
  mealNames: string[] | string;
  customerId?: number;
}

export interface OrderResponse {
  orderId: number;
  price: number;
  customerId?: number;
  orderDate: string;
  cardPayment: boolean;
  table: number;
  takeAway: boolean;
  mealNames: string;
  mealList: MealResponse[];
}

export interface MealNamesRequest {
  mealNames: string;
}

export interface MealResponse {
  id: number;
  mealId: number;
  name: string;
  price: number;
  vegan: boolean;
  vegetarian: boolean;
  quantities: QuantitiesResponse[];
}

export interface QuantitiesResponse {
  quantityId: number;
  quantity: number;
  unit: string;
  ingredient: IngredientResponse[];
}

export interface IngredientResponse {
  ingredientId: number;
  name: string;
}
