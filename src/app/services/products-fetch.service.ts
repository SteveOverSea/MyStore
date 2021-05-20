import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsFetchService {

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("../assets/data.json");
  }
}
