package com.c1736.userservice.controller;

import com.c1736.userservice.entities.User;
import com.c1736.userservice.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {

    @Autowired
    private IUserService userService;

    // @PreAuthorize
    @GetMapping("/findUser{id}")
    public User findUserById(Long id){
        return userService.findUserById(id);
    }

    public List<User>findAllUsers(){
        return userService.findAllUsers();
    }

}
