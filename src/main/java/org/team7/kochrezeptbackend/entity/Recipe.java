package org.team7.kochrezeptbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "recipes")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Lob
    @Column(nullable = false)
    private String preparation;

    @ElementCollection
    @CollectionTable(name = "recipe_ingredients", joinColumns = @JoinColumn(name = "recipe_id"))
    @Column(name = "ingredient_id")
    private Set<Long> ingredients;

    @ElementCollection
    @CollectionTable(name = "recipe_feedbacks", joinColumns = @JoinColumn(name = "recipe_id"))
    @Column(name = "feedback_id")
    private Set<Long> feedbacks;

    @Column
    private String image;

    @Column
    private Double rating;

    @Column(nullable = false)
    private Boolean visibility;

    @Column(nullable = false)
    private Boolean isAnonymous;

    @Column
    private String author;
}
