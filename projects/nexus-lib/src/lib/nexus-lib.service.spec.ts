import { TestBed } from '@angular/core/testing';

import { NexusLibService } from './nexus-lib.service';

describe('NexusLibService', () => {
  let service: NexusLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NexusLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
