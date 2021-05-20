export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    url: string;
    quantity: number;

    constructor() {
        this.id = 0;
        this.name = "";
        this.description = "";
        this.price = 0;
        this.url = "";
        this.quantity = 0;
    }
}