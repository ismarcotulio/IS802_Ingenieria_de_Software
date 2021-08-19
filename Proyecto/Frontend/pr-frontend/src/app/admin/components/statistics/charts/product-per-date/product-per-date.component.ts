import { ChartService } from './../../services/chart.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-product-per-date',
  templateUrl: './product-per-date.component.html',
  styleUrls: ['./product-per-date.component.css']
})
export class ProductPerDateComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data!: [], label: 'Mes' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {

      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(78,205,196,0.2)',
      borderColor: '#4ECDC4',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  @ViewChild(BaseChartDirective, { static: true }) chart!: BaseChartDirective;

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.chartService.countProductMonth().subscribe(
      data => {
        for (let element of data){
          this.lineChartData[0].data?.push(element.total)

          switch(element.Name){
            case 1:
              this.lineChartLabels.push("Enero")
              break;
            case 2:
              this.lineChartLabels.push("Febrero")
              break;
            case 3:
              this.lineChartLabels.push("Marzo")
              break;
            case 4:
              this.lineChartLabels.push("Abril")
              break;
            case 5:
              this.lineChartLabels.push("Mayo")
              break;
            case 6:
              this.lineChartLabels.push("Junio")
              break;
            case 7:
              this.lineChartLabels.push("Julio")
              break;
            case 8:
              this.lineChartLabels.push("Agosto")
              break;
            case 9:
              this.lineChartLabels.push("Septiembre")
              break;
            case 10:
              this.lineChartLabels.push("Octubre")
              break;
            case 11:
              this.lineChartLabels.push("Noviembre")
              break;
            case 12:
              this.lineChartLabels.push("Diciembre")
              break;
            default:
              break;
          }
        }
      }
    )
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData!.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data!.length; j++) {
        this.lineChartData[i].data![j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor(): void {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel(): void {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
  }

}
