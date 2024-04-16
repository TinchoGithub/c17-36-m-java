package com.c1736.bankservice.service;

import com.c1736.bankservice.service.dto.request.AccountBankRequestDto;
import com.c1736.bankservice.service.dto.request.UpdateAccountBankRequestDto;
import com.c1736.bankservice.service.dto.response.AccountBankResponseDto;

import java.util.List;

public interface IAccountBankService {
    AccountBankResponseDto getAccountBank(Long id);
    List<AccountBankResponseDto> getAllAccountBank();
    void saveAccount(AccountBankRequestDto accountBankRequestDto);
    void updateAccount(UpdateAccountBankRequestDto updateAccountBankRequestDto);
    void deleteAccountBank(Long id);
}
