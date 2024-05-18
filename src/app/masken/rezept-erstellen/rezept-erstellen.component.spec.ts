import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RezeptErstellenComponent} from './rezept-erstellen.component';
import {MessageService} from "primeng/api";
import {IngredientService} from "../../services/ingredient.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RecipeService} from "../../services/recipe.service";
import {of} from "rxjs";

describe('RezeptErstellenComponent', () => {
  let component: RezeptErstellenComponent;
  let messageService: MessageService;
  let ingredientService: IngredientService;
  let recipeService: RecipeService;
  let userService: UserService;
  let router: Router;
  let fixture: ComponentFixture<RezeptErstellenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezeptErstellenComponent, HttpClientTestingModule],
      providers: [MessageService, IngredientService, UserService, Router]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RezeptErstellenComponent);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
    ingredientService = TestBed.inject(IngredientService);
    recipeService = TestBed.inject(RecipeService);
    userService = TestBed.inject(UserService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create recipe', () => {
    // Arrange
    spyOn(messageService, 'add')
    const recipeWithIngredients = {
      recipe: {
        id: 1,
        name: 'Test',
        preparation: 'Test preparation',
        image: 'Test image',
        rating: 5,
        visibility: true,
        showAuthor: true,
      },
      ingredientsOfRecipe: [
        {
          id: 1,
          name: 'Test ingredient',
          amount: 1,
          unit: 'Test unit'
        }
      ]
    };
    spyOn(recipeService, 'saveRecipe').and.returnValue(of({
      id: 1,
      name: 'Test',
      preparation: 'Test preparation',
      image: 'Test image',
      rating: 5,
      visibility: true,
      showAuthor: true
    }));

    // Act
    component.createRecipe(recipeWithIngredients);

    // Assert
    expect(component.earnedXP).toBe(10);
    expect(recipeService.saveRecipe).toHaveBeenCalled();
    expect(messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Erfolgreich',
      detail: 'Rezept wurde erfolgreich erstellt'
    });
  });

  // it('should display error message', () => {
  //   // Arrange
  //   spyOn(messageService, 'add');
  //   const recipeWithIngredients = {
  //     recipe: {
  //       id: 1,
  //       name: 'Test',
  //       preparation: 'Test preparation',
  //       image: 'Test image',
  //       rating: 5,
  //       visibility: true,
  //       showAuthor: true,
  //     }, ingredientsOfRecipe: [
  //       {
  //         id: 1,
  //         name: 'Test ingredient',
  //         amount: 1,
  //         unit: 'Test unit'
  //       }
  //     ]
  //
  //   };
  //   spyOn(recipeService, 'saveRecipe').and.returnValue(of({
  //     id: 1,
  //     name: 'Test',
  //     preparation: 'Test preparation',
  //     image: 'Test image',
  //     rating: 5,
  //     visibility: true,
  //     showAuthor: true
  //   }));
  //
  //   // Act
  //   component.createRecipe(recipeWithIngredients);
  //
  //   // Assert
  //   expect(messageService.add).toHaveBeenCalledWith({
  //     severity: 'error',
  //     summary: 'Fehler',
  //     detail: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
  //   });
  // });
});
