package org.team7.kochrezeptbackend.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.team7.kochrezeptbackend.entity.Comment;
import org.team7.kochrezeptbackend.entity.Feedback;
import org.team7.kochrezeptbackend.service.CommentService;
import org.team7.kochrezeptbackend.service.FeedbackService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class CommentControllerTest {

    @MockBean
    FeedbackService feedbackService;
    @MockBean
    CommentService commentService;
    CommentController commentController;
    @BeforeEach
    public void setupComment(){
        commentController = new CommentController(commentService, feedbackService);
    }

    //Post-Mapping
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

        // Act
        ResponseEntity<Comment> response = commentController.createComment(feedbackId, commentRequest);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(commentRequest, response.getBody());
    }

    //Get-Mapping
    @Test
    public void test_valid_feedback_id() {
        // Arrange
        Long feedbackId = 1L;
        Feedback feedback = new Feedback();
        feedback.setId(feedbackId);
        List<Comment> expectedComments = new ArrayList<>();
        Comment comment1 = new Comment();
        comment1.setId(1L);
        comment1.setText("Comment 1");
        comment1.setFeedback(feedback);
        expectedComments.add(comment1);
        Comment comment2 = new Comment();
        comment2.setId(2L);
        comment2.setText("Comment 2");
        comment2.setFeedback(feedback);
        expectedComments.add(comment2);

        Mockito.when(feedbackService.findById(feedbackId)).thenReturn(Optional.of(feedback));
        Mockito.when(commentService.findByFeedbackId(feedbackId)).thenReturn(expectedComments);

        // Act
        ResponseEntity<List<Comment>> response = commentController.getAllCommentsOfFeedback(feedbackId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedComments, response.getBody());
    }
}
