package com.c1736.bankservice.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Table(name = "accountBank")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AccountBank implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El correo electrónico es obligatorio")
    @Email(message = "El correo electrónico debe ser válido")
    private String email;

    @NotNull(message = "El tipo de cuenta es obligatorio")
    @Enumerated(EnumType.STRING)
    @Column(name="accountType")
    private AccountTypeEnum accountType;

    @NotNull(message = "El balance es obligatorio")
    private String balance;

    @NotNull(message = "El tipo de moneda es obligatorio")
    @Enumerated(EnumType.STRING)
    @Column(name="typeCoin")
    private TypeCoinEnum typeCoin;
}
