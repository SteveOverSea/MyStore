import { Product } from "./Product";
import { Userdata } from "./Userdata";

export class Order {
    products: Product[];
    userdata: Userdata;

    constructor() {
        this.products = [];
        this.userdata = new Userdata();
    }
}