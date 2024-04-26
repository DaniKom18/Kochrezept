import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./shared-components/navbar/navbar.component";
import {KeycloakService} from "keycloak-angular";
import {KeycloakProfile} from "keycloak-js";
import {UserService} from "./services/user.service";
import {userSession} from "../environments/user-uuid";
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(private readonly keycloak: KeycloakService,
              private userservice: UserService) {}

  // Erste Überprüfung ob der User exisitiert
  // Wenn nicht wird durch diesen Aufruf der User in der Datenbank angelegt
  public async ngOnInit() {
    this.isLoggedIn = this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
      userSession.id = this.userProfile.id!; // User id wird global gespeichert
      userSession.email = this.userProfile.email!; // Email id wird global gespeichert

      const user: User = {
        id: this.userProfile.id!,
        username: this.userProfile.username!
      }

      // Falls user schon existiert wird er im Backend nicht nochmal gespeichert
      this.userservice.saveUser(user).subscribe(
        data => {
          console.log(data.id + " : " + data.username)
        }
      )
    }
  }
}
