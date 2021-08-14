import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewWishlistComponent } from './view-wishlist/view-wishlist.component';


const routes: Routes = [
  {
    path: "",
    component: ViewWishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
