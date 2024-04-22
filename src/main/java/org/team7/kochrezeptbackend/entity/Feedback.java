package org.team7.kochrezeptbackend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "feedbacks")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Double rating;

    @ElementCollection
    @CollectionTable(name = "feedback_comments", joinColumns = @JoinColumn(name = "feedback_id"))
    @Column(name = "comment_id")
    private Set<Long> comments;

    @Column
    private UUID userId;  // Verbindung zu User-Entität

    @Column
    private Long recipeId;  // Verbindung zu Recipe-Entität
}
