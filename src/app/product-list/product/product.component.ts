import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private cart: CartService, private loginService: LoginService, private products: ProductsService) { }

  ngOnInit(): void {
    this.loginService.loggedInUser.subscribe(( data: User ) => this.isAdmin = data.is_admin)
  }

  addToCart(): void {
    this.cart.add(this.product, this.quantity);
  }

  setQuantity(e: Event): void {
    this.quantity = parseInt( (e.target as HTMLSelectElement).value );
  }

  deleteProduct(): void {
    this.products.deleteProduct(this.product);
  }

}
