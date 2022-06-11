import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { PalindromService } from '../palindrom.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public eingabe : string = "";

  /**
   * Konstruktor für Dependency Injection.
   */
  constructor(private palindromService: PalindromService,
              private alertCtrl       : AlertController) {}


  /**
   * Button-Event-Handler für Palindrom-Check.
   */
  public async onPalindromCheck() {

    const eingabeTrimmed = this.eingabe.trim();
    if (eingabeTrimmed.length === 0) {

      this.zeigeDialog("Ungültige Eingabe", "Nichts eingegeben");
      return;
    }

    const istPalindrom = this.palindromService.checkePalindrom(eingabeTrimmed);
    if (istPalindrom) {

      this.zeigeDialog("Ergebnis", `"${eingabeTrimmed}" ist ein Palindrom`);

    } else {

      this.zeigeDialog("Ergebnis", `"${eingabeTrimmed}" ist kein Palindrom`);
    }
  }


  /**
   * Hilfsmethode um Dialog mit Titel anzuzeigen.
   * 
   * @param titel Dialog-Titel
   * @param nachricht Im Dialog anzuzeigende Meldung.
   */
  async zeigeDialog(titel: string, nachricht: string) {

    const meinAlert =
          await this.alertCtrl.create({
              header  : titel,
              message : nachricht,
              buttons : [ "Ok" ]
          });

    await meinAlert.present();
  }

}
