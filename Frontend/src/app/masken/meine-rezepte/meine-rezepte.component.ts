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
import {UserService} from "../../services/user.service";


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


  constructor(private recipeService: RecipeService,
              public userService: UserService) {
  }

  recipes:Recipe[] = []

  ngOnInit(): void {
    this.userService.waitForUserSession().then(()=> {
      this.getUserRecipes();
    })
  }

  public getUserRecipes() {
    this.recipeService.getRecipesOfUser().subscribe(
      data => {
        this.recipes = data
      }
    )
  }

  toggleVisibility(recipe: Recipe) {
    this.recipeService.updateRecipe(recipe).subscribe()
  }

  toggleShowAuthor(recipe: Recipe) {
    this.recipeService.updateRecipe(recipe).subscribe()
  }


  deleteProduct(recipe: Recipe) {
      this.recipeService.deleteRecipe(recipe.id)
      this.recipes = this.recipes.filter(x => x.id != recipe.id)
  }
}
