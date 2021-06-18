import { MealRequest } from './mealRequest';

export interface OrderRequest {
    customerId: number;

    orderDate: Date;

    cardPayment: boolean;

    table: number;

    takeAway: boolean;

    meals: MealRequest[];
}