import { TestBed, inject } from '@angular/core/testing';

import { PlotService } from './plot.service';

describe('PlotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlotService]
    });
  });

  it('should be created', inject([PlotService], (service: PlotService) => {
    expect(service).toBeTruthy();
  }));
});
