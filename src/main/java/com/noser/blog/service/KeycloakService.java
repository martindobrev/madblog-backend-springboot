package com.noser.blog.service;

import com.noser.blog.api.UserDTO;

public interface KeycloakService {
	UserDTO getUserInfo(final String id);
	String getUserUsername(final String id);
}
