package com.noser.blog.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.ws.rs.NotFoundException;

import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.resource.RoleMappingResource;
import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.stereotype.Service;

import com.noser.blog.api.UserDTO;
import com.noser.blog.config.BlogProperties;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class KeycloakServiceImpl implements KeycloakService {

	
  private final Keycloak keycloak;
  
  private final BlogProperties blogProperties;

  public KeycloakServiceImpl(final BlogProperties blogProperties) {
    this.keycloak = Keycloak.getInstance(
        "http://localhost:8080/auth",
        "master",
        "maddob",
        "jordan",
        "admin-cli");
    this.blogProperties = blogProperties;
  }
  
  public UserDTO getUserInfo(final String id) {
	  log.info("Getting user by id {}", id);
	  // Do not contact keycloak server if security is disabled
	  if (this.blogProperties.isSecurityDisabled()) {
		  return UserDTO.builder().build();
	  }
	  
    try {
      final UserResource user = this.keycloak.realm("Demo").users().get(id);
      final RoleMappingResource roleMappingResource = user.roles();
      List<String> roles = roleMappingResource.getAll().getRealmMappings().stream().map(roleRepresentation -> roleRepresentation.getName()).collect(Collectors.toList());

      final UserRepresentation userRepresentation = user.toRepresentation();
      return UserDTO.builder()
          .firstname(userRepresentation.getFirstName())
          .username(userRepresentation.getUsername())
          .id(userRepresentation.getId())
          .roles(roles)
          .lastname(userRepresentation.getLastName())
          .build();
    } catch (NotFoundException exception) {
      return null;
    }
  }
}
