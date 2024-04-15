package com.c1736.userservice.service.impl;

import com.c1736.userservice.client.IMessagingFeignClient;
import com.c1736.userservice.client.dto.MessagingDTO;
import com.c1736.userservice.entities.User;
import com.c1736.userservice.repository.IRoleRepository;
import com.c1736.userservice.repository.IUserRepository;
import com.c1736.userservice.service.IAuthPasswordEncoderPort;
import com.c1736.userservice.service.IUserService;
import jakarta.transaction.Transactional;
import com.c1736.userservice.service.exceptions.UserAlreadyExistsException;
import com.c1736.userservice.service.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

    private final IUserRepository userRepository;
    private final IRoleRepository roleRepository;
    private final IAuthPasswordEncoderPort authPasswordEncoderPort;
    private final IMessagingFeignClient messagingFeignClient;

    public UserServiceImpl(IUserRepository userRepository, IRoleRepository roleRepository, IAuthPasswordEncoderPort authPasswordEncoderPort, IMessagingFeignClient messagingFeignClient) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.authPasswordEncoderPort = authPasswordEncoderPort;
        this.messagingFeignClient = messagingFeignClient;
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

        MessagingDTO dto = new MessagingDTO(user.getEmail(), "CLIENTE CREADO EXITOSAMENTE", ConstantMessages.NEW_CLIENT);
        messagingFeignClient.sendEmail(dto);

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

        MessagingDTO messageDto = new MessagingDTO(user.getEmail(), "COMPAÑÍA CREADA EXITOSAMENTE", ConstantMessages.NEW_COMPANY);
        messagingFeignClient.sendEmail(messageDto);

    }

    @Override
    public User findUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(UserNotFoundException::new);
    }

    @Override
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User updateUserById(Long id, User user) {
        User userExist = userRepository.findById(id)
                    .orElseThrow(UserNotFoundException::new);

       userExist.setFirstName(user.getFirstName());
       userExist.setLastName(user.getLastName());
       userExist.setPhone(user.getPhone());
       userExist.setEmail(user.getEmail());
       userExist.setPassword(authPasswordEncoderPort.encodePassword(user.getPassword()));
       userExist.setRole(user.getRole());

        return userRepository.save(userExist);
    }

    @Override
    public void deleteUserById(Long id) {
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException();
        }
        userRepository.deleteById(id);
    }

    @Override
    public Optional<User> findByEmail(String email) {
       if (!userRepository.existsByEmail(email)){
           throw new UserNotFoundException();
       }else {
           return Optional.ofNullable(userRepository.findByEmail(email));
       }

    }


}
