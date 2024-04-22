package org.team7.kochrezeptbackend.repository;

import org.team7.kochrezeptbackend.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByIdIn(Set<Long> commentIds);
}
