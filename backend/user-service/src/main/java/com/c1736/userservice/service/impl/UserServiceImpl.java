package com.c1736.userservice.service.impl;

import com.c1736.userservice.entities.User;
import com.c1736.userservice.repository.IRoleRepository;
import com.c1736.userservice.repository.IUserRepository;
import com.c1736.userservice.service.IAuthPasswordEncoderPort;
import com.c1736.userservice.service.IUserService;
import jakarta.transaction.Transactional;
import com.c1736.userservice.service.exceptions.UserAlreadyExistsException;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

    private final IUserRepository userRepository;
    private final IRoleRepository roleRepository;
    private final IAuthPasswordEncoderPort authPasswordEncoderPort;

    public UserServiceImpl(IUserRepository userRepository, IRoleRepository roleRepository, IAuthPasswordEncoderPort authPasswordEncoderPort) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.authPasswordEncoderPort = authPasswordEncoderPort;
    }


    @Override
    public void saveUserClient(User user) {

        String email = user.getEmail();
        if (userRepository.existsByEmail(email)){
            throw new UserAlreadyExistsException();
        }
        user.setRole(roleRepository.findByName("ROLE_CLIENT"));
        user.setPassword(authPasswordEncoderPort.encodePassword(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public void saveUserCompany(User user) {

        String email = user.getEmail();
        if (userRepository.existsByEmail(email)){
            throw new UserAlreadyExistsException();
        }
        user.setRole(roleRepository.findByName("ROLE_COMPANY"));
        user.setPassword(authPasswordEncoderPort.encodePassword(user.getPassword()));
        userRepository.save(user);

    }

}
