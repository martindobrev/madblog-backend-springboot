package com.noser.blog.config;

import java.util.ArrayList;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.common.base.Predicates;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	@SuppressWarnings("unchecked")
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select().apis(RequestHandlerSelectors.any())
				.paths(Predicates.and(
							PathSelectors.ant("/**"), 
							Predicates.not(PathSelectors.ant("/error")),
							Predicates.not(PathSelectors.ant("/actuator/**")), 
							Predicates.not(PathSelectors.ant("/management*")),
							Predicates.not(PathSelectors.ant("/messages/**"))
						))
				.build()
				.pathMapping("/")
				.apiInfo(metaData());
	}
	
	private ApiInfo metaData() {
		Contact contact = new Contact("Marto Angulara", "", "martin.dobrev@akros.ch");
		
		return new ApiInfo("Angular Tutorial REST API",
				"This is the REST API that is to be used during the Angular Basics course. "
				+ "The API provides the basic functions and elements to build a simple blog. <br/>"
				+ "Building parts of a simple blog webpage are PAGE, ARTICLE and FILE. "
				+ "For simplicity only IMAGES are allowed to be saved. <br/>"
				+ "Usually all methods that don't modify the content will be accessible without authentication. "
				+ "In order to change the content you will have to be authenticated and have the respective user rights to modify the content. "
				+ "User authentication is done via keycloak - an open source user management server. Detailed description will be added later",
				"1.0",
				"http://noser-bulgaria.com",
				contact,
				"LICENCE (TO BE DEFINED, CURRENTLY ONLY NOSER BULGARIA EMPLOYEES ARE ALLOWED TO USE THE API)",
				"http://noser-bulgaria.com/tutorials/licence",
				new ArrayList<>()
				);
	}
}
