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

  ingredients: Ingredient[] = []

  combinedIngredients: any[] = [];

  comments: Comment[] = []

  commentz: CommentWithUsername[] = []

  feedback: Feedback[] = []

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
    this.loadRecipe();
    this.loadIngredient();
    this.loadFeedback(() => {
      this.loadComment(); // Aufruf von loadComment() nach dem Abschluss von loadFeedback()
    });
  }

  private loadRecipe() {
    this.recipeService.getRecipeById(this.recipeId).subscribe(
      data => {
        this.recipe = data;
        console.log(data);
      }
    )
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
      data => {
        this.feedback = data;
        console.log(data);
        callback();
      }
    )
  }

  private loadComment() {
    console.log("loadComment()");
    this.commentz = [];
    this.feedback.forEach(feedback => {
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

  isFavorite: boolean = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
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

  addCommentToFeedback() {
    // go through all feedbacks and add the comment to the matching username
    if (this.validateComment()) {
      this.feedback.forEach(feedback => {
          if (feedback.username === userSession.username) {
            this.commentService.saveComment(this.newComment, feedback.id).subscribe(
              data => {
                this.newComment.text = '';
                console.log(data);
              }
            );
          }
        }
      );
    }
  }

  submitComment() {
    console.log(this.newComment.text);
    this.addCommentToFeedback();
    this.saveFeedback();
    this.refreshComments();
  }

  saveFeedback() {
    this.feedbackService.saveFeedback(this.feedback, this.recipeId).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
