import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {ProgressBarModule} from "primeng/progressbar";
import {User} from "../../models/user";
import {InputTextModule} from "primeng/inputtext";
import {AutoFocusModule} from "primeng/autofocus";
import {UserService} from "../../services/user.service";
import {userSession} from "../../../environments/user-uuid";

@Component({
  selector: 'app-mein-profil',
  standalone: true,
  imports: [
    ButtonModule,
    ProgressBarModule,
    InputTextModule,
    AutoFocusModule
  ],
  templateUrl: './mein-profil.component.html',
  styleUrl: './mein-profil.component.css'
})
export class MeinProfilComponent implements OnInit{

  user:User = {};
  editUser:boolean = false;
  editEmail:boolean = false;
  editPassword:boolean = false;

  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.waitForUserSession().then(() => {
      this.loadUserProfile();
    });
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

  async loadUserProfile() {
    console.log(userSession.id)
    this.userservice.getUserByUuid(userSession.id).subscribe(
      data => {
        this.user = {
          username: data.username,
          xp: data.xp,
          level: data.level,
          myRecipes: data.myRecipes,
          favRecipes: data.favRecipes
        }
      }
    )

  }




  onEdit() {
    // Logik zum Bearbeiten der Benutzerdaten
  }

  onDelete() {
    // Logik zum Löschen des Benutzerkontos
    if (confirm("Are you sure you want to delete your account? This cannot be undone.")) {
      // Account löschen Logik
    }
  }

  toggleEditPassword() {
    this.editPassword = !this.editPassword
  }

  toggleEditEmail() {
    this.editEmail = !this.editEmail
  }

  toggleEditUsername() {
    this.editUser = !this.editUser
  }

  protected readonly userSession = userSession;
}
