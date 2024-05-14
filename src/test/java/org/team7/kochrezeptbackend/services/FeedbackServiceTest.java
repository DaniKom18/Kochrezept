package org.team7.kochrezeptbackend.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.team7.kochrezeptbackend.entity.Feedback;
import org.team7.kochrezeptbackend.repository.FeedbackRepository;
import org.team7.kochrezeptbackend.service.FeedbackService;
import org.team7.kochrezeptbackend.service.impl.FeedbackServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
public class FeedbackServiceTest {
    @MockBean
    FeedbackRepository feedbackRepository;
    FeedbackService feedbackService;
    @BeforeEach
    public void setupFeedback(){
        feedbackService = new FeedbackServiceImpl(feedbackRepository);
    }

    //savefeedback
    @Test
    public void test_save_valid_feedback() {
        // Arrange
        Feedback feedback = new Feedback();
        feedback.setRating(4.0);
        Feedback responseFeedback = new Feedback();
        responseFeedback.setRating(4.0);
        Mockito.when(feedbackRepository.save(feedback)).thenReturn(responseFeedback);

        // Act
        Feedback savedFeedback = feedbackService.saveFeedback(feedback);

        // Assert
        verify(feedbackRepository, times(1)).save(feedback);
        assertEquals(feedback.getRating(), savedFeedback.getRating());
    }

    //findByRecipeId
    @Test
    public void test_valid_recipeId() {
        // Arrange
        Long recipeId = 1L;
        List<Feedback> expectedFeedbacks = new ArrayList<>();
        Feedback feedback1 = new Feedback();
        feedback1.setId(1L);
        feedback1.setRating(4.5);
        feedback1.setUsername("user1");
        expectedFeedbacks.add(feedback1);
        Feedback feedback2 = new Feedback();
        feedback2.setId(2L);
        feedback2.setRating(3.0);
        feedback2.setUsername("user2");
        expectedFeedbacks.add(feedback2);

        Mockito.when(feedbackRepository.findFeedbackByRecipeId(recipeId)).thenReturn(expectedFeedbacks);

        // Act
        List<Feedback> actualFeedbacks = feedbackService.findByRecipeId(recipeId);

        // Assert
        assertEquals(expectedFeedbacks, actualFeedbacks);
    }

    //findById
    @Test
    public void test_return_optional_with_existing_id() {
        // Arrange
        Long feedbackId = 1L;
        Feedback feedback = new Feedback();
        feedback.setId(feedbackId);
        Optional<Feedback> expectedFeedback = Optional.of(feedback);

        Mockito.when(feedbackRepository.findById(feedbackId)).thenReturn(expectedFeedback);

        // Act
        Optional<Feedback> actualFeedback = feedbackService.findById(feedbackId);

        // Assert
        assertEquals(expectedFeedback, actualFeedback);
    }

    //updateFeedback
    @Test
    public void test_updateFeedback_rating_updated() {
        // Arrange
        Feedback existingFeedback = new Feedback();
        existingFeedback.setRating(3.0);

        Feedback updatedFeedback = new Feedback();
        updatedFeedback.setRating(4.5);

        Mockito.when(feedbackRepository.save(any(Feedback.class))).thenReturn(updatedFeedback);

        // Act
        Feedback result = feedbackService.updateFeedback(updatedFeedback,existingFeedback);

        // Assert
        assertEquals(updatedFeedback.getRating(), result.getRating());
    }
}
