import { Component, OnInit } from '@angular/core';
import { RezeptPanelComponent } from "../../shared-components/rezept-panel/rezept-panel.component";
import { Recipe } from "../../models/recipe";
import { RecipeService } from "../../services/recipe.service";

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

  constructor(private recipeService: RecipeService) {}

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
    this.recipes = this.recipes.filter(r => r.id != recipe.id);
    this.recipeService.userClickedRecipeAsFav(recipe).subscribe()
  }
}
