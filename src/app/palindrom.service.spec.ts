import { TestBed } from '@angular/core/testing';

import { PalindromService } from './palindrom.service';


describe('PalindromService', () => {

  /** Code/Class under Test */
  let cut: PalindromService;


  beforeEach(() => {

    TestBed.configureTestingModule({});
    cut = TestBed.inject(PalindromService);
  });

  it('should be created', () => {

    expect(cut).toBeTruthy();
  });

});
