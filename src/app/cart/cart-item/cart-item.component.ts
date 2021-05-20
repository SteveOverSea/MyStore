import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../models/Product";
import { CartService } from "../../services/cart.service";
import { CartComponent } from "../cart.component";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product = new Product();

  constructor(private cart: CartService, private cartComponent: CartComponent) { }

  ngOnInit(): void {
  }

  removeFromCart(): void {
    this.cart.remove(this.product);
  }

  editQuantity(): void {
    this.cart.editedProducts.next(true);
  }

  checkNumbers(e: Event): void {
    const input = ( e.target as HTMLInputElement)
    const value= parseInt(input.value);
    if (value && Math.abs(value) > 0) {
      input.value = Math.abs(value).toString();
    } else {
      input.value = "";
    }
  }

}
