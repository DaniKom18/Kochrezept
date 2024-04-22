package org.team7.kochrezeptbackend.service;

import org.team7.kochrezeptbackend.entity.Ingredient;
import java.util.List;
import java.util.Set;

public interface IngredientService {
    Ingredient saveIngredient(Ingredient ingredient);
    List<Ingredient> getAllIngredients();
    List<Ingredient> getIngredientsByIds(Set<Long> ingredientIds);
    void deleteIngredient(Long id);
}
