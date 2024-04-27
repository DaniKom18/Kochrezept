import {Component, OnInit} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonModule} from "primeng/button";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {FileUploadModule} from "primeng/fileupload";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {RezeptVerwaltungComponent} from "../../shared-components/rezept-verwaltung/rezept-verwaltung.component";
import {RecipeService} from "../../services/recipe.service";
import {RecipeWithIngredients} from "../../models/recipeWithIngredients";
import {IngredientService} from "../../services/ingredient.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rezept-erstellen',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    InputTextareaModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    ScrollPanelModule,
    FileUploadModule,
    DropdownModule,
    FileUploadComponent,
    RezeptVerwaltungComponent
  ],
  templateUrl: './rezept-erstellen.component.html',
  styleUrl: './rezept-erstellen.component.css'
})
export class RezeptErstellenComponent{


  constructor(private recipeService: RecipeService,
              private ingredientService: IngredientService,
              private router: Router) {
  }

  createRecipe($data: RecipeWithIngredients) {
    this.recipeService.saveRecipe($data.recipe).subscribe(
      recipe => {
        this.router.navigate(['/meine-rezepte'])
        this.ingredientService.saveIngredients($data.ingredientsOfRecipe, recipe.id).subscribe();
      }
    );
  }
}
