import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product-default',
  templateUrl: './card-product-default.component.html',
  styleUrls: ['./card-product-default.component.css']
})
export class CardProductDefaultComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() Id = 0;
  @Input() Name = "";
  @Input() Type = "";
  @Input() Cost = 0;
  @Input() Description = "";
  @Input() Image = "";
  @Input() Date = "";

  ngOnInit(): void {
  }

  productDetail(){
    this.router.navigate([`/product/${this.Id}`])
  }

}
