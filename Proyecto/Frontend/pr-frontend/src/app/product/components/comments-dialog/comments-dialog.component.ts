import { CommentToSellerService } from './../../../core/services/comment/comment-to-seller.service';
import { Component, OnInit } from '@angular/core';
import { CommentToSeller } from './../../../core/models/comment/comment-to-seller-model';

@Component({
  selector: 'app-comments-dialog',
  templateUrl: './comments-dialog.component.html',
  styleUrls: ['./comments-dialog.component.css']
})
export class CommentsDialogComponent implements OnInit {

  commentsToSeller: CommentToSeller[] = []
  addComment = false

  constructor(
    private commentToSellerService: CommentToSellerService
  ) { }

  ngOnInit(): void {
    this.commentsToSeller = this.commentToSellerService.getCommentsToSeller()
  }

  openAddComment(){
    this.addComment = true
  }
}
