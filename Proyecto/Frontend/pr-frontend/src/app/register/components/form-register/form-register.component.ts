
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegistrationService } from './../../services/user/registration.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  registerForm = this.fb.group({
    first_Name: ['', Validators.required],
    last_Name: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`)]]
  });

  constructor( private fb: FormBuilder, private registration: RegistrationService, private router: Router ) { }


  registerUser(){
    this.registration.userRegister( this.registerForm ).subscribe(
      data => {
        localStorage.setItem("token", data.token);
        alert("usuario registrado");
        this.router.navigate(['user/home']);
      }
    )
  }

  ngOnInit(): void {
  }

}
