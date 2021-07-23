import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCategoryComponent } from './view-category/view-category.component';

const routes: Routes = [
  {
    path: "",
    component: ViewCategoryComponent
  },
  {
    path: ":category",
    component: ViewCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
