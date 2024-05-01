import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadComponent} from "../../masken/rezept-erstellen/file-upload/file-upload.component";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {Recipe} from "../../models/recipe";
import {Ingredient} from "../../models/ingredient";
import {RecipeWithIngredients} from "../../models/recipeWithIngredients";
import {IngredientService} from "../../services/ingredient.service";
import {RouterLink} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-rezept-verwaltung',
  standalone: true,
  imports: [
    ButtonModule,
    DropdownModule,
    FileUploadComponent,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ScrollPanelModule,
    RouterLink
  ],
  templateUrl: './rezept-verwaltung.component.html',
  styleUrl: './rezept-verwaltung.component.css'
})
export class RezeptVerwaltungComponent implements OnInit{

  @Input({ required: true }) title!: string
  @Input() recipe!: Recipe;
  @Input() ingredientsOfRecipe!: Ingredient[];
  @Output() saveRecipe = new EventEmitter<RecipeWithIngredients>();
  measures: string[] = ["mg", "g", "ml", "L", "TL", "EL", "Stück"];

  // Ingredient Creation Section
  createIngredient: Ingredient = {
    name: "",
    quantity: undefined,
    measure: ""
  }


  constructor(private ingredientService: IngredientService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    if (!this.recipe){
      this.recipe = {id: 0, name: "",rating:0, preparation: "", image: "", showAuthor: false, visibility: false}
      this.ingredientsOfRecipe = [];
    }
  }

  addIngredient(ingredient: Ingredient) {
    if (!this.isIngredientValid(ingredient)) return
    this.ingredientsOfRecipe.push(ingredient)
    this.createIngredient = this.resetIngredient()
  }

  isIngredientValid(ingredient: Ingredient){
    return (ingredient.name && ingredient.measure && ingredient.quantity)
  }

  resetIngredient(){
    return <Ingredient> {
      name: "",
      quantity: undefined,
      measure: ""
    }
  }

  removeIngredient(ingredient: Ingredient) {
    this.ingredientsOfRecipe = this.ingredientsOfRecipe.filter((i: Ingredient) => (i !== ingredient))
    if (this.title.includes("Bearbeiten")){
      this.ingredientService.deleteIngredient(ingredient.id!).subscribe();
    }
  }


  save(recipe: Recipe, ingredientsOfRecipe: Ingredient[]) {
    if (!this.isRecipeValid(recipe, ingredientsOfRecipe)) return;
    const combinedData: RecipeWithIngredients = {recipe, ingredientsOfRecipe}
    this.saveRecipe.emit(combinedData)
  }

  private isRecipeValid(recipe: Recipe, ingredientsOfRecipe: Ingredient[]) {

    if (!recipe.name || recipe.name.trim() === '') {
      this.messageService.add({ severity: 'error', summary: 'Fehler', detail: 'Der Rezeptname ist erforderlich' });
      return false;
    }

    if (!recipe.preparation || recipe.preparation.trim() === '') {
      this.messageService.add({ severity: 'error', summary: 'Fehler', detail: 'Die Zubereitungsinformationen sind erforderlich' });
      return false;
    }

    if (!ingredientsOfRecipe|| ingredientsOfRecipe.length === 0) {
      this.messageService.add({ severity: 'error', summary: 'Fehler', detail: 'Mindestens eine Zutat ist erforderlich' });
      return false;
    }

    if (!recipe.image || recipe.image.trim() === '') {
      this.messageService.add({ severity: 'error', summary: 'Fehler', detail: 'Das Bild des Rezepts ist erforderlich' });
      return false;
    }

    return true
  }

  saveImage($event: string) {
    // Dummy Pic wird hinzugefügt, Bilder vom User aktuell noch ignoriert
    this.recipe.image = "https://picsum.photos/id/237/1900"
  }
}
