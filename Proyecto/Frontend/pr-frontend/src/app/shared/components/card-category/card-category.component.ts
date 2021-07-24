import { Category } from './../../../core/models/category/category-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.css']
})
export class CardCategoryComponent implements OnInit {
  @Input() category: Category = {Id:0, Name:"", Image:""}
  constructor() { }

  ngOnInit(): void {
  }


}
