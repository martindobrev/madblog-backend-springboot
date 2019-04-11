package com.noser.blog.api;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class PageInfoDTO {
	long total;
	long own;
	long unpublished;
}
