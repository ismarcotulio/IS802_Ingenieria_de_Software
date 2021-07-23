import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostAdService {
  url:string = '';

  constructor(private http:HttpClient) {
  }
  
  guardPostAd(){
     this.url = "http://localhost:3000/insertProduct";
   
    //  return this.http.post('',);

   }
}
