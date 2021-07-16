import { CardProductDefaultComponent } from './components/card-product-default/card-product-default.component';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { HeaderDefaultComponent } from './components/header-default/header-default.component';
import { FooterDefaultComponent } from './components/footer-default/footer-default.component';

import { MaterialModule } from '../material/material.module';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { ContractDialogComponent } from './components/contract-dialog/contract-dialog.component';
import { LoginAlertDialogComponent } from './components/login-alert-dialog/login-alert-dialog.component';
import { ProductShelfComponent } from './components/product-shelf/product-shelf.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductShelfDefaultComponent } from './components/product-shelf-default/product-shelf-default.component';




@NgModule({
  declarations: [
    HeaderDefaultComponent,
    FooterDefaultComponent,
    HeaderUserComponent,
    ContractDialogComponent,
    LoginAlertDialogComponent,
    ProductShelfComponent,
    CardProductDefaultComponent,
    CardProductComponent,
    CarouselComponent,
    ProductShelfDefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CoreModule
  ],
  exports: [
    HeaderDefaultComponent,
    FooterDefaultComponent,
    HeaderUserComponent,
    ContractDialogComponent,
    LoginAlertDialogComponent,
    ProductShelfComponent,
    CarouselComponent,
    ProductShelfDefaultComponent
  ]
})
export class SharedModule { }
