import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";
import { BackendConnectionService } from "../services/backend-connection.service";
import { LoginService } from "../services/login.service";
import { User } from '../models/User';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  cartCount: number = 0;
  loggedIn: boolean = false;
  loggedInUsername: string = "";
  loggedInUser: User = new User();


  constructor(private cart: CartService, public backendConnectionServie: BackendConnectionService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.cart.count.subscribe(count => this.cartCount = count);
    this.backendConnectionServie.hostnameTest();

    this.loginService.loggedIn.subscribe(( data: boolean) => this.loggedIn = data);
    this.loginService.loggedInUser.subscribe(( data: User) => this.loggedInUser = data);
  }
}
