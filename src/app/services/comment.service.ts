import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Comment} from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl: string = environment.baseUrl + "/api"

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private options = {headers: this.headers};

  constructor(private httpClient: HttpClient) {
  }

  getAllCommentsOfFeedback(feedbackId: number) {
    const url = this.baseUrl + "/feedback/" + feedbackId + "/comments"
    console.log("Getting Feedback over this url: " + url)
    return this.httpClient.get<Comment[]>(url)
  }

  saveComment(commentOfFeedback: Comment, feedbackId: number) {
    console.log("Save Comment On Feedback:=" + feedbackId)
    const url = this.baseUrl + "/feedback/" + feedbackId + "/comments"
    return this.httpClient.post(url, commentOfFeedback, this.options)
  }
}
