import { Component, OnInit } from '@angular/core';
import { Product } from "../models/Product";
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.products = this.cart.get();
  }

}
