import {Component, OnInit} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonModule} from "primeng/button";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {ScrollPanelModule} from "primeng/scrollpanel";

interface Recipe{
  name:string,
  preparation:string,
  ingredients:Ingredients[],
  image:string,
}

interface Ingredients{
  name: string,
  quantity:number
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
    ScrollPanelModule
  ],
  templateUrl: './rezept-erstellen.component.html',
  styleUrl: './rezept-erstellen.component.css'
})
export class RezeptErstellenComponent implements OnInit{

  currentSection: string = "info"
  recipe: Recipe = {name: "", preparation: "", image: "", ingredients: []}

  ingredientName: string = ""
  ingredientQuantity: number | null = null

  ngOnInit() {

  }

  previousSection() {
    if (this.currentSection === 'image') {
      this.currentSection = 'ingredients';
    } else if (this.currentSection === 'ingredients') {
      this.currentSection = 'info';
    }
  }

  nextSection() {
    if (this.currentSection === 'info') {
      if (this.recipe.name && this.recipe.preparation){
        this.currentSection = 'ingredients';
      }
    } else if (this.currentSection === 'ingredients') {
      if (this.recipe.ingredients.length > 0) {
        this.currentSection = 'image';
      }
    }
  }

  finishAddingRecipe() {
    // TODO
  }

  isFormValid() {
    // TODO
    return false;
  }

  addIngredient(ingredientName: string, ingredientQuantity: number | null) {
    const ingredient: Ingredients = {name: ingredientName, quantity: ingredientQuantity!}
    this.recipe.ingredients.push(ingredient)
  }

  removeIngredient(i: string) {

  }

}
