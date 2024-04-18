import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {ProgressBarModule} from "primeng/progressbar";
import {User} from "../../models/user";
import {InputTextModule} from "primeng/inputtext";
import {AutoFocusModule} from "primeng/autofocus";

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
export class MeinProfilComponent {

  editUser:boolean = false;
  editEmail:boolean = false;
  editPassword:boolean = false;

  user:User = {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    xp: 75,
    level: 5,
    countOfUploadedRecipes: 23,
    countOfFavoriteRecipes: 13
  };

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
}
