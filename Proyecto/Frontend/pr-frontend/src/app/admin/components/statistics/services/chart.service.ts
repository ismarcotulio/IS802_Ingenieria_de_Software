import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  url = "http://localhost:3000/statistics/productCategory"
  url1 = "http://localhost:3000/statistics/productDepartment"
  url2 = "http://localhost:3000/statistics/productMonth"
  url3 = "http://localhost:3000/statistics/suscriptionCategory"
  url4 = "http://localhost:3000/statistics/userProduct"

  constructor(private http:HttpClient) { }

  countProductCategory(){
    return this.http.get<ProductCategory[]>(this.url)
  }

  countProductDepartment(){
    return this.http.get<ProductCategory[]>(this.url1)
  }

  countProductMonth(){
    return this.http.get<ProductMonth[]>(this.url2)
  }

  countSuscriptionCategory(){
    return this.http.get<ProductCategory[]>(this.url3)
  }

  countUserProduct(){
    return this.http.get<ProductCategory[]>(this.url4)
  }

}

export interface ProductCategory{
  total: number;
  Name: string;
}

export interface ProductMonth{
  total: number;
  Name: number;
}
