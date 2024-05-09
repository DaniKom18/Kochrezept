import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RezeptVerwaltungComponent} from './rezept-verwaltung.component';
import {MessageService} from "primeng/api";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('RezeptVerwaltungComponent', () => {
  let component: RezeptVerwaltungComponent;
  let messageService: MessageService;
  let fixture: ComponentFixture<RezeptVerwaltungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezeptVerwaltungComponent, HttpClientTestingModule],
      providers: [MessageService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RezeptVerwaltungComponent);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add ingredient', () => {
    const ingredient = {
      name: "TestIngredient",
      quantity: 100,
      measure: "g"
    }
    component.addIngredient(ingredient);
    expect(component.ingredientsOfRecipe).toContain(ingredient);
  });

  it('should remove ingredient', () => {
    const ingredient = {
      name: "TestIngredient",
      quantity: 100,
      measure: "g"
    }
    component.title = "Bearbeiten";
    component.addIngredient(ingredient);
    component.removeIngredient(ingredient);
    expect(component.ingredientsOfRecipe).not.toContain(ingredient);
  });

  it('should save recipe', () => {
    const saveSpy = spyOn(component.saveRecipe, 'emit');
    const recipe = {
      id: 1,
      name: "TestRecipe",
      rating: 5,
      preparation: "TestPreparation",
      image: "TestImage",
      showAuthor: false,
      visibility: false
    }
    const ingredient = {
      name: "TestIngredient",
      quantity: 100,
      measure: "g"
    }
    component.addIngredient(ingredient);
    component.save(recipe, component.ingredientsOfRecipe);
    expect(saveSpy).toHaveBeenCalled();
  });

  it('should not save image', () => {
    const saveImageSpy = spyOn(component, 'saveImage');
    component.saveImage('');
    expect(saveImageSpy).toHaveBeenCalled();
    expect(component.recipe.image).toEqual('');
  });

  it('should display error message for needing a recipe name', () => {
    const messageServiceSpy = spyOn(messageService, 'add');
    component.save({id: 0, name: "", rating: 0, preparation: "", image: "", showAuthor: false, visibility: false}, []);
    expect(messageServiceSpy).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Fehler',
      detail: 'Der Rezeptname ist erforderlich'
    });
  });

  it('should display error message for needing preparation information', () => {
    const messageServiceSpy = spyOn(messageService, 'add');
    component.save({
      id: 0,
      name: "TestRecipe",
      rating: 0,
      preparation: "",
      image: "",
      showAuthor: false,
      visibility: false
    }, []);
    expect(messageServiceSpy).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Fehler',
      detail: 'Die Zubereitungsinformationen sind erforderlich'
    });
  });

  it('should return false for invalid ingredient', () => {
    const ingredient = {
      name: "TestIngredient",
      quantity: 100,
      measure: ""
    }
    expect(component.isIngredientValid(ingredient)).toBeFalsy();
  });
});
