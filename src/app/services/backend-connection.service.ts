import { Injectable } from '@angular/core';
import { User } from "../models/User";
import { Token } from "../models/Token";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { LoginService } from "./login.service";
import { OrderDb } from '../models/OrderDb';
import { OrderListDb } from '../models/OrderListDb';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectionService {
  public isConnectedToBackend: boolean = false;
  usertoken: string = "";

  constructor(private http: HttpClient, private loginService: LoginService) { 
  }

  hostnameTest(): void {
    if (window.location.host == "localhost:3000") {
      this.isConnectedToBackend = true;
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

  getDecodedUser(token: string): Observable<User> {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${token}`)
    };
    return this.http.get("/user/decoded", header) as Observable<User>;
  }
}
