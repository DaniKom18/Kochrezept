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


  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit() {
    if (!this.recipe){
      console.log("Es wurde kein Rezept mitgegeben, rezept wird initialisiert")
      this.recipe = {id: 0, name: "",rating:0, preparation: "", image: "", isAnonymous: false, visibility: false}
      this.ingredientsOfRecipe = [];
    }
  }

  addIngredient(ingredient: Ingredient) {
    if (!this.isIngredientValid(ingredient)) return
    this.ingredientsOfRecipe.push(ingredient)
    this.resetIngredientCreation()
  }

  isIngredientValid(ingredient: Ingredient){
    return (ingredient.name && ingredient.measure && ingredient.quantity)
  }

  resetIngredientCreation(){
    this.createIngredient = {
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
    if (!recipe) {
      console.error('Das Rezept ist leer.');
      return false;
    }

    if (!recipe.name || recipe.name.trim() === '') {
      console.error('Der Rezeptname ist erforderlich.');
      return false;
    }

    if (!recipe.preparation || recipe.preparation.trim() === '') {
      console.error('Die Zubereitungsinformationen sind erforderlich.');
      return false;
    }

    if (!ingredientsOfRecipe|| ingredientsOfRecipe.length === 0) {
      console.error('Mindestens eine Zutat ist erforderlich.');
      return false;
    }

    if (!recipe.image || recipe.image.trim() === '') {
      console.error('Das Bild des Rezepts ist erforderlich.');
      console.log(recipe.image)
      return false;
    }

    return true
  }

  saveImage($event: string) {
    this.recipe.image = $event;
  }
}
