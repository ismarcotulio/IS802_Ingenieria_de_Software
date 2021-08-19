import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';

@Component({
  selector: 'app-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.css']
})
export class HeaderDefaultComponent implements OnInit {
  categories=[{Name: ""}]; 
  selectCategories = [{Name: "",Id:""}];
  viewSelectCategories = false;
  
  constructor(private router:Router, private serviceCategories:CategoriesService) {
   }

  ngOnInit(): void {

    this.serviceCategories.getCategories().subscribe(result =>{

      for (let i = 0; i < result.length; i++) {
           if(this.categories.length<7){
             if(result[i].Status == 1){
                 this.categories.push(result[i]);
               }
           }else{

             if(result[i].Status == 1){
               
               this.viewSelectCategories = true;
               this.selectCategories.push(result[i]);
               
             }
           }
           
      }
      
      this.categories.shift();
      this.selectCategories.shift();
      // console.log(this.categories);
      // console.log(this.selectCategories);
      
    })
  }

  searchProduct(key: string): void {
    this.router.navigateByUrl('register', {skipLocationChange: true})
  .then(()=>this.router.navigate(['category'], {state: {data: {key}}}));

  }


}
