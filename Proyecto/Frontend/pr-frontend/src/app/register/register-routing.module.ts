import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewRegisterComponent } from './view-register/view-register.component';

const routes: Routes = [
  {
    path: '',
    component: ViewRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
