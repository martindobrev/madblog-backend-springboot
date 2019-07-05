package com.noser.blog.api;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class WebsitePropertiesDTO {
	private String name;
	private String title;
	private String logoUrl;
	private String version;
}
