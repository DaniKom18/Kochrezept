package org.team7.kochrezeptbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team7.kochrezeptbackend.entity.Recipe;
import org.team7.kochrezeptbackend.repository.RecipeRepository;
import org.team7.kochrezeptbackend.service.RecipeService;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

@Service
public class RecipeServiceImpl implements RecipeService {

    private final RecipeRepository recipeRepository;

    @Autowired
    public RecipeServiceImpl(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }


    @Override
    @Transactional
    public Recipe saveRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @Override
    public Optional<Recipe> getRecipeById(Long id) {
        return recipeRepository.findById(id);
    }

    @Override
    public List<Recipe> getAllHomePageRecipes() {
        return recipeRepository.findAllRecipesWithVisibilityTrue();
    }

    @Override
    public List<Recipe> getRecipesByIds(Set<Long> recipeIds) {
        return recipeRepository.findByIdIn(recipeIds);
    }

    @Override
    public Recipe updateRecipe(Recipe updatedRecipe) {
        return recipeRepository.save(updatedRecipe);
    }

    @Override
    public void deleteRecipe(Long id) {
        recipeRepository.deleteById(id);
    }

    @Override
    public List<Recipe> findByUser(UUID userId) {
        return recipeRepository.findRecipeByOwnerId(userId);
    }

    @Override
    public List<Recipe> getFavRecipesOfUser(UUID userId) {
        return recipeRepository.findAllFavoriteRecipesByUserId(userId);
    }
}
