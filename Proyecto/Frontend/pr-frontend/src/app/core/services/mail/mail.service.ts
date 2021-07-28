import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mail } from './../../models/mail/mail.model';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  url = "http://localhost:3000/sendEmail";

  constructor( private http: HttpClient ) { }

  sendEmail(from:string, to:string, subject:string, html:string){
    return this.http.post<Mail>(this.url,{from:from, to:to, subject:subject, html:html})
  }
}
