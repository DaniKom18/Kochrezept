import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-rezept-panel',
  standalone: true,
  imports: [
    RouterLink,
    CardModule,
    ButtonModule
  ],
  templateUrl: './rezept-panel.component.html',
  styleUrl: './rezept-panel.component.css'
})
export class RezeptPanelComponent {

  //TODO
  // @Input Rezepte
  // @Output Emmit zu Parent, dieser Übernimmt setFav, da Startseite und Meine Favoriten anders mit dem setzten des LikeBtns umgehen
  // Startseite fügt einfach like hinzu, Meine Favoriten entfernt das Element aus der Liste

  cardInput = [
    {id: "2", header: "CordonBleau", subheader: "20 min", difficulty: "Leicht", stars: 3, fav: false},
    {id: "3", header: "Döner", subheader: "20 min", difficulty: "Leicht", stars: 5, fav: true}
  ]

  setFav(id: string) {
    this.cardInput.filter(x => x.id == id).map(x => x.fav = !x.fav);
    console.log(this.cardInput)
  }

}
