package com.c1736.userservice.service;


import com.c1736.userservice.entities.User;

public interface IUserService {
    void saveUserClient(User user);
    void saveUserCompany(User user);

}
