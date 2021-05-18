export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageURL: string;

    constructor() {
        this.id = 1;
        this.name = "";
        this.description = "";
        this.price = 0;
        this.imageURL = "";
    }
}