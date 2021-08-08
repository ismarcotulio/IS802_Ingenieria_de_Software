import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product-default',
  templateUrl: './card-product-default.component.html',
  styleUrls: ['./card-product-default.component.css']
})
export class CardProductDefaultComponent implements OnInit {

  constructor(private router: Router) { }
  dateClear = '';
  costClear = '';
  @Input() Id = 0;
  @Input() Name = "";
  @Input() Type = "";
  @Input() Cost = 0;
  @Input() Description = "";
  @Input() Image = "";
  @Input() Date = "";

  ngOnInit(): void {
    this.clearCost(this.Cost);
    this.clearDate(this.Date);
  }

  productDetail(){
    this.router.navigate([`/product/${this.Id}`])
  }

  clearCost(numb:number){

    let temp = numb.toLocaleString();
    let num = '';
    if(numb.toLocaleString().length >3){
      let cont = 0;
      for(let j=numb.toLocaleString().length-1;j>=0;j--){
        if(cont!= 2){
          num = temp[j] + num ;
          cont= cont +1;
        }else if(cont == 2){
          num = ","+ temp[j]+num;
          cont =0; 
        }
        
      }
    
    num = num + '.00';
    this.costClear = num;
  }else{
    num = numb + '.00';
    this.costClear = num;
    }
    
  }

  clearDate(date:string){
    let tempDate = `${date}`;
    var clearDate = tempDate.split('-');
    var clearDay = clearDate[2].split('T')[0];
    let newDate = `${clearDay}/${clearDate[1]}/${clearDate[0]}`;
    this.dateClear = newDate;
  }
}
