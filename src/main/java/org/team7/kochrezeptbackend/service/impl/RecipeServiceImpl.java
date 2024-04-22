package org.team7.kochrezeptbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team7.kochrezeptbackend.entity.Recipe;
import org.team7.kochrezeptbackend.repository.RecipeRepository;
import org.team7.kochrezeptbackend.service.RecipeService;

import java.util.List;
import java.util.Optional;

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
    public List<Recipe> getAllRecipe() {
        return recipeRepository.findAll();
    }

    @Override
    public Recipe updateRecipe(Recipe updatedRecipe) {
        return recipeRepository.findById(updatedRecipe.getId())
                .map(existingRecipe -> {
                    if (updatedRecipe.getAuthor() != null) existingRecipe.setAuthor(updatedRecipe.getAuthor());
                    if (updatedRecipe.getName() != null) existingRecipe.setName(existingRecipe.getName());
                    if (updatedRecipe.getFeedbacks() != null) existingRecipe.setFeedbacks(existingRecipe.getFeedbacks());
                    if (updatedRecipe.getImage() != null) existingRecipe.setImage(existingRecipe.getImage());
                    if (updatedRecipe.getIngredients() != null) existingRecipe.setIngredients(existingRecipe.getIngredients());
                    if (updatedRecipe.getRating() != null) existingRecipe.setRating(existingRecipe.getRating());
                    if (updatedRecipe.getPreparation() != null) existingRecipe.setPreparation(existingRecipe.getPreparation());
                    if (updatedRecipe.getIsAnonymous() != null) existingRecipe.setIsAnonymous(existingRecipe.getIsAnonymous());
                    if (updatedRecipe.getVisibility() != null) existingRecipe.setVisibility(existingRecipe.getVisibility());
                    return recipeRepository.save(existingRecipe);
                })
                .orElseThrow(() -> new RuntimeException("Recipe not found with id:" + updatedRecipe.getId()));
    }

    @Override
    public void deleteRecipe(Long id) {
        recipeRepository.deleteById(id);
    }
}
