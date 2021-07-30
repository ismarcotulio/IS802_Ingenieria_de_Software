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
}
