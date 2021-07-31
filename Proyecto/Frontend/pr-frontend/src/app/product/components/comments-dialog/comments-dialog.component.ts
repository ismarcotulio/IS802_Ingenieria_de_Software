import { CommentToSellerService } from './../../../core/services/comment/comment-to-seller.service';
import { Component, OnInit, Inject } from '@angular/core';
import { CommentToSeller } from './../../../core/models/comment/comment-to-seller-model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-comments-dialog',
  templateUrl: './comments-dialog.component.html',
  styleUrls: ['./comments-dialog.component.css']
})
export class CommentsDialogComponent implements OnInit {

  commentsToSeller: CommentToSeller[] = []
  addComment = false

  constructor(
    private commentToSellerService: CommentToSellerService,
    @Inject(MAT_DIALOG_DATA) public data: {Id_Seller: number}
  ) { }

  ngOnInit(): void {
    this.commentsToSeller = this.commentToSellerService.getCommentsToSeller()
  }

  openAddComment(){
    this.addComment = true
  }
}
