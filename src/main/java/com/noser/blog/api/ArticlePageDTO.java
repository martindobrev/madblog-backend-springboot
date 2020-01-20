package com.noser.blog.api;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ArticlePageDTO {
	private List<ArticleDTO> articles;
	private int pageNumber;
	private int totalPages;
	private long totalArticles;
}
