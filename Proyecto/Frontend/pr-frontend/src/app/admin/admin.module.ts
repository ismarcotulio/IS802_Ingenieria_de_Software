
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { ChartsModule } from 'ng2-charts';


import { AdminRoutingModule } from './admin-routing.module';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductPerCategoryComponent } from './components/statistics/charts/product-per-category/product-per-category.component';
import { ProductPerDepartmentComponent } from './components/statistics/charts/product-per-department/product-per-department.component';
import { ProductPerDateComponent } from './components/statistics/charts/product-per-date/product-per-date.component';
import { CategoryPerSuscriptionComponent } from './components/statistics/charts/category-per-suscription/category-per-suscription.component';
import { UserPerProductComponent } from './components/statistics/charts/user-per-product/user-per-product.component';


@NgModule({
  declarations: [ViewAdminComponent, StatisticsComponent, ComplaintsComponent, CategoriesComponent, ProductsComponent, ProductPerCategoryComponent, ProductPerDepartmentComponent, ProductPerDateComponent, CategoryPerSuscriptionComponent, UserPerProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ChartsModule
  ]
})
export class AdminModule { }
