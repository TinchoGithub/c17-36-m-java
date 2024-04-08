package com.c1736.userservice.client.interceptor;

import com.c1736.userservice.client.IBankFeignClient;
import com.c1736.userservice.client.IMessagingFeignClient;

public class UserServiceFeign {
    private final IBankFeignClient bankFeignClient;
    private final IMessagingFeignClient messagingFeignClient;

    public UserServiceFeign(IBankFeignClient bankFeignClient, IMessagingFeignClient messagingFeignClient) {
        this.bankFeignClient = bankFeignClient;
        this.messagingFeignClient = messagingFeignClient;
    }
}
