import { Component, OnInit } from '@angular/core';
import { Product } from "../models/Product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
