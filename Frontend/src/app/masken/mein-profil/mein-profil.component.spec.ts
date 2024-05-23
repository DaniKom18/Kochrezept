import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeinProfilComponent } from './mein-profil.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";
import {userSession} from "../../../environments/user-uuid";
import {User} from "../../models/user";
import {Recipe} from "../../models/recipe";

describe('MeinProfilComponent', () => {
  let component: MeinProfilComponent;
  let fixture: ComponentFixture<MeinProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeinProfilComponent, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MeinProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component successfully', async () => {
    // Arrange
    const userServiceMock = jasmine.createSpyObj('UserService', ['waitForUserSession', 'getUserByUuid']);
    userServiceMock.waitForUserSession.and.returnValue(Promise.resolve());
    const user: User = { username: 'testUser', xp: 100, level: 2 };
    userServiceMock.getUserByUuid.and.returnValue(of(user));

    const recipeServiceMock = jasmine.createSpyObj('RecipeService', ['getRecipesOfUser']);
    recipeServiceMock.getRecipesOfUser.and.returnValue(of([]));

    const meinProfilComponent = new MeinProfilComponent(userServiceMock, recipeServiceMock);

    // Act
    await meinProfilComponent.ngOnInit(); // Verwende async/await, um ngOnInit korrekt zu testen

    // Assert
    expect(userServiceMock.waitForUserSession).toHaveBeenCalled();
    expect(userServiceMock.getUserByUuid).toHaveBeenCalledWith(userSession.id);
    expect(recipeServiceMock.getRecipesOfUser).toHaveBeenCalled();
  });

  it('should load user profile successfully', () => {
    // Arrange
    const userServiceMock = jasmine.createSpyObj('UserService', ['getUserByUuid']);
    const recipeServiceMock = jasmine.createSpyObj('RecipeService', ['getRecipesOfUser']);

    // Erstelle ein simuliertes Datenobjekt, das von `getUserByUuid` zurückgegeben wird
    const mockUserData: User  = {
      username: 'testUser',
      xp: 100,
      level: 2
    };
    userServiceMock.getUserByUuid.and.returnValue(of(mockUserData));

    const meinProfilComponent = new MeinProfilComponent(userServiceMock, recipeServiceMock);

    // Act
    meinProfilComponent.loadUserProfile();

    // Assert
    // Überprüfe, ob `getUserByUuid` aufgerufen wurde
    expect(userServiceMock.getUserByUuid).toHaveBeenCalledWith(userSession.id);
    // Überprüfe, ob die Komponente die Daten korrekt gespeichert hat
    expect(meinProfilComponent.user.username).toBe('testUser');
    expect(meinProfilComponent.user.xp).toBe(100);
    expect(meinProfilComponent.user.level).toBe(2);
  });

  it('should load user recipes successfully', () => {
    // Arrange
    const userServiceMock = jasmine.createSpyObj('UserService', ['getUserByUuid']);
    const recipeServiceMock = jasmine.createSpyObj('RecipeService', ['getRecipesOfUser']);

    // Erstelle eine simulierte Datenliste, die von `getRecipesOfUser` zurückgegeben wird
    const mockRecipeData: Recipe[] = [
      {
        id: 1, name: 'Recipe 1',
        preparation: 'test',
        image: 'test.png',
        rating: 1,
        visibility: false,
        showAuthor: true
      },
      {
        id: 2, name: 'Recipe 2',
        preparation: 'test',
        image: 'test.png',
        rating: 3,
        visibility: true,
        showAuthor: false
      }
    ];
    recipeServiceMock.getRecipesOfUser.and.returnValue(of(mockRecipeData));

    const meinProfilComponent = new MeinProfilComponent(userServiceMock, recipeServiceMock);

    // Act
    meinProfilComponent.loadUserRecipes();

    // Assert
    // Überprüfe, ob `getRecipesOfUser` aufgerufen wurde
    expect(recipeServiceMock.getRecipesOfUser).toHaveBeenCalled();
    // Überprüfe, ob die Anzahl der Rezepte korrekt gespeichert wurde
    expect(meinProfilComponent.countOfUserRecipes).toBe(mockRecipeData.length);
  });
});
