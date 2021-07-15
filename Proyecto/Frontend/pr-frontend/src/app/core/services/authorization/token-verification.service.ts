import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { verifyToken } from '../../models/verifyToken/verify-token-model';

@Injectable({
  providedIn: 'root'
})
export class TokenVerificationService {

  constructor( private http: HttpClient ) { }

  url = 'http://localhost:3000/verify';

  verify(){
    return this.http.post<verifyToken>( this.url, "" );
  }

}
