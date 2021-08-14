import { WishProduct } from './../../models/product/user-product-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  url1 = "http://localhost:3000/wish/verifyWish"
  url2 = "http://localhost:3000/wish/add"
  url3 = "http://localhost:3000/wish/remove"
  url4 = "http://localhost:3000/wish/getWishes"
  url5 = "http://localhost:3000/wish/countWish"

  constructor(private http: HttpClient) { }

  verifyWish(Id_Product:number){
    return this.http.post<boolean>(this.url1, {Id_Producto:Id_Product})
  }

  addWish(Id_Product:number){
    return this.http.post<boolean>(this.url2, {Id_Producto:Id_Product})
  }

  removeWish(Id_Product:number){
    return this.http.post<boolean>(this.url3, {Id_Producto:Id_Product})
  }

  getWishes(){
    return this.http.get<WishProduct[]>(this.url4)
  }

  countWishes(){
    return this.http.get<CountWish>(this.url5)
  }


}

export interface CountWish{
  numWish: number;
}
