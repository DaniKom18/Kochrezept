package org.team7.kochrezeptbackend.controller;

import org.team7.kochrezeptbackend.entity.Ingredient;
import org.team7.kochrezeptbackend.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ingredients")
public class IngredientController {

    private final IngredientService ingredientService;

    @Autowired
    public IngredientController(IngredientService ingredientService) {
        this.ingredientService = ingredientService;
    }

    @PostMapping
    public ResponseEntity<Ingredient> createIngredient(@RequestBody Ingredient ingredient) {
        Ingredient savedIngredient = ingredientService.saveIngredient(ingredient);
        return new ResponseEntity<>(savedIngredient, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ingredient> getIngredientById(@PathVariable Long id) {
        Optional<Ingredient> ingredient = ingredientService.getIngredientById(id);
        return ingredient.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    public ResponseEntity<List<Ingredient>> getAllIngredient() {
        List<Ingredient> ingredients = ingredientService.getAllIngredient();
        return new ResponseEntity<>(ingredients, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ingredient> updateIngredient(@PathVariable Long id, @RequestBody Ingredient ingredient) {
        if (!ingredient.getId().equals(id)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Optional<Ingredient> existingIngredient = ingredientService.getIngredientById(id);
        if (existingIngredient.isPresent()) {
            Ingredient updatedIngredient = ingredientService.updateIngredient(ingredient);
            return new ResponseEntity<>(updatedIngredient, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIngredient(@PathVariable Long id) {
        Optional<Ingredient> ingredient = ingredientService.getIngredientById(id);
        if (ingredient.isPresent()) {
            ingredientService.deleteIngredient(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

