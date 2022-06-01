import { AccountsService } from './../../../Services/accounts.service';
import { Input, DoCheck } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit, DoCheck {



  @Input() graphFor;

  customBarChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };


  constructor(private accounts: AccountsService) {

  }



  ngOnInit(): void {


  }


  ngDoCheck(): void {

    let feesArray: number[] = [];
    let salariesArray: number[] = [];

    this.accounts.get().map(x => x.Fees).forEach((item: number) => {
      feesArray.push(item)
    })
    this.accounts.get().map(x => x.Salaries).forEach((item: number) => {
      salariesArray.push(item)
    })


    switch (this.graphFor) {
      case 'both':
        this.customBarChartData = {
          labels: this.accounts.get().map(x => x.Date),
          datasets: [
            { data: feesArray, label: 'Fees (K)' },
            { data: salariesArray, label: 'Salaries (K)' }
          ]
        }

        break;
      case 'fees':
        this.customBarChartData = {
          labels: this.accounts.get().map(x => x.Date),
          datasets: [
            { data: feesArray, label: 'Fees (K)' },
          ]
        }
        break;
      case 'salaries':
        this.customBarChartData = {
          labels: this.accounts.get().map(x => x.Date),
          datasets: [
            { data: salariesArray, label: 'Salaries (K)' },
          ]
        }
        break;
    }


    this.barChartData = this.customBarChartData;
    console.log(this.accounts.get())
  }



  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      // datalabels: {
      //   anchor: 'end',
      //   align: 'end'
      // }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];




  barChartData: ChartData<'bar'> = this.customBarChartData;


  // events
  // public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  // }

  // public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  // }





}
