package org.team7.kochrezeptbackend.repository;

import org.team7.kochrezeptbackend.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    // Hier können Methoden für Rezeptspezifische Abfragen hinzugefügt werden
}
