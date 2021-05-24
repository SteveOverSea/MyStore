import { Injectable } from '@angular/core';
import { User } from "../models/User";
import { Token } from "../models/Token";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { OrderDb } from '../models/OrderDb';
import { OrderListDb } from '../models/OrderListDb';
import { Product } from '../models/Product';
import { OrderList } from "../models/OrderList";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectionService {
  public isConnectedToBackend: boolean = false;
  usertoken: string = "";

  constructor(private http: HttpClient) { 
  }

  hostnameTest(): void {
    if (environment && window.location.host == environment.api_host) {
      this.isConnectedToBackend = true;

      this.loginUser(environment.adminUser).subscribe(() => {
        console.log("Admin user already created.");
      }, () => {
        this.createUser(environment.adminUser).subscribe(() => console.log("prepared admin user"),
        (err) => console.log(err));
      });
    }    
  }

  loginUser(user: User): Observable<Token> {
    return this.http.post("/users/login", user) as Observable<Token>;
  }

  createUser(user: User): Observable<Token> {
    return this.http.post("/users", user) as Observable<Token>;
  }

  createOrder(user: User, token: string): Observable<OrderDb> {
    const data = {
      user_id: user.id,
      status: false
    }
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${token}`)
    };
    return this.http.post("/orders", data, header) as Observable<OrderDb>;
  }

  createOrderList(order: OrderDb, product: Product, token: string): Observable<OrderListDb> {
    const data: OrderListDb = {
      order_id: order.id,
      product_id: product.id,
      quantity: product.quantity
    }
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${token}`)
    };
    return this.http.post("/order-lists", data, header) as Observable<OrderListDb>;
  }

  getAllOrders(user: User, token: string): Observable<OrderList[]> {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${token}`)
    };
    return this.http.get(`/order-lists-for-user/${user.id}`, header) as Observable<OrderList[]>;
  }

  getDecodedUser(token: string): Observable<User> {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${token}`)
    };
    return this.http.get("/user/decoded", header) as Observable<User>;
  }

  deleteUser(user: User, token: string): void {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${token}`)
    };
    this.http.delete(`/users/${user.id}`, header).subscribe(() => console.log("user deleted"), err => console.log(err));
  }
}
