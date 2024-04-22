package org.team7.kochrezeptbackend.service;

import org.team7.kochrezeptbackend.entity.Ingredient;
import java.util.List;
import java.util.Optional;

public interface IngredientService {
    Ingredient saveIngredient(Ingredient ingredient);
    Optional<Ingredient> getIngredientById(Long id);
    List<Ingredient> getAllIngredient();
    Ingredient updateIngredient(Ingredient ingredient);
    void deleteIngredient(Long id);
}
