import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {Recipe} from "../../models/recipe";

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

  @Input({required: true}) title: string | undefined;
  @Input({required: true}) recipes: Recipe[]| undefined;
  @Output() favEvent = new EventEmitter<Recipe>()

  setFav(recipe: Recipe) {
    this.favEvent.emit(recipe)
  }

}
