package com.noser.blog.api;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WebsitePropertiesDTO {
	private String name;
	private String title;
	private String logoUrl;
	private String version;
}
