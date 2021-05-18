import { Injectable } from '@angular/core';
import { Product } from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      name: "Banana",
      description: "Delicious and yummy.",
      price: 1.50,
      imageURL: "https://cdn.pixabay.com/photo/2016/11/15/16/24/banana-1826760_1280.jpg"
    },
    {
      name: "Pear",
      description: "Harvested locally around your corner. 100% organic.",
      price: 2.00,
      imageURL: "https://cdn.pixabay.com/photo/2021/05/11/00/35/pear-6244632_1280.jpg"
    },
    {
      name: "Pumpkin Soup",
      description: "With the best of the autumn sun inside.",
      price: 6.00,
      imageURL: "https://cdn.pixabay.com/photo/2021/04/30/04/43/pumpkin-soup-6217893_1280.jpg"
    }
  ];

  constructor() { }

  getProducts(): Product[] {
      return this.products;
  }
}
