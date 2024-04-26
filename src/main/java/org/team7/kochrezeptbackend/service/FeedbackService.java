package org.team7.kochrezeptbackend.service;

import org.team7.kochrezeptbackend.entity.Feedback;

import java.util.List;
import java.util.Optional;

public interface FeedbackService {
    Feedback saveFeedback(Feedback feedback);
    List<Feedback> findByRecipeId(Long recipeId);
    Optional<Feedback> findById(Long feedbackId);
}
