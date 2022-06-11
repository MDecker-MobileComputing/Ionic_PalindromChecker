import { TestBed } from '@angular/core/testing';

import { PalindromService } from './palindrom.service';

describe('PalindromService', () => {
  let service: PalindromService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalindromService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
