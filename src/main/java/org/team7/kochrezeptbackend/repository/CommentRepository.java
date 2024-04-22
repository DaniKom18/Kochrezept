package org.team7.kochrezeptbackend.repository;

import org.team7.kochrezeptbackend.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    // Hier können zusätzliche benutzerdefinierte Methoden definiert werden
}
