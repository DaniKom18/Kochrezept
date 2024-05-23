import {Component, Input, OnInit} from '@angular/core';
import {RezeptVerwaltungComponent} from "../../shared-components/rezept-verwaltung/rezept-verwaltung.component";
import {Recipe} from "../../models/recipe";
import {Ingredient} from "../../models/ingredient";
import {RecipeService} from "../../services/recipe.service";
import {IngredientService} from "../../services/ingredient.service";
import {RecipeWithIngredients} from "../../models/recipeWithIngredients";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-rezept-bearbeiten',
  standalone: true,
    imports: [
        RezeptVerwaltungComponent
    ],
  templateUrl: './rezept-bearbeiten.component.html',
  styleUrl: './rezept-bearbeiten.component.css'
})
export class RezeptBearbeitenComponent implements OnInit{
  recipeId: number = -1;

  @Input() //Mapped id die durch die URL übergeben wurde auf recipeId
  set id(value: number){
    this.recipeId = value;
  }

  recipe: Recipe | undefined
  ingredientsOfRecipe: Ingredient[] | undefined
  deleteIngredientsQueue: number[] = []

  constructor(private recipeService: RecipeService,
              private ingredientService: IngredientService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getRecipeById(this.recipeId);
    this.getIngredientsOfRecipe(this.recipeId)
  }

  updateRecipe($data: RecipeWithIngredients) {
    this.recipeService.updateRecipe($data.recipe).subscribe({
      next: () => {
        //TODO Keine Perfekte Lösung...
        // Alle Http Calls werden Synchron ausgeführt statt nacheinander
        // Und wird bei Fehlermeldungen uns um die Ohren Fliegen :p
        // Wollte aber vorerst das HTTP Nesting vermeiden
        this.removeIngredients();
        this.saveIngredients($data.ingredientsOfRecipe, $data.recipe.id);
        this.handleRecipeUpdateSuccess();
      },
      error: error => {
        this.displayErrorMessage(error);
      }
    });
  }

  private handleRecipeUpdateSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Erfolgreich', detail: 'Rezept wurde erfolgreich bearbeitet' });
    this.router.navigate(['/meine-rezepte']);
  }

  saveIngredients(ingredients: Ingredient[], recipeId: number) {
    this.ingredientService.saveIngredients(ingredients, recipeId).subscribe({
      error: error => {
        this.displayErrorMessage(error);
      }
    });
  }

  //Zutaten die schon zu einem Rezept gehört haben und in der Bearbeitung gelöscht wurden werden nun gelöscht
  removeIngredients() {
    if (this.deleteIngredientsQueue.length > 0) {
      for (let ingredientId of this.deleteIngredientsQueue) {
        this.ingredientService.deleteIngredient(ingredientId).subscribe({
          error: error => {
            this.displayErrorMessage(error);
          }
        });
      }
    }
  }

  private getRecipeById(recipeId: number) {
    this.recipeService.getRecipeById(recipeId).subscribe({
      next: data => {
        this.recipe = data;
      },
      error: error => {
        this.displayErrorMessage(error);
      }
    });
  }

  private getIngredientsOfRecipe(recipeId: number) {
    this.ingredientService.getIngredientsOfRecipe(recipeId).subscribe({
      next: data => {
        this.ingredientsOfRecipe = data;
      },
      error: error => {
        this.displayErrorMessage(error);
      }
    });
  }

  // Ingredients dürfen erst gelöscht werden wenn der Update des Rezeptes durchgeführt wird, deshalb werden erstmals die ID's gesammelt
  deleteIngredientQueue(ingredient: Ingredient) {
    const foundIngredient: Ingredient | undefined = this.ingredientsOfRecipe?.find(i => i.id == ingredient.id);
    if (foundIngredient){
      this.deleteIngredientsQueue.push(ingredient.id!)
    }
  }

  private displayErrorMessage(error: any) {
    console.error('Fehler:', error);
    this.messageService.add({ severity: 'error', summary: 'Fehler', detail: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.' });
  }
}
