package org.team7.kochrezeptbackend.service;

import org.team7.kochrezeptbackend.entity.Recipe;

import java.util.List;
import java.util.Optional;

public interface RecipeService {
    Recipe saveRecipe(Recipe recipe);
    Optional<Recipe> getRecipeById(Long id);
    List<Recipe> getAllRecipe();
    Recipe updateRecipe(Recipe recipe);
    void deleteRecipe(Long id);
}
