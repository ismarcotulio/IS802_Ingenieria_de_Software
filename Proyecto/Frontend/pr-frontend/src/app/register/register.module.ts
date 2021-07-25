
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { RegisterRoutingModule } from './register-routing.module';
import { ViewRegisterComponent } from './view-register/view-register.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { TermsDialogComponent } from './components/terms-dialog/terms-dialog.component';
import { EmailVerifyDialogComponent } from './components/email-verify-dialog/email-verify-dialog.component';


@NgModule({
  declarations: [
    ViewRegisterComponent,
    FormRegisterComponent,
    TermsDialogComponent,
    EmailVerifyDialogComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class RegisterModule { }
