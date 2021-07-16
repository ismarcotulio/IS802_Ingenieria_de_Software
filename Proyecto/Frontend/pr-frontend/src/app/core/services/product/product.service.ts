import { Injectable } from '@angular/core';
import { PRODUCTS } from '../../models/product/product-mock-backend';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProducts(){
    return PRODUCTS;
  }


}
