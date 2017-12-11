import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-h-chart',
  templateUrl: './h-chart.component.html',
  styleUrls: ['./h-chart.component.css']
})
export class HChartComponent implements OnInit, OnChanges {
  private chartContainer: Chart;

  @Input()
  data: any;


  constructor() { }

  ngOnInit() {
    this.draw();
  }

  ngOnChanges() {

  }

  draw() {

    this.chartContainer = new Chart({
      chart: {
        type: this.data.type
      },
      title: {
        text: this.data.title
      },
      credits: {
        enabled: false
      },
      series: [{
        name: this.data.series.name,
        data: this.data.series.data,
      }]
    });
  }

}
