package com.noser.blog.api;

import lombok.Builder;
import lombok.Value;

import java.util.Set;

@Value
@Builder
public class UserDTO {
  private String id;
  private String username;
  private String firstname;
  private String lastname;
  private Set<String> roles;
}
