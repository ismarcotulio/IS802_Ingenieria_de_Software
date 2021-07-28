import { InvalidDataDialogComponent } from './../invalid-data-dialog/invalid-data-dialog.component';
import { AccountNotVerifiedDialogComponent } from './../account-not-verified-dialog/account-not-verified-dialog.component';
import { AccountNotExistDialogComponent } from './../account-not-exist-dialog/account-not-exist-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/user/authentication.service';


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

  constructor(
    private fb: FormBuilder,
    private authentication: AuthenticationService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  authenticateUser(){
    this.authentication.userAuthenticate( this.sesionForm ).subscribe(
      data => {
        if(data.status == true){
          localStorage.setItem("token", data.token)
          this.router.navigate(["/user"])
        }else{
          if(data.message == "cuenta no existe"){
            this.openAccountNotExistDialog()
          }else{
            if(data.message == "Cuenta no verificada"){
              this.openAccountNotVerifiedDialog()
            }else{
              this.openInvalidDataDialog()
            }
          }

        }
      }
    )
  }

  openAccountNotExistDialog() {
    const dialogRef = this.dialog.open(AccountNotExistDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openAccountNotVerifiedDialog() {
    const dialogRef = this.dialog.open(AccountNotVerifiedDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openInvalidDataDialog() {
    const dialogRef = this.dialog.open(InvalidDataDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
