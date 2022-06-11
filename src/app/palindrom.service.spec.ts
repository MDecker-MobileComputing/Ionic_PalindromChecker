import { TestBed } from '@angular/core/testing';

import { PalindromService } from './palindrom.service';


/**
 * Rechnerübung: Schreiben Sie Unit-Test-Methoden in dieser Klasse.
 */
describe('PalindromService', () => {

  /** Code/Class under Test (CUT). */
  let cut: PalindromService;


  /**
   * Diese Methode wird vor JEDER einzelnen Unit-Test-Methode aufgerufen,
   * damit jede Testmethode eine "frische" Instanz des CUT hat.
   */
  beforeEach(() => {

    TestBed.configureTestingModule({});
    cut = TestBed.inject(PalindromService);
  });


  /**
   * Vorlage für eine Unit-Test-Methode.
   */
  it('should be created', () => {

    expect(cut).toBeTruthy();
  });

});
