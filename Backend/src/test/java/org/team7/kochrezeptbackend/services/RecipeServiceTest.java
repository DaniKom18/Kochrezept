package org.team7.kochrezeptbackend.services;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.util.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.dao.DataIntegrityViolationException;
import org.team7.kochrezeptbackend.entity.Recipe;
import org.team7.kochrezeptbackend.entity.User;
import org.team7.kochrezeptbackend.repository.RecipeRepository;
import org.team7.kochrezeptbackend.service.RecipeService;
import org.team7.kochrezeptbackend.service.impl.RecipeServiceImpl;

@SpringBootTest
class RecipeServiceTest {

  @MockBean
  private RecipeRepository recipeRepository;

  private RecipeService recipeService;

  @BeforeEach
  void setUp() {
    this.recipeService = new RecipeServiceImpl(recipeRepository);
  }

  @Test
  void test_saveRecipe_success() {
    // Arrange
    Recipe recipe = new Recipe();
    recipe.setId(1L);
    recipe.setName("Test Recipe");
    recipe.setPreparation("Test Preparation");
    recipe.setVisibility(true);
    recipe.setShowAuthor(true);
    recipe.setOwner(new User());
    recipe.setMarkedAsFavorite(new ArrayList<>());

    // Act
    when(recipeRepository.save(any(Recipe.class))).thenReturn(recipe);
    Recipe savedRecipe = recipeService.saveRecipe(recipe);

    // Assert
    assertNotNull(savedRecipe.getId());
    assertEquals("Test Recipe", savedRecipe.getName());
    assertEquals("Test Preparation", savedRecipe.getPreparation());
    assertTrue(savedRecipe.getVisibility());
    assertTrue(savedRecipe.getShowAuthor());
    assertNotNull(savedRecipe.getOwner());
    assertNotNull(savedRecipe.getMarkedAsFavorite());
  }

//  @Test
//  void test_save_recipe_with_null_name() {
//    // Arrange
//    Recipe recipeWithNullName = new Recipe();
//    recipeWithNullName.setName(null);
//
//    when(recipeRepository.save(any(Recipe.class))).thenReturn(recipeWithNullName);
//
//
//    // Act & Assert
//    assertThrows(DataIntegrityViolationException.class, () -> {
//      recipeService.saveRecipe(recipeWithNullName);
//    });
//  }

  @Test
  void test_visibility_true() {
    // Arrange
    List<Recipe> expectedRecipes = new ArrayList<>();
    Recipe recipe1 = new Recipe();
    recipe1.setVisibility(true);
    expectedRecipes.add(recipe1);
    Recipe recipe2 = new Recipe();
    recipe2.setVisibility(true);
    expectedRecipes.add(recipe2);
    when(recipeRepository.findAllRecipesWithVisibilityTrue()).thenReturn(expectedRecipes);
    RecipeServiceImpl recipeService = new RecipeServiceImpl(recipeRepository);

    // Act
    List<Recipe> actualRecipes = recipeService.getAllHomePageRecipes();

    // Assert
    assertEquals(expectedRecipes, actualRecipes);
  }

//  @Test
//  void test_empty_list() {
//    // Arrange
//    List<Recipe> expectedRecipes = new ArrayList<>();
//    when(recipeRepository.findAllRecipesWithVisibilityTrue()).thenReturn(expectedRecipes);
//
//    // Act
//    List<Recipe> actualRecipes = recipeService.getAllHomePageRecipes();
//
//    // Assert
//    assertEquals(expectedRecipes, actualRecipes);
//  }

  @Test
  void test_valid_recipe_ids() {
    // Arrange
    Set<Long> recipeIds = new HashSet<>();
    recipeIds.add(1L);
    recipeIds.add(2L);

    List<Recipe> expectedRecipes = new ArrayList<>();
    Recipe recipe1 = new Recipe();
    recipe1.setId(1L);
    Recipe recipe2 = new Recipe();
    recipe2.setId(2L);
    expectedRecipes.add(recipe1);
    expectedRecipes.add(recipe2);

    when(recipeRepository.findByIdIn(recipeIds)).thenReturn(expectedRecipes);

    // Act
    List<Recipe> actualRecipes = recipeService.getRecipesByIds(recipeIds);

    // Assert
    assertEquals(expectedRecipes, actualRecipes);
  }

//  @Test
//  void test_null_recipe_ids() {
//    // Arrange
//    Set<Long> recipeIds = null;
//
//    // Act and Assert
//    assertThrows(NullPointerException.class, () -> {
//      recipeService.getRecipesByIds(recipeIds);
//    });
//  }

  @Test
  void test_updateRecipe_shouldUpdateRecipeWithNewInformation() {
    // Arrange
    Recipe updatedRecipe = new Recipe();
    updatedRecipe.setId(1L);
    updatedRecipe.setName("New Recipe Name");
    updatedRecipe.setPreparation("New Recipe Preparation");
    updatedRecipe.setImage("New Recipe Image");
    updatedRecipe.setRating(4.5);
    updatedRecipe.setVisibility(true);
    updatedRecipe.setShowAuthor(true);
    updatedRecipe.setAuthor("New Recipe Author");
    User owner = new User();
    owner.setId(UUID.randomUUID());
    updatedRecipe.setOwner(owner);
    List<User> markedAsFavorite = new ArrayList<>();
    markedAsFavorite.add(new User());
    updatedRecipe.setMarkedAsFavorite(markedAsFavorite);

    when(recipeRepository.save(updatedRecipe)).thenReturn(updatedRecipe);

    // Act
    Recipe result = recipeService.updateRecipe(updatedRecipe);

    // Assert
    assertEquals(updatedRecipe, result);
  }

//  @Test
//  void test_updateRecipe_shouldThrowNullPointerExceptionWhenProvidedRecipeIsNull() {
//    // Arrange
//    Recipe updatedRecipe = null;
//
//    // Act and Assert
//    assertThrows(NullPointerException.class, () -> {
//      recipeService.updateRecipe(updatedRecipe);
//    });
//  }

  @Test
  void test_deleteRecipe_validID() {
    // Arrange
    Long id = 1L;

    when(recipeRepository.existsById(id)).thenReturn(true);

    // Act
    recipeService.deleteRecipe(id);

    // Assert
    verify(recipeRepository, times(1)).deleteById(id);
  }

//  @Test
//  void test_deleteRecipe_nullID() {
//    // Arrange
//    Long id = null;
//
//    // Act and Assert
//    assertThrows(IllegalArgumentException.class, () -> {
//      recipeService.deleteRecipe(id);
//    });
//  }

  @Test
  void test_return_recipes_owned_by_user_id() {
    // Arrange
    UUID userId = UUID.randomUUID();
    List<Recipe> expectedRecipes = new ArrayList<>();
    Recipe recipe1 = new Recipe();
    Recipe recipe2 = new Recipe();
    expectedRecipes.add(recipe1);
    expectedRecipes.add(recipe2);
    when(recipeRepository.findRecipeByOwnerId(userId)).thenReturn(expectedRecipes);

    // Act
    List<Recipe> actualRecipes = recipeService.findByUser(userId);

    // Assert
    assertEquals(expectedRecipes, actualRecipes);
  }

//  @Test
//  void test_raise_exception_if_user_id_is_null() {
//    // Arrange
//    UUID userId = null;
//
//    // Act and Assert
//    assertThrows(IllegalArgumentException.class, () -> {
//      recipeService.findByUser(userId);
//    });
//  }

  @Test
  void test_return_favorite_recipes() {
    // Arrange
    UUID userId = UUID.randomUUID();
    List<Recipe> expectedRecipes = new ArrayList<>();
    Recipe recipe1 = new Recipe();
    Recipe recipe2 = new Recipe();
    expectedRecipes.add(recipe1);
    expectedRecipes.add(recipe2);
    when(recipeRepository.findAllFavoriteRecipesByUserId(userId)).thenReturn(expectedRecipes);

    // Act
    List<Recipe> actualRecipes = recipeService.getFavRecipesOfUser(userId);

    // Assert
    assertEquals(expectedRecipes, actualRecipes);
  }

//  @Test
//  void test_null_user_id() {
//    // Arrange
//    UUID userId = null;
//
//    // Act and Assert
//    assertThrows(IllegalArgumentException.class, () -> {
//      recipeService.getFavRecipesOfUser(userId);
//    });
//  }
}
