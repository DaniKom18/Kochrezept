import {Component, Input} from '@angular/core';
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-rezept-detail-view',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './rezept-detail-view.component.html',
  styleUrl: './rezept-detail-view.component.css'
})
export class RezeptDetailViewComponent {
  recipeId: number = -1;

  @Input() //Mapped id die durch die URL übergeben wurde auf recipeId
  set id(value: number){
    this.recipeId = value;
  }
}
