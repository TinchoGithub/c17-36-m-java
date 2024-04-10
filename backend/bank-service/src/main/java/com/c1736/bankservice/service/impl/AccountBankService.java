package com.c1736.bankservice.service.impl;

import com.c1736.bankservice.client.IUserFeignClient;
import com.c1736.bankservice.entities.AccountBank;
import com.c1736.bankservice.repository.IAccountBankRepository;
import com.c1736.bankservice.service.IAccountBankService;
import com.c1736.bankservice.service.dto.request.AccountBankRequestDto;
import com.c1736.bankservice.service.dto.request.UpdateAccountBankRequestDto;
import com.c1736.bankservice.service.dto.response.AccountBankResponseDto;
import com.c1736.bankservice.service.exceptions.AccountBankNotFound;
import com.c1736.bankservice.service.exceptions.NoDataFound;
import com.c1736.bankservice.service.exceptions.UserNotFound;
import com.c1736.bankservice.service.mapper.request.IAccountBankRequestMapper;
import com.c1736.bankservice.service.mapper.response.IAccountBankResponseMapper;
import jakarta.transaction.Transactional;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class AccountBankService implements IAccountBankService {
    private final IAccountBankRepository accountBankRepository;
    private final IAccountBankRequestMapper accountBankRequestMapper;
    private final IAccountBankResponseMapper accountBankResponseMapper;
    private final IUserFeignClient userFeignClient;

    public AccountBankService(IAccountBankRepository accountBankRepository, IAccountBankRequestMapper accountBankRequestMapper, IAccountBankResponseMapper accountBankResponseMapper, IUserFeignClient userFeignClient) {
        this.accountBankRepository = accountBankRepository;
        this.accountBankRequestMapper = accountBankRequestMapper;
        this.accountBankResponseMapper = accountBankResponseMapper;
        this.userFeignClient = userFeignClient;
    }

    @Override
    public AccountBankResponseDto getAccountBank(Long id) {
        AccountBank account = accountBankRepository.findById(id).orElseThrow(AccountBankNotFound::new);
        return accountBankResponseMapper.toResponseAccountBank(account);
    }

    @Override
    public List<AccountBankResponseDto> getAllAccountBank() {
        List<AccountBank> accountBanks = accountBankRepository.findAll();
        if (accountBanks.isEmpty()) {
            throw new AccountBankNotFound();
        }
        return accountBanks.stream()
                .map(accountBankResponseMapper::toResponseAccountBank)
                .collect(Collectors.toList());
    }

    @Override
    public void saveAccount(AccountBankRequestDto accountBankRequestDto) {
        String balanceFormat = "$" + accountBankRequestDto.getBalance();
        accountBankRequestDto.setBalance(balanceFormat);

        AccountBank accountBank = accountBankRequestMapper.toAccountBankRequest(accountBankRequestDto);
        accountBankRepository.save(accountBank);
    }

    @Override
    public void updateAccount(UpdateAccountBankRequestDto updateAccountBankRequestDto) {
        Optional<AccountBank> optionalAccountBank = accountBankRepository.findById(updateAccountBankRequestDto.getId());

        if (optionalAccountBank.isPresent()) {
            AccountBank accountBank = optionalAccountBank.get();
            accountBank.setEmail(updateAccountBankRequestDto.getEmail());
            accountBank.setAccountType(updateAccountBankRequestDto.getAccountType());
            accountBank.setTypeCoin(updateAccountBankRequestDto.getTypeCoin());
            accountBankRepository.save(accountBank);
        } else {
            throw new AccountBankNotFound();
        }
    }

    @Override
    public void deleteAccountBank(Long id) {
        try {
            accountBankRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new AccountBankNotFound();
        }
    }
}
