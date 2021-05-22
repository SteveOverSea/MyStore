import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";
import { BackendConnectionService } from "../services/backend-connection.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  cartCount: number = 0;
  users: any[] = [];
  loggedIn: boolean = false;
  loggedInUsername: string = "";


  constructor(private cart: CartService, public backendConnectionServie: BackendConnectionService) { }

  ngOnInit(): void {
    this.cart.count.subscribe(count => this.cartCount = count);
    this.backendConnectionServie.hostnameTest();
  }

  showLoginName(username: string): void {
    this.loggedIn = true;
    this.loggedInUsername = username;
  }
}
