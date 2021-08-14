
import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/core/services/wishlist/wishlist.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {

  constructor( private router: Router, private wishlistService: WishlistService ) { }

  wishBadge!: number;

  ngOnInit() {
    /**********THIS FUNCTION WILL TRIGGER WHEN PARENT COMPONENT UPDATES 'someInput'**************/
    //Write your code here
     this.CountWishes()
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

