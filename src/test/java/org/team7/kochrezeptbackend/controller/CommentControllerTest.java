package org.team7.kochrezeptbackend.controller;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.team7.kochrezeptbackend.entity.Comment;
import org.team7.kochrezeptbackend.entity.Feedback;
import org.team7.kochrezeptbackend.service.CommentService;
import org.team7.kochrezeptbackend.service.FeedbackService;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class CommentControllerTest {

    @MockBean
    FeedbackService feedbackService;
    @MockBean
    CommentService commentService;
    @Test
    public void test_create_comment_valid_feedback_id_and_request() {


        // Arrange
        Long feedbackId = 1L;
        Comment commentRequest = new Comment();
        commentRequest.setText("Test comment");

        Feedback feedback = new Feedback();
        feedback.setId(feedbackId);

        when(feedbackService.findById(feedbackId)).thenReturn(Optional.of(feedback));
        when(commentService.saveComment(commentRequest)).thenReturn(commentRequest);

        CommentController commentController = new CommentController(commentService, feedbackService);

        // Act
        ResponseEntity<Comment> response = commentController.createComment(feedbackId, commentRequest);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(commentRequest, response.getBody());
    }
}
