import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from "../models/Product";
import { ProductsFetchService } from "./products-fetch.service";
import { BackendConnectionService } from "./backend-connection.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginService } from "./login.service";
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [];
  loadedProduct = new BehaviorSubject<boolean>(false);

  constructor(private productsFetch: ProductsFetchService, private backendConnectionService: BackendConnectionService, private http: HttpClient, private loginService: LoginService, private router: Router) { 
  }

  loadProducts(): void {
    if (this.backendConnectionService.isConnectedToBackend) {
      this.http.get<any>('/products').subscribe({
        next: data => {
          this.products = data;
          this.products.forEach(p => p.quantity = 0);
          this.loadedProduct.next(true);
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
    } else {
      this.productsFetch.fetchProducts().subscribe(( data: Product[] ) => {
        data.forEach(( d: Product ) => d.quantity = 0);
        this.products = data as Product[];
        this.loadedProduct.next(true);
      });
    }
  }
  
  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
      const found: Product | undefined = this.products.find(p => p.id == id);
      if (found) return found;
      else return new Product();
  }

  addProduct(product: Product): void {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.loginService.usertoken.value}`)
    };
    this.http.post("/products", product, header).subscribe(data => {
      this.router.navigateByUrl("/");
    }, error => console.log(error));
  }

  deleteProduct(product: Product): void {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.loginService.usertoken.value}`)
    };
    this.http.delete(`/products/${product.id}`, header).subscribe(data => {
      this.loadProducts();
    }, error => console.log(error));
  }
}
