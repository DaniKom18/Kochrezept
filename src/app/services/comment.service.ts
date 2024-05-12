import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Comment} from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl: string = environment.baseUrl + "/api"

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  options = {headers: this.headers};

  constructor(public httpClient: HttpClient) {
  }

  getAllCommentsOfFeedback(feedbackId: number) {
    const url = this.baseUrl + "/feedback/" + feedbackId + "/comments"
    console.log("Getting Feedback over this url: " + url)
    return this.httpClient.get<Comment[]>(url)
  }

  saveComment(commentOfFeedback: Comment, feedbackId: number) {
    console.log("Save Comment On Feedback:=" + feedbackId)
    const url = this.baseUrl + "/feedback/" + feedbackId + "/comments"
    return this.httpClient.post<Comment>(url, commentOfFeedback, this.options)
  }
}
