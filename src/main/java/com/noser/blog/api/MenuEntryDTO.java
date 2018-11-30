package com.noser.blog.api;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class MenuEntryDTO {
	private final String name;
	private final String slug;
}
