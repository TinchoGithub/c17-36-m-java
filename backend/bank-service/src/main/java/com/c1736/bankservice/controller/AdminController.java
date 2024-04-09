package com.c1736.bankservice.controller;

import com.c1736.bankservice.service.dto.response.AccountBankResponseDto;
import com.c1736.bankservice.service.impl.AccountBankService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {

    private final AccountBankService accountBankService;

    public AdminController(AccountBankService accountBankService) {
        this.accountBankService = accountBankService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<AccountBankResponseDto> getAccountBank(@PathVariable Long id) {
        Optional<AccountBankResponseDto> accountBank = accountBankService.getAccountBank(id);
        return accountBank.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<AccountBankResponseDto>> getAllAccountBank() {
        List<AccountBankResponseDto> accountBanks = accountBankService.getAllAccountBank();
        return ResponseEntity.ok(accountBanks);
    }

    @DeleteMapping("/deleteAccount/{id}")
    public ResponseEntity<Void> deleteAccountBank(@PathVariable Long id) {
        accountBankService.deleteAccountBank(id);
        return ResponseEntity.noContent().build();
    }
}
