package org.team7.kochrezeptbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team7.kochrezeptbackend.entity.Ingredient;
import org.team7.kochrezeptbackend.service.IngredientService;
import org.team7.kochrezeptbackend.repository.IngredientRepository;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientServiceImpl implements IngredientService {

    private final IngredientRepository ingredientRepository;

    @Autowired
    public IngredientServiceImpl(IngredientRepository ingredientRepository) { this.ingredientRepository = ingredientRepository; }

    @Override
    @Transactional
    public Ingredient saveIngredient(Ingredient ingredient) { return ingredientRepository.save(ingredient); }

    @Override
    public Optional<Ingredient> findById(Long ingredientId) {
        if (ingredientId == null || ingredientId < 0){
            return Optional.empty();
        }
        return ingredientRepository.findById(ingredientId);
    }

    @Override
    public List<Ingredient> getAllIngredientsForFilter() {
        return ingredientRepository.getAllIngredientsForFilter();
    }

    @Override
    public List<Ingredient> findIngredientsByRecipeId(Long recipeId) {
        return ingredientRepository.findIngredientByRecipeId(recipeId);
    }

    @Override
    public void deleteByRecipeId(Long recipeId) {
        ingredientRepository.deleteByRecipeId(recipeId);
    }

    @Override
    public void deleteIngredient(Long id) {
        ingredientRepository.deleteById(id);
    }
}

