package com.c1736.userservice.service.impl;

import com.c1736.userservice.entities.Role;
import com.c1736.userservice.entities.User;
import com.c1736.userservice.repository.IRoleRepository;
import com.c1736.userservice.repository.IUserRepository;
import com.c1736.userservice.service.IUserService;
import com.c1736.userservice.service.exceptions.UserAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private final IUserRepository userRepository;
    @Autowired
    private IRoleRepository roleRepository;

    public UserServiceImpl(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void saveUserClient(User user) {

        String email = user.getEmail();
        if (userRepository.existsByEmail(email)){
            throw new UserAlreadyExistsException();
        }
        user.setRole(roleRepository.findByName("ROLE_CLIENT"));
        userRepository.save(user);
    }

    @Override
    public void saveUserCompany(User user) {

        String email = user.getEmail();
        if (userRepository.existsByEmail(email)){
            throw new UserAlreadyExistsException();
        }
        user.setRole(roleRepository.findByName("ROLE_COMPANY"));
        userRepository.save(user);

    }

}
