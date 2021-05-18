import { Injectable } from '@angular/core';
import { Product } from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  constructor() { }

  add(product: Product) {
    this.products.push(product);
  }

  remove(product: Product) {
    this.products = this.products.filter(p => p !== product);
  }
}
