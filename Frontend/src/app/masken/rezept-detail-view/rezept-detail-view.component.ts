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
import {MessageService} from "primeng/api";

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
  isFavorite: boolean = false;
  feedbackId: number = -1

  recipe: Recipe = {
    id: -1,
    name: '',
    preparation: '',
    image: '',
    rating: -1,
    visibility: false,
    showAuthor: false,
  }

  ingredients: Ingredient[] = []

  commentsWithUsername: CommentWithUsername[] = []

  newComment: Comment = {
    id: 0,
    text: '',
  };

  AllFeedback: Feedback[] = []

  constructor(private recipeService: RecipeService,
              private ingredientService: IngredientService,
              private commentService: CommentService,
              private feedbackService: FeedbackService,
              private messageService: MessageService) {
  }

  @Input() //Mapped id die durch die URL übergeben wurde auf recipeId
  set id(value: number) {
    this.recipeId = value;
  }

  ngOnInit(): void {
    this.loadRecipe();
    this.createFeedback();
    this.loadIngredient();
    this.loadFeedback(() => {
      this.loadComment(); // Aufruf von loadComment() nach dem Abschluss von loadFeedback()
    });
  }

  private loadRecipe() {
    console.log("Load Recipe")
    this.recipeService.getRecipeById(this.recipeId).subscribe(
      data => {
        this.recipe = data;
        console.log(data);
        this.getCurrentFavStatusOfRecipe();
      }
    )
  }

  getCurrentFavStatusOfRecipe() {
    this.recipeService.getAllFavoritesRecipes().subscribe(
      {
        next: data => {
          data.forEach(recipe => {
            if (recipe.id == this.recipeId) {
              this.isFavorite = true;
            }
          });
        },
        error: error => {
          this.displayErrorMessage(error)
        }
      }
    );
  }

  private loadIngredient() {
    this.ingredientService.getIngredientsOfRecipe(this.recipeId).subscribe(
      {
        next: data => {
          this.ingredients = data;
          console.log(data);
        },
        error: error => {
          this.displayErrorMessage(error)
        }
      }
    )
  }

  private loadFeedback(callback: () => void) {
    this.feedbackService.getAllFeedbackOfRecipe(this.recipeId).subscribe(
      {
        next: data => {
          this.AllFeedback = data;
          callback();
        },
        error: error => {
          this.displayErrorMessage(error)
        }
      }
    )

  }

  private loadComment() {
    this.commentsWithUsername = [];
    this.AllFeedback.forEach(feedback => {
      this.commentService.getAllCommentsOfFeedback(feedback.id).subscribe(
        {
          next: data => {
            data.forEach(comment => {
              this.commentsWithUsername.push({text: comment.text, username: feedback.username});
            });
          },
          error: error => {
            this.displayErrorMessage(error)
          }
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

  validateComment() {
    return this.newComment.text.trim() !== '';
  }

  isUserFeedbackAvailable() {
    console.log("Checking if user feedback is available");
    const feedback: Feedback[] = this.AllFeedback.filter(feedback => feedback.username === userSession.username);
    if (feedback.length == 1) {
      console.log("Feedback is available")
      this.feedbackId = feedback[0].id
      return true
    } else {
      console.log("Feedback is not available creating one")
      return false
    }
  }

  saveFeedback(newFeedback: Feedback) {
    this.feedbackService.saveFeedback(newFeedback, this.recipeId).subscribe(
      {
        next: data => {
          console.log("Feedback saved");
          console.log(data);
          this.feedbackId = data.id
        },
        error: error => {
          this.displayErrorMessage(error)
        }
      }
    );
  }

  createFeedback() {
    if (!this.isUserFeedbackAvailable()) {
      console.log("Creating User Feedback");
      let newFeedback: Feedback = {
        id: -1,
        rating: '0',
        username: userSession.username
      };
      this.saveFeedback(newFeedback)
    }
  }

  addCommentToFeedback() {
    // go through all feedbacks and add the comment to the matching username
    if (this.validateComment()) {
      this.commentService.saveComment(this.newComment, this.feedbackId).subscribe(
        {
          next: data => {
            console.log("Adding comment to feedback successful");
            this.resetCommentField()
            this.commentsWithUsername.push({username: userSession.username, text: data.text})
          },
          error: error => {
            this.displayErrorMessage(error)
          }
        }
      );
    } else {
      // TODO: Show error message
      console.log("Comment is empty");
    }
  }

  submitComment() {
    this.addCommentToFeedback();
  }

  resetCommentField() {
    this.newComment.text = '';
  }

  displayErrorMessage(error: any) {
    console.error('Fehler:', error);
    this.messageService.add({
      severity: 'error',
      summary: 'Fehler',
      detail: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
    });
  }
}
