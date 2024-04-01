package com.c1736.userservice.controller;

import com.c1736.userservice.entities.User;
import com.c1736.userservice.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private IUserService userService;

    @PostMapping("/saveUserClient")
    public void saveUserClient(@RequestBody User user){
        userService.saveUserClient(user);
    }

    @PostMapping("saveUserCompany")
    public void saveUserCompany(@RequestBody User user){
        userService.saveUserCompany(user);
    }
}
