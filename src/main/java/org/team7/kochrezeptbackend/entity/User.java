package org.team7.kochrezeptbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private String username;

    @Column
    private String email;

    @Column(nullable = false)
    private Double xp;

    @Column(nullable = false)
    private Integer level;

    @Column
    private Integer countOfUploadedRecipes;

    @Column
    private Integer countOfFavoriteRecipes;

    @ElementCollection
    @CollectionTable(name = "user_favorite_recipes", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "recipe_id")
    private Set<Long> favRecipes;

    @ElementCollection
    @CollectionTable(name = "user_recipes", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "recipe_id")
    private Set<Long> myRecipes;
}
