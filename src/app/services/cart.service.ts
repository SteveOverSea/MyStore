import { Injectable } from '@angular/core';
import { Product } from "../models/Product";
import { Order } from "../models/Order";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];
  order: Order = new Order();
  count = new BehaviorSubject<number>(0);
  editedProducts = new BehaviorSubject<boolean>(false);

  constructor() { }

  add(product: Product, quantity: number) {
    let found: Product | undefined = this.products.find(p => p.id == product.id);
    if (found) {
      found.quantity += quantity;
    } else {
      product.quantity += quantity;
      this.products.push(product);
    }
    this.count.next(this.getCount());
  }

  remove(product: Product) {
    product.quantity = 0;
    this.products = this.products.filter(p => p !== product);
    this.count.next(this.getCount());
    this.editedProducts.next(true);
  }

  get(): Product[] {
    return this.products;
  }

  saveOrder(order: Order): void{
    this.order = order;
  }

  getOrder(): Order {
    return this.order;
  }

  getTotal(): number {
    let sum = 0;
    this.products.forEach(p => sum += p.quantity * p.price);
    return sum;
  }

  getCount(): number {
    let sum = 0;
    this.products.forEach(p => sum += p.quantity);
    return sum; 
  }
}
