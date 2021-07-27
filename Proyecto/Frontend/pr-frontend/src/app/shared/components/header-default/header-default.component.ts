import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.css']
})
export class HeaderDefaultComponent implements OnInit {

  constructor(private router:Router) {
   }

  ngOnInit(): void {}

  searchProduct(key: string): void {
    this.router.navigateByUrl('register', {skipLocationChange: true})
  .then(()=>this.router.navigate(['category'], {state: {data: {key}}}));

  }

}
