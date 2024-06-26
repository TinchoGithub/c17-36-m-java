package com.c1736.bankservice.configuration.security.jwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

@RequiredArgsConstructor
@Component
public class JwtAuthorizationFilter extends OncePerRequestFilter {

    private List<String> excludedPrefixes = Arrays.asList("/swagger-ui/**", "/v3/api-docs/**");

    private AntPathMatcher pathMatcher = new AntPathMatcher();


    private boolean isEndpointMatch(String allowedEndpoint, String actualEndpoint) {
        Pattern pattern = Pattern.compile(allowedEndpoint.replaceAll("\\{id\\}", "[^/]+"));
        return pattern.matcher(actualEndpoint).matches();
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {

        String endpoint = request.getRequestURI();
        Map<String, List<String>> rolesEndpointsMap = new HashMap<>();

        rolesEndpointsMap.put("ROLE_ADMIN", Arrays.asList("/api/v1/admin/{id}", "api/v1/admin/listAccounts", "api/v1/admin/deleteAccount/{id}", "/api/v1/company/deleteAccount/{id}", "/api/v1/client/deleteAccount/{id}"));
        rolesEndpointsMap.put("ROLE_COMPANY", Arrays.asList("/api/v1/company/account", "/api/v1/company/updateAccount/{id}", "/api/v1/company/deleteAccount/{id}", "/api/v1/accounts/transfer", "/api/v1/accounts/deposit"));
        rolesEndpointsMap.put("ROLE_CLIENT", Arrays.asList("/api/v1/client/account", "/api/v1/client/updateAccount/{id}", "/api/v1/client/deleteAccount/{id}", "/api/v1/accounts/transfer", "/api/v1/accounts/deposit"));

        try {
            String token = getToken(request);
            if (token == null || !JwtUtils.validateJwtToken(token)) {
                response.sendError(HttpStatus.UNAUTHORIZED.value());
                return;
            }

            List<String> roles = JwtUtils.getRoles(token);
            if (!roles.stream().anyMatch(rolesEndpointsMap::containsKey)) {
                response.sendError(HttpStatus.UNAUTHORIZED.value());
                return;
            }

            List<String> allowedEndpoints = new ArrayList<>();
            for (String role : roles) {
                List<String> roleEndpoints = rolesEndpointsMap.get(role);
                if (roleEndpoints != null) {
                    allowedEndpoints.addAll(roleEndpoints);
                }
            }

            boolean isEndpointAllowed = false;
            for (String allowedEndpoint : allowedEndpoints) {
                if (isEndpointMatch(allowedEndpoint, endpoint)) {
                    isEndpointAllowed = true;
                    break;
                }
            }

            if (!isEndpointAllowed) {
                response.sendError(HttpStatus.UNAUTHORIZED.value());
                return;
            }
            filterChain.doFilter(request, response);
        } catch (RuntimeException e) {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, e.getMessage());
        }

    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String currentRoute = request.getServletPath();
        for (String prefix : excludedPrefixes) {
            if (pathMatcher.match(prefix, currentRoute)) {
                return true;
            }
        }
        return false;
    }

    private String getToken(HttpServletRequest request) {
        String headerAuth = request.getHeader("Authorization");

        if (headerAuth != null && headerAuth.startsWith("Bearer ")) {
            return headerAuth.substring(7);
        }
        return null;
    }
}
