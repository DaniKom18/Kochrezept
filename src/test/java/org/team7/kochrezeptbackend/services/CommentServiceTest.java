package org.team7.kochrezeptbackend.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.team7.kochrezeptbackend.entity.Comment;
import org.team7.kochrezeptbackend.repository.CommentRepository;
import org.team7.kochrezeptbackend.service.CommentService;
import org.team7.kochrezeptbackend.service.impl.CommentServiceImpl;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
public class CommentServiceTest {
    @MockBean
    CommentRepository commentRepository;

    CommentService commentService;
    @BeforeEach
    public void setUpComment(){
        commentService = new CommentServiceImpl(commentRepository);
    }

    //commentSave
    @Test
    public void test_save_valid_comment() {
        // Arrange
        CommentServiceImpl commentService = new CommentServiceImpl(commentRepository);
        Comment comment = new Comment();
        comment.setText("Test comment");
        Comment responseComment = new Comment();
        responseComment.setText("Test comment");
        responseComment.setId(1L);
        Mockito.when(commentRepository.save(comment)).thenReturn(responseComment);

        // Act
        Comment savedComment = commentService.saveComment(comment);

        // Assert
        verify(commentRepository, times(1)).save(comment);
        assertEquals(comment.getText(), savedComment.getText());
    }

    //findByFeedbackId
    @Test
    public void test_valid_feedbackId() {
        // Arrange
        Long feedbackId = 1L;
        List<Comment> expectedComments = new ArrayList<>();
        Comment comment1 = new Comment();
        Comment comment2 = new Comment();
        expectedComments.add(comment1);
        expectedComments.add(comment2);
        when(commentRepository.findCommentsByFeedbackId(feedbackId)).thenReturn(expectedComments);

        // Act
        List<Comment> actualComments = commentService.findByFeedbackId(feedbackId);

        // Assert
        assertEquals(expectedComments, actualComments);
    }
}
