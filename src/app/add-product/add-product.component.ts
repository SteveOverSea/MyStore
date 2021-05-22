import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../services/products.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  name: string = "";
  description: string = "";
  price: string = "";
  url: string = "";

  constructor(private products: ProductsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.products.addProduct({
      name: this.name,
      description: this.description,
      price: parseFloat(this.price),
      url: this.url,
      id: 0,
      quantity: 0
    });

    this.name = "";
    this.description = "";
    this.price = "";
    this.url = "";
  }

}
