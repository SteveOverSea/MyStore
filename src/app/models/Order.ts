import { Product } from "./Product";
import { Userdata } from "./Userdata";

export class Order {
    id: number;
    products: Product[];
    userdata: Userdata;

    constructor() {
        this.id = 0;
        this.products = [];
        this.userdata = new Userdata();
    }
}