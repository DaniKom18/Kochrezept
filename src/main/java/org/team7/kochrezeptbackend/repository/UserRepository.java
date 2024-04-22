package org.team7.kochrezeptbackend.repository;

import org.team7.kochrezeptbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    // Benutzerdefinierte Abfragen für Benutzer können hier definiert werden
}
