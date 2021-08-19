import { ChartService } from './../../services/chart.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-user-per-product',
  templateUrl: './user-per-product.component.html',
  styleUrls: ['./user-per-product.component.css']
})
export class UserPerProductComponent implements OnInit {

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = [];

  public radarChartData: ChartDataSets[] = [
    { data: [], label: 'Productos' },
  ];
  public radarChartType: ChartType = 'radar';

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.chartService.countUserProduct().subscribe(
      data => {
        console.log(data)
        for (let element of data){
          this.radarChartData[0].data?.push(element.total)
          this.radarChartLabels.push(element.Name)
        }
      }
    )
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
