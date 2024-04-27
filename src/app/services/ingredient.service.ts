import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Ingredient} from "../models/ingredient";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  baseUrl: string = environment.baseUrl + "/api"

  headers = new HttpHeaders({'Content-Type': 'application/json', 'accept': 'application/json'});
  options = { headers: this.headers };

  constructor(private httpClient: HttpClient) { }

  getIngredientsOfRecipe(recipeId: number) {
    const url = this.baseUrl + "/recipe/" + recipeId + "/ingredients"
    return this.httpClient.get<Ingredient[]>(url)
  }

  deleteIngredient(id: number) {
    const url = this.baseUrl + "/ingredients/" + id;
    return this.httpClient.delete(url)
  }

  saveIngredients(ingredientsOfRecipe: Ingredient[], recipeId: number) {
    console.log("Save Ingredients On Recipe:=" + recipeId )
    const url = this.baseUrl + "/recipe/" + recipeId + "/ingredients"
    return this.httpClient.post(url, ingredientsOfRecipe, this.options)
  }
}
