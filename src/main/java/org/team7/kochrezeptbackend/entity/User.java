package org.team7.kochrezeptbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {

    @Id
    private UUID id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private Double xp;

    @Column(nullable = false)
    private Integer level;

    public static User createUser(UUID id, String username){
        User user = new User();
        user.setId(id);
        user.setUsername(username);
        user.setLevel(0);
        user.setXp(0.0);
        return user;

    }
}
