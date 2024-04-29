package org.team7.kochrezeptbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team7.kochrezeptbackend.entity.Recipe;
import org.team7.kochrezeptbackend.entity.User;
import org.team7.kochrezeptbackend.service.RecipeService;
import org.team7.kochrezeptbackend.service.UserService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(value = "api")
@CrossOrigin(originPatterns = "*")
public class RecipeController {

    private final RecipeService recipeService;
    private final UserService userService;

    @Autowired
    public RecipeController(RecipeService recipeService, UserService userService) { this.recipeService = recipeService;
        this.userService = userService;
    }

    @PostMapping("/user/{userId}/recipes")
    public ResponseEntity<Recipe> createRecipe(@PathVariable UUID userId, @RequestBody Recipe recipe){
        Optional<User> foundUser = userService.getUserById(userId);
        if (foundUser.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        recipe.setOwner(foundUser.get());
        recipe.setAuthor(foundUser.get().getUsername());
        Recipe savedRecipe = recipeService.saveRecipe(recipe);
        return new ResponseEntity<>(savedRecipe, HttpStatus.CREATED);
    }

    @GetMapping("/user/{userId}/recipes")
    public ResponseEntity<List<Recipe>> getAllRecipesOfUser(@PathVariable UUID userId) {
        Optional<User> foundUser = userService.getUserById(userId);
        if (foundUser.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        List<Recipe> recipes = this.recipeService.findByUser(userId);

        return new ResponseEntity<>(recipes, HttpStatus.OK);
    }

    @GetMapping("/recipes/{id}")
    public ResponseEntity<Recipe> getRecipeById(@PathVariable Long id){
        Optional<Recipe> recipe = recipeService.getRecipeById(id);
        return recipe.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/user/{userId}/home/recipes")
    public ResponseEntity<List<Recipe>> getAllHomePageRecipes(@PathVariable UUID userId){
        List<Recipe> recipes = recipeService.getAllHomePageRecipes();
        // gib mir alle Favoriten Rezepten Vom User
        List<Recipe> favRecipes = recipeService.getFavRecipesOfUser(userId);
        //Lösche alle Fav Rezepte des Users aus Allen Rezepten da die hier nicht angezeigt werden sollen
        if (favRecipes != null) {
            for (Recipe recipe : recipes) {
                for (Recipe favRecipe : favRecipes) {
                    if (recipe.getId().longValue() == favRecipe.getId().longValue()) {
                        recipes.remove(recipe);
                    }
                }
            }
        }
        return new ResponseEntity<>(recipes, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}/fav/recipes")
    public ResponseEntity<List<Recipe>> getAllUserFavRecipies(@PathVariable UUID userId){
        List<Recipe> favRecipesOfUser = recipeService.getFavRecipesOfUser(userId);
        return new ResponseEntity<>(favRecipesOfUser, HttpStatus.OK);
    }

    /**
     * Verändert nicht das markedAsFavorite Attribut im Recipe, dafür gibt es extra API'S
     */
    @PutMapping("/recipes/{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable Long id, @RequestBody  Recipe requestRecipe){
        if (!requestRecipe.getId().equals(id)){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Optional<Recipe> existingRecipe = recipeService.getRecipeById(id);
        if (existingRecipe.isPresent()){
            Recipe recipe = existingRecipe.get();
            recipe.setName(requestRecipe.getName());
            recipe.setImage(requestRecipe.getImage());
            recipe.setPreparation(requestRecipe.getPreparation());
            recipe.setRating(requestRecipe.getRating());
            recipe.setVisibility(requestRecipe.getVisibility());
            recipe.setShowAuthor(requestRecipe.getShowAuthor());
            Recipe updateRecipe = recipeService.updateRecipe(recipe);
            return new ResponseEntity<>(updateRecipe, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/user/{userId}/fav/recipes/{recipeId}")
    public ResponseEntity<Recipe> userAddedRecipeAsFav(@PathVariable UUID userId, @PathVariable Long recipeId){
        Optional<User> foundUser = userService.getUserById(userId);
        if (foundUser.isEmpty()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Optional<Recipe> existingRecipe = recipeService.getRecipeById(recipeId);
        if (existingRecipe.isPresent()){
            Recipe recipe = existingRecipe.get();

            boolean userFound = recipe.getMarkedAsFavorite().contains(foundUser.get());

            if (userFound){
                recipe.getMarkedAsFavorite().remove(foundUser.get());
            }else {
                recipe.getMarkedAsFavorite().add(foundUser.get());
            }

            Recipe updateRecipe = recipeService.updateRecipe(recipe);
            return new ResponseEntity<>(updateRecipe, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @DeleteMapping("/recipes/{id}")
    public ResponseEntity<Void> deleteRecipe(@PathVariable Long id){
        Optional<Recipe> recipe = recipeService.getRecipeById(id);
        if (recipe.isPresent()){
            recipeService.deleteRecipe(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
