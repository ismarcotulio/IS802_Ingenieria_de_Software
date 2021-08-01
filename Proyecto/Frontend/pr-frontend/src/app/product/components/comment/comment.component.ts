import { Component, Input, OnInit } from '@angular/core';
import { CommentToSeller } from 'src/app/core/models/comment/comment-to-seller-model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() commentToSeller: CommentToSeller = {
    Id_Comment: 0,
    Comment: "Muy buena calidad de productos, 100% recomendado",
    Date: "2021/07/30",
    Id_User_FK: 1,
    Name_User: "John Travolta",
    Qualification: 3
  }

  stars:any = []
  stars_border:any = []

  constructor() { }

  ngOnInit(): void {
    this.stars = Array(this.commentToSeller.Qualification).fill(1)
    this.stars_border = Array(5 - this.commentToSeller.Qualification).fill(1)
  }

}
