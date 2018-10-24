package com.noser.blog;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class TestAuthentication implements Authentication {

  private boolean authenticated;

  private List<GrantedAuthority> authorities;

  public TestAuthentication(boolean authenticated, String... authorities) {
    this.authenticated = authenticated;

    this.authorities = new ArrayList<>();
    for (String authority: authorities) {
      this.authorities.add(new TestGrantedAuthority(authority));
    }
  }

  @Override public Collection<? extends GrantedAuthority> getAuthorities() {
    return this.authorities;
  }

  @Override public Object getCredentials() {
    return null;
  }

  @Override public Object getDetails() {
    return null;
  }

  @Override public Object getPrincipal() {
    return null;
  }

  @Override public boolean isAuthenticated() {
    return false;
  }

  @Override public void setAuthenticated(boolean b) throws IllegalArgumentException {

  }

  @Override public String getName() {
    return null;
  }
}
