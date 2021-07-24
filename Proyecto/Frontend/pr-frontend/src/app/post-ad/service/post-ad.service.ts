import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostAdService {
  url:string = 'http://localhost:3000/insertProduct';
  
  newProduct = {
    Name: "",
    Brand: "",
    Cost: "",
    Description: "",
    Id_Category: "",
    Id_Users: "",
    Image: "",
    Date_Product: "",
    State: "",
    Department: ""
  }

  constructor(private http:HttpClient) {
  }
  
  guardPostAd(data: FormGroup,url:string, date:string){

    this.newProduct.Name = data.get('Name')?.value;
    this.newProduct.Brand = data.get('Brand')?.value;
    this.newProduct.Cost = data.get('Cost')?.value;
    this.newProduct.Description = data.get('Description')?.value;
    this.newProduct.Department = data.get('Depart')?.value;
    this.newProduct.Id_Category = data.get('Id_Category')?.value;
    this.newProduct.Image = url;
    this.newProduct.Date_Product = date;
    this.newProduct.State = data.get('state')?.value;
    
    
    return this.http.post(this.url,this.newProduct);

   }
}
