package com.noser.blog.config;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AuthorizeHttpRequestsConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;
import org.springframework.web.servlet.handler.HandlerMappingIntrospector;

@EnableConfigurationProperties(BlogProperties.class)
@Configuration
@EnableWebSecurity
public class SecurityConfig {

	private final BlogProperties blogProperties;

	public SecurityConfig(final BlogProperties blogProperties) {
		this.blogProperties = blogProperties;
	}

	@Bean
	MvcRequestMatcher.Builder mvc(HandlerMappingIntrospector introspector) {
		return new MvcRequestMatcher.Builder(introspector);
	}

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http, MvcRequestMatcher.Builder mvc) throws Exception {
		http.authorizeHttpRequests((requests) -> requests
				.requestMatchers(mvc.pattern("/api/**")).permitAll()
				.requestMatchers(mvc.pattern("/actuator/**")).permitAll()
				.requestMatchers(mvc.pattern("/**")).permitAll());
				//.requestMatchers(mvc.pattern("/**")).authenticated());
		return http.build();
	}
}