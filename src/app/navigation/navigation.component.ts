import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  cartCount: number = 0;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.count.subscribe(count => this.cartCount = count);
  }

}
