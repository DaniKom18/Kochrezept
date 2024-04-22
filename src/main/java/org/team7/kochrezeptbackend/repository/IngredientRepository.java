package org.team7.kochrezeptbackend.repository;

import org.team7.kochrezeptbackend.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
    // Methoden für spezielle Abfragen von Zutaten können hier implementiert werden
}
