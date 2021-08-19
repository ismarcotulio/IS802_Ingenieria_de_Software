
import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/core/services/wishlist/wishlist.service';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {
  categories=[{Name: ""}]; 
  selectCategories = [{Name: "",Id:""}];
  constructor( private router: Router, private wishlistService: WishlistService,
              private serviceCategories:CategoriesService
    ) { }

  wishBadge!: number;

  ngOnInit() {
    /**********THIS FUNCTION WILL TRIGGER WHEN PARENT COMPONENT UPDATES 'someInput'**************/
    //Write your code here
     this.CountWishes()

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
        
      //  console.log(this.categories);
      //  console.log(this.selectCategories);
       
       
      
     })
    }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }

  postAd(){
    this.router.navigate(['/user/postAd']);
  }

  searchProduct(key: string): void {
    this.router.navigateByUrl('user/postAd', {skipLocationChange: true})
  .then(()=>this.router.navigate(['user/category'], {state: {data: {key}}}));

  }

  CountWishes(){
    this.wishlistService.countWishes().subscribe(
      data=>{
        localStorage.setItem("numWish",`${data.numWish}`)
        this.wishBadge= data.numWish
      }
    )
  }
}

