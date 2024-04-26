package org.team7.kochrezeptbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.team7.kochrezeptbackend.entity.Ingredient;

import java.util.List;
import java.util.Set;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
    List<Ingredient> findIngredientByRecipeId(Long recipeId);

    void deleteByRecipeId(Long recipeId);

    @Query(value = "SELECT distinct name from Ingredient")
    List<Ingredient> getAllIngredientsForFilter();
}
