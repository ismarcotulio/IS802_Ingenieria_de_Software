import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SesionRoutingModule } from './sesion-routing.module';
import { ViewSesionComponent } from './view-sesion/view-sesion.component';
import { FormSesionComponent } from './components/form-sesion/form-sesion.component';

import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ViewSesionComponent,
    FormSesionComponent
  ],
  imports: [
    CommonModule,
    SesionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class SesionModule { }
