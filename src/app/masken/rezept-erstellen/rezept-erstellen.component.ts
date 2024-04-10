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
import {FileUploadComponent} from "./file-upload/file-upload.component";

interface Recipe{
  name:string,
  preparation:string,
  ingredients:Ingredients[],
  image:string,
}

interface Ingredients{
  name: string,
  quantity:number,
  measure:string
}

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
    FileUploadComponent
  ],
  templateUrl: './rezept-erstellen.component.html',
  styleUrl: './rezept-erstellen.component.css'
})
export class RezeptErstellenComponent implements OnInit{

  recipe: Recipe = {name: "", preparation: "", image: "", ingredients: []}

  // Ingredient Creation Section
  ingredientName: string = ""
  ingredientQuantity: number | null = null
  ingredientMeasure: string = ""

  measures: string[] | undefined;

  ngOnInit() {
    this.measures = ["mg", "g", "ml", "L", "TL", "EL", "Stück"]
  }

  addIngredient(name: string, quantity: number | null, measure:string) {
    if (!name || !quantity || !measure) return
    const ingredient: Ingredients = {name, quantity, measure}
    this.recipe.ingredients.push(ingredient)
    this.resetIngredientCreation()
  }
  resetIngredientCreation(){
    this.ingredientQuantity = null
    this.ingredientName = ""
    this.ingredientMeasure = ""
  }
  removeIngredient(ingredient: Ingredients) {
    this.recipe.ingredients = this.recipe.ingredients.filter((i: Ingredients) => (i !== ingredient))
  }

}
