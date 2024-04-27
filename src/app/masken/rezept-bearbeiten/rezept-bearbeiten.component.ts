import {Component, Input, OnInit} from '@angular/core';
import {RezeptVerwaltungComponent} from "../../shared-components/rezept-verwaltung/rezept-verwaltung.component";
import {Recipe} from "../../models/recipe";
import {Ingredient} from "../../models/ingredient";
import {RecipeService} from "../../services/recipe.service";
import {IngredientService} from "../../services/ingredient.service";
import {RecipeWithIngredients} from "../../models/recipeWithIngredients";
import {Router} from "@angular/router";

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


  constructor(private recipeService: RecipeService,
              private ingredientService: IngredientService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getRecipeById(this.recipeId);
    this.getIngredientsOfRecipe(this.recipeId)
  }

  //TODO
  // OnInit Get From Service the Recipe by recipeID and save it in recipe


  updateRecipe($data: RecipeWithIngredients) {
    this.recipeService.updateRecipe($data.recipe).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/meine-rezepte'])
      }
    );
    this.ingredientService.saveIngredients($data.ingredientsOfRecipe, $data.recipe.id).subscribe(
      data => {
      }
    );
  }

  private getRecipeById(recipeId: number) {
    this.recipeService.getRecipeById(recipeId).subscribe(
      data => {
        this.recipe = data
      }
    )
  }

  private getIngredientsOfRecipe(recipeId: number) {
    this.ingredientService.getIngredientsOfRecipe(recipeId).subscribe(
      data => {
        this.ingredientsOfRecipe = data
      }
    )
  }
}
