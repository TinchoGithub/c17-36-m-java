package com.c1736.bankservice.client;

import com.c1736.bankservice.client.interceptor.FeignClientInterceptor;
import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name = "Messaging-Service", url = "localhost:8093", configuration = FeignClientInterceptor.class)
public interface IMessagingFeignClient {
}
