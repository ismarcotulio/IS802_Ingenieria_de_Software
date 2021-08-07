import { Component, Input, OnInit } from '@angular/core';
import { CommentToSeller } from 'src/app/core/models/comment/comment-to-seller-model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() commentToSeller: CommentToSeller = {
    Comment: "Muy buena calidad de productos, 100% recomendado",
    Date: "2021/07/30",
    Qualification: 3,
    First_Name: "",
    Last_Name: ''
  }

  stars:any = []
  stars_border:any = []

  constructor() { }

  ngOnInit(): void {
    this.stars = Array(this.commentToSeller.Qualification).fill(1)
    this.stars_border = Array(5 - this.commentToSeller.Qualification).fill(1)
  }

}
