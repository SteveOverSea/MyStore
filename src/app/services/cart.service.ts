import { Injectable } from '@angular/core';
import { Product } from "../models/Product";
import { Order } from "../models/Order";
import { BehaviorSubject } from "rxjs";
import { LoginService } from "./login.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BackendConnectionService } from "./backend-connection.service";
import { OrderDb } from '../models/OrderDb';
import { OrderListDb } from '../models/OrderListDb';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];
  order: Order = new Order();
  count = new BehaviorSubject<number>(0);
  editedProducts = new BehaviorSubject<Product[]>([]);
  orderDB: OrderDb = new OrderDb();
  total: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  user: User = new User();
  usertoken: string = "";

  constructor(private loginService: LoginService, private http: HttpClient, private backendConnectionService: BackendConnectionService) { 
    this.loginService.loggedInUser.subscribe((data: User) => this.user = data);
    this.loginService.usertoken.subscribe((data: string) => this.usertoken = data);

  }

  add(product: Product, quantity: number) {
    let found: Product | undefined = this.products.find(p => p.id == product.id);
    if (found) {
      found.quantity += quantity;
    } else {
      product.quantity += quantity;
      this.products.push(product);
    }
    this.count.next(this.getCount());
    this.editedProducts.next(this.products);
    this.total.next(this.getTotal());
  }

  remove(product: Product) {
    product.quantity = 0;
    this.products = this.products.filter(p => p !== product);
    this.count.next(this.getCount());
    this.editedProducts.next(this.products);
  }

  get(): Product[] {
    return this.products;
  }

  empty(): void {
    this.products = [];
    this.count.next(0);
  }

  saveOrder(order: Order): void{
    this.order = order;

    if (this.loginService.loggedIn.value) {
      this.saveOrderToDb();
    } else {
      this.empty();
    }
  }

  saveOrderToDb(): void {
    this.backendConnectionService.createOrder(this.user, this.usertoken).subscribe(( data: OrderDb) => {
      this.orderDB = data;
      this.products.forEach(product => {
        this.backendConnectionService.createOrderList(this.orderDB, product, this.usertoken).subscribe(( data: OrderListDb) => {
          this.empty();
      }, (err: HttpErrorResponse) => console.log(err));
      });
      
    }, (err: HttpErrorResponse) => console.log(err));
  }

  getOrder(): Order {
    return this.order;
  }

  getTotal(): number {
    let sum = 0;
    this.products.forEach(p => sum += p.quantity * p.price);
    return sum;
  }

  getTotalFromOrder(order: Order): number {
    let sum = 0;
    order.products.forEach(p => sum += p.quantity * p.price);
    return sum;
  }

  getCount(): number {
    let sum = 0;
    this.products.forEach(p => sum += p.quantity);
    return sum; 
  }
}
