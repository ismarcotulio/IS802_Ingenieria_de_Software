
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept( req: any, next: any ){

    let tokenizedReq = req.clone({
      setHeaders: {
        authorization: `Bearer ${ localStorage.getItem('token') }`
      }
    });

    return next.handle(tokenizedReq);
  }
}
