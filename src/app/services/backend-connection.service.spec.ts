import { TestBed } from '@angular/core/testing';

import { BackendConnectionService } from './backend-connection.service';

describe('BackendConnectionService', () => {
  let service: BackendConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
