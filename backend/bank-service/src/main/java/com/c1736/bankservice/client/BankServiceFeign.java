package com.c1736.bankservice.client;

import com.c1736.bankservice.client.dto.UserDTO;
import jakarta.validation.Valid;
import org.apache.catalina.User;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;
@Service
@Primary
public class BankServiceFeign   {

    private final IUserFeignClient userFeignClient;
    private final IMessagingFeignClient messagingFeignClient;


    public BankServiceFeign(IUserFeignClient userFeignClient, IMessagingFeignClient messagingFeignClient) {
        this.userFeignClient = userFeignClient;
        this.messagingFeignClient = messagingFeignClient;
    }

    @GetMapping("/api/v1/admin/findUser/{id}")
    public User findUserById(@PathVariable Long id) {
        return (User) userFeignClient.findUserById(id);
    }

    @GetMapping("/api/v1/admin/findAllUser")
    public List<User> findAllUsers() {
        return userFeignClient.findAllUsers();
    }

    @GetMapping("/api/v1/admin/updateUser/{id}")
    public User updateUserById(@PathVariable Long id, @RequestBody User user) {
        return userFeignClient.updateUserById(id, user);
    }

    @GetMapping("/api/v1/admin/deleteUser/{Id}")
    public void deleteUserById(@PathVariable Long id){
        userFeignClient.deleteUserById(id);
    }

    @GetMapping("/api/v1/client/saveUser")
    public void saveUser(@Valid @RequestBody User user) {
        userFeignClient.saveUser(user);
    }

    @GetMapping("api/v1/admin/findUserEmail/{email}")
    public UserDTO findUserEmail(@PathVariable String email){return userFeignClient.findUserByEmail(email);
    }

}
