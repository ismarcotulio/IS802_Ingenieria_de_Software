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
  @Input() Description = "";
  @Input() Price = 0;
  @Input() State = 0;
  @Input() Department = 0;
  @Input() Seller = 0;
  @Input() Category = 0;
  @Input() Img = "";

  ngOnInit(): void {
  }

}
