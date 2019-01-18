package com.noser.blog.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
@ConfigurationProperties(prefix="blog")
public class BlogProperties {

	private boolean securityDisabled;
	
	
}
