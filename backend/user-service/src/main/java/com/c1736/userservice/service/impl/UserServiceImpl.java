package com.c1736.userservice.service.impl;

import com.c1736.userservice.entities.User;
import com.c1736.userservice.repository.IRoleRepository;
import com.c1736.userservice.repository.IUserRepository;
import com.c1736.userservice.service.IAuthPasswordEncoderPort;
import com.c1736.userservice.service.IUserService;
import jakarta.transaction.Transactional;
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
            System.out.println("USARIO YA EXISTE");
        }

        //createRoleIfNotExists("ROLE_CLIENT", "The Customer User role is intended for those users who use the services or products offered by the company.");
        user.setRole(roleRepository.findByName("ROLE_CLIENT"));
        user.setPassword(authPasswordEncoderPort.encodePassword(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public void saveUserCompany(User user) {
        String email = user.getEmail();

        if (userRepository.existsByEmail(email)){
            System.out.println("USARIO YA EXISTE");
        }

        //createRoleIfNotExists("ROLE_COMPANY", "The Company User role is designed to represent companies that offer products or services through the platform.");
        user.setRole(roleRepository.findByName("ROLE_COMPANY"));
        user.setPassword(authPasswordEncoderPort.encodePassword(user.getPassword()));
        userRepository.save(user);
    }

    /*
    private void createRoleIfNotExists(String name, String description){
        Role role = roleRepository.findByName(name);
        if (role == null){
            role = new Role();
            role.setName(name);
            role.setDescription(description);
            roleRepository.save(role);
        }
    }

     */
}
