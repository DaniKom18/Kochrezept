package org.team7.kochrezeptbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

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

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Ingredient> ingredients;

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Feedback> feedbacks;

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
