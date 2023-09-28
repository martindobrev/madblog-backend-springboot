package com.noser.blog.config;

import java.io.IOException;
import java.io.InputStream;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.apache.commons.io.IOUtils;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;



@Configuration
public class SwaggerConfig {

	@SuppressWarnings("unchecked")
	@Bean
	public GroupedOpenApi api() {
		return GroupedOpenApi.builder()
				.displayName("MadBlog API")
				.group("madblog-api")
				.pathsToMatch("/**")
				.pathsToExclude("/error", "/actuator/**", "/management*", "/messages/**")
				.build();
	}
	
	private OpenAPI metaData() {

		Contact contact = new Contact()
				.name("Martin Dobrev")
				.email("martin.dobrev@noser-bulgaria.com");


		InputStream resourceAsStream = this.getClass().getClassLoader().getResourceAsStream("frontend-interview/task-description.html");
		String description = "";

		try {
			description = IOUtils.toString(resourceAsStream);
		} catch (IOException e) {
			e.printStackTrace();
		};

		return new OpenAPI().info(new Info().title("Noser Bulgaria Frontend Interview REST API")
				.description(description)
				.contact(contact)
				.version("1.0.0")
				);
	}
}
