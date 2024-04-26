package org.team7.kochrezeptbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {

    @Id
    private UUID id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private Double xp;

    @Column(nullable = false)
    private Integer level;

    @ElementCollection
    @CollectionTable(name = "user_favorite_recipes", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "recipe_id")
    private Set<Long> favRecipes;

    @ElementCollection
    @CollectionTable(name = "user_recipes", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "recipe_id")
    private Set<Long> myRecipes;

    public static User createUser(UUID id, String username){
        User user = new User();
        user.setId(id);
        user.setUsername(username);
        user.setLevel(0);
        user.setXp(0.0);
        user.setMyRecipes(Set.of());
        user.setFavRecipes(Set.of());
        return user;

    }
}
