package org.team7.kochrezeptbackend.repository;

import org.team7.kochrezeptbackend.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findCommentsByFeedbackId(Long feedbackId);
}
