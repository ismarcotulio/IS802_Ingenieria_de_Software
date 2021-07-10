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

              if(data.result == false){
                console.log("No se encuentra logueado");
                this.router.navigate(['/']);
              }
              console.log( this.router.url );
              resolve(data.result);

       })
    })
  }

}
