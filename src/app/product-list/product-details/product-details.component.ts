import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from "../../models/Product";
import { ProductsService } from "../../services/products.service";
import { CartService } from "../../services/cart.service";
import { BackendConnectionService } from "../../services/backend-connection.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = new Product();
  quantity: number = 1;
  @ViewChild('cartSuccess') cartSuccess: ElementRef | undefined;

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private cart: CartService, private backendConnectionService: BackendConnectionService, private http: HttpClient) { }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.product = this.productsService.getProductById(params.id);
      });

  }

  ngAfterViewInit(): void {
    if(this.cartSuccess) {
      this.cartSuccess.nativeElement.addEventListener("animationend", () => {
        if(this.cartSuccess) {
          this.cartSuccess.nativeElement.classList.remove("cart-success-animation");
        }
      });
    }
  }

  setQuantity(e: Event): void {
    this.quantity = parseInt( (e.target as HTMLSelectElement).value );
  }

  addToCart(): void {
    this.cart.add(this.product, this.quantity);
    if(this.cartSuccess) {
      this.cartSuccess.nativeElement.classList.add("cart-success-animation");
    }
  }

}
