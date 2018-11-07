package com.noser.blog.controller;

import com.noser.blog.api.UserDTO;
import com.noser.blog.service.KeycloakService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/")
public class UserInfoController {

  private final KeycloakService keycloakService;

  public UserInfoController(KeycloakService keycloakService) {
    this.keycloakService = keycloakService;
  }

  @GetMapping("/users/{userId}")
  public ResponseEntity<UserDTO> getUserInfo(@PathVariable String userId) {
    final UserDTO userDTO = this.keycloakService.getUserInfo(userId);

    if (null == userDTO) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity<>(userDTO, HttpStatus.OK);
  }


}
