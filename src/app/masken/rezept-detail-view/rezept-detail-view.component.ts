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
import {CommentService} from "../../services/comment.service";
import {FeedbackService} from "../../services/feedback.service";
import {userSession} from "../../../environments/user-uuid";
import {FormsModule} from "@angular/forms";

class CommentWithUsername {
  text: string = '';
  username: string = '';
}

@Component({
  selector: 'app-rezept-detail-view',
  standalone: true,
  imports: [
    ButtonModule,
    NgForOf,
    TableModule,
    ChipsModule,
    RippleModule,
    InputTextareaModule,
    FormsModule
  ],
  templateUrl: './rezept-detail-view.component.html',
  styleUrl: './rezept-detail-view.component.css'
})
export class RezeptDetailViewComponent implements OnInit {
  recipeId: number = -1;

  recipe: Recipe = {
    id: -1,
    name: '',
    preparation: '',
    image: '',
    rating: -1,
    visibility: false,
    showAuthor: false,
  }
  isFavorite: boolean = true;

  ingredients: Ingredient[] = []

  combinedIngredients: any[] = [];

  comments: Comment[] = []

  commentz: CommentWithUsername[] = []

  feedback: Feedback = {
    id: -1,
    rating: '',
    username: ''
  }

  AllFeedback: Feedback[] = []

  constructor(private recipeService: RecipeService,
              private ingredientService: IngredientService,
              private commentService: CommentService,
              private feedbackService: FeedbackService) {
  }

  @Input() //Mapped id die durch die URL übergeben wurde auf recipeId
  set id(value: number) {
    this.recipeId = value;
  }

  ngOnInit(): void {
    this.loadRecipe(() => {
      this.getCurrentFavStatusOfRecipe();
    });
    this.loadIngredient();
    this.loadFeedback(() => {
      this.loadComment(); // Aufruf von loadComment() nach dem Abschluss von loadFeedback()
    });
  }

  private loadRecipe(callback: () => void) {
    this.recipeService.getRecipeById(this.recipeId).subscribe(
      data => {
        this.recipe = data;
        console.log(data);
        callback();
      }
    )
  }

  private getCurrentFavStatusOfRecipe() {
    this.recipeService.getAllFavoritesRecipes().subscribe(
      data => {
        data.forEach(recipe => {
          if (recipe.id === this.recipeId) {
            this.isFavorite = true;
          }
        });
      }
    );
    console.log({message: "Recipe is favorite: " + this.isFavorite});
  }

  private updateCombinedIngredients() {
    this.combinedIngredients = this.ingredients.map(ingredient => {
      return {
        ...ingredient,
        quantityWithMeasure: `${ingredient.quantity} ${ingredient.measure}`
      };
    });
  }

  private loadIngredient() {
    this.ingredientService.getIngredientsOfRecipe(this.recipeId).subscribe(
      data => {
        this.ingredients = data;
        console.log(data);
        this.updateCombinedIngredients();
      }
    )
  }

  private loadFeedback(callback: () => void) {
    this.feedbackService.getAllFeedbackOfRecipe(this.recipeId).subscribe(
      {
        next: data => {
          this.AllFeedback = data;
          console.log("Feedback loaded ");
          console.log(data);
          callback();
        },
        error: error => {
          console.log("Error loading feedback");
          console.log(error);
        }
      }
    )

  }

  private loadComment() {
    console.log("loadComment()");
    this.commentz = [];
    this.AllFeedback.forEach(feedback => {
      this.commentService.getAllCommentsOfFeedback(feedback.id).subscribe(
        data => {
          data.forEach(comment => {
            this.commentz.push({text: comment.text, username: feedback.username});
            console.log("Comment: " + comment.text + " Username: " + feedback.username);
          });
        }
      )
    });
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.recipeService.userClickedRecipeAsFav(this.recipe).subscribe(
      data => {
        console.log(data);
        console.log({message: "Recipe is now favorite: " + this.isFavorite});
      }
    );
  }

  newComment: Comment = {
    id: 0,
    text: '',
  };

  refreshComments() {
    this.loadComment();
  }

  validateComment() {
    return this.newComment.text.trim() !== '';
  }

  isUserFeedbackAvailable() {
    console.log("Checking if user feedback is available");
    return this.AllFeedback.some(feedback => feedback.username === userSession.username);
  }

  saveFeedback(newFeedback: Feedback, callback: () => void) {
    this.feedbackService.saveFeedback(newFeedback, this.recipeId).subscribe(
      {
        next: data => {
          console.log("Feedback saved");
          console.log(data);
          callback();
        },
        error: error => {
          console.log("Error saving feedback");
          console.log(error);
        }
      }
    );
  }

  createFeedback() {
    console.log("Creating User Feedback");
    let newFeedback: Feedback = {
      id: -1,
      rating: '0',
      username: userSession.username
    };
    this.saveFeedback(newFeedback, () => {
      this.loadFeedback(() => {
        this.loadComment();
      });
    });
  }

  addCommentToFeedback(callback: () => void) {
    // go through all feedbacks and add the comment to the matching username
    if (this.validateComment()) {
      console.log("Adding comment to feedback");
      if (!this.isUserFeedbackAvailable()) {
        console.log("User feedback is not available");
        this.createFeedback();
      }
      console.log("Feedback length: " + this.AllFeedback.length);
      this.AllFeedback.forEach(feedback => {
          console.log("Feedback username: " + feedback.username);
          console.log("User session username: " + userSession.username);
          if (feedback.username === userSession.username) {
            this.commentService.saveComment(this.newComment, feedback.id).subscribe(
              {
                next: data => {
                  console.log("Adding comment to feedback successful");
                  this.newComment.text = '';
                  console.log(data);
                  callback();
                },
                error: error => {
                  console.log("Error saving comment");
                  console.log(error);
                }
              }
            );
          }
        }
      );
    } else {
      // TODO: Show error message
      console.log("Comment is empty");
    }
  }

  submitComment() {
    console.log("Comment text: " + this.newComment.text);
    this.addCommentToFeedback(() => {
      this.refreshComments();
    });
  }
}
