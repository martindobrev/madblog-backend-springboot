package com.noser.blog.config;

import org.keycloak.adapters.springsecurity.KeycloakConfiguration;
import org.keycloak.adapters.springsecurity.authentication.KeycloakAuthenticationProvider;
import org.keycloak.adapters.springsecurity.config.KeycloakWebSecurityConfigurerAdapter;
import org.keycloak.adapters.springsecurity.management.HttpSessionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.authority.mapping.SimpleAuthorityMapper;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.web.authentication.session.RegisterSessionAuthenticationStrategy;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;

@EnableConfigurationProperties(BlogProperties.class)
@KeycloakConfiguration
public class SecurityConfig extends KeycloakWebSecurityConfigurerAdapter {

	private final BlogProperties blogProperties;

	public SecurityConfig(final BlogProperties blogProperties) {
		this.blogProperties = blogProperties;
	}


	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) {
		SimpleAuthorityMapper grantedAuthorityMapper = new SimpleAuthorityMapper();
		grantedAuthorityMapper.setPrefix("");

		KeycloakAuthenticationProvider keycloakAuthenticationProvider = keycloakAuthenticationProvider();
		keycloakAuthenticationProvider.setGrantedAuthoritiesMapper(grantedAuthorityMapper);
		auth.authenticationProvider(keycloakAuthenticationProvider);
	}

	@Bean
	@Override
	protected SessionAuthenticationStrategy sessionAuthenticationStrategy() {
		return new RegisterSessionAuthenticationStrategy(new SessionRegistryImpl());
	}

	@Bean
	@Override
	@ConditionalOnMissingBean(HttpSessionManager.class)
	protected HttpSessionManager httpSessionManager() {
		return new HttpSessionManager();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		super.configure(http);
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

		http.csrf().disable();
		http.headers().frameOptions().disable(); // must be disabled for H2 console
		if (!this.blogProperties.isSecurityDisabled()) {
			http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/v1/files").permitAll()
					.antMatchers(HttpMethod.POST, "/api/v1/files").hasAnyAuthority("user", "admin", "publisher")
					.antMatchers(HttpMethod.DELETE, "/api/v1/files/*").hasAnyAuthority("user", "admin", "publisher")
					.antMatchers(HttpMethod.GET, "/api/v1/files/*").permitAll()
					.antMatchers(HttpMethod.GET, "/api/v1/articles").permitAll()
					.antMatchers(HttpMethod.POST, "/api/v1/articles").hasAnyAuthority("user", "admin")
					.antMatchers(HttpMethod.GET, "/api/v1/articles/*").permitAll()
					.antMatchers(HttpMethod.PUT, "/api/v1/articles/*").hasAnyAuthority("user", "admin")
					.antMatchers(HttpMethod.DELETE, "/api/v1/articles/*").hasAnyAuthority("admin", "user")
					.antMatchers("/api/v1/user").authenticated().antMatchers("/actuator").authenticated()
					.antMatchers("/api/v1/own-articles").hasAuthority("user").anyRequest().permitAll();
		} else {
			http.authorizeRequests().anyRequest().permitAll();
		}

	}
}