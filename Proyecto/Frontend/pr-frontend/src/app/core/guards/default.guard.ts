import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


import { TokenVerificationService } from '../services/authorization/token-verification.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultGuard implements CanActivate {

  constructor( private tokenVerify: TokenVerificationService, private router: Router) {}

  canActivate(){


    return new Promise<boolean>(resolve=>{
        this.tokenVerify.verify().pipe()
        .subscribe(
            (data:any) => {

                if(data.result == true){
                  console.log("Se encuentra logueado");
                  this.router.navigate(['user']);
                }
                console.log(data.result);
                resolve(!data.result);

        })
      });
  }

}
