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
  
  constructor(private router:Router, private serviceCategories:CategoriesService) {
   }

  ngOnInit(): void {

    this.serviceCategories.getCategories().subscribe(result =>{
      for (let i = 0; i < result.length; i++) {
        if(i == 0){
          this.categories[i] = result[i]
        }else{
          if(i<7){
            if(result[i].Status == 1){
                this.categories.push(result[i]);
            }
          }else{
            if(i == 7){
              this.selectCategories[0] = result[i];
  
            }else{
              
              this.selectCategories.push(result[i]);
            }
          }
        }
      }  
    })
  }

  searchProduct(key: string): void {
    this.router.navigateByUrl('register', {skipLocationChange: true})
  .then(()=>this.router.navigate(['category'], {state: {data: {key}}}));

  }


}
