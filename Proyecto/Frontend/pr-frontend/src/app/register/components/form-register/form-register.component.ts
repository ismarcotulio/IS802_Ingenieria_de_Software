import { MatDialog } from '@angular/material/dialog';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { RegistrationService } from './../../services/user/registration.service';
import { MailService } from './../../../core/services/mail/mail.service';
import { TermsDialogComponent } from '../terms-dialog/terms-dialog.component';
import { EmailVerifyDialogComponent } from './../email-verify-dialog/email-verify-dialog.component';

import { emailMaker } from '../../functions/emailMaker';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  submitStatus = false

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('passwordConfirm')?.value
    return pass === confirmPass ? null : { notSame: true }
  }

  registerForm = this.fb.group({
    firts_Name: ['', Validators.required],
    last_Name: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`)]],
    passwordConfirm: ['', Validators.required],
    terms: ['', [Validators.required, Validators.requiredTrue]]
  },{validators: this.checkPasswords});

  constructor(
    private fb: FormBuilder,
    private registration: RegistrationService,
    private router: Router,
    private dialog: MatDialog,
    private mailService: MailService
  ) { }



  registerUser(){
    this.registration.userRegister( this.registerForm ).subscribe(
      data => {

        this.mailService.sendEmail(
          "criptomarkethn@gmail.com",
          this.registerForm.get('email')?.value,
          "Confirmacion de cuenta",
          emailMaker(`${this.registerForm.get('email')?.value}`)
        ).subscribe(
          res => {
            console.log(res)
            if(res.status == true){
              this.openEmailVerifyDialog()
            }
          }
        )
      }
    )
  }

  openTermsDialog() {
    const dialogRef = this.dialog.open(TermsDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEmailVerifyDialog() {
    const dialogRef = this.dialog.open(EmailVerifyDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(["/sesion"])
    });
  }



  ngOnInit(): void {
  }

}
