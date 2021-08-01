import { FormGroup } from '@angular/forms';
import { COMMENTSTOSELLER } from './../../models/comment/comment-to-seller-mock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentToSellerService {

  constructor() { }

  getCommentsToSeller(){
    return COMMENTSTOSELLER
  }

  sendComment(form: FormGroup){
    alert(
      `Comment:${ form.value.Comment },
      Date: ${ form.value.Date },
      Id_Seller: ${ form.value.Id_Seller },
      Qualification: ${ form.value.Qualification }`
      )
  }
}
