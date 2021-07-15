import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { HeaderDefaultComponent } from './components/header-default/header-default.component';
import { FooterDefaultComponent } from './components/footer-default/footer-default.component';

import { MaterialModule } from '../material/material.module';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { ContractDialogComponent } from './components/contract-dialog/contract-dialog.component';
import { LoginAlertDialogComponent } from './components/login-alert-dialog/login-alert-dialog.component';
import { CardProductComponent } from './components/card-product/card-product.component';



@NgModule({
  declarations: [
    HeaderDefaultComponent,
    FooterDefaultComponent,
    HeaderUserComponent,
    ContractDialogComponent,
    LoginAlertDialogComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderDefaultComponent,
    FooterDefaultComponent,
    HeaderUserComponent,
    ContractDialogComponent,
    LoginAlertDialogComponent
  ]
})
export class SharedModule { }
