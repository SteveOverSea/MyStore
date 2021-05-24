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
  sum: number = 0;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.sum = 0;
    this.products = this.cart.get();
    this.sum = this.cart.getTotal();

    this.cart.editedProducts.subscribe(() => {
      this.products = this.cart.get();
      this.sum = this.cart.getTotal();
    });
  }

  removeCartItem(product: Product): void {
    this.cart.remove(product);
  }

}
