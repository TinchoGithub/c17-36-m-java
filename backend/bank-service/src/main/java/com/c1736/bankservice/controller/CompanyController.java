package com.c1736.bankservice.controller;

import com.c1736.bankservice.service.dto.request.AccountBankRequestDto;
import com.c1736.bankservice.service.dto.request.UpdateAccountBankRequestDto;
import com.c1736.bankservice.service.impl.AccountBankService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/company")
public class CompanyController {
    private final AccountBankService accountBankService;

    public CompanyController(AccountBankService accountBankService) {
        this.accountBankService = accountBankService;
    }

    @PostMapping("/account")
    public ResponseEntity<Void> saveAccount(@RequestBody AccountBankRequestDto accountBankRequestDto) {
        accountBankService.saveAccount(accountBankRequestDto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/updateAccount/{id}")
    public ResponseEntity<Void> updateAccount(@PathVariable Long id, @RequestBody UpdateAccountBankRequestDto updateAccountBankRequestDto) {
        updateAccountBankRequestDto.setId(id);
        accountBankService.updateAccount(updateAccountBankRequestDto);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/deleteAccount/{id}")
    public ResponseEntity<Void> deleteAccountBank(@PathVariable Long id) {
        accountBankService.deleteAccountBank(id);
        return ResponseEntity.noContent().build();
    }
}
