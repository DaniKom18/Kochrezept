package org.team7.kochrezeptbackend.service.impl;

import org.team7.kochrezeptbackend.entity.User;
import org.team7.kochrezeptbackend.repository.UserRepository;
import org.team7.kochrezeptbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<User> getUserById(UUID id) {
        return userRepository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    @Transactional
    public User updateUser(User updatedUser) {
        return userRepository.findById(updatedUser.getId())
                .map(existingUser -> {
                    if (updatedUser.getUsername() != null) existingUser.setUsername(updatedUser.getUsername());
                    if (updatedUser.getEmail() != null) existingUser.setEmail(updatedUser.getEmail());
                    if (updatedUser.getCountOfUploadedRecipes() != null) existingUser.setCountOfUploadedRecipes(updatedUser.getCountOfUploadedRecipes());
                    if (updatedUser.getCountOfFavoriteRecipes() != null) existingUser.setCountOfFavoriteRecipes(updatedUser.getCountOfFavoriteRecipes());
                    if (updatedUser.getFavRecipes() != null) existingUser.setFavRecipes(updatedUser.getFavRecipes());
                    if (updatedUser.getXp() != null) existingUser.setXp(updatedUser.getXp());
                    if (updatedUser.getLevel() != null) existingUser.setLevel(updatedUser.getLevel());
                    return userRepository.save(existingUser);
                })
                .orElseThrow(() -> new RuntimeException("User not found with id: " + updatedUser.getId()));
    }

    @Override
    @Transactional
    public void deleteUser(UUID id) {
        userRepository.deleteById(id);
    }
}
