import { TestBed } from '@angular/core/testing';

import { MpuserService } from './mpuser.service';

describe('MpuserService', () => {
  let service: MpuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
