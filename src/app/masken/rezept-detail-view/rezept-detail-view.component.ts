import {NgForOf} from "@angular/common";
import {Component, Input} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {Comment} from "../../models/comment";
import {Feedback} from "../../models/feedback";
import {Ingredient} from "../../models/ingredient";
import {Recipe} from "../../models/recipe";

@Component({
  selector: 'app-rezept-detail-view',
  standalone: true,
  imports: [
    ButtonModule,
    NgForOf,
    TableModule
  ],
  templateUrl: './rezept-detail-view.component.html',
  styleUrl: './rezept-detail-view.component.css'
})
export class RezeptDetailViewComponent {
  recipeId: number = -1;

  @Input() //Mapped id die durch die URL übergeben wurde auf recipeId
  set id(value: number) {
    this.recipeId = value;
  }

  ingredients: Ingredient[] = [
    {
      name: 'Zucker',
      quantity: 100,
      measure: 'g'
    },
    {
      name: 'Mehl',
      quantity: 200,
      measure: 'g'
    }
  ];

  combinedIngredients: any[] = this.ingredients.map(ingredient => {
    return {
      ...ingredient,
      quantityWithMeasure: `${ingredient.quantity} ${ingredient.measure}`
    };
  });

  recipe: Recipe = {
    id: this.recipeId,
    name: 'Döner',
    image: 'https://images.pexels.com/photos/15202777/pexels-photo-15202777/free-photo-of-mahlzeit-fleisch-frisch-essensfotografie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5.0,
    preparation: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
    visibility: false,
    showAuthor: false,
  };

  comments: Comment[] = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      id: 2,
      text: "At vero eos et accusam et justo duo dolores et ea rebum.",
    }
  ];

  feedback: Feedback = {
    id: '1',
    rating: '5',
    username: 'Daniel'
  }
}
