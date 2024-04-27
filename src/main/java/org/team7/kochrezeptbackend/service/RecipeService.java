package org.team7.kochrezeptbackend.service;

import org.team7.kochrezeptbackend.entity.Recipe;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

public interface RecipeService {
    Recipe saveRecipe(Recipe recipe);
    Optional<Recipe> getRecipeById(Long id);
    List<Recipe> getAllRecipe();
    List<Recipe> getRecipesByIds(Set<Long> recipeIds);
    Recipe updateRecipe(Recipe recipe);
    void deleteRecipe(Long id);

    List<Recipe> findByUser(UUID userId);
}
