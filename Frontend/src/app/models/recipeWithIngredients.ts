import {Recipe} from "./recipe";
import {Ingredient} from "./ingredient";

export interface RecipeWithIngredients {
  recipe: Recipe
  ingredientsOfRecipe: Ingredient[]
}
