import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { HeaderDefaultComponent } from './components/header-default/header-default.component';
import { FooterDefaultComponent } from './components/footer-default/footer-default.component';

import { MaterialModule } from '../material/material.module';
import { HeaderUserComponent } from './components/header-user/header-user.component';



@NgModule({
  declarations: [
    HeaderDefaultComponent,
    FooterDefaultComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderDefaultComponent,
    FooterDefaultComponent,
    HeaderUserComponent
  ]
})
export class SharedModule { }
