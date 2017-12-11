import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HChartComponent } from './h-chart/h-chart.component';
import { ChartModule } from 'angular-highcharts';
import { PlotService } from './servide/plot.service';
import { ChartBannerComponent } from './chart-banner/chart-banner.component';
import { ChartDirective } from './chart.directive';

@NgModule({
  declarations: [
    AppComponent,
    HChartComponent,
    ChartBannerComponent,
    ChartDirective
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  entryComponents: [HChartComponent],
  providers: [PlotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
