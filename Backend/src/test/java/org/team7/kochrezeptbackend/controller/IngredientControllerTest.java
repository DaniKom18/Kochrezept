package org.team7.kochrezeptbackend.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.team7.kochrezeptbackend.entity.Ingredient;
import org.team7.kochrezeptbackend.entity.Recipe;
import org.team7.kochrezeptbackend.service.IngredientService;
import org.team7.kochrezeptbackend.service.RecipeService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@SpringBootTest
public class IngredientControllerTest {
    @MockBean
    RecipeService recipeService;
    @MockBean
    IngredientService ingredientService;

    IngredientController ingredientController;
    @BeforeEach
    public void setupIngredients(){
        ingredientController = new IngredientController(ingredientService, recipeService);
    }


    //Post-Mapping
    @Test
    public void test_valid_recipeId_and_valid_ingredients() {
        // Arrange
        Long recipeId = 1L;
        List<Ingredient> ingredientRequest = new ArrayList<>();
        Ingredient ingredient1 = new Ingredient();
        ingredient1.setId(1L);
        ingredient1.setName("Ingredient 1");
        ingredient1.setQuantity(1.0);
        ingredient1.setMeasure("grams");
        ingredientRequest.add(ingredient1);

        Ingredient ingredient2 = new Ingredient();
        ingredient2.setId(2L);
        ingredient2.setName("Ingredient 2");
        ingredient2.setQuantity(2.0);
        ingredient2.setMeasure("teaspoons");
        ingredientRequest.add(ingredient2);

        Recipe recipe = new Recipe();
        recipe.setId(recipeId);

        Mockito.when(recipeService.getRecipeById(recipeId)).thenReturn(Optional.of(recipe));
        Mockito.when(ingredientService.findById(ingredient1.getId())).thenReturn(Optional.empty());
        Mockito.when(ingredientService.findById(ingredient2.getId())).thenReturn(Optional.empty());
        Mockito.when(ingredientService.saveIngredient(Mockito.any(Ingredient.class))).thenReturn(ingredient1, ingredient2);

        // Act
        ResponseEntity<List<Ingredient>> response = ingredientController.createIngredient(recipeId, ingredientRequest);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(2, response.getBody().size());
        assertEquals(ingredient1, response.getBody().get(0));
        assertEquals(ingredient2, response.getBody().get(1));
    }

    //Get-Mapping
    @Test
    public void test_valid_recipe_id() {
        // Arrange
        Long recipeId = 1L;
        Recipe recipe = new Recipe();
        recipe.setId(recipeId);
        List<Ingredient> ingredients = new ArrayList<>();
        ingredients.add(new Ingredient());
        ingredients.add(new Ingredient());
        Mockito.when(recipeService.getRecipeById(recipeId)).thenReturn(Optional.of(recipe));
        Mockito.when(ingredientService.findIngredientsByRecipeId(recipeId)).thenReturn(ingredients);

        // Act
        ResponseEntity<List<Ingredient>> response = ingredientController.getAllIngredientsOfRecipe(recipeId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(ingredients, response.getBody());
    }

    //Delete-Mapping1
    @Test
    public void test_deleteIngredient_success() {
        // Arrange
        Long id = 1L;

        // Act
        ResponseEntity<Void> response = ingredientController.deleteIngredient(id);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(ingredientService, times(1)).deleteIngredient(id);
    }

    //Delete-Mapping2
    @Test
    public void test_deleteAllIngredientsOfRecipe_exists() {
        // Arrange
        Long recipeId = 1L;
        Recipe recipe = new Recipe();
        recipe.setId(recipeId);
        Optional<Recipe> optionalRecipe = Optional.of(recipe);
        Mockito.when(recipeService.getRecipeById(recipeId)).thenReturn(optionalRecipe);

        // Act
        ResponseEntity<Void> response = ingredientController.deleteAllIngredientsOfReciepe(recipeId);

        // Assert
        Mockito.verify(ingredientService, Mockito.times(1)).deleteByRecipeId(recipeId);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}
