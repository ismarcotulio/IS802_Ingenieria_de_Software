import { Injectable } from '@angular/core';
import { ProductsFromSeach } from '../../models/product/product-search-mock-backend';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  url ="http://localhost:3000/productKeyword"

  constructor(private http: HttpClient) { }

  getProductsByKeyword(keyword:string){
    return this.http.post<Product[]>(this.url,{keyword:keyword})
  }
}
