
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';


import { AdminRoutingModule } from './admin-routing.module';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [ViewAdminComponent, StatisticsComponent, ComplaintsComponent, CategoriesComponent, ProductsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
