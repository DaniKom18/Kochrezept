import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MeineRezepteComponent} from './meine-rezepte.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UserService} from "../../services/user.service";
import {of} from "rxjs";
import {Recipe} from "../../models/recipe";
import {RecipeService} from "../../services/recipe.service";

describe('MeineRezepteComponent', () => {
  let component: MeineRezepteComponent;
  let fixture: ComponentFixture<MeineRezepteComponent>;
  let userService: UserService
  let recipeService: RecipeService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeineRezepteComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeineRezepteComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService); // Initialisiere userService
    recipeService = TestBed.inject(RecipeService); // Initialisiere userService
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUserRecipes after user session is available', async () => {
    // Arrange
    const userServiceMock = spyOn(userService, "waitForUserSession").and.returnValue(Promise.resolve());
    const getUserRecipesSpy = spyOn(component, 'getUserRecipes');

    // Act
    await component.ngOnInit();

    // Assert
    expect(userServiceMock).toHaveBeenCalled();
    expect(getUserRecipesSpy).toHaveBeenCalled();
  });

  it('should retrieve recipes of the current user from the recipe service', () => {
    // Arrange
    const recipes: Recipe[] = [{id:1, author:"Joe", showAuthor:false, visibility:true, image:"image.jpg", name:"Keloks", rating:3.0, preparation:"Testing Prep"}];
    const recipeServiceMock = spyOn(recipeService, "getRecipesOfUser").and.returnValue(of(recipes))
    const meineRezepteComponent = new MeineRezepteComponent(recipeService, userService);

    // Act
    meineRezepteComponent.getUserRecipes();

    // Assert
    expect(recipeServiceMock).toHaveBeenCalled();
    expect(meineRezepteComponent.recipes).toEqual(recipes);
  });

  it('should delete the recipe from the list of recipes when the recipe exists', () => {
    // Arrange
    const recipeToBeDeleted: Recipe = {
      id: 1,
      name: 'Recipe 1',
      preparation: 'Preparation 1',
      image: 'image1.jpg',
      rating: 4,
      visibility: true,
      showAuthor: true,
      author: 'Author 1'
    };
    const recipeServiceSpy = spyOn(recipeService, 'deleteRecipe');
    component.recipes = [
      {
        id: 1,
        name: 'Recipe 1',
        preparation: 'Preparation 1',
        image: 'image1.jpg',
        rating: 4,
        visibility: true,
        showAuthor: true,
        author: 'Author 1'
      },
      {
        id: 2,
        name: 'Recipe 2',
        preparation: 'Preparation 2',
        image: 'image2.jpg',
        rating: 3,
        visibility: false,
        showAuthor: false
      }
    ];

    // Act
    component.deleteProduct(recipeToBeDeleted);

    // Assert
    expect(recipeServiceSpy).toHaveBeenCalledWith(recipeToBeDeleted.id);
    expect(component.recipes.length).toBe(1);
    expect(component.recipes[0].id).toBe(2);
  });
});
