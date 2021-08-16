import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }



  getCategories(){
    return this.http.get<any>("http://localhost:3000/categoria/allCategories");

  }


  deleteCategorie(data:any){
    let url ="http://localhost:3000/categoria/changeStatus"
    return this.http.post(url,data);
  }
}
