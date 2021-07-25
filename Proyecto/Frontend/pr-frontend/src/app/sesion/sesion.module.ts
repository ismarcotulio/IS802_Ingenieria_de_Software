import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SesionRoutingModule } from './sesion-routing.module';
import { ViewSesionComponent } from './view-sesion/view-sesion.component';
import { FormSesionComponent } from './components/form-sesion/form-sesion.component';

import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountNotVerifiedDialogComponent } from './components/account-not-verified-dialog/account-not-verified-dialog.component';
import { AccountNotExistDialogComponent } from './components/account-not-exist-dialog/account-not-exist-dialog.component';
import { InvalidDataDialogComponent } from './components/invalid-data-dialog/invalid-data-dialog.component';


@NgModule({
  declarations: [
    ViewSesionComponent,
    FormSesionComponent,
    AccountNotVerifiedDialogComponent,
    AccountNotExistDialogComponent,
    InvalidDataDialogComponent
  ],
  imports: [
    CommonModule,
    SesionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ]
})
export class SesionModule { }
