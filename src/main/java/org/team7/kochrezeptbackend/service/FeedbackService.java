package org.team7.kochrezeptbackend.service;

import org.team7.kochrezeptbackend.entity.Feedback;

import java.util.List;
import java.util.Optional;

public interface FeedbackService {
    Feedback saveFeedback(Feedback feedback);
    Optional<Feedback> getFeedbackById(Long id);
    List<Feedback> getAllFeedbacks();
    Feedback updateFeedback(Feedback feedback);
    void deleteFeedback(Long id);
    List<Feedback> findFeedbackByRecipeId(Long recipeId);
}
