import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from "../../models/Product";
import { ProductsService } from "../../services/products.service";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = new Product();
  quantity: number = 1;

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private cart: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.product = this.productsService.getProductById(params.id);
    });
  }

  setQuantity(e: Event): void {
    this.quantity = parseInt( (e.target as HTMLSelectElement).value );
  }

  addToCart(): void {
    this.cart.add(this.product, this.quantity);
  }

}
