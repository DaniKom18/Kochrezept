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
});
