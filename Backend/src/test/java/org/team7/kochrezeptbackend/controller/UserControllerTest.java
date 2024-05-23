package org.team7.kochrezeptbackend.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.team7.kochrezeptbackend.entity.User;
import org.team7.kochrezeptbackend.service.RecipeService;
import org.team7.kochrezeptbackend.service.UserService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
public class UserControllerTest {

  @MockBean
  UserService userService;

  UserController userController;

  @BeforeEach
  public void setup() {
    userController = new UserController(userService);
  }

  @Test
  public void test_createUser_newUserSavedSuccessfully() {
    // Arrange
    User requestUser = new User();
    requestUser.setId(UUID.randomUUID());
    requestUser.setUsername("testUser");

    when(userService.getUserById(requestUser.getId())).thenReturn(Optional.empty());
    when(userService.saveUser(any(User.class))).thenReturn(User.createUser(requestUser.getId(), requestUser.getUsername()));

    // Act
    ResponseEntity<User> response = userController.createUser(requestUser);

    // Assert
    assertEquals(HttpStatus.CREATED, response.getStatusCode());
    assertEquals(requestUser.getId(), response.getBody().getId());
    assertEquals(requestUser.getUsername(), response.getBody().getUsername());
    assertEquals(0, response.getBody().getLevel());
    assertEquals(0.0, response.getBody().getXp());
  }

  @Test
  public void test_returns_user_with_valid_uuid() {
    // Arrange
    UUID validId = UUID.randomUUID();
    User user = new User();
    user.setId(validId);
    user.setUsername("testUser");
    user.setXp(0.0);
    user.setLevel(0);
    Optional<User> expectedUser = Optional.of(user);
    Mockito.when(userService.getUserById(validId)).thenReturn(expectedUser);

    // Act
    ResponseEntity<User> response = userController.getUserById(validId);

    // Assert
    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals(expectedUser.get(), response.getBody());
  }

  @Test
  public void test_returns_users_in_descending_order() {
    // Arrange
    List<User> users = new ArrayList<>();
    User user1 = new User();
    user1.setXp(100.0);
    User user2 = new User();
    user2.setXp(200.0);
    users.add(user1);
    users.add(user2);

    Mockito.when(userService.getLeaderboard()).thenReturn(users);

    // Act
    ResponseEntity<List<User>> response = userController.getLeaderboard();

    // Assert
    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals(users, response.getBody());
  }

  @Test
  public void test_updateUser_XP() {
    // Arrange
    UUID id = UUID.randomUUID();
    User requestUser = new User();
    requestUser.setId(id);
    requestUser.setXp(49.0);

    User existingUser = new User();
    existingUser.setId(id);
    existingUser.setXp(50.0);
    existingUser.setLevel(0);

    Mockito.when(userService.getUserById(id)).thenReturn(Optional.of(existingUser));
    Mockito.when(userService.updateUser(existingUser)).thenReturn(existingUser);

    // Act
    ResponseEntity<User> response = userController.updateUser(id, requestUser);

    // Assert
    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals(99.0, existingUser.getXp());
    assertEquals(0, existingUser.getLevel());
  }

  @Test
  public void test_updateUser_XP_and_level() {
    // Arrange
    UUID id = UUID.randomUUID();
    User requestUser = new User();
    requestUser.setId(id);
    requestUser.setXp(51.0);

    User existingUser = new User();
    existingUser.setId(id);
    existingUser.setXp(50.0);
    existingUser.setLevel(0);

    Mockito.when(userService.getUserById(id)).thenReturn(Optional.of(existingUser));
    Mockito.when(userService.updateUser(existingUser)).thenReturn(existingUser);

    // Act
    ResponseEntity<User> response = userController.updateUser(id, requestUser);

    // Assert
    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals(1.0, existingUser.getXp());
    assertEquals(1, existingUser.getLevel());
  }

  @Test
  public void test_deleteUser_validUUID() {
    // Arrange
    UUID id = UUID.randomUUID();
    User user = new User();
    user.setId(id);
    when(userService.getUserById(id)).thenReturn(Optional.of(user));

    // Act
    ResponseEntity<Void> response = userController.deleteUser(id);

    // Assert
    assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
    verify(userService, times(1)).deleteUser(id);
  }

}
