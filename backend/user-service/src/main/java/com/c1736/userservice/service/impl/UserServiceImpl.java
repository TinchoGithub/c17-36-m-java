package com.c1736.userservice.service.impl;

import com.c1736.userservice.entities.Role;
import com.c1736.userservice.entities.User;
import com.c1736.userservice.repository.IRoleRepository;
import com.c1736.userservice.repository.IUserRepository;
import com.c1736.userservice.service.IUserService;
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
            System.out.println("USARIO YA EXISTE");
        }

        createRoleIfNotExists("ROLE_CLIENT", "The Customer User role is intended for those users who use the services or products offered by the company.");
        user.setRole(roleRepository.findByName("ROLE_CLIENT"));
        userRepository.save(user);
    }

    @Override
    public void saveUserCompany(User user) {
        String email = user.getEmail();

        if (userRepository.existsByEmail(email)){
            System.out.println("USARIO YA EXISTE");
        }

        createRoleIfNotExists("ROLE_COMPANY", "The Company User role is designed to represent companies that offer products or services through the platform.");
        user.setRole(roleRepository.findByName("ROLE_COMPANY"));
        userRepository.save(user);
    }

    private void createRoleIfNotExists(String name, String description){
        Role role = roleRepository.findByName(name);
        if (role == null){
            role = new Role();
            role.setName(name);
            role.setDescription(description);
            roleRepository.save(role);
        }
    }
}
