package com.noser.blog.config;

import org.keycloak.adapters.AdapterDeploymentContext;
import org.keycloak.adapters.springboot.KeycloakSpringBootConfigResolver;
import org.keycloak.adapters.springsecurity.AdapterDeploymentContextFactoryBean;
import org.keycloak.adapters.springsecurity.KeycloakSecurityComponents;
import org.keycloak.adapters.springsecurity.config.KeycloakWebSecurityConfigurerAdapter;
import org.keycloak.adapters.springsecurity.filter.KeycloakAuthenticatedActionsFilter;
import org.keycloak.adapters.springsecurity.filter.KeycloakAuthenticationProcessingFilter;
import org.keycloak.adapters.springsecurity.filter.KeycloakPreAuthActionsFilter;
import org.keycloak.adapters.springsecurity.filter.KeycloakSecurityContextRequestFilter;
import org.keycloak.adapters.springsecurity.management.HttpSessionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.web.authentication.session.RegisterSessionAuthenticationStrategy;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;
import org.springframework.context.annotation.FilterType;

@Configuration
@EnableWebSecurity
@ComponentScan(basePackageClasses = KeycloakSecurityComponents.class, 
excludeFilters = @ComponentScan.Filter(type = FilterType.REGEX, pattern = "org.keycloak.adapters.springsecurity.management.HttpSessionManager"))
public class SecurityConfig extends KeycloakWebSecurityConfigurerAdapter
{

	 @Bean
	  public HttpSessionManager keycloakHttpSessionManager() {
	    return new HttpSessionManager();
	  }

	  @Bean
	  @Override
	  protected AdapterDeploymentContext adapterDeploymentContext() throws Exception {
	    final AdapterDeploymentContextFactoryBean factoryBean = new AdapterDeploymentContextFactoryBean(new KeycloakSpringBootConfigResolver());
	    factoryBean.afterPropertiesSet();
	    return factoryBean.getObject();
	  }

	  @Autowired
	  public void configureGlobal(final AuthenticationManagerBuilder auth) throws Exception {
	    auth.authenticationProvider(keycloakAuthenticationProvider());
	  }

	  @Bean
	  public FilterRegistrationBean<KeycloakAuthenticationProcessingFilter> keycloakAuthenticationProcessingFilterRegistrationBean(
	      final KeycloakAuthenticationProcessingFilter filter) {
	    final FilterRegistrationBean<KeycloakAuthenticationProcessingFilter> registrationBean = new FilterRegistrationBean<>(filter);
	    registrationBean.setEnabled(false);
	    return registrationBean;
	  }

	  @Bean
	  public FilterRegistrationBean<KeycloakPreAuthActionsFilter> keycloakPreAuthActionsFilterRegistrationBean(final KeycloakPreAuthActionsFilter filter) {
	    final FilterRegistrationBean<KeycloakPreAuthActionsFilter> registrationBean = new FilterRegistrationBean<>(filter);
	    registrationBean.setEnabled(false);
	    return registrationBean;
	  }

	  @Bean
	  public FilterRegistrationBean<KeycloakAuthenticatedActionsFilter> keycloakAuthenticatedActionsFilterBean(final KeycloakAuthenticatedActionsFilter filter) {
	    final FilterRegistrationBean<KeycloakAuthenticatedActionsFilter> registrationBean = new FilterRegistrationBean<>(filter);
	    registrationBean.setEnabled(false);
	    return registrationBean;
	  }

	  @Bean
	  public FilterRegistrationBean<KeycloakSecurityContextRequestFilter> keycloakSecurityContextRequestFilterBean(
	      final KeycloakSecurityContextRequestFilter filter) {
	    final FilterRegistrationBean<KeycloakSecurityContextRequestFilter> registrationBean = new FilterRegistrationBean<>(filter);
	    registrationBean.setEnabled(false);
	    return registrationBean;
	  }

	  @Bean
	  @Override
	  protected SessionAuthenticationStrategy sessionAuthenticationStrategy() {
	    return new RegisterSessionAuthenticationStrategy(new SessionRegistryImpl());
	  }

  @Override
  protected void configure(HttpSecurity http) throws Exception
  {
    super.configure(http);
    http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    http.csrf().disable();
    http.headers().frameOptions().disable();    // must be disabled for H2 console
    http.authorizeRequests()
        .antMatchers(HttpMethod.GET, "/api/v1/files").permitAll()
        .antMatchers(HttpMethod.POST,   "/api/v1/files").hasAnyAuthority("user", "admin", "publisher")
        .antMatchers(HttpMethod.DELETE,   "/api/v1/files/*").hasAnyAuthority("user", "admin", "publisher")
        .antMatchers(HttpMethod.GET, "/api/v1/files/*").permitAll()
        .antMatchers(HttpMethod.GET,    "/api/v1/articles").permitAll()
        .antMatchers(HttpMethod.POST,   "/api/v1/articles").hasAnyAuthority("user", "admin")
        .antMatchers(HttpMethod.GET,    "/api/v1/articles/*").permitAll()
        .antMatchers(HttpMethod.PUT,    "/api/v1/articles/*").hasAnyAuthority("user", "admin")
        .antMatchers(HttpMethod.DELETE, "/api/v1/articles/*").hasAnyAuthority("admin", "user")
        .antMatchers("/api/v1/user").authenticated()
        .antMatchers("/api/v1/own-articles").hasAuthority("user")
        .anyRequest().permitAll();
  }
}