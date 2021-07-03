import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { ViewRegisterComponent } from './view-register/view-register.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';


@NgModule({
  declarations: [
    ViewRegisterComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
