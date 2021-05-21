import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";
import { HttpClient } from '@angular/common/http';
import { BackendConnectionService } from "../services/backend-connection.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  cartCount: number = 0;
  users: any[] = [];
  username: string = "";
  password: string = "";

  constructor(private cart: CartService, private http: HttpClient, public backendConnectionServie: BackendConnectionService) { }

  ngOnInit(): void {
    this.cart.count.subscribe(count => this.cartCount = count);
    this.backendConnectionServie.hostnameTest();
  }

  toggleForm(e: Event): void {
    const form = document.getElementById("login-form") as HTMLFormElement;
    form.hidden = !form.hidden;
  }

  onSubmit(): void {
    alert("username:" + this.username + ", password: " + this.password);
    // check if user exists
    // otherwise ask if new one should be created

    // LOGIN form should be an own child component on the navigation
  }
}
