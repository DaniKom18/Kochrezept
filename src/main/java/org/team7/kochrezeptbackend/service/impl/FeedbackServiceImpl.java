package org.team7.kochrezeptbackend.service.impl;

import org.team7.kochrezeptbackend.entity.Feedback;
import org.team7.kochrezeptbackend.repository.FeedbackRepository;
import org.team7.kochrezeptbackend.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

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
    public List<Feedback> findByRecipeId(Long recipeId) {
        return feedbackRepository.findFeedbackByRecipeId(recipeId);
    }

    @Override
    public Optional<Feedback> findById(Long feedbackId) {
        return feedbackRepository.findById(feedbackId);
    }

    @Override
    @Transactional
    public Feedback updateFeedback(Feedback updatedFeedback, Feedback existingFeedback) {
        if (!existingFeedback.getRating().equals(updatedFeedback.getRating())){
            existingFeedback.setRating(updatedFeedback.getRating());
            return feedbackRepository.save(existingFeedback);
        }
        return existingFeedback;
    }
}
