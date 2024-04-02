package com.c1736.userservice.configuration;

public class Constants {
    private Constants() {
        throw new IllegalStateException("Utility class");
    }

    public static final String SWAGGER_TITLE_MESSAGE = "User API";
    public static final String SWAGGER_DESCRIPTION_MESSAGE = "User microservice";
    public static final String SWAGGER_VERSION_MESSAGE = "1.0.0";
    public static final String SWAGGER_LICENSE_NAME_MESSAGE = "Apache 2.0";
    public static final String SWAGGER_LICENSE_URL_MESSAGE = "http://springdoc.org";
    public static final String SWAGGER_TERMS_OF_SERVICE_MESSAGE = "http://swagger.io/terms/";
    public static final String RESPONSE_MESSAGE_KEY = "message";
    public static final String USER_NOT_FOUND_MESSAGE = "Usuario no encontrado.";
    public static final String USER_ALREADY_EXISTS_MESSAGE = "El usuario ya existe en la base de datos";
}
