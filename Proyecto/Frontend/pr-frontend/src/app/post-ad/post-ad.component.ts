import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.css']
})

export class PostAdComponent implements OnInit {
  formulario = new FormGroup({

    instagram: new FormControl(''),
    whatsapp: new FormControl(''),
    twitter: new FormControl(''),
    password: new FormControl('')


  });

  formPost = new FormGroup({
    
  });

  constructor() { }

  ngOnInit(): void {
  }

  send(){
    console.log('aaaa..');
  }

}
