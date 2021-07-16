import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

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
