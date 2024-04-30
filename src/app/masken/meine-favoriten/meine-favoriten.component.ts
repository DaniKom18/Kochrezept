import { Component, OnInit } from '@angular/core';
import { RezeptPanelComponent } from "../../shared-components/rezept-panel/rezept-panel.component";
import { Recipe } from "../../models/recipe";
import { RecipeService } from "../../services/recipe.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-meine-favoriten',
  standalone: true,
  imports: [
    RezeptPanelComponent
  ],
  templateUrl: './meine-favoriten.component.html',
  styleUrls: ['./meine-favoriten.component.css']
})
export class MeineFavoritenComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService,
              private messageService: MessageService) {}

  ngOnInit() {
    this.showFavoriteRecipes();
  }

  showFavoriteRecipes() {
    this.recipeService.getAllFavoritesRecipes().subscribe({
      next: (data: Recipe[]) => {
        this.recipes = data;
      },
    });
  }

  favEvent(recipe: Recipe) {
    this.messageService.add({ severity: 'success', summary: 'Erfolgreich', detail: 'Rezept wurde erfolgreich aus deinen Favoriten entfernt' });
    this.recipes = this.recipes.filter(r => r.id != recipe.id);
    this.recipeService.userClickedRecipeAsFav(recipe).subscribe()
  }
}
