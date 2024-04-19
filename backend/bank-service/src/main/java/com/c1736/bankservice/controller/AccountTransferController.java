package com.c1736.bankservice.controller;

import com.c1736.bankservice.service.IAccountBankService;
import com.c1736.bankservice.service.dto.request.TransferRequestDto;
import com.c1736.bankservice.service.dto.response.TransferResponseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/transfers")
public class AccountTransferController {

    private final com.c1736.bankservice.service.IAccountBankService accountBankService;
    @Autowired
    public AccountTransferController(IAccountBankService accountBankService){
        this.accountBankService = accountBankService;
    }

    @PostMapping("/transfer")
    public ResponseEntity<TransferResponseDto> transfer(@RequestBody TransferRequestDto transferRequestDto){
        try {
            accountBankService.Transfer(transferRequestDto);
            return ResponseEntity.ok(new TransferResponseDto("Transferencia realizada con éxito."));
        } catch (Exception e){
            return ResponseEntity.badRequest().body(new TransferResponseDto("Error durante la transferencia: " + e.getMessage()));
        }
    }

}
