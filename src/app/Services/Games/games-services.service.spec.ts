import { TestBed } from '@angular/core/testing';

import { GamesServicesService } from './games-services.service';

describe('GamesServicesService', () => {
  let service: GamesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
