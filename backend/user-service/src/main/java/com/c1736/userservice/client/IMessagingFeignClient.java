package com.c1736.userservice.client;

import com.c1736.userservice.client.interceptor.FeignClientInterceptor;
import org.apache.catalina.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@FeignClient(name = "messaging-service", url = "localhost:8093", configuration = FeignClientInterceptor.class)
public interface IMessagingFeignClient {

}
