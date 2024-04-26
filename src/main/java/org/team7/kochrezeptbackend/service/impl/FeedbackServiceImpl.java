package org.team7.kochrezeptbackend.service.impl;

import org.team7.kochrezeptbackend.entity.Feedback;
import org.team7.kochrezeptbackend.repository.FeedbackRepository;
import org.team7.kochrezeptbackend.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    private final FeedbackRepository feedbackRepository;

    @Autowired
    public FeedbackServiceImpl(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    @Override
    @Transactional
    public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    @Override
    public List<Feedback> getFeedbacksByIds(Set<Long> feedbackIds) {
        return feedbackRepository.findByIdIn(feedbackIds);
    }


    @Override
    @Transactional
    public Feedback updateFeedback(Feedback updatedFeedback) {
        return feedbackRepository.findById(updatedFeedback.getId())
                .map(existingFeedback -> {
                    if (updatedFeedback.getComments() != null) existingFeedback.setComments(updatedFeedback.getComments());
                    if (updatedFeedback.getRating() != null) existingFeedback.setRating(updatedFeedback.getRating());
                    return feedbackRepository.save(existingFeedback);
                })
                .orElseThrow(() -> new RuntimeException("Feedback not found with id: " + updatedFeedback.getId()));
    }

}