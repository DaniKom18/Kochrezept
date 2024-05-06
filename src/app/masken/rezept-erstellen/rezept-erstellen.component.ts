import {Component, OnInit} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonModule} from "primeng/button";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {FileUploadModule} from "primeng/fileupload";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadComponent} from "../../shared-components/file-upload/file-upload.component";
import {RezeptVerwaltungComponent} from "../../shared-components/rezept-verwaltung/rezept-verwaltung.component";
import {RecipeService} from "../../services/recipe.service";
import {RecipeWithIngredients} from "../../models/recipeWithIngredients";
import {IngredientService} from "../../services/ingredient.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {MessageService} from "primeng/api";
import {Ingredient} from "../../models/ingredient";

@Component({
  selector: 'app-rezept-erstellen',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    InputTextareaModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    ScrollPanelModule,
    FileUploadModule,
    DropdownModule,
    FileUploadComponent,
    RezeptVerwaltungComponent
  ],
  templateUrl: './rezept-erstellen.component.html',
  styleUrl: './rezept-erstellen.component.css'
})
export class RezeptErstellenComponent{

  constructor(private recipeService: RecipeService,
              private ingredientService: IngredientService,
              private userService: UserService,
              private router: Router,
              private messageService: MessageService) {
  }

  earnedXP = 10;

  createRecipe($data: RecipeWithIngredients) {
    this.recipeService.saveRecipe($data.recipe).subscribe({
      next: recipe => {
        this.saveIngredientsAndHandleErrors($data.ingredientsOfRecipe, recipe.id);
        this.updateUserAndHandleErrors();
        this.displaySuccessMessage();
        this.router.navigate(['/meine-rezepte']);
      },
      error: error => {
        this.displayErrorMessage(error);
      }
    });
  }

  private saveIngredientsAndHandleErrors(ingredients: Ingredient[], recipeId: number) {
    this.ingredientService.saveIngredients(ingredients, recipeId).subscribe({
      error: error => {
        this.displayErrorMessage(error);
      }
    });
  }

  private updateUserAndHandleErrors() {
    this.userService.updateUser(this.earnedXP).subscribe({
      error: error => {
        this.displayErrorMessage(error);
      }
    });
  }

  private displaySuccessMessage() {
    this.messageService.add({ severity: 'success', summary: 'Erfolgreich', detail: 'Rezept wurde erfolgreich erstellt' });
  }

  private displayErrorMessage(error: any) {
    console.error('Fehler:', error);
    this.messageService.add({ severity: 'error', summary: 'Fehler', detail: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.' });
  }
}
