import { Injectable } from '@angular/core';
import { Product } from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  constructor() { }

  add(product: Product, quantity: number) {
    let found: Product | undefined = this.products.find(p => p.id == product.id);
    if (found) {
      found.quantity += quantity;
    } else {
      product.quantity += quantity;
      this.products.push(product);
    }
  }

  remove(product: Product) {
    product.quantity = 0;
    this.products = this.products.filter(p => p !== product);
  }

  get(): Product[] {
    return this.products;
  }
}
