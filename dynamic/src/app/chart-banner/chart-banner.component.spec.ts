import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBannerComponent } from './chart-banner.component';

describe('ChartBannerComponent', () => {
  let component: ChartBannerComponent;
  let fixture: ComponentFixture<ChartBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
