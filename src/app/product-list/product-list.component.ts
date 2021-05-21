import { Component, OnInit } from '@angular/core';
import { Product } from "../models/Product";
import { ProductsService } from "../services/products.service";
import { BackendConnectionService } from "../services/backend-connection.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService, private backendConnectionService: BackendConnectionService, private http: HttpClient ) { }

  ngOnInit(): void {
    if (this.backendConnectionService.isConnectedToBackend) {
      this.http.get<any>('/products').subscribe({
        next: data => {
          this.products = data;
          this.products.forEach(p => p.quantity = 0);
          console.log(this.products);
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
    } else {
      this.productsService.loadedProduct.subscribe(() => this.products = this.productsService.getProducts());
    }

  }

}
