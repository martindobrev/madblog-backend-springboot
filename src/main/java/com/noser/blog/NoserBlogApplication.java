package com.noser.blog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class NoserBlogApplication {
	public static void main(String[] args) {
		SpringApplication.run(NoserBlogApplication.class, args);
	}
}
