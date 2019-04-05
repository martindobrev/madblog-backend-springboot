package com.noser.blog.api;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class PageDTO {
	private Long id;
	private String name;
	private String slug;
	private Long order;
	private String content;
	private String htmlContent;
	private String authorId;
	private boolean published;
	private LocalDateTime created;
}
