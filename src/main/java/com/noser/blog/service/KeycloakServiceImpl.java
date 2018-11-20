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

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class KeycloakServiceImpl implements KeycloakService {


  private final Keycloak keycloak;

  public KeycloakServiceImpl() {
    this.keycloak = Keycloak.getInstance(
        "http://localhost:8080/auth",
        "master",
        "maddob",
        "jordan",
        "admin-cli");
  }

  public UserDTO getUserInfo(final String id) {
	  log.info("Getting user by id {}", id);
    try {
      final UserResource user = this.keycloak.realm("Demo").users().get(id);
      final RoleMappingResource roleMappingResource = user.roles();
      List<String> roles = roleMappingResource.getAll().getRealmMappings().stream().map(roleRepresentation -> roleRepresentation.getName()).collect(Collectors.toList());

      final UserRepresentation userRepresentation = user.toRepresentation();
      // final List<String> realmRoles = userRepresentation.getRealmRoles();
      // final Map<String, List<String>> clientRoles = userRepresentation.getClientRoles();
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
