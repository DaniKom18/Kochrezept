package org.team7.kochrezeptbackend.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.team7.kochrezeptbackend.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    List<Recipe> findByIdIn(Set<Long> recipeIds);
    List<Recipe> findRecipeByOwnerId(UUID userId);
    @Query("SELECT r FROM Recipe r WHERE r.visibility = true")
    List<Recipe> findAllRecipesWithVisibilityTrue();
    @Query("SELECT r FROM Recipe r JOIN r.markedAsFavorite u WHERE u.id = :userId")
    List<Recipe> findAllFavoriteRecipesByUserId(@Param("userId")UUID userId);
}
