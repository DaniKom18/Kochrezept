import {Component, OnInit} from '@angular/core';
import {MultiSelectModule} from "primeng/multiselect";
import {RezeptPanelComponent} from "../../shared-components/rezept-panel/rezept-panel.component";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {Ingredient} from "../../models/ingredient";
import {Recipe} from "../../models/recipe";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-startseite',
  standalone: true,
  imports: [
    MultiSelectModule,
    RezeptPanelComponent,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './startseite.component.html',
  styleUrl: './startseite.component.css'
})
export class StartseiteComponent implements OnInit {


  constructor(private recipeService: RecipeService) {
  }

  recipes: Recipe[] = [];
  ingredients!: Ingredient[];
  selectedIngredient!: Ingredient[];

  ngOnInit() {
    this.ingredients = [
      {name: 'Salz'},
      {name: 'Zucker'},
      {name: 'Mehl'},
      {name: 'Eier'},
      {name: 'Paprika'}
    ];
    this.getAllRecipes();
  }

  search: string | undefined = "";

  private getAllRecipes() {
    this.recipeService.getAllHomePageRecipes().subscribe(
      data =>  {
        this.recipes = data
      }
    )
  }
}
