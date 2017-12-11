import { Component, OnInit } from '@angular/core';
import { ChartItem } from './chart-item/chart-item';
import { PlotService } from './servide/plot.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  charts: ChartItem[];
  constructor(
    private plotService: PlotService
  ) {

  }

  ngOnInit() {
    this.charts = this.plotService.getData();
  }


}
