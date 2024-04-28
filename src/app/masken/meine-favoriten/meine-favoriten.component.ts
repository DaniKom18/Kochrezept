import { Component } from '@angular/core';
import {RezeptPanelComponent} from "../../shared-components/rezept-panel/rezept-panel.component";
import {Recipe} from "../../models/recipe";

@Component({
  selector: 'app-meine-favoriten',
  standalone: true,
  imports: [
    RezeptPanelComponent
  ],
  templateUrl: './meine-favoriten.component.html',
  styleUrl: './meine-favoriten.component.css'
})
export class MeineFavoritenComponent {
  recipes: Recipe[] = []
}
