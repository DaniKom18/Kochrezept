import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptBearbeitenComponent } from './rezept-bearbeiten.component';
import {of, throwError} from "rxjs";
import {Recipe} from "../../models/recipe";
import {Ingredient} from "../../models/ingredient";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MessageService} from "primeng/api";
import {RecipeWithIngredients} from "../../models/recipeWithIngredients";
import {RecipeService} from "../../services/recipe.service";
import {Router} from "@angular/router";
import {IngredientService} from "../../services/ingredient.service";

describe('RezeptBearbeitenComponent', () => {
  let component: RezeptBearbeitenComponent;
  let fixture: ComponentFixture<RezeptBearbeitenComponent>;
  let router: Router;
  let recipeService: RecipeService;
  let ingredientService: IngredientService;
  let messageService: MessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezeptBearbeitenComponent, HttpClientTestingModule],
      providers: [MessageService, Router]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RezeptBearbeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    recipeService = TestBed.inject(RecipeService);
    ingredientService = TestBed.inject(IngredientService);
    messageService = TestBed.inject(MessageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve recipe and ingredients on initialization', () => {
    // Arrange
    const recipeId = 1;
    const recipe: Recipe = {
      id: 1,
      name: "Recipe Name",
      preparation: "Recipe Preparation",
      image: "recipe.jpg",
      rating: 5,
      visibility: true,
      showAuthor: true,
      author: "John Doe"
    };
    const ingredients: Ingredient[] = [
      {
        id: 1,
        name: "Ingredient 1",
        quantity: 100,
        measure: "g"
      },
      {
        id: 2,
        name: "Ingredient 2",
        quantity: 2,
        measure: "pcs"
      }
    ];

    spyOn(recipeService, 'getRecipeById').and.returnValue(of(recipe));
    spyOn(ingredientService, 'getIngredientsOfRecipe').and.returnValue(of(ingredients))

    // Act
    component.id = recipeId;
    component.ngOnInit();

    // Assert
    expect(recipeService.getRecipeById).toHaveBeenCalledWith(recipeId);
    expect(ingredientService.getIngredientsOfRecipe).toHaveBeenCalledWith(recipeId);
    expect(component.recipe).toEqual(recipe);
    expect(component.ingredientsOfRecipe).toEqual(ingredients);
  });

  it('should update the recipe and save it to the database', () => {
    // Arrange
    const recipe: Recipe = {
      id: 1,
      name: "Spaghetti Bolognese",
      preparation: "Cook spaghetti and prepare Bolognese sauce",
      image: "spaghetti.jpg",
      rating: 4,
      visibility: true,
      showAuthor: true,
      author: "John Doe"
    };

    const ingredients: Ingredient[] = [
      { id: 1, name: "Spaghetti", quantity: 200, measure: "mg"},
      { id: 2, name: "Ground beef", quantity: 500, measure: "mg"},
      { id: 3, name: "Tomato sauce", quantity: 400, measure: "g" },
      { id: 4, name: "Onion", quantity: 1, measure: "mg" },
      { id: 5, name: "Garlic", quantity: 2, measure: "mg" }
    ];

    const data: RecipeWithIngredients = {
      recipe: recipe,
      ingredientsOfRecipe: ingredients
    };

    spyOn(recipeService, 'updateRecipe').and.returnValue(of(recipe));
    spyOn(ingredientService, 'saveIngredients').and.returnValue(of(ingredients))
    spyOn(messageService, 'add')
    spyOn(router, 'navigate')

    // Act
    component.updateRecipe(data);

    // Assert
    expect(recipeService.updateRecipe).toHaveBeenCalledWith(recipe);
    expect(ingredientService.saveIngredients).toHaveBeenCalledWith(ingredients, recipe.id);
    expect(messageService.add).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/meine-rezepte']);
  });

  it('should save ingredients to a recipe when ingredients array is not empty', () => {
    const ingredients: Ingredient[] = [
      { name: "Salt", quantity: 1, measure: "teaspoon" },
      { name: "Pepper", quantity: 1, measure: "teaspoon" },
      { name: "Garlic powder", quantity: 1, measure: "teaspoon" }
    ];
    const recipeId: number = 123;

    spyOn(ingredientService, 'saveIngredients').and.returnValue(of(ingredients))
    component.saveIngredients(ingredients, recipeId);

    expect(ingredientService.saveIngredients).toHaveBeenCalledWith(ingredients, recipeId);
  });

  it('should handle errors thrown by deleteIngredient method', () => {
    spyOn(ingredientService, 'deleteIngredient').and.returnValue(of());
    component.recipeId = 1;
    component.deleteIngredientsQueue =[2, 3, 4];
    component.removeIngredients();

    expect(ingredientService.deleteIngredient).toHaveBeenCalledTimes(3);
  });

  it('should add the ID of the ingredient to the deleteIngredientsQueue when it exists in the ingredientsOfRecipe array', () => {
    // Arrange
    const ingredient: Ingredient = { id: 1, name: 'Ingredient 1' };
    component.ingredientsOfRecipe = [{ id: 1, name: 'Ingredient 1' }, { id: 2, name: 'Ingredient 2' }];

    // Act
    component.deleteIngredientQueue(ingredient);

    // Assert
    expect(component.deleteIngredientsQueue).toContain(1);
  });
});
