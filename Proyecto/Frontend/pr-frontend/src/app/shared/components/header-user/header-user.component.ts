import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }

  postAd(){
    this.router.navigate(['/user/home/postAd']);
  }
}
