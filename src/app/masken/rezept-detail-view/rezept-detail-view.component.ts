import {NgForOf} from "@angular/common";
import {Component, Input, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {Comment} from "../../models/comment";
import {Feedback} from "../../models/feedback";
import {Ingredient} from "../../models/ingredient";
import {Recipe} from "../../models/recipe";
import {ChipsModule} from "primeng/chips";
import {RippleModule} from "primeng/ripple";
import {InputTextareaModule} from "primeng/inputtextarea";
import {RecipeService} from "../../services/recipe.service";
import {IngredientService} from "../../services/ingredient.service";

@Component({
  selector: 'app-rezept-detail-view',
  standalone: true,
  imports: [
    ButtonModule,
    NgForOf,
    TableModule,
    ChipsModule,
    RippleModule,
    InputTextareaModule
  ],
  templateUrl: './rezept-detail-view.component.html',
  styleUrl: './rezept-detail-view.component.css'
})
export class RezeptDetailViewComponent implements OnInit {
  recipeId: number = -1;

  recipe: Recipe = {
    id: this.recipeId,
    name: 'Döner',
    image: 'https://images.pexels.com/photos/15202777/pexels-photo-15202777/free-photo-of-mahlzeit-fleisch-frisch-essensfotografie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5.0,
    preparation: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
    visibility: false,
    showAuthor: false,
  };

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

  constructor(private recipeService: RecipeService,
              private ingredientService: IngredientService) {
  }

  @Input() //Mapped id die durch die URL übergeben wurde auf recipeId
  set id(value: number) {
    this.recipeId = value;
  }

  ngOnInit(): void {
    this.loadRecipe();
    this.loadIngredient();
  }

  private loadIngredient() {
    this.ingredientService.getIngredientsOfRecipe(this.recipeId).subscribe(
      data => {
        this.ingredients = data;
        console.log(data);
      })
  }

  private loadRecipe() {
    this.recipeService.getRecipeById(this.recipeId).subscribe(
      data => {
        this.recipe = data;
        console.log(data);
      })
  }


  combinedIngredients: any[] = this.ingredients.map(ingredient => {
    return {
      ...ingredient,
      quantityWithMeasure: `${ingredient.quantity} ${ingredient.measure}`
    };
  });

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

  isFavorite: boolean = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  comment: string = '';

  addComment() {
    this.comments.push({
      id: this.comments.length + 1,
      text: this.comment
    });
    this.comment = '';
  }

  deleteComment(comment: Comment) {
    this.comments = this.comments.filter(c => c.id !== comment.id);
  }

  editComment(comment: Comment) {
    this.comment = comment.text;
    this.deleteComment(comment);
  }

  editRecipe() {
    this.recipe.visibility = true;
  }

  saveRecipe() {
    this.recipe.visibility = false;
  }
}
