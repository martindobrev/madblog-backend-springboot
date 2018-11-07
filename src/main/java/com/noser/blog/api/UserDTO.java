package com.noser.blog.api;

import lombok.Builder;
import lombok.Value;

import java.util.List;

@Value
@Builder
public class UserDTO {
  private String id;
  private String username;
  private String firstname;
  private String lastname;
  private List<String> roles;
}
