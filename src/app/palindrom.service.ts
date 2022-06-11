import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalindromService {

  /**
   * Als Argument übergebener String auf Palindrom-Eigenschaft überprüfen.
   * 
   * @param eingabe String, der auf Palindrom-Eigenschaft zu überprüfen ist.
   * @returns `true` gdw. `eingabe` ein Palindrom ist
   */
  public checkePalindrom(eingabe: string): boolean {

    const eingabeNormalisiert = eingabe.trim().toLowerCase();
    const eingabeLaenge = eingabeNormalisiert.length;

    if (eingabeLaenge === 0) { return false; }
    if (eingabeLaenge === 1) { return true;  }

    const anzahlChecks = Math.floor( eingabeLaenge / 2 );

    for (let i = 0; i < anzahlChecks; i++) {

      let index1 = i;
      let index2 = eingabeLaenge - i - 1;

      let a = eingabeNormalisiert.charAt( index1 );
      let b = eingabeNormalisiert.charAt( index2 );

      if (a !== b) {

        return false;
      }
    }

    return true;
  }

}
