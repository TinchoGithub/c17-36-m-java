package com.c1736.bankservice.client;

import com.c1736.bankservice.client.dto.UserDTO;
import com.c1736.bankservice.client.interceptor.FeignClientInterceptor;
import jakarta.validation.Valid;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "user-service", url = "localhost:8091", configuration = FeignClientInterceptor.class)
public interface IUserFeignClient {

    @GetMapping("/api/v1/admin/findUser/{id}")
    public UserDTO findUserById(@PathVariable Long id);

    @GetMapping("/api/v1/admin/findAllUser")
    public List<UserDTO> findAllUsers();

    @GetMapping("/api/v1/admin/updateUser/{id}")
    public UserDTO updateUserById(@PathVariable Long id, @RequestBody UserDTO user);

    @GetMapping("/api/v1/admin/deleteUser/{Id}")
    public void deleteUserById(@PathVariable Long Id);

    @GetMapping("/api/v1/client/saveUser")
    public void saveUser(@Valid @RequestBody UserDTO user);

    @GetMapping("/api/v1/company/getUser")
    UserDTO getUserCompany(@RequestParam String email);
    @GetMapping("/api/v1/client/getUser")
    UserDTO getUserClient(@RequestParam String email);
}
