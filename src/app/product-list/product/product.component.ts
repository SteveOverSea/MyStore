import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { Product } from "../../models/Product";
import { CartService } from "../../services/cart.service";
import { LoginService } from "../../services/login.service";
import { ProductsService } from "../../services/products.service"; 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = new Product();
  quantity: number = 1;
  isAdmin: boolean | undefined = false;
  @ViewChild('cartSuccess') cartSuccess: ElementRef | undefined;


  constructor(private cart: CartService, private loginService: LoginService, private products: ProductsService) { }

  ngOnInit(): void {
    this.loginService.loggedInUser.subscribe(( data: User ) => this.isAdmin = data.is_admin);
   
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

  addToCart(): void {
    this.cart.add(this.product, this.quantity); 
    if(this.cartSuccess) {
      this.cartSuccess.nativeElement.classList.add("cart-success-animation");
    }
    
  }

  setQuantity(e: Event): void {
    this.quantity = parseInt( (e.target as HTMLSelectElement).value );
  }

  deleteProduct(): void {
    this.products.deleteProduct(this.product);
  }

}
