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
        if (recipe.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        feedbackRequest.setRecipe(recipe.get());
        Feedback savedFeedback = feedbackService.saveFeedback(feedbackRequest);

        return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
    }

    @GetMapping("/recipe/{recipeId}/feedback")
    public ResponseEntity<List<Feedback>> getAllFeedbacksOfRecipe(@PathVariable Long recipeId) {
        Optional<Recipe> recipe = recipeService.getRecipeById(recipeId);
        if (recipe.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        List<Feedback> feedbacks = feedbackService.findByRecipeId(recipeId);
        return new ResponseEntity<>(feedbacks, HttpStatus.OK);
    }

}
