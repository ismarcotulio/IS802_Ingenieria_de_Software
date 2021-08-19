import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { ChartService } from './../../services/chart.service';


@Component({
  selector: 'app-product-per-department',
  templateUrl: './product-per-department.component.html',
  styleUrls: ['./product-per-department.component.css']
})
export class ProductPerDepartmentComponent implements OnInit {

   // PolarArea
   public polarAreaChartLabels: Label[] = [];
   public polarAreaChartData: number[] = [];
   public polarAreaLegend = true;
   public polarAreaChartColors: Array<any> = [
    {
      backgroundColor: [
        '#DB5461',
        '#B8336A',
        '#235789',
        '#F1D302',
        '#FDFFFC',
        '#D4B483',
        '#F2EFEA',
        '#403D58',
        '#DBD56E',
        '#66D7D1',
        '#FC7753',
        '#004346',
        '#89DAFF',
        '#E4C1F9',
        '#C0C999',
        '#ED1C24',
        '#4CE0B3',
        '#ED6A5E'
      ],
    }
  ];

   public polarAreaChartType: ChartType = 'polarArea';


  constructor(private chartService: ChartService) { }

   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnInit(): void {
    this.chartService.countProductDepartment().subscribe(
      data => {
        for (let element of data){
          this.polarAreaChartLabels.push(element.Name)
          this.polarAreaChartData.push(element.total)
        }
      }
    )
  }

}
