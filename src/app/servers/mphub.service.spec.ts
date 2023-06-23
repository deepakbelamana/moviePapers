import { TestBed } from '@angular/core/testing';

import { MPHubService } from './mphub.service';

describe('MPHubService', () => {
  let service: MPHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MPHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
