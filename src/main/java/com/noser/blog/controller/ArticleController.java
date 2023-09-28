package com.noser.blog.controller;

import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.api.ArticleInfoDTO;
import com.noser.blog.api.ArticlePageDTO;
import com.noser.blog.domain.Article;
import com.noser.blog.service.ArticleService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.security.Principal;

@Tag(description = "Controller responsible for handling article actions", name = "Article")
@RestController
@RequestMapping("/api/v1/")
public class ArticleController {

	private final ArticleService articleService;

	@Autowired
	public ArticleController(ArticleService articleService) {
		this.articleService = articleService;
	}

	@Operation(summary = "get a list of available articles", description = "Articles content will only be "
			+ "available as markdown (content property). "
			+ "To get the parsed HTML in the field htmlContent, get the article by single ID or use /complete-articles")
	@GetMapping("/articles")
	public ArticleCollectionDTO getAllArticles() {
		return this.articleService.getAllArticles(false);
	}

	@Operation(summary = "get a list of all available articles with their complete, rendered contents as HTML")
	@GetMapping("/complete-articles")
	public ArticleCollectionDTO getCompleteVisibleArticles() {
		return this.articleService.getAllArticles(true);
	}

	@Operation(summary = "get a random featured article"
			, description = "picks a random article that is published and featured. Can be used to show a random featured" +
			" article on the homepage of the application")
	@GetMapping("/random-featured-article")
	public ArticleDTO getRandomFeaturedArticle() {
		return this.articleService.getRandomFeaturedArticle();
	}

	@Operation(summary = "get a list of articles in pages, starting page index is 0",
			description = "you can use this endpoint if you want to " +
			"to show the articles in pages. Each page will contain up to 5 entries ")
	@GetMapping("/articles/page/{pageNumber}")
	public ArticlePageDTO getArticlePage(@PathVariable Long pageNumber) {
		return this.articleService.getArticlePage(pageNumber.intValue());
	}

	@Operation(summary = "get a sinle article by id", description = "Also returns rendered content as HTML.")
	@GetMapping("/articles/{articleId}")
	public ArticleDTO getArticle(@PathVariable Long articleId) {
		return this.articleService.getArticle(articleId);
	}

	@Operation(summary = "creates a new article")
	@PostMapping("/articles")
	public ArticleDTO createArticle(@Valid @RequestBody Article article) {
		return this.articleService.createArticle(article);
	}

	@Operation(summary = "edit an existing article")
	@PutMapping("/articles/{articleId}")
	public ArticleDTO editArticle(@PathVariable Long articleId, @RequestBody Article article) throws Exception {
		return this.articleService.editArticle(article);
	}

	@Operation(summary = "delete article by its id")
	@DeleteMapping("/articles/{articleId}")
	public boolean deleteArticle(@PathVariable Long articleId) throws Exception {
		return this.articleService.deleteArticle(articleId);
	}

	@Operation(summary = "returns the currently logged in user (works only when security is enabled)")
	@GetMapping("/user")
	public Principal getPrincipal(Principal principal) {
		return principal;
	}

	@Operation(summary = "returns a summary of existing articles")
	@GetMapping("/info/articles")
	public ArticleInfoDTO getArticleInfo() {
		return this.articleService.getArticleInfo();
	}
	
	
	
	
}
