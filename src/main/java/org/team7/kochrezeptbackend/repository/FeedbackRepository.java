package org.team7.kochrezeptbackend.repository;

import org.team7.kochrezeptbackend.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findByIdIn(Set<Long> feedbackIds);
}
