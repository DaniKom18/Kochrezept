package org.team7.kochrezeptbackend.service;

import org.team7.kochrezeptbackend.entity.Feedback;

import java.util.List;
import java.util.Set;

public interface FeedbackService {
    Feedback saveFeedback(Feedback feedback);
    List<Feedback> getFeedbacksByIds(Set<Long> feedbackIds);
    Feedback updateFeedback(Feedback feedback);
}
