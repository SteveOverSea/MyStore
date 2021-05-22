import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../models/User';
import { LoginService } from "../services/login.service";
import { BackendConnectionService } from "../services/backend-connection.service";
import { HttpErrorResponse } from '@angular/common/http';
import { OrderList } from '../models/OrderList';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  user: User = new User();
  usertoken: string = "";
  orders: OrderList[] = [];

  constructor(private loginService: LoginService, private backendConnectionService: BackendConnectionService) { }

  ngOnInit(): void {
    this.loginService.loggedInUser.subscribe(( data: User) => this.user = data);
    this.loginService.usertoken.subscribe(( data: string) => this.usertoken = data);


    this.backendConnectionService.getAllOrders(this.user, this.usertoken).subscribe(( data: OrderList[]) => {
      this.orders = data;
      console.log(data);
    }, (error: HttpErrorResponse) => console.log(error));
  }

}
