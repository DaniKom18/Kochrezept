package org.team7.kochrezeptbackend.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.PageRequest;
import org.team7.kochrezeptbackend.entity.User;
import org.team7.kochrezeptbackend.repository.UserRepository;
import org.team7.kochrezeptbackend.service.UserService;
import org.team7.kochrezeptbackend.service.impl.UserServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

@SpringBootTest
public class UserServiceTest {

    @MockBean
    UserRepository userRepository;

    UserService userService;

    @BeforeEach
    public void setup(){
        userService = new UserServiceImpl(userRepository);
    }

    @Test
    public void test_save_new_user() {
        // Arrange
        User user = new User();

        // Act
        userService.saveUser(user);

        // Assert
        verify(userRepository, times(1)).save(user);
    }

    @Test
    public void test_returns_user_with_given_id() {
        // Arrange
        UUID id = UUID.randomUUID();
        User user = new User();
        user.setId(id);
        user.setUsername("testUser");
        user.setXp(100.0);
        user.setLevel(5);
        when(userRepository.findById(id)).thenReturn(Optional.of(user));

        // Act
        Optional<User> result = userService.getUserById(id);

        // Assert
        assertTrue(result.isPresent());
        assertEquals(user, result.get());
    }

    @Test
    public void test_getLeaderboard() {
        List<User> expectedUsers = new ArrayList<>();
        // Add 10 users with different levels and xp values
        for (int i = 0; i < 10; i++) {
            User user = new User();
            user.setId(UUID.randomUUID());
            user.setUsername("Test User " + i);
            user.setLevel(i);
            user.setXp((double) i);
            expectedUsers.add(user);
        }

        when(userRepository.findTop10ByOrderByLevelDesc(PageRequest.of(0, 10))).thenReturn(expectedUsers);

        List<User> actualUsers = userService.getLeaderboard();

        assertEquals(expectedUsers, actualUsers);
    }

    @Test
    public void test_updateUser_allFieldsProvided() {
        UUID userId = UUID.randomUUID();
        // Arrange
        User existingUser = new User();
        existingUser.setId(userId);
        existingUser.setUsername("testUser");
        existingUser.setXp(50.0);
        existingUser.setLevel(3);


        User updatedUser = new User();
        updatedUser.setId(userId);
        updatedUser.setUsername("updatedUser");
        updatedUser.setXp(80.0);
        updatedUser.setLevel(4);

        when(userRepository.findById(updatedUser.getId())).thenReturn(Optional.of(existingUser));
        when(userRepository.save(any(User.class))).thenReturn(updatedUser);

        // Act
        User result = userService.updateUser(updatedUser);

        // Assert
        assertEquals(updatedUser.getUsername(), result.getUsername());
        assertEquals(updatedUser.getXp(), result.getXp());
        assertEquals(updatedUser.getLevel(), result.getLevel());
    }

    @Test
    public void test_deleteUser_validUUID() {
        // Arrange
        UUID validUUID = UUID.randomUUID();

        // Act
        userService.deleteUser(validUUID);

        // Assert
        verify(userRepository, times(1)).deleteById(validUUID);
    }
}
