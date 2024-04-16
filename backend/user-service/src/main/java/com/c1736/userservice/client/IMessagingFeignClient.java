package com.c1736.userservice.client;

import com.c1736.userservice.client.dto.MessagingDTO;
import com.c1736.userservice.client.interceptor.FeignClientInterceptor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "messaging-service", url = "localhost:8093/api/v1/", configuration = FeignClientInterceptor.class)
public interface IMessagingFeignClient {

    @PostMapping("/sendEmail")
    public ResponseEntity<String> sendEmail(@RequestBody MessagingDTO email);
    /*
    @PostMapping("admin/sendEmail")
    public ResponseEntity<String> sendEmail(@RequestBody MessagingDTO email);

    @PostMapping("client/sendEmail")
    public ResponseEntity<String> sendEmailClient(@RequestBody MessagingDTO email);

    @PostMapping("company/sendEmail")
    public ResponseEntity<String> sendEmailCompany(@RequestBody MessagingDTO email);

     */

}
