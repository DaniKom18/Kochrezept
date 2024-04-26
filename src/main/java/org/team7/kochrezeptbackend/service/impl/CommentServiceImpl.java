package org.team7.kochrezeptbackend.service.impl;

import org.team7.kochrezeptbackend.entity.Comment;
import org.team7.kochrezeptbackend.repository.CommentRepository;
import org.team7.kochrezeptbackend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;

    @Autowired
    public CommentServiceImpl(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Override
    @Transactional
    public Comment saveComment(Comment comment) {
        return commentRepository.save(comment);
    }

    @Override
    public List<Comment> findByFeedbackId(Long feedbackId) {
        return commentRepository.findCommentsByFeedbackId(feedbackId);
    }
}
