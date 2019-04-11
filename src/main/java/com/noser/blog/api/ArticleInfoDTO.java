package com.noser.blog.api;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class ArticleInfoDTO {
	private long total;
	private long own;
	private long unpublished;
	private long featured;
}
