package com.c1736.userservice.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
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
    @Pattern(regexp = "^\+?54\s9\d{2}\s\d{3}\s\d{4}$", message = "El campo 'numberPhone' debe ser un número de teléfono celular válido. Ingrese el formato +54 9XX XXXX XXXX")
    @NotBlank(message = "El campo 'phone' es obligatorio")
    private String phone;
    @ManyToOne
    @JoinColumn(name = "id_role")
    private Role role;


}
