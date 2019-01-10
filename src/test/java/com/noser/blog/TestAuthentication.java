package com.noser.blog;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class TestAuthentication implements Authentication {

  private final boolean authenticated;
  private final String name;

  private List<GrantedAuthority> authorities;

  public TestAuthentication(boolean authenticated, String principalName, String... authorities) {
    this.authenticated = authenticated;
    this.name = principalName;
    
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

  @Override 
  public Object getPrincipal() {
	  final String nameCopy = this.getName();
	  return new Principal() {	
    	@Override
		public String getName() {
			return nameCopy;
		}
    	
    };
  }

  @Override public boolean isAuthenticated() {
    return this.authenticated;
  }

  @Override public void setAuthenticated(boolean b) throws IllegalArgumentException {

  }

  @Override public String getName() {
    return this.name;
  }
}
