import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Token } from  '../../../core/models/token/token.model'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/register';

  userRegister( form: FormGroup ){
    let rawValues = form.getRawValue();
    return this.http.post<Token>(this.url, rawValues);
  }
}
