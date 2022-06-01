import { Input, DoCheck } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit, DoCheck {

  constructor() { }

  @Input() Total: Number = 0;
  @Input() Obtain: Number = 0;




  ngOnInit(): void {
  }


  ngDoCheck(): void {

    this.doughnutChartData = {
      labels: [],
      datasets: [{ data: [Number(this.Total), Number(this.Total) - Number(this.Obtain)] },
      ]
    };

  }


  public doughnutChartData: ChartData<'doughnut'>;
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  }





}
