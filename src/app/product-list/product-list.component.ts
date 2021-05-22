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
  
    this.productsService.loadProducts();
    this.productsService.loadedProduct.subscribe(() => this.products =this.productsService.getProducts());
   

  }

}
