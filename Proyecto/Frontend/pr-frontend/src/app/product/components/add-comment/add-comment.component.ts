import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { CommentToSellerService } from 'src/app/core/services/comment/comment-to-seller.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  starSelected = false
  qualification = 0
  pipe = new DatePipe('en-US');
  @Input() Id_Seller = 0


  commentForm = this.fb.group({
    Comment: ['', Validators.required],
    Qualification: ['',  Validators.required],
    Date: [''],
    Id_Seller: ['']
  });

  constructor(
    private fb:FormBuilder,
    private commentToSellerService: CommentToSellerService,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
  }

  selecStar(stars: HTMLElement, star: MatIcon){
    this.qualification = star._elementRef.nativeElement.dataset.number
    this.commentForm.controls.Qualification.setValue(this.qualification)

    let count = 0
    stars.childNodes.forEach(node => {
      if(count < this.qualification){
        node.textContent = "star"
      }else{
        node.textContent = "star_border"
      }
      count++
    });
    this.starSelected = true
  }

  sendComment(btn: MatButton){
    btn.disabled

    let now = Date.now();
    let FormattedDate = this.pipe.transform(now, 'YYYY-MM-dd')
    this.commentForm.controls.Date.setValue(FormattedDate)

    this.commentForm.controls.Id_Seller.setValue(this.Id_Seller)

    this.commentToSellerService.sendComment(this.commentForm)

    this.dialogRef.closeAll()

  }
}
