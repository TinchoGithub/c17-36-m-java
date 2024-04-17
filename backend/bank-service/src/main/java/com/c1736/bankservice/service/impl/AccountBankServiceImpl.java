package com.c1736.bankservice.service.impl;

import com.c1736.bankservice.entities.AccountBank;
import com.c1736.bankservice.entities.AccountTransfer;
import com.c1736.bankservice.repository.AccountTransferRepository;
import com.c1736.bankservice.repository.IAccountBankRepository;
import com.c1736.bankservice.service.AccountBankService;
import com.c1736.bankservice.service.dto.request.TransferRequestDto;
import com.c1736.bankservice.service.exceptions.AccountBankNotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AccountBankServiceImpl implements AccountBankService {

    @Autowired
    AccountTransferRepository accountTransferRepository;
    @Autowired
    IAccountBankRepository iAccountBankRepository;


    @Override
    public void Transfer(TransferRequestDto transferRequestDto) {
        AccountBank fromAccount =iAccountBankRepository.findById(transferRequestDto.getFromAccount())
                .orElseThrow(()-> new AccountBankNotFound("Cuenta de origen no encontrada"));

        AccountBank toAccount = iAccountBankRepository.findById(transferRequestDto.getToAccount())
                .orElseThrow(()-> new AccountBankNotFound("Cuenta Destino no encontrada"));

        if(fromAccount.getBalance().compareTo(transferRequestDto.getAmount())<0){
            throw new IllegalArgumentException("Saldo insuficiente para realizar la transferencia");
        }

        fromAccount.setBalance(fromAccount.getBalance().subtract(transferRequestDto.getAmount()));
        toAccount.setBalance(toAccount.getBalance().add(transferRequestDto.getAmount()));

        AccountTransfer transfer = new AccountTransfer();
        transfer.setFromAccount(fromAccount);
        transfer.setToAccount(toAccount);
        transfer.setAmount(transferRequestDto.getAmount());
        transfer.setDescription(transferRequestDto.getDescription());
        transfer.setTransferDate(LocalDateTime.now());

        accountTransferRepository.save(transfer);
        iAccountBankRepository.save(fromAccount);
        iAccountBankRepository.save(toAccount);

    }
}
