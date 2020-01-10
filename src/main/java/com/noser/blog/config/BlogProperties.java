package com.noser.blog.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
@ConfigurationProperties(prefix="blog")
public class BlogProperties {

	private boolean securityDisabled;
	
	private String keycloakAuthUrl = "http://localhost:8080/auth";
	private String realm = "master";
	private String user = "admin";
	private String password = "admin";
	private String clientId = "admin-cli";
	
}
