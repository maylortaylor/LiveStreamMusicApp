import { TestBed, inject } from '@angular/core/testing';

import { PlatformStreamsService } from './platform-streams.service';

describe('PlatformStreamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatformStreamsService]
    });
  });

  it('should be created', inject([PlatformStreamsService], (service: PlatformStreamsService) => {
    expect(service).toBeTruthy();
  }));
});
