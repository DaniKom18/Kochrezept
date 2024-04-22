package org.team7.kochrezeptbackend.service;

import org.team7.kochrezeptbackend.entity.Comment;

import java.util.List;
import java.util.Set;


public interface CommentService {
    Comment saveComment(Comment comment);
    List<Comment> getCommentsByIds(Set<Long> commentIds);
}
