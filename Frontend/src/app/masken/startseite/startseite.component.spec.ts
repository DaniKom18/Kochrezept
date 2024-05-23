import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StartseiteComponent} from './startseite.component';
import {RecipeService} from "../../services/recipe.service";
import {UserService} from "../../services/user.service";
import {MessageService} from "primeng/api";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('StartseiteComponent', () => {
  let component: StartseiteComponent;
  let fixture: ComponentFixture<StartseiteComponent>;

  let recipeService: RecipeService;
  let userService: UserService;
  let messageService: MessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartseiteComponent, HttpClientTestingModule],
      providers: [
        {provide: RecipeService, useClass: RecipeService},
        {provide: UserService, useClass: UserService},
        {provide: MessageService, useClass: MessageService}]
    })
      .compileComponents();

    recipeService = TestBed.inject(RecipeService);
    userService = TestBed.inject(UserService);
    messageService = TestBed.inject(MessageService);

    fixture = TestBed.createComponent(StartseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load recipes', () => {
    userService.waitForUserSession().then(() => {
      spyOn(recipeService, 'getAllHomePageRecipes').and.callThrough();
      component.getAllRecipes();
      expect(recipeService.getAllHomePageRecipes).toHaveBeenCalled();
    });
  });

  it('should add recipe to favorites', () => {
    spyOn(messageService, 'add').and.callThrough();
    spyOn(recipeService, 'userClickedRecipeAsFav').and.callThrough();
    const recipe = {
      id: 1,
      name: 'Test',
      ingredients: [],
      preparation: 'Test',
      image: 'Test',
      rating: 1,
      visibility: true,
      showAuthor: true,
      author: 'Test'
    };
    component.favEvent(recipe);
    expect(messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Erfolgreich',
      detail: 'Rezept wurde erfolgreich zu deinen Favoriten hinzugefügt'
    });
    expect(recipeService.userClickedRecipeAsFav).toHaveBeenCalled();
  });

  it('should filter recipes', () => {
    const recipe = {
      id: 1,
      name: 'Test',
      ingredients: [],
      preparation: 'Test',
      image: 'Test',
      rating: 1,
      visibility: true,
      showAuthor: true,
      author: 'Test'
    };

    component.allRecipes = [recipe];
    component.filteredRecipes = [recipe];
    component.search = 'Test';
    component.ExecuteSearchOnInput(component.search);

    expect(component.filteredRecipes).toEqual([recipe]);
    component.search = 'Test2';
    component.ExecuteSearchOnInput(component.search);
    expect(component.filteredRecipes).toEqual([]);

    component.search = '';
    component.ExecuteSearchOnInput(component.search);
    expect(component.filteredRecipes).toEqual([recipe]);
  });
});
