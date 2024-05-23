package org.team7.kochrezeptbackend.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.team7.kochrezeptbackend.entity.Recipe;
import org.team7.kochrezeptbackend.entity.User;
import org.team7.kochrezeptbackend.service.RecipeService;
import org.team7.kochrezeptbackend.service.UserService;

@SpringBootTest
class RecipeControllerTest {

  @MockBean
  UserService userService;
  @MockBean
  RecipeService recipeService;

  RecipeController recipeController;

  @BeforeEach
  void setUp() {
    this.recipeController = new RecipeController(recipeService, userService);
  }

  // @PostMapping("/user/{userId}/recipes") Happy Path
  @Test
  void test_recipe_created_successfully() {
    // Arrange
    UUID userId = UUID.randomUUID();
    Recipe recipe = new Recipe();

    User user = new User();
    user.setId(userId);
    user.setUsername("testUser");

    when(userService.getUserById(userId)).thenReturn(Optional.of(user));
    when(recipeService.saveRecipe(recipe)).thenReturn(recipe);

    // Act
    ResponseEntity<Recipe> response = recipeController.createRecipe(userId, recipe);

    // Assert
    assertEquals(HttpStatus.CREATED, response.getStatusCode());
    assertEquals(recipe, response.getBody());
  }

  // @PostMapping("/user/{userId}/recipes") Edge Case
  @Test
  void test_user_id_not_found() {
    // Arrange
    UUID userId = UUID.randomUUID();
    Recipe recipe = new Recipe();

    when(userService.getUserById(userId)).thenReturn(Optional.empty());

    // Act
    ResponseEntity<Recipe> response = recipeController.createRecipe(userId, recipe);

    // Assert
    assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
  }

  // @GetMapping("/user/{userId}/recipes") Happy Path
  @Test
  void test_valid_user_id() {
    // Arrange
    UUID userId = UUID.randomUUID();
    List<Recipe> expectedRecipes = new ArrayList<>();
    expectedRecipes.add(new Recipe());
    expectedRecipes.add(new Recipe());
    ResponseEntity<List<Recipe>> expectedResponse = new ResponseEntity<>(expectedRecipes, HttpStatus.OK);


    User user = new User();
    when(userService.getUserById(userId)).thenReturn(Optional.of(user));
    when(recipeService.findByUser(userId)).thenReturn(expectedRecipes);

    // Act
    ResponseEntity<List<Recipe>> actualResponse = recipeController.getAllRecipesOfUser(userId);

    // Assert
    assertEquals(expectedResponse, actualResponse);
  }

  // @PostMapping("/user/{userId}/recipes") Edge Case
  @Test
  void test_invalid_user_id() {
    // Arrange
    UUID userId = UUID.randomUUID();
    ResponseEntity<List<Recipe>> expectedResponse = new ResponseEntity<>(HttpStatus.NOT_FOUND);

    when(userService.getUserById(userId)).thenReturn(Optional.empty());

    // Act
    ResponseEntity<List<Recipe>> actualResponse = recipeController.getAllRecipesOfUser(userId);

    // Assert
    assertEquals(expectedResponse, actualResponse);
  }

  // @GetMapping("/recipes/{id}") Happy Path
  @Test
  void test_getRecipeById_existingId() {
    // Arrange
    Long id = 1L;
    Recipe expectedRecipe = new Recipe();
    expectedRecipe.setId(id);
    Optional<Recipe> recipe = Optional.of(expectedRecipe);
    when(recipeService.getRecipeById(id)).thenReturn(recipe);

    // Act
    ResponseEntity<Recipe> response = recipeController.getRecipeById(id);

    // Assert
    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals(expectedRecipe, response.getBody());
  }

  // @GetMapping("/recipes/{id}") Edge Case
  @Test
  void test_getRecipeById_nonExisting() {
    // Arrange
    Long id = 1L;
    Optional<Recipe> recipe = Optional.empty();
    when(recipeService.getRecipeById(id)).thenReturn(recipe);

    // Act
    ResponseEntity<Recipe> response = recipeController.getRecipeById(id);

    // Assert
    assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
  }

  // @GetMapping("/user/{userId}/home/recipes") Happy Path
  @Test
  void test_valid_user_id_returnAllValidFavRecipes() {
    // Arrange
    UUID userId = UUID.randomUUID();
    List<Recipe> recipes = new ArrayList<>();
    Recipe recipe1 = new Recipe();
    recipe1.setId(1L);
    Recipe recipe2 = new Recipe();
    recipe2.setId(2L);
    recipes.add(recipe1);
    recipes.add(recipe2);

    List<Recipe> favRecipes = new ArrayList<>();
    Recipe favRecipe = new Recipe();
    favRecipe.setId(1L);
    favRecipes.add(favRecipe);

    when(recipeService.getAllHomePageRecipes()).thenReturn(recipes);
    when(recipeService.getFavRecipesOfUser(userId)).thenReturn(favRecipes);

    // Act
    ResponseEntity<List<Recipe>> response = recipeController.getAllHomePageRecipes(userId);

    // Assert
    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals(recipes, response.getBody());
  }

  // @GetMapping("/user/{userId}/home/recipes") Edge Case
//  @Test
//  void test_invalid_user_id_returnAllValidFavRecipes() {
//    // Arrange
//    UUID userId = UUID.randomUUID();
//
//    when(recipeService.getAllHomePageRecipes()).thenReturn(new ArrayList<>());
//    when(recipeService.getFavRecipesOfUser(userId)).thenReturn(null);
//
//    // Act
//    ResponseEntity<List<Recipe>> response = recipeController.getAllHomePageRecipes(userId);
//
//    // Assert
//    assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
//    assertNull(response.getBody());
//  }

  // @GetMapping("/user/{userId}/fav/recipes") Happy Path
  @Test
  void test_getAllUserFavRecipies_returnsListOfFavoriteRecipes() {
    // Arrange
    UUID userId = UUID.randomUUID();
    List<Recipe> expectedRecipes = new ArrayList<>();
    Recipe recipe1 = new Recipe();
    Recipe recipe2 = new Recipe();
    expectedRecipes.add(recipe1);
    expectedRecipes.add(recipe2);

    when(recipeService.getFavRecipesOfUser(userId)).thenReturn(expectedRecipes);

    // Act
    ResponseEntity<List<Recipe>> response = recipeController.getAllUserFavRecipies(userId);

    // Assert
    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals(expectedRecipes, response.getBody());
  }

  // @GetMapping("/user/{userId}/fav/recipes") Edge Case
//  @Test
//  void test_getAllUserFavRecipies_returnsNotFoundIfUserIdNotFound() {
//    // Arrange
//    UUID userId = UUID.randomUUID();
//
//    when(recipeService.getFavRecipesOfUser(userId)).thenReturn(null);
//
//    // Act
//    ResponseEntity<List<Recipe>> response = recipeController.getAllUserFavRecipies(userId);
//
//    // Assert
//    assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
//    assertNull(response.getBody());
//  }

  // @PutMapping("/recipes/{id}") Happy Path
  @Test
  void test_updateRecipe_success() {
    // Arrange
    Long id = 1L;
    Recipe requestRecipe = new Recipe();
    requestRecipe.setId(id);
    Recipe existingRecipe = new Recipe();
    existingRecipe.setId(id);
    existingRecipe.setName("Old Recipe");
    existingRecipe.setImage("Old Image");
    existingRecipe.setPreparation("Old Preparation");
    existingRecipe.setRating(3.5);
    existingRecipe.setVisibility(true);
    existingRecipe.setShowAuthor(true);

    when(recipeService.getRecipeById(id)).thenReturn(Optional.of(existingRecipe));
    when(recipeService.updateRecipe(any(Recipe.class))).thenReturn(existingRecipe);

    // Act
    ResponseEntity<Recipe> response = recipeController.updateRecipe(id, requestRecipe);

    // Assert
    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals(requestRecipe.getName(), existingRecipe.getName());
    assertEquals(requestRecipe.getImage(), existingRecipe.getImage());
    assertEquals(requestRecipe.getPreparation(), existingRecipe.getPreparation());
    assertEquals(requestRecipe.getRating(), existingRecipe.getRating());
    assertEquals(requestRecipe.getVisibility(), existingRecipe.getVisibility());
    assertEquals(requestRecipe.getShowAuthor(), existingRecipe.getShowAuthor());
  }

  // @PutMapping("/recipes/{id}") Edge Case
//  @Test
//  void test_updateRecipe_invalidRequestBody() {
//    // Arrange
//    Long id = 1L;
//    Recipe requestRecipe = null;
//
//    // Act
//    ResponseEntity<Recipe> response = recipeController.updateRecipe(id, requestRecipe);
//
//    // Assert
//    assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
//  }

  // @GetMapping("/user/{userId}/home/recipes") Happy Path
  @Test
  void test_userAddedRecipeAsFav_userAndRecipeExist_recipeUpdatedAndReturnedWithHttpStatusOK() {
    User user = new User();
    user.setId(UUID.randomUUID());
    when(userService.getUserById(any(UUID.class))).thenReturn(Optional.of(user));

    // Mock RecipeService
    Recipe recipe = new Recipe();
    recipe.setId(1L);
    List<User> markedAsFavorite = new ArrayList<>();
    recipe.setMarkedAsFavorite(markedAsFavorite);
    when(recipeService.getRecipeById(any(Long.class))).thenReturn(Optional.of(recipe));
    when(recipeService.updateRecipe(any(Recipe.class))).thenReturn(recipe);

    // Call the method under test
    ResponseEntity<Recipe> response = recipeController.userAddedRecipeAsFav(user.getId(), recipe.getId());

    // Verify the response
    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals(recipe, response.getBody());
  }

  // @PutMapping("/user/{userId}/fav/recipes/{recipeId}") Edge Case
  @Test
  void test_userAddedRecipeAsFav_userDoesNotExist_badRequestReturned() {
    when(userService.getUserById(any(UUID.class))).thenReturn(Optional.empty());

    // Create RecipeController with mocked services
    RecipeController recipeController = new RecipeController(recipeService, userService);

    // Call the method under test
    ResponseEntity<Recipe> response = recipeController.userAddedRecipeAsFav(UUID.randomUUID(), 1L);

    // Verify the response
    assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
  }

  // @DeleteMapping("/recipes/{id}") Happy Path
  @Test
  void test_deleteRecipe_validId_returnsNoContent() {
    // Arrange
    Long id = 1L;
    Optional<Recipe> recipe = Optional.of(new Recipe());
    when(recipeService.getRecipeById(id)).thenReturn(recipe);

    // Act
    ResponseEntity<Void> response = recipeController.deleteRecipe(id);

    // Assert
    assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
    verify(recipeService, times(1)).deleteRecipe(id);
  }

  // @DeleteMapping("/recipes/{id}") Edge Case
  @Test
  void test_deleteRecipe_invalidId_returnsNotFound() {
    // Arrange
    Long id = 1L;
    Optional<Recipe> recipe = Optional.empty();
    when(recipeService.getRecipeById(id)).thenReturn(recipe);

    // Act
    ResponseEntity<Void> response = recipeController.deleteRecipe(id);

    // Assert
    assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    verify(recipeService, never()).deleteRecipe(id);
  }
}
