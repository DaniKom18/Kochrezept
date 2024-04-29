import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {ProgressBarModule} from "primeng/progressbar";
import {User} from "../../models/user";
import {InputTextModule} from "primeng/inputtext";
import {AutoFocusModule} from "primeng/autofocus";
import {UserService} from "../../services/user.service";
import {userSession} from "../../../environments/user-uuid";
import {RecipeService} from "../../services/recipe.service";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

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

  protected readonly userSession = userSession;
  user:User = {};
  countOfUserRecipes?: number;

  constructor(private userservice: UserService,
              private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.userservice.waitForUserSession().then(() => {
      this.loadUserProfile();
      this.loadUserRecipes();
    });
  }

  private loadUserProfile() {
    console.log(userSession.id)
    this.userservice.getUserByUuid(userSession.id).subscribe(
      data => {
        this.user = {
          username: data.username,
          xp: data.xp,
          level: data.level,
        }
      }
    )
  }

  private loadUserRecipes() {
    this.recipeService.getRecipesOfUser().subscribe(
      data => {
        this.countOfUserRecipes = data.length
      }
    )
  }

  onDelete() {
    // Logik zum Löschen des Benutzerkontos
    if (confirm("Are you sure you want to delete your account? This cannot be undone.")) {
      // Account löschen Logik
    }
  }


}
