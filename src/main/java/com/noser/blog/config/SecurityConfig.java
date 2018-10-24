package com.noser.blog.config;

import org.keycloak.adapters.KeycloakConfigResolver;
import org.keycloak.adapters.springboot.KeycloakSpringBootConfigResolver;
import org.keycloak.adapters.springsecurity.KeycloakSecurityComponents;
import org.keycloak.adapters.springsecurity.config.KeycloakWebSecurityConfigurerAdapter;
import org.keycloak.adapters.springsecurity.filter.KeycloakAuthenticatedActionsFilter;
import org.keycloak.adapters.springsecurity.filter.KeycloakAuthenticationProcessingFilter;
import org.keycloak.adapters.springsecurity.filter.KeycloakPreAuthActionsFilter;
import org.keycloak.adapters.springsecurity.filter.KeycloakSecurityContextRequestFilter;
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

@Configuration
@EnableWebSecurity
@ComponentScan(basePackageClasses = KeycloakSecurityComponents.class)
public class SecurityConfig extends KeycloakWebSecurityConfigurerAdapter
{

  @Autowired
  public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
    auth.authenticationProvider(keycloakAuthenticationProvider());
  }

  @Bean
  public KeycloakConfigResolver KeycloakConfigResolver() {
    return new KeycloakSpringBootConfigResolver();
  }

  @Bean
  public FilterRegistrationBean keycloakAuthenticationProcessingFilterRegistrationBean(
      KeycloakAuthenticationProcessingFilter filter) {
    FilterRegistrationBean registrationBean = new FilterRegistrationBean(filter);
    registrationBean.setEnabled(false);
    return registrationBean;
  }

  @Bean
  public FilterRegistrationBean keycloakPreAuthActionsFilterRegistrationBean(
      KeycloakPreAuthActionsFilter filter) {
    FilterRegistrationBean registrationBean = new FilterRegistrationBean(filter);
    registrationBean.setEnabled(false);
    return registrationBean;
  }

  @Bean
  public FilterRegistrationBean keycloakAuthenticatedActionsFilterBean(
      KeycloakAuthenticatedActionsFilter filter) {
    FilterRegistrationBean registrationBean = new FilterRegistrationBean(filter);
    registrationBean.setEnabled(false);
    return registrationBean;
  }

  @Bean
  public FilterRegistrationBean keycloakSecurityContextRequestFilterBean(
      KeycloakSecurityContextRequestFilter filter) {
    FilterRegistrationBean registrationBean = new FilterRegistrationBean(filter);
    registrationBean.setEnabled(false);
    return registrationBean;
  }


  /**
   * Defines the session authentication strategy.
   */
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
    http.csrf().disable()
        .authorizeRequests()
        .antMatchers(HttpMethod.POST,   "/api/v1/files").permitAll()
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