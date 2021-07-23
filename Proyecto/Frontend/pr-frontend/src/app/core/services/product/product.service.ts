
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './../../models/product/product-model';
//import { PRODUCTS } from '../../models/product/product-mock-backend';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/categoria/"

  getProducts(type:string){
    return this.http.get<Product[]>(`${this.url}${type}`)
  }


}
