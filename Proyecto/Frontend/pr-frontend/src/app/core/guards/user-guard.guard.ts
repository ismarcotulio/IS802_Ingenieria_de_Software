import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { TokenVerificationService } from '../services/authorization/token-verification.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {

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
              if(data.Role == 1){
                resolve(false)
                this.router.navigate(['/admin']);
              }else{
                resolve(data.result)

              }


       })
    })
  }

}
