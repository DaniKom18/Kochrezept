import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineFavoritenComponent } from './meine-favoriten.component';
import {of} from "rxjs";
import {MessageService} from "primeng/api";
import {Recipe} from "../../models/recipe";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RecipeService} from "../../services/recipe.service";

describe('MeineFavoritenComponent', () => {
  let component: MeineFavoritenComponent;
  let fixture: ComponentFixture<MeineFavoritenComponent>;
  let messageService: MessageService
  let recipeService: RecipeService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeineFavoritenComponent, HttpClientTestingModule],
      providers: [MessageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeineFavoritenComponent);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
    recipeService = TestBed.inject(RecipeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call showFavoriteRecipes method on initialization', () => {
    // Arrange
    const showFavoriteRecipesSpy = spyOn(component, 'showFavoriteRecipes'); // Erstelle einen Spion für die showFavoriteRecipes-Methode

    // Act
    component.ngOnInit();

    // Assert
    expect(showFavoriteRecipesSpy).toHaveBeenCalled()
  });

  it('should retrieve favorite recipes and assign them to the recipes array', () => {
    // Arrange
    const recipeServiceMock = jasmine.createSpyObj('RecipeService', ['getAllFavoritesRecipes']);
    const data: Recipe[] = [{id:1, author:"Joe", showAuthor:false, visibility:true, image:"image.jpg", name:"Keloks", rating:3.0, preparation:"Testing Prep"}];
    recipeServiceMock.getAllFavoritesRecipes.and.returnValue(of(data));
    component.recipeService = recipeServiceMock; // Weise recipeServiceMock der Komponente zu

    // Act
    component.showFavoriteRecipes();
    // Assert
    expect(component.recipes).toEqual(data);
  });

  it('should remove recipe from favorite list and display success message when called with a valid recipe', () => {
    // Arrange
    const recipe: Recipe = {
      id: 1,
      name: 'Recipe 1',
      preparation: 'Preparation 1',
      image: 'image1.jpg',
      rating: 5,
      visibility: true,
      showAuthor: true,
      author: 'Author 1'
    };
    component.recipes = [recipe]
    spyOn(component.messageService, 'add');

    // Act
    component.favEvent(recipe);

    // Assert
    expect(component.messageService.add).toHaveBeenCalledWith({ severity: 'success', summary: 'Erfolgreich', detail: 'Rezept wurde erfolgreich aus deinen Favoriten entfernt' });
    expect(component.recipes).not.toContain(recipe);
  });
});
