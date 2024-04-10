package com.c1736.userservice.controller;

import com.c1736.userservice.entities.User;
import com.c1736.userservice.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {

    private final IUserService userService;

    public AdminController(IUserService userService) {
        this.userService = userService;
    }


    @GetMapping(path = "/findUser/{id}")
    public User findUserById(@PathVariable Long id){
        return userService.findUserById(id);
    }
    @GetMapping("/findAllUser")
    public List<User>findAllUsers(){
        return userService.findAllUsers();
    }

    @PutMapping("/updateUser/{id}")
    public User updateUserById(@PathVariable Long id, @RequestBody User user){
        return userService.updateUserById(id, user);
    }

    @DeleteMapping("/deleteUser/{Id}")
    public void deleteUserById(@PathVariable Long Id){
        userService.deleteUserById(Id);
    }

    @GetMapping("/getUser")
    public ResponseEntity<User> getUserByEmail(@RequestParam("email") String email) {
        Optional<User> user = userService.findByEmail(email);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

}
