import { ChartDirective } from './../chart.directive';
import { Component, Input, OnInit, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy, OnChanges } from '@angular/core';
import { ChartItem } from '../chart-item/chart-item';

@Component({
  selector: 'app-chart-banner',
  templateUrl: './chart-banner.component.html',
  styleUrls: ['./chart-banner.component.css']
})
export class ChartBannerComponent implements OnInit, AfterViewInit, OnChanges {

  @Input()
  charts: ChartItem[];

  @ViewChild(ChartDirective)
  appChart: ChartDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.loadComponent();
  }

  ngAfterViewInit() {
    // this.loadComponent();
    // this.getCharts();
  }


  loadComponent() {
    for (let i = 0; i < this.charts.length; i++) {


      const chartItem = this.charts[i];

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(chartItem.component);

      const viewContainerRef = this.appChart.viewContainerRef;
      // viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance).data = chartItem.data;
    }
  }

  // getCharts() {

  // }


}
