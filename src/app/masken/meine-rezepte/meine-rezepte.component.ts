import {Component, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {PaginatorModule} from "primeng/paginator";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Recipe} from "../../models/recipe";
import {InputSwitchModule} from "primeng/inputswitch";
import {RecipeService} from "../../services/recipe.service";


@Component({
  selector: 'app-meine-rezepte',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    PaginatorModule,
    InputTextModule,
    RippleModule,
    NgClass,
    RouterLink,
    InputSwitchModule
  ],
  templateUrl: './meine-rezepte.component.html',
  styleUrl: './meine-rezepte.component.css'
})
export class MeineRezepteComponent implements OnInit{


  constructor(private recipeService: RecipeService) {
  }

  recipes:Recipe[] = []

  ngOnInit(): void {
    this.recipeService.getRecipesOfUser().subscribe(
      data => {
        this.recipes = data
        console.log(data)
      }
    )
  }

  toggleVisibility(recipe: Recipe) {
    this.recipeService.updateRecipe(recipe).subscribe()
  }

  toggleIsAnonymous(recipe: Recipe) {
    this.recipeService.updateRecipe(recipe).subscribe()
  }


  deleteProduct(recipe: Recipe) {
      this.recipeService.deleteRecipe(recipe.id)
      this.recipes = this.recipes.filter(x => x.id != recipe.id)
  }
}
