import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product-default',
  templateUrl: './card-product-default.component.html',
  styleUrls: ['./card-product-default.component.css']
})
export class CardProductDefaultComponent implements OnInit {

  constructor() { }

  @Input() Id = 0;
  @Input() Name = "";
  @Input() Type = "";
  @Input() Cost = 0;
  @Input() Description = "";
  @Input() Image = "";

  ngOnInit(): void {
  }

}
