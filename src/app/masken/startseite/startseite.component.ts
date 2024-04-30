import {Component, OnInit} from '@angular/core';
import {MultiSelectModule} from "primeng/multiselect";
import {RezeptPanelComponent} from "../../shared-components/rezept-panel/rezept-panel.component";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {Ingredient} from "../../models/ingredient";
import {Recipe} from "../../models/recipe";
import {RecipeService} from "../../services/recipe.service";
import {UserService} from "../../services/user.service";
import {MessageService} from "primeng/api";

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


  constructor(private recipeService: RecipeService,
              private userService: UserService,
              private messageService: MessageService) {
  }

  allRecipes: Recipe[] = []; // Behält alle Rezepte
  filteredRecipes: Recipe[] = [] // Verändert sich durch nutzung der Such- oder Filterfunktion
  search: string | undefined = "";

  ngOnInit() {
    this.userService.waitForUserSession().then(()=> {
      this.getAllRecipes();
    })
  }

  private getAllRecipes() {
    this.recipeService.getAllHomePageRecipes().subscribe(
      data =>  {
        this.allRecipes = data
        this.filteredRecipes = data
      }
    )
  }

  favEvent(recipe: Recipe) {
    this.messageService.add({ severity: 'success', summary: 'Erfolgreich', detail: 'Rezept wurde Erfolgreich zu deinen Favoriten hinzugefügt' });
    this.filteredRecipes = this.filteredRecipes.filter(r => r.id != recipe.id);
    this.recipeService.userClickedRecipeAsFav(recipe).subscribe()
  }

  ExecuteSearchOnInput(search: string | undefined) {
    if (!search){
      this.filteredRecipes = [...this.allRecipes]
    }else {
      this.filteredRecipes = this.allRecipes.filter(r => r.name.toLowerCase().includes(search.toLowerCase()))
    }
  }
}
