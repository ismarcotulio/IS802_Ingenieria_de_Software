import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { HeaderDefaultComponent } from './components/header-default/header-default.component';
import { FooterDefaultComponent } from './components/footer-default/footer-default.component';

import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HeaderDefaultComponent,
    FooterDefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderDefaultComponent,
    FooterDefaultComponent
  ]
})
export class SharedModule { }
