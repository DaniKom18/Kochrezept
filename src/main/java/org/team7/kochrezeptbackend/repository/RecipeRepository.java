package org.team7.kochrezeptbackend.repository;

import org.team7.kochrezeptbackend.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    List<Recipe> findByIdIn(Set<Long> recipeIds);
}
