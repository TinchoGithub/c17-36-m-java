package com.c1736.userservice.client;

import com.c1736.userservice.client.IBankFeignClient;
import com.c1736.userservice.client.IMessagingFeignClient;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@Primary
public class UserServiceFeign {
    private final IBankFeignClient bankFeignClient;
    private final IMessagingFeignClient messagingFeignClient;

    public UserServiceFeign(IBankFeignClient bankFeignClient, IMessagingFeignClient messagingFeignClient) {
        this.bankFeignClient = bankFeignClient;
        this.messagingFeignClient = messagingFeignClient;
    }
}
