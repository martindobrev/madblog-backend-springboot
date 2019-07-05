package com.noser.blog;

import org.springframework.security.core.GrantedAuthority;

class TestGrantedAuthority implements GrantedAuthority {

	private static final long serialVersionUID = 1L;
	private final String authority;

	public TestGrantedAuthority(String authority) {
		this.authority = authority;
	}

	@Override
	public String getAuthority() {
		return this.authority;
	}
}
