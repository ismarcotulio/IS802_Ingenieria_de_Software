import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-form-sesion',
  templateUrl: './form-sesion.component.html',
  styleUrls: ['./form-sesion.component.css']
})
export class FormSesionComponent implements OnInit {

  sesionForm = this.fb.group({

    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`)]]
  });

  constructor( private fb: FormBuilder) { }

  sesionUser(){
    alert("Bienvenido");
  }

  ngOnInit(): void {
  }

}
