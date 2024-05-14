package org.team7.kochrezeptbackend.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.team7.kochrezeptbackend.entity.Ingredient;
import org.team7.kochrezeptbackend.repository.IngredientRepository;
import org.team7.kochrezeptbackend.service.IngredientService;
import org.team7.kochrezeptbackend.service.impl.IngredientServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
public class IngredientServiceTest {
    @MockBean
    IngredientRepository ingredientRepository;
    IngredientService ingredientService;
    @BeforeEach
    public void setupIngredient(){
        ingredientService = new IngredientServiceImpl(ingredientRepository);
    }

    //saveIngredient
    @Test
    public void test_save_valid_ingredient() {
        // Arrange
        Ingredient ingredient = new Ingredient();
        ingredient.setName("Salz");
        Ingredient responseIngredient = new Ingredient();
        responseIngredient.setName("Salz");

        Mockito.when(ingredientRepository.save(ingredient)).thenReturn(responseIngredient);

        // Act
        Ingredient savedIngredient = ingredientService.saveIngredient(ingredient);

        // Assert
        assertEquals(ingredient.getName(), savedIngredient.getName());
    }

    //findById
    @Test
    public void test_returns_ingredient_if_exists() {
        // Arrange
        Long ingredientId = 1L;
        Ingredient ingredient = new Ingredient();
        ingredient.setId(ingredientId);
        Optional<Ingredient> expected = Optional.of(ingredient);
        Mockito.when(ingredientRepository.findById(ingredientId)).thenReturn(expected);

        // Act
        Optional<Ingredient> actual = ingredientService.findById(ingredientId);

        // Assert
        assertEquals(expected, actual);
    }

    //findIngredientsByRecipeId
    @Test
    public void test_findIngredientsByRecipeId_validRecipeId() {
        // Arrange
        Long recipeId = 1L;
        List<Ingredient> expectedIngredients = new ArrayList<>();
        expectedIngredients.add(new Ingredient());
        when(ingredientRepository.findIngredientByRecipeId(recipeId)).thenReturn(expectedIngredients);

        // Act
        List<Ingredient> actualIngredients = ingredientService.findIngredientsByRecipeId(recipeId);

        // Assert
        assertEquals(expectedIngredients, actualIngredients);
    }

    //deleteByRecipeId
    @Test
    public void test_deleteIngredientsByRecipeId() {
        // Arrange
        Long recipeId = 1L;

        // Act
        ingredientService.deleteByRecipeId(recipeId);

        // Assert
        verify(ingredientRepository, times(1)).deleteByRecipeId(recipeId);
    }

    //deleteIngredient
    @Test
    public void test_deleteIngredient_deleteIngredientWithGivenId() {
        // Arrange
        Long id = 1L;

        // Act
        ingredientService.deleteIngredient(id);

        // Assert
        verify(ingredientRepository, times(1)).deleteById(id);
    }
}
