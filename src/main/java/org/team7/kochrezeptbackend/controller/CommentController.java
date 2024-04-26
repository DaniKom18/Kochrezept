package org.team7.kochrezeptbackend.controller;

import org.team7.kochrezeptbackend.entity.Comment;
import org.team7.kochrezeptbackend.entity.Feedback;
import org.team7.kochrezeptbackend.entity.Recipe;
import org.team7.kochrezeptbackend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team7.kochrezeptbackend.service.FeedbackService;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api")
@CrossOrigin(originPatterns = "*")
public class CommentController {

    private final CommentService commentService;
    private final FeedbackService feedbackService;

    @Autowired
    public CommentController(CommentService commentService, FeedbackService feedbackService) {
        this.commentService = commentService;
        this.feedbackService = feedbackService;
    }

    @PostMapping("/feedback/{feedbackId}/comments")
    public ResponseEntity<Comment> createComment(@PathVariable Long feedbackId, @RequestBody Comment commentRequest) {
        Optional<Feedback> foundFeedback = feedbackService.findById(feedbackId);
        if (foundFeedback.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        commentRequest.setFeedback(foundFeedback.get());
        Comment savedComment = commentService.saveComment(commentRequest);
        return new ResponseEntity<>(savedComment, HttpStatus.CREATED);
    }

    @GetMapping("/feedback/{feedbackId}/comments")
    public ResponseEntity<List<Comment>> getAllCommentsOfFeedback(@PathVariable Long feedbackId) {
        Optional<Feedback> foundFeedback = feedbackService.findById(feedbackId);
        if (foundFeedback.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        List<Comment> comments = commentService.findByFeedbackId(feedbackId);
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }
}
