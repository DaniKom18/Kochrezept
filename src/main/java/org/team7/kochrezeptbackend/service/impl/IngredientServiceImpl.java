package org.team7.kochrezeptbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team7.kochrezeptbackend.entity.Ingredient;
import org.team7.kochrezeptbackend.service.IngredientService;
import org.team7.kochrezeptbackend.repository.IngredientRepository;

import java.util.List;
import java.util.Set;

@Service
public class IngredientServiceImpl implements IngredientService {

    private final IngredientRepository ingredientRepository;

    @Autowired
    public IngredientServiceImpl(IngredientRepository ingredientRepository) { this.ingredientRepository = ingredientRepository; }

    @Override
    @Transactional
    public Ingredient saveIngredient(Ingredient ingredient) { return ingredientRepository.save(ingredient); }

    @Override
    public List<Ingredient> getAllIngredients() {
        return ingredientRepository.findAll();
    }

    @Override
    public List<Ingredient> getIngredientsByIds(Set<Long> ingredientIds) {
        return ingredientRepository.findByIdIn(ingredientIds);
    }

    @Override
    public void deleteIngredient(Long id) {
        ingredientRepository.deleteById(id);
    }
}

