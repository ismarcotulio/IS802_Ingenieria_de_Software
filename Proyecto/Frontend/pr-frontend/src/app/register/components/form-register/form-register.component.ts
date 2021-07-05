import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  constructor() { }

  registerForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  registerUser(){
    console.log( this.registerForm );
  }

  ngOnInit(): void {
  }

}
