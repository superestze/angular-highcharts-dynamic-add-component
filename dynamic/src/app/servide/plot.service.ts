import { Injectable } from '@angular/core';
import { ChartItem } from '../chart-item/chart-item';
import { HChartComponent } from '../h-chart/h-chart.component';


@Injectable()
export class PlotService {

  constructor() { }

  getData() {
    return [
      new ChartItem(HChartComponent, {
        type: 'line',
        title: 'Linechart1',
        series: {
          name: 'Line 1',
          data: [1, 2, 3]
        }


      }),

      new ChartItem(HChartComponent, {
        type: 'line',
        title: 'Linechart2',
        series: {
          name: 'Line 1',
          data: [2, 3, 4, 5, 6, 7]
        }


      }),

      new ChartItem(HChartComponent, {
        type: 'line',
        title: 'Linechart3',
        series: {
          name: 'Line 1',
          data: [1, 2, 3, 4, 5, 6, 3, 4]
        }
      })
    ];

  }

}
