import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { RegistrationService } from './../../services/user/registration.service';
import { TermsDialogComponent } from '../terms-dialog/terms-dialog.component';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('passwordConfirm')?.value
    return pass === confirmPass ? null : { notSame: true }
  }

  registerForm = this.fb.group({
    first_Name: ['', Validators.required],
    last_Name: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`)]],
    passwordConfirm: [''],
    terms: ['', [Validators.required, Validators.requiredTrue]]
  },{validators: this.checkPasswords});

  constructor(
    private fb: FormBuilder,
    private registration: RegistrationService,
    private router: Router,
    private dialog: MatDialog
  ) { }


  registerUser(){
    this.registration.userRegister( this.registerForm ).subscribe(
      data => {
        localStorage.setItem("token", data.token);
        alert("usuario registrado");
        this.router.navigate(['user']);
      }
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(TermsDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  ngOnInit(): void {
  }

}
