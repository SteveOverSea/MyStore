export class OrderListDb {
    id?: number;
    order_id: number;
    product_id: number;
    quantity: number;

    constructor() {
        this.order_id = 0;
        this.product_id = 0;
        this.quantity = 0;
    }
}