package com.noser.blog.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BlogFileView {
	private Long id;
	private String name;
	private long size;
	private String authorId;
	private String fileType;
	private LocalDateTime uploaded;
}
