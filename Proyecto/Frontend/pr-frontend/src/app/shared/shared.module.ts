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




@NgModule({
  declarations: [
    HeaderDefaultComponent,
    FooterDefaultComponent,
    HeaderUserComponent,
    ContractDialogComponent,
    LoginAlertDialogComponent,
    ProductShelfComponent
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
    ProductShelfComponent
  ]
})
export class SharedModule { }
