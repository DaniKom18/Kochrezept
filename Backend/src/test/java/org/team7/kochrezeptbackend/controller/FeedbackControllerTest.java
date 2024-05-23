package org.team7.kochrezeptbackend.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.team7.kochrezeptbackend.entity.Feedback;
import org.team7.kochrezeptbackend.entity.Recipe;
import org.team7.kochrezeptbackend.service.FeedbackService;
import org.team7.kochrezeptbackend.service.RecipeService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class FeedbackControllerTest {
  @MockBean
  FeedbackService feedbackService;
  @MockBean
  RecipeService recipeService;
  FeedbackController feedbackController;

  @BeforeEach
  public void setupFeedback() {
    feedbackController = new FeedbackController(feedbackService, recipeService);
  }

  //Post-Mapping
  @Test
  public void test_valid_recipeId_and_feedbackRequest() {
    // Arrange
    Long recipeId = 1L;
    Feedback feedbackRequest = new Feedback();
    feedbackRequest.setRating(4.5);

    Recipe recipe = new Recipe();
    recipe.setId(recipeId);
    Optional<Recipe> optionalRecipe = Optional.of(recipe);

    Feedback savedFeedback = new Feedback();

    when(recipeService.getRecipeById(recipeId)).thenReturn(optionalRecipe);
    when(feedbackService.saveFeedback(feedbackRequest)).thenReturn(savedFeedback);

    // Act
    ResponseEntity<Feedback> response = feedbackController.createFeedback(recipeId, feedbackRequest);

    // Assert
    assertEquals(HttpStatus.CREATED, response.getStatusCode());
    assertEquals(savedFeedback, response.getBody());
  }

  //Get-Mapping
  @Test
  public void test_valid_recipeId() {
    // Arrange
    Long recipeId = 1L;
    List<Feedback> expectedFeedbacks = new ArrayList<>();
    expectedFeedbacks.add(new Feedback());
    expectedFeedbacks.add(new Feedback());

    Mockito.when(recipeService.getRecipeById(recipeId)).thenReturn(Optional.of(new Recipe()));
    Mockito.when(feedbackService.findByRecipeId(recipeId)).thenReturn(expectedFeedbacks);

    // Act
    ResponseEntity<List<Feedback>> response = feedbackController.getAllFeedbacksOfRecipe(recipeId);

    // Assert
    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals(expectedFeedbacks, response.getBody());
  }

  //Put-Mapping
  @Test
  public void test_updateFeedback_success() {
    // Arrange
    Long feedbackId = 1L;
    Long recipeId = 1L;
    Feedback requestFeedback = new Feedback();
    requestFeedback.setId(feedbackId);

    Feedback foundFeedback = new Feedback();
    foundFeedback.setId(feedbackId);

    Feedback updatedFeedback = new Feedback();
    updatedFeedback.setId(feedbackId);

    Mockito.when(recipeService.getRecipeById(recipeId)).thenReturn(Optional.of(new Recipe()));
    Mockito.when(feedbackService.findById(feedbackId)).thenReturn(Optional.of(foundFeedback));
    Mockito.when(feedbackService.updateFeedback(requestFeedback, foundFeedback)).thenReturn(updatedFeedback);

    // Act
    ResponseEntity<Feedback> response = feedbackController.updateFeedback(recipeId, feedbackId, requestFeedback);

    // Assert
    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals(updatedFeedback, response.getBody());
  }
}
