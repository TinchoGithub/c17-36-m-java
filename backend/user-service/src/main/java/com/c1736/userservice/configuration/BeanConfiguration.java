package com.c1736.userservice.configuration;

import com.c1736.userservice.service.IAuthPasswordEncoderPort;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class BeanConfiguration {

    @Bean
    public IAuthPasswordEncoderPort authPasswordEncoderPort() {
        return new AuthBcryptAdapter(encoder());
    }

    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

}
