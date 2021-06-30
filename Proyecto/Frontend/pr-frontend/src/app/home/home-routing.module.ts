import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewHomeComponent } from './view-home/view-home.component';

const routes: Routes = [
  {
    path: "",
    component: ViewHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
