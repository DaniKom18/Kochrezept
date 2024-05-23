import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Feedback} from "../models/feedback";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseUrl: string = environment.baseUrl + "/api"

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private options = {headers: this.headers};

  constructor(private httpClient: HttpClient) {
  }

  getAllFeedbackOfRecipe(recipeId: number) {
    const url = this.baseUrl + "/recipe/" + recipeId + "/feedback"
    return this.httpClient.get<Feedback[]>(url)
  }

  saveFeedback(feedbackOfRecipe: Feedback, recipeId: number) {
    console.log("Save Feedback On Recipe:=" + recipeId)
    const url = this.baseUrl + "/recipe/" + recipeId + "/feedback"
    return this.httpClient.post<Feedback>(url, feedbackOfRecipe, this.options)
  }

  updateFeedback(feedbackOfRecipe: Feedback, recipeId: number) {
    console.log("Update Feedback On Recipe:=" + feedbackOfRecipe.id)
    const url = this.baseUrl + "/recipe/" + recipeId + "/feedback/" + feedbackOfRecipe.id
    return this.httpClient.put<Feedback>(url, feedbackOfRecipe, this.options)
  }
}
