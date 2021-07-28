import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ViewCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class CategoryModule { }
