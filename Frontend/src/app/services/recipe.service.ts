import { Injectable } from '@angular/core';
import {Recipe} from "../models/recipe";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {userSession} from "../../environments/user-uuid";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl: string = environment.baseUrl + "/api"

  headers = new HttpHeaders({'Content-Type': 'application/json'});
  options = { headers: this.headers };

  constructor(private httpClient: HttpClient) { }

  saveRecipe(recipe: Recipe) {
    const url = this.baseUrl + "/user/" + userSession.id + "/recipes"
    return this.httpClient.post<Recipe>(url, recipe, this.options);
  }

  getRecipesOfUser() {
    const url = this.baseUrl + "/user/" + userSession.id + "/recipes"
    return this.httpClient.get<Recipe[]>(url);
  }

  getRecipeById(recipeId: number) {
    const url = this.baseUrl + "/recipes/" + recipeId
    return this.httpClient.get<Recipe>(url)
  }

  updateRecipe(recipe: Recipe) {
    const url = this.baseUrl + "/recipes/" + recipe.id
    return this.httpClient.put<Recipe>(url, recipe, this.options)
  }

  getAllHomePageRecipes() {
    const url = this.baseUrl + "/user/" + userSession.id + "/home/recipes"
    return this.httpClient.get<Recipe[]>(url);
  }

  getAllFavoritesRecipes() {
    const url = this.baseUrl + "/user/" + userSession.id + "/fav/recipes"
    return this.httpClient.get<Recipe[]>(url);
  }

  userClickedRecipeAsFav(recipe: Recipe) {
    const url = this.baseUrl + "/user/" + userSession.id + "/fav/recipes/" + recipe.id
    return this.httpClient.put<Recipe>(url, recipe, this.options)
  }

  deleteRecipe(recipeId: number) {
    const url = this.baseUrl + "/recipes/" + recipeId
    this.httpClient.delete(url).subscribe()
  }

}
