import { ViewProductComponent } from './../user/view-product/view-product.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { PostAdComponent } from '../post-ad/post-ad.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ViewUserComponent
  },
  {
    path:"postAd",
    component: PostAdComponent
  },
  {
    path:"products",
    component: ViewProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
