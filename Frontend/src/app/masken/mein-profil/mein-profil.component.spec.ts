import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeinProfilComponent } from './mein-profil.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";
import {userSession} from "../../../environments/user-uuid";

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
    userServiceMock.getUserByUuid.and.returnValue(of({ username: 'testUser', xp: 100, level: 2 }));

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

});
