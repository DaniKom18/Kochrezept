package org.team7.kochrezeptbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team7.kochrezeptbackend.entity.Ingredient;
import org.team7.kochrezeptbackend.repository.IngredientRepository;
import org.team7.kochrezeptbackend.service.IngredientService;

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
    public Optional<Ingredient> getIngredientById(Long id) { return ingredientRepository.findById(id); }

    @Override
    public List<Ingredient> getAllIngredient() {
        return ingredientRepository.findAll();
    }

    @Override
    public Ingredient updateIngredient(Ingredient updatedIngredient) {
        return ingredientRepository.findById(updatedIngredient.getId())
                .map(existingIngredient -> {
                    if (updatedIngredient.getName() != null) existingIngredient.setName(updatedIngredient.getName());
                    if (updatedIngredient.getQuantity() != null) existingIngredient.setQuantity(updatedIngredient.getQuantity());
                    if (updatedIngredient.getMeasure() != null) existingIngredient.setMeasure(updatedIngredient.getMeasure());
                    return ingredientRepository.save(existingIngredient);
                })
                .orElseThrow(() -> new RuntimeException("Ingredient not found with id:" + updatedIngredient.getId()));
    }

    @Override
    public void deleteIngredient(Long id) {
        ingredientRepository.deleteById(id);
    }
}

