package org.team7.kochrezeptbackend.service;

import org.team7.kochrezeptbackend.entity.Ingredient;
import java.util.List;
import java.util.Optional;

public interface IngredientService {
    Ingredient saveIngredient(Ingredient ingredient);
    Optional<Ingredient> findById(Long ingredientId);
    List<Ingredient> getAllIngredientsForFilter();
    List<Ingredient> findIngredientsByRecipeId(Long recipeId);
    void deleteByRecipeId (Long recipeId);
    void deleteIngredient(Long id);
}
