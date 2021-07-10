import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { TokenVerificationService } from '../services/authorization/token-verification.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {



  constructor( private tokenVerify: TokenVerificationService, private router: Router) {}

  canActivate() {

    if(new Promise<boolean>(resolve=>{
      this.tokenVerify.verify().pipe()
       .subscribe(
          (data:any) => {
              console.log(data);
              resolve(data.result);
       })
    })){
      return true;
    }else{
      console.log("Token invalido");
      this.router.navigate(['/']);
      return false;
    }
  }

}
