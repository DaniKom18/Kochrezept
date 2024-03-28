import {Component, OnInit} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";

interface Recipe{
  name:string,
  description:string,
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
    FormsModule
  ],
  templateUrl: './rezept-erstellen.component.html',
  styleUrl: './rezept-erstellen.component.css'
})
export class RezeptErstellenComponent implements OnInit{

  currentSection: string = "info"

  recipe: Recipe = {name: "", description: "", image: "", ingredients: []}

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
      if (this.recipe.name && this.recipe.description){
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

  addIngredient() {

  }

  removeIngredient(i: string) {

  }

}
