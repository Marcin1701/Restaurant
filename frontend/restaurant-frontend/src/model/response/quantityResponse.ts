import { IngredientResponse } from '../response/ingredientResponse'

export interface QuantityResponse {
    id: number;

    quantity: number;

    unit: string;

    ingredients: IngredientResponse;
}