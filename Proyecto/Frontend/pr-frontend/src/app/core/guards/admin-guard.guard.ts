import { TokenVerificationService } from './../services/authorization/token-verification.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor( private tokenVerify: TokenVerificationService, private router: Router) {}

  canActivate() {

    return new Promise<boolean>(resolve=>{
      this.tokenVerify.verify().pipe()
       .subscribe(
          (data:any) => {
              console.log(data)

              if(data.result == false){
                console.log("No se encuentra logueado");
                this.router.navigate(['/']);
              }
              if(data.Role != 1){
                resolve(false)
                this.router.navigate(['/user']);
              }else{
                resolve(data.result)

              }


       })
    })
  }

}
