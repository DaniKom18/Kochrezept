import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {ProgressBarModule} from "primeng/progressbar";
import {User} from "../../models/user";

@Component({
  selector: 'app-mein-profil',
  standalone: true,
  imports: [
    ButtonModule,
    ProgressBarModule
  ],
  templateUrl: './mein-profil.component.html',
  styleUrl: './mein-profil.component.css'
})
export class MeinProfilComponent {
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
}
