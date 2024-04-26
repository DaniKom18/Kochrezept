package org.team7.kochrezeptbackend.controller;

import org.hibernate.engine.spi.SessionLazyDelegator;
import org.team7.kochrezeptbackend.entity.Ingredient;
import org.team7.kochrezeptbackend.entity.Recipe;
import org.team7.kochrezeptbackend.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team7.kochrezeptbackend.service.RecipeService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(originPatterns = "*")
public class IngredientController {

    private final IngredientService ingredientService;
    private final RecipeService recipeService;

    @Autowired
    public IngredientController(IngredientService ingredientService, RecipeService recipeService) {
        this.ingredientService = ingredientService;
        this.recipeService = recipeService;
    }

    @PostMapping("/recipe/{recipeId}/ingredients")
    public ResponseEntity<List<Ingredient>> createIngredient(@PathVariable Long recipeId, @RequestBody List<Ingredient> ingredientRequest) {
        Optional<Recipe> recipe = recipeService.getRecipeById(recipeId);
        if (recipe.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        List<Ingredient> savedIngredients = new ArrayList<>();

        for (Ingredient ingredient : ingredientRequest) {
            Optional<Ingredient> foundIngredient = ingredientService.findById(ingredient.getId());
            if (foundIngredient.isPresent()){
                continue; // schon vorhandene Zutaten nicht nochmal in die Datenbank schreiben
            }
            ingredient.setRecipe(recipe.get());
            ingredient.setName(ingredient.getName().toLowerCase());
            savedIngredients.add(ingredientService.saveIngredient(ingredient));
        }

        return new ResponseEntity<>(savedIngredients, HttpStatus.CREATED);
    }

    @GetMapping("/recipe/{recipeId}/ingredients")
    public ResponseEntity<List<Ingredient>> getAllIngredient(@PathVariable Long recipeId) {
        Optional<Recipe> recipe = recipeService.getRecipeById(recipeId);
        if (recipe.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        List<Ingredient> ingredients = ingredientService.findByRecipeId(recipeId);
        return new ResponseEntity<>(ingredients, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIngredient(@PathVariable Long id) {
        ingredientService.deleteIngredient(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

