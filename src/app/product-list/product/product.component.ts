import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../models/Product";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = new Product();
  quantity: number = 1;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.cart.add(this.product, this.quantity);
  }

  setQuantity(e: Event): void {
    this.quantity = parseInt( (e.target as HTMLSelectElement).value );
  }

}
