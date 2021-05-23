import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { LoginService } from "../services/login.service";
import { BackendConnectionService } from "../services/backend-connection.service";
import { HttpErrorResponse } from '@angular/common/http';
import { OrderList } from '../models/OrderList';
import {Router} from '@angular/router'

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  user: User = new User();
  usertoken: string = "";
  orders: OrderList[] = [];
  sortedOrders: any[] = [];

  constructor(private loginService: LoginService, private backendConnectionService: BackendConnectionService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.loggedInUser.subscribe(( data: User) => this.user = data);
    this.loginService.usertoken.subscribe(( data: string) => this.usertoken = data);


    this.backendConnectionService.getAllOrders(this.user, this.usertoken).subscribe(( data: OrderList[]) => {
      this.orders = data;
      console.log(data);

      let ids: number[] = [];
      data.forEach(orderlist => {
        const id: number = orderlist.order_id;
        if (!ids.includes(id)) {
          ids.push(id);
        }
      });

      this.sortedOrders.push(...ids);

      for (let i=0; i<this.sortedOrders.length; i++) {
        this.sortedOrders[i] = [];
        data.forEach((orderlist: any) => {
          if (ids[i] == orderlist.order_id) {
            this.sortedOrders[i].push(orderlist);
          }
        });
      }  
    }, (error: HttpErrorResponse) => console.log(error));
  }

  delete(): void {
    this.backendConnectionService.deleteUser(this.user, this.usertoken);
    this.loginService.logout();
    this.router.navigateByUrl("/");

  }

  calcTotal(order: OrderList[]): number {
    let sum = 0;
    order.forEach(o => sum+= o.quantity * o.price);
    return sum;
  }

}
