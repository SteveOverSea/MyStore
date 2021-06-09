import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() removeItemFromCart: EventEmitter<Product> = new EventEmitter();

  constructor(private cart: CartService, private cartComponent: CartComponent) { }

  ngOnInit(): void {
  }

  removeFromCart(): void {
    this.removeItemFromCart.emit(this.product);
    this.cart.remove(this.product);
  }

  checkNumbers(e: Event): void {
    const input = ( e.target as HTMLInputElement)
    const value= parseInt(input.value);
    
    if (value && Math.abs(value) > 0) {
      input.value = Math.abs(value).toString();
    } else {
      input.value = "1";
    }

    this.product.quantity = parseInt(input.value);
    this.cart.total.next(this.cart.getTotal());
    this.cart.count.next(this.cart.getCount());
  }

}
