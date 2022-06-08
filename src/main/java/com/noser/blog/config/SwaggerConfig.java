package com.noser.blog.config;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;

import org.apache.commons.io.IOUtils;
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
		Contact contact = new Contact("Martin Dobrev", "", "martin.dobrev@noser-bulgaria.com");


		InputStream resourceAsStream = this.getClass().getClassLoader().getResourceAsStream("frontend-interview/task-description.html");
		String description = "";

		try {
			description = IOUtils.toString(resourceAsStream);
		} catch (IOException e) {
			e.printStackTrace();
		};

		return new ApiInfo("Noser Bulgaria Frontend Interview REST API",
				description,
				"1.0",
				"",
				contact,
				"",
				"",
				new ArrayList<>()
				);
	}
}
