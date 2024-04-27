package org.team7.kochrezeptbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team7.kochrezeptbackend.entity.Feedback;
import org.team7.kochrezeptbackend.entity.Ingredient;
import org.team7.kochrezeptbackend.entity.Recipe;
import org.team7.kochrezeptbackend.entity.User;
import org.team7.kochrezeptbackend.request.RequestIds;
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


    //TODO Welcher User will alle Rezepte bekommen? USERID zum path hinzufügen
    @GetMapping("/recipes")
    public ResponseEntity<List<Recipe>> getAllRecipe(){
        List<Recipe> recipes = recipeService.getAllRecipe();
        //TODO gib mir alle Favoriten Rezepten Vom User
        //TODO extrahieren die ID von FAV Recipes
        //TODO suche in recipes all diese IDS und lösche sie aus der LISTE
        return new ResponseEntity<>(recipes, HttpStatus.OK);
    }

    @PutMapping("recipes/{id}")
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
            recipe.setIsAnonymous(requestRecipe.getIsAnonymous());
            Recipe updateRecipe = recipeService.updateRecipe(recipe);
            return new ResponseEntity<>(updateRecipe, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecipe(@PathVariable Long id){
        Optional<Recipe> recipe = recipeService.getRecipeById(id);
        if (recipe.isPresent()){
            recipeService.deleteRecipe(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
