package com.c1736.userservice.entities;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "firstname")
    private String firstName;
    @Column(name = "lastname")
    private String lastName;
    @Column(unique = true, nullable = false, length = 50)
    private String email;
    @Column(unique = true)
    private String password;
    @Column(length = 15)
    private String tel;
    @ManyToOne
    @JoinColumn(name = "id_role")
    private Role role;


}
