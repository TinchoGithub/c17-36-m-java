package com.c1736.bankservice.service;

import com.c1736.bankservice.service.dto.request.TransferRequestDto;
import org.springframework.stereotype.Service;

@Service
public interface AccountBankService {

    public void Transfer(TransferRequestDto transferRequestDto);

}
