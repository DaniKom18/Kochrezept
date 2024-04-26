package org.team7.kochrezeptbackend.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.team7.kochrezeptbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    // Benutzerdefinierte Abfragen für Benutzer können hier definiert werden
    @Query("SELECT u FROM User u ORDER BY u.level DESC, u.xp DESC")
    List<User> findTop10ByOrderByLevelDesc(Pageable pageable);
}
