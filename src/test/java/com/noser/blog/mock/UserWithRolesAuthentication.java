package com.noser.blog.mock;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import lombok.Getter;
import lombok.AllArgsConstructor;

public class UserWithRolesAuthentication implements Authentication {

	private static final long serialVersionUID = 1L;
	
	private final String username;
	private final List<MockAuthority> authorities;
	
	
	public UserWithRolesAuthentication(final String username, final String... strings) {
		this.username = username;
		
		this.authorities = new ArrayList<>();
		
		if (strings != null) {
			for (String role : strings) {
				this.authorities.add(new MockAuthority(role));
			}
		}
	}
	
	@Override
	public String getName() {
		return this.username;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.authorities;
	}

	@Override
	public Object getCredentials() {
		return null;
	}

	@Override
	public Object getDetails() {
		return null;
	}

	@Override
	public Object getPrincipal() {
		return new MockPrincipal(username);
	}

	@Override
	public boolean isAuthenticated() {
		return true;
	}

	@Override
	public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {}
	
	@AllArgsConstructor
	static class MockPrincipal implements Principal {
		@Getter private final String name;
	}
	
	@AllArgsConstructor
	static class MockAuthority implements GrantedAuthority {
		private static final long serialVersionUID = 1L;
		@Getter private final String authority;
	}

}
