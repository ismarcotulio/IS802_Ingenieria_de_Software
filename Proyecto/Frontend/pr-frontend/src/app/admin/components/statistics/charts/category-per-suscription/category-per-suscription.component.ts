import { ChartService } from './../../services/chart.service';
import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-category-per-suscription',
  templateUrl: './category-per-suscription.component.html',
  styleUrls: ['./category-per-suscription.component.css']
})
export class CategoryPerSuscriptionComponent implements OnInit {

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.chartService.countSuscriptionCategory().subscribe(
      data => {
        for (let element of data){
          this.pieChartLabels.push(element.Name)
          this.pieChartData.push(element.total)
        }
      }
    )
  }



}
