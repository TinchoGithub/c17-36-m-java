package com.c1736.userservice.client;

import jakarta.validation.Valid;
import org.apache.catalina.User; // CONSULTAR
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@FeignClient(name = "user-service", url = "localhost:8091")
public interface IUserFeignClient {

    @GetMapping("/api/v1/admin/findUser/{id}")
    public User findUserById(@PathVariable Long id);

    @GetMapping("/api/v1/admin/findAllUser")
    public List<User> findAllUsers();

    @GetMapping("/api/v1/admin/updateUser/{id}")
    public User updateUserById(@PathVariable Long id, @RequestBody User user);

    @GetMapping("/api/v1/admin/deleteUser/{Id}")
    public void deleteUserById(@PathVariable Long Id);

    @GetMapping("/api/v1/client/saveUser")
    public void saveUser(@Valid @RequestBody User user);
}
