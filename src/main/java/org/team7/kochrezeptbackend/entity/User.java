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
    private double xp;

    @Column(nullable = false)
    private int level;

    @Column
    private Integer countOfUploadedRecipes;

    @Column
    private Integer countOfFavoriteRecipes;

    @ElementCollection
    @CollectionTable(name = "user_favorite_recipes", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "recipe_id")
    private Set<Integer> favRecipes;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Feedback> feedbacks;
}
