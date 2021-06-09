import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from "../models/Product";
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products$: Observable<Product[]> = new Observable<Product[]>();
  sum$: Observable<number> = new Observable<number>();

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.sum$ = this.cart.total;
    this.products$ = this.cart.editedProducts;
  }

  removeCartItem(product: Product): void {
    this.cart.remove(product);
  }

}
