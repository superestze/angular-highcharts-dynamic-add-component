import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HChartComponent } from './h-chart.component';

describe('HChartComponent', () => {
  let component: HChartComponent;
  let fixture: ComponentFixture<HChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
