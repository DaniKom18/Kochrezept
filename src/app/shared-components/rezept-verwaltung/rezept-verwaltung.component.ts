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
        ScrollPanelModule
    ],
  templateUrl: './rezept-verwaltung.component.html',
  styleUrl: './rezept-verwaltung.component.css'
})
export class RezeptVerwaltungComponent implements OnInit{

  @Input({ required: true }) title!: string
  @Input() recipe!: Recipe;

  @Output() saveRecipe = new EventEmitter<Recipe>();

  // Ingredient Creation Section
  ingredientName: string = ""
  ingredientQuantity: number | null = null
  ingredientMeasure: string = ""

  measures: string[] | undefined;

  ngOnInit() {
    this.measures = ["mg", "g", "ml", "L", "TL", "EL", "Stück"]
    if (!this.recipe){
      console.log("Es wurde kein Rezept mitgegeben, rezept wird initialisiert")
      this.recipe = {id: 0, name: "",rating:0, preparation: "", image: "", ingredients: [], isAnonymous: false, visibility: false}
    }
  }

  addIngredient(name: string, quantity: number | null, measure:string) {
    if (!name || !quantity || !measure) return
    const ingredient: Ingredient = {name, quantity, measure}
    this.recipe.ingredients.push(ingredient)
    this.resetIngredientCreation()
  }
  resetIngredientCreation(){
    this.ingredientQuantity = null
    this.ingredientName = ""
    this.ingredientMeasure = ""
  }
  removeIngredient(ingredient: Ingredient) {
    this.recipe.ingredients = this.recipe.ingredients.filter((i: Ingredient) => (i !== ingredient))
  }


  save(recipe: Recipe) {
    if (!recipe) return; // Wenn Rezept Leer ist soll nichts passieren
    //TODO Rezept muss noch validiert auf vollständigkeit
    this.saveRecipe.emit(recipe)
  }
}
