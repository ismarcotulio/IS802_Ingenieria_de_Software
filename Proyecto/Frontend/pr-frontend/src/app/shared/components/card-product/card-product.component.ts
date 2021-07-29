import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

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
    this.router.navigate([`/user/product/${this.Id}`])
  }
}
