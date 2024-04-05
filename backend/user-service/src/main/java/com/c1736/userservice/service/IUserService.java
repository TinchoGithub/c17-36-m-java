package com.c1736.userservice.service;


import com.c1736.userservice.entities.User;

import java.util.List;

public interface IUserService {
    void saveUserClient(User user);
    void saveUserCompany(User user);
    User findUserById(Long id);
    List<User>findAllUsers();
    User updateUserById(Long id, User user);
    void deleteUserById(Long id);


}
