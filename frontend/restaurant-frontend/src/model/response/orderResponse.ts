export interface OrderResponse {
    id: number;

    price: number;

    customerId: number;

    orderDate: Date;

    cardPayment: boolean;

    table: number;

    takeAway: boolean;
}