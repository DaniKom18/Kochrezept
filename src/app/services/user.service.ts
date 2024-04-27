import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../models/user";
import {Recipe} from "../models/recipe";
import {userSession} from "../../environments/user-uuid";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = environment.baseUrl + "/api/users"
  headers = new HttpHeaders({'Content-Type': 'application/json'});
  options = { headers: this.headers };

  constructor(private httpClient: HttpClient) { }

  getUserByUuid(uuid: string) {
    const url: string = `${this.baseUrl}/${uuid}`;
    return this.httpClient.get<User>(url)
  }

  saveUser(user: User) {
    const url: string = this.baseUrl;
    return this.httpClient.post<User>(url, user)
  }

  getLeaderboard() {
    const url: string = this.baseUrl + "/leaderboard";
    return this.httpClient.get<User[]>(url)
  }
}
