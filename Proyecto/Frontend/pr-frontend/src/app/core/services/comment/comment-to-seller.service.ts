import { COMMENTSTOSELLER } from './../../models/comment/comment-to-seller-mock';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { CommentToSeller } from './../../models/comment/comment-to-seller-model';




@Injectable({
  providedIn: 'root'
})
export class CommentToSellerService {

  url = "http://localhost:3000/comentario/newComment"
  url2 = "http://localhost:3000/comentario/vendedor"

  constructor(private http: HttpClient) { }

  getCommentsToSeller(IdSeller:number){
    return this.http.post<CommentToSeller[]>(this.url2,{sellerId:IdSeller})
  }

  sendComment(form: FormGroup){
    let rawValues = form.getRawValue();
    return this.http.post(this.url, rawValues)
  }
}
