package org.team7.kochrezeptbackend.service;

import org.team7.kochrezeptbackend.entity.Ingredient;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface IngredientService {
    Ingredient saveIngredient(Ingredient ingredient);
    Optional<Ingredient> findById(Long ingredientId);
    List<Ingredient> getAllIngredients();
    List<Ingredient> findByRecipeId(Long recipeId);
    void deleteIngredient(Long id);
}
