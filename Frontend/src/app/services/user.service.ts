import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../models/user";
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

  updateUser(xp: number) {
    const user : User = {xp, id:userSession.id}
    const url: string = `${this.baseUrl}/${userSession.id}`;
    return this.httpClient.put(url, user, this.options)
  }

  // Wenn man auf dem URL Pfad **/profil bleibt und die Seite Reloaded wird
  // Bevor die UUID von KeyCloak geliefert wird schon die Request gemacht
  // Um das Profil vom User zu bekommen, deshalb wird hier solange gewartet bis die ID da ist
  waitForUserSession(): Promise<void> {
    return new Promise((resolve) => {
      const checkId = setInterval(() => {
        if (userSession.id !== "") {
          clearInterval(checkId);
          resolve();
        }
      }, 100); // Überprüft alle 100 Millisekunden
    });
  }
}
