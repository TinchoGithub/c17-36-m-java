package com.c1736.userservice.service.impl;

import com.c1736.userservice.entities.Role;
import com.c1736.userservice.entities.User;
import com.c1736.userservice.repository.IRoleRepository;
import com.c1736.userservice.repository.IUserRepository;
import com.c1736.userservice.service.IUserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {

    private final IUserRepository userRepository;
    private IRoleRepository iRoleRepository;

    public UserServiceImpl(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void saveUserClient(User user) {
        String email = user.getEmail();

        if (userRepository.existByEmail(email)){
            System.out.println("USARIO NO EXISTE");
        }

        Role rol = new Role();
        rol.setName("ROLE_CLINT");
        rol.setDescription("The Customer User role is intended for those users who use the services or products offered by the company.");
        user.setRole(rol);

        userRepository.save(user);
    }

    @Override
    public void saveUserCompany(User user) {
        String email = user.getEmail();

        if (userRepository.existByEmail(email)){
            System.out.println("USARIO NO EXISTE");
        }

        Role rol = new Role();
        rol.setName("ROLE_COMPANY");
        rol.setDescription("The Company User role is designed to represent companies that offer products or services through the platform.");
        user.setRole(rol);

        userRepository.save(user);
    }
}
