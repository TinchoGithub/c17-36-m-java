package com.c1736.userservice.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
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
    @Column(name = "password")
    private String password;
    @Column(length = 15)
    @Size(min = 11, max = 11, message = "El campo 'phone' debe tener 11 caracteres")
    @NotBlank(message = "El campo 'phone' es obligatorio")
    private String phone;
    @ManyToOne
    @JoinColumn(name = "id_role")
    private Role role;


}
