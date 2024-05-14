package org.team7.kochrezeptbackend.service.impl;

import org.springframework.data.domain.PageRequest;
import org.team7.kochrezeptbackend.entity.Recipe;
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
    public List<User> getLeaderboard() {
        return userRepository.findTop10ByOrderByLevelDesc(PageRequest.of(0, 10));
    }

    @Override
    @Transactional
    public User updateUser(User updatedUser) {
        Optional<User> foundUser = userRepository.findById(updatedUser.getId());

        if (foundUser.isEmpty()){
            throw new RuntimeException("User not found with id: " + updatedUser.getId());
        }

        User exsistingUser = foundUser.get();
        exsistingUser.setUsername(updatedUser.getUsername());
        exsistingUser.setXp(updatedUser.getXp());
        exsistingUser.setLevel(updatedUser.getLevel());

        return userRepository.save(exsistingUser);
    }

    @Override
    @Transactional
    public void deleteUser(UUID id) {
        userRepository.deleteById(id);
    }
}
