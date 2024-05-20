package org.team7.kochrezeptbackend.service;

import org.team7.kochrezeptbackend.entity.Recipe;
import org.team7.kochrezeptbackend.entity.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserService {
    User saveUser(User user);
    Optional<User> getUserById(UUID id);
    List<User> getLeaderboard();
    User updateUser(User user);
    void deleteUser(UUID id);
}
