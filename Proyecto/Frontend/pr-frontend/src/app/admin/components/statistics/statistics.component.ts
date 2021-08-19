import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { StatisticsService } from '../../services/statistics/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {


  constructor(private statisticService:StatisticsService) {}


  optionTimeSelect(event:any){
    if(event.target.value != 0){

      this.statisticService.setNewTimePost({time:event.target.value}).subscribe(result =>{
        // console.log(result);

      })
    }

  }
}
