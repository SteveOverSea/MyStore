export class OrderList {
    order_id: number;
    name: string;
    quantity: number;
    price: number;
    status: boolean;

    constructor() {
        this.order_id = 0;
        this.name = "";
        this.quantity = 0;
        this.price = 0;
        this.status = false;
    }
}