import { Injectable } from '@angular/core';
import { ProductsFromSeach } from '../../models/product/product-search-mock-backend';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  constructor() { }

  getProductsByKeyword(){
    return ProductsFromSeach;
  }
}
