package org.team7.kochrezeptbackend.controller;

import org.team7.kochrezeptbackend.entity.Feedback;
import org.team7.kochrezeptbackend.entity.Recipe;
import org.team7.kochrezeptbackend.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team7.kochrezeptbackend.service.RecipeService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(originPatterns = "*")
public class FeedbackController {

  private final FeedbackService feedbackService;
  private final RecipeService recipeService;

  @Autowired
  public FeedbackController(FeedbackService feedbackService, RecipeService recipeService) {
    this.feedbackService = feedbackService;
    this.recipeService = recipeService;
  }

  @PostMapping("/recipe/{recipeId}/feedback")
  public ResponseEntity<Feedback> createFeedback(@PathVariable Long recipeId, @RequestBody Feedback feedbackRequest) {
    Optional<Recipe> recipe = recipeService.getRecipeById(recipeId);
    if (recipe.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    feedbackRequest.setRecipe(recipe.get());
    Feedback savedFeedback = feedbackService.saveFeedback(feedbackRequest);

    return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
  }

  @GetMapping("/recipe/{recipeId}/feedback")
  public ResponseEntity<List<Feedback>> getAllFeedbacksOfRecipe(@PathVariable Long recipeId) {
    Optional<Recipe> recipe = recipeService.getRecipeById(recipeId);
    if (recipe.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    List<Feedback> feedbacks = feedbackService.findByRecipeId(recipeId);
    return new ResponseEntity<>(feedbacks, HttpStatus.OK);
  }

  @PutMapping("/recipe/{recipeId}/feedback/{feedbackId}")
  public ResponseEntity<Feedback> updateFeedback(@PathVariable Long recipeId, @PathVariable Long feedbackId, @RequestBody Feedback requestFeedback) {
    Optional<Recipe> recipe = recipeService.getRecipeById(recipeId);
    if (recipe.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    if (!requestFeedback.getId().equals(feedbackId)) {
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    Optional<Feedback> foundFeedback = feedbackService.findById(feedbackId);
    if (foundFeedback.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    updateRecipeRating(recipe.get());

    Feedback updatedFeedback = feedbackService.updateFeedback(requestFeedback, foundFeedback.get());
    return new ResponseEntity<>(updatedFeedback, HttpStatus.OK);
  }


  public void updateRecipeRating(Recipe recipe) {
    // Alle Feedbacks für das Rezept abrufen
    List<Feedback> feedbacks = feedbackService.findByRecipeId(recipe.getId());

    // Anzahl der Feedbacks
    int numberOfUserFeedbacks = feedbacks.size();

    // Summe der Ratings berechnen
    double sumOfRatings = 0.0;
    for (Feedback feedback : feedbacks) {
      // Feedbacks die 0.0 haben werden nicht in der Rechnung berücksichtigt
      if (feedback.getRating() == 0.0) {
        numberOfUserFeedbacks--;
        continue;
      }
      sumOfRatings += feedback.getRating();
    }

    // Durchschnitt berechnen
    double averageRating = sumOfRatings / numberOfUserFeedbacks;

    recipe.setRating(averageRating);

    // Rezept aktualisieren
    recipeService.updateRecipe(recipe);
  }
}
