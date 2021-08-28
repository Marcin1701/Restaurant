export interface Customer {
  id?: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
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
  mealNames: string[];
  mealList: MealResponse[];
}

export interface MealResponse {
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


