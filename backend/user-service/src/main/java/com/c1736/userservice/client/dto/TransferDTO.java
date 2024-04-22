package com.c1736.userservice.client.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class TransferDTO {

    private BankDTO fromAccount;
    private BankDTO toAccount;
    private BigDecimal amount;
    private String Description;
    private LocalDateTime transferData;
}
