import { QuantityResponse } from '../response/quantityResponse'

export interface MealResponse {
    id: number;

    orderId: number;

    name: string;
    
    price: number;

    vegan: boolean;

    vegeterian: boolean;

    quantities: QuantityResponse[];
}