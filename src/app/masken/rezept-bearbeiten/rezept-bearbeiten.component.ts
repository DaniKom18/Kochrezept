import {Component, Input} from '@angular/core';
import {RezeptVerwaltungComponent} from "../../shared-components/rezept-verwaltung/rezept-verwaltung.component";
import {Recipe} from "../../models/recipe";

@Component({
  selector: 'app-rezept-bearbeiten',
  standalone: true,
    imports: [
        RezeptVerwaltungComponent
    ],
  templateUrl: './rezept-bearbeiten.component.html',
  styleUrl: './rezept-bearbeiten.component.css'
})
export class RezeptBearbeitenComponent {
  recipeId: number = -1;

  recipe:Recipe = {id: 1, rating: 3, name: "Döner", preparation: "ajsiodjasidioa", image: "ioqaswdjioiqwoeqwioejqiow", ingredients: [{name: "Cluster Me Dady", measure:"ng", quantity:3}]}

  @Input() //Mapped id die durch die URL übergeben wurde auf recipeId
  set id(value: number){
    this.recipeId = value;
  }

  //TODO
  // OnInit Get From Service the Recipe by recipeID and save it in recipe


  updateRecipe($event: Recipe) {
    //TODO PUT an Server schicken um Rezept zu aktualisieren
  }
}
