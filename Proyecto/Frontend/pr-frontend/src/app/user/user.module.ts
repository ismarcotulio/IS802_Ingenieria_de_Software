import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ViewUserComponent } from './view-user/view-user.component';
import { SharedModule } from '../shared/shared.module';
import { ViewProductComponent } from './view-product/view-product.component';

@NgModule({
  declarations: [
    ViewUserComponent,
    ViewProductComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class UserModule { }
