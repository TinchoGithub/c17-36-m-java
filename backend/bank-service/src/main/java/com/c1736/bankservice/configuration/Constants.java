package com.c1736.bankservice.configuration;

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
    public static final String ACCOUNT_BANK_NOT_FOUND_MESSAGE = "La cuenta de banco no existe.";
    public static final String USER_NOT_FOUND_MESSAGE = "No se encuentran datos.";
    public static final String UNAUTHORIZED_MESSAGE = "No tiene permisos para acceder a este recurso.";
}
