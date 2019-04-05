package com.noser.blog.api;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HtmlSnippetDTO {
	private long id;
	private String name;
	private String content;	
}
