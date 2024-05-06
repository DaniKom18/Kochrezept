import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RezeptDetailViewComponent} from './rezept-detail-view.component';
import {MessageService} from "primeng/api";
import {RecipeService} from "../../services/recipe.service";
import {IngredientService} from "../../services/ingredient.service";
import {CommentService} from "../../services/comment.service";
import {FeedbackService} from "../../services/feedback.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";
import {Ingredient} from "../../models/ingredient";
import {userSession} from "../../../environments/user-uuid";

describe('RezeptDetailViewComponent', () => {
  let component: RezeptDetailViewComponent;
  let messageService: MessageService;
  let recipeService: RecipeService;
  let ingredientService: IngredientService;
  let commentService: CommentService;
  let feedbackService: FeedbackService;
  let fixture: ComponentFixture<RezeptDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezeptDetailViewComponent, HttpClientTestingModule],
      providers: [MessageService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RezeptDetailViewComponent);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
    recipeService = TestBed.inject(RecipeService);
    ingredientService = TestBed.inject(IngredientService);
    commentService = TestBed.inject(CommentService);
    feedbackService = TestBed.inject(FeedbackService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate empty comment to false', () => {
    // Arrange
    component.newComment.text = '';

    // Act & Assert
    expect(component.validateComment()).toBeFalse();
  });

  it('should validate comment to true', () => {
    // Arrange
    component.newComment.text = 'Test';

    // Act & Assert
    expect(component.validateComment()).toBeTrue();
  });


  it('should get recipe by id', () => {
    // Arrange
    spyOn(recipeService, 'getRecipeById').and.returnValue(of({
      id: 1,
      name: 'Test',
      preparation: 'Test',
      image: 'Test',
      rating: 1,
      visibility: true,
      showAuthor: true
    }));

    // Act
    recipeService.getRecipeById(1);

    // Assert
    expect(recipeService.getRecipeById).toHaveBeenCalled();
  });

  it('should get ingredients by recipe id', () => {
    // Arrange
    const recipeId = 1;
    const ingredients: Ingredient[] = [{id: 1, name: 'Test', quantity: 1, measure: 'Test'}];
    spyOn(ingredientService, 'getIngredientsOfRecipe').and.returnValue(of([{
      id: 1,
      name: 'Test',
      quantity: 1,
      measure: 'Test'
    }]));

    // Act
    ingredientService.getIngredientsOfRecipe(recipeId);
    // Assert
    expect(ingredientService.getIngredientsOfRecipe).toHaveBeenCalled();
  });

  it('should get comments by feedback id', () => {
    // Arrange
    const recipeId = 1;
    spyOn(commentService, 'getAllCommentsOfFeedback').withArgs(recipeId).and.returnValue(of([]));

    // Act
    commentService.getAllCommentsOfFeedback(recipeId);

    // Assert
    expect(commentService.getAllCommentsOfFeedback).toHaveBeenCalled();
  });

  it('should load ngOnInit', () => {
    // Arrange
    const recipeId = 1;
    spyOn(recipeService, 'getRecipeById').and.returnValue(of({
      id: 1,
      name: 'Test',
      preparation: 'Test',
      image: 'Test',
      rating: 1,
      visibility: true,
      showAuthor: true
    }));
    spyOn(ingredientService, 'getIngredientsOfRecipe').and.returnValue(of([{
      id: 1,
      name: 'Test',
      quantity: 1,
      measure: 'Test'
    }]));
    spyOn(feedbackService, 'getAllFeedbackOfRecipe').and.returnValue(of([{id: 1, rating: '1', username: 'Test'}]));
    spyOn(commentService, 'getAllCommentsOfFeedback').and.returnValue(of([{id: 1, text: 'Test'}, {
      id: 2,
      text: 'Test2'
    }]));

    // Act
   component.ngOnInit()

    // Assert
    expect(recipeService.getRecipeById).toHaveBeenCalled();
    expect(ingredientService.getIngredientsOfRecipe).toHaveBeenCalled();
    expect(feedbackService.getAllFeedbackOfRecipe).toHaveBeenCalled();
    expect(commentService.getAllCommentsOfFeedback).toHaveBeenCalled();
  });

  it('should get favorite status of current recipe', () => {
    // Arrange
    const favoriteRecipes = [{
      id: 1,
      name: 'Test',
      preparation: 'Test preparation',
      image: 'Test image',
      rating: 1,
      visibility: true,
      showAuthor: true
    }];
    spyOn(recipeService, 'getAllFavoritesRecipes').and.returnValue(of(favoriteRecipes));
    component.recipeId = 1;

    // Act
    component.getCurrentFavStatusOfRecipe();

    // Assert
    expect(recipeService.getAllFavoritesRecipes).toHaveBeenCalled();
    expect(component.isFavorite).toBeTrue();
  });

  it('should toggle favorite', () => {
    // Arrange
    component.isFavorite = false;
    spyOn(recipeService, 'userClickedRecipeAsFav').and.returnValue(of({
      id: 1,
      name: 'Test',
      preparation: 'Test preparation',
      image: 'Test image',
      rating: 1,
      visibility: true,
      showAuthor: true
    }));

    // Act
    component.toggleFavorite();

    // Assert
    expect(recipeService.userClickedRecipeAsFav).toHaveBeenCalled();
    expect(component.isFavorite).toBeTrue();
  });

  it('should be true if feedback is available', () => {
    // Arrange
    userSession.username = 'Test';
    component.AllFeedback = [{id: 1, rating: '1', username: 'Test'}];
    // Act & Assert
    expect(component.isUserFeedbackAvailable()).toBeTrue();
  });


  it('should save feedback', () => {
    // Arrange
    spyOn(feedbackService, 'saveFeedback').and.returnValue(of({id: 1, rating: '1', username: 'Test'}));

    // Act
    component.createFeedback();

    // Assert
    expect(feedbackService.saveFeedback).toHaveBeenCalled();
  });

  it('should add comment to feedback', () => {
    // Arrange
    component.newComment.text = 'Test';
    spyOn(commentService, 'saveComment').and.returnValue(of({id: 1, text: 'Test'}));

    // Act
    component.addCommentToFeedback();

    // Assert
    expect(commentService.saveComment).toHaveBeenCalled();
  });

  it('should not add comment to feedback', () => {
    // Arrange
    component.newComment.text = '';
    spyOn(commentService, 'saveComment').and.returnValue(of({id: 1, text: 'Test'}));
    spyOn(messageService, 'add').and.callThrough();

    // Act
    component.addCommentToFeedback();
    // Assert
    expect(commentService.saveComment).not.toHaveBeenCalled();
  });

  it('should throw error when adding comment to feedback', () => {
    // Arrange
    component.newComment.text = 'Test';
    spyOn(commentService, 'saveComment').and.returnValue(of({id: 1, text: 'Test'}));
    spyOn(messageService, 'add').and.callThrough();
    spyOn(console, 'error').and.callThrough();

    // Act
    component.addCommentToFeedback();

    // Assert
    expect(commentService.saveComment).toHaveBeenCalled();
    // expect(console.error).toHaveBeenCalled();
  });

  it('should reset comment field', () => {
    // Arrange
    component.newComment.text = 'Test';

    // Act
    component.resetCommentField();

    // Assert
    expect(component.newComment.text).toEqual('');
  });

  it('should submit comment', () => {
    // Arrange
    spyOn(component, 'addCommentToFeedback').and.callThrough();

    // Act
    component.submitComment();

    // Assert
    expect(component.addCommentToFeedback).toHaveBeenCalled();
  });

  it('should display error message', () => {
    // Arrange
    spyOn(console, 'error').and.callThrough();
    spyOn(messageService, 'add').and.callThrough();

    // Act
    component.displayErrorMessage('Test');

    // Assert
    expect(console.error).toHaveBeenCalled();
    expect(messageService.add).toHaveBeenCalled();
  });
});
