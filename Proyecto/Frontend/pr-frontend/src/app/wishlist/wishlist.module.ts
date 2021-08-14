import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { ViewWishlistComponent } from './view-wishlist/view-wishlist.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ViewWishlistComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class WishlistModule { }
