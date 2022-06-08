package com.noser.blog.controller;

import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.api.ArticleInfoDTO;
import com.noser.blog.api.ArticlePageDTO;
import com.noser.blog.domain.Article;
import com.noser.blog.service.ArticleService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.security.Principal;

@Api(description = "Controller responsible for handling article actions (just a test action)", tags = "Article")
@RestController
@RequestMapping("/api/v1/")
public class ArticleController {

	private final ArticleService articleService;

	@Autowired
	public ArticleController(ArticleService articleService) {
		this.articleService = articleService;
	}

	@ApiOperation(value = "get a list of available articles", notes = "Articles content will only be "
			+ "available as markdown (content property). "
			+ "To get the parsed HTML in the field htmlContent, get the article by single ID or use /complete-articles")
	@GetMapping("/articles")
	public ArticleCollectionDTO getAllArticles() {
		return this.articleService.getAllArticles(false);
	}

	@ApiOperation(value = "get a list of all available articles with their complete, rendered contents as HTML")
	@GetMapping("/complete-articles")
	public ArticleCollectionDTO getCompleteVisibleArticles() {
		return this.articleService.getAllArticles(true);
	}

	@ApiOperation(value = "get a random featured article"
			, notes = "picks a random article that is published and featured. Can be used to show a random featured" +
			" article on the homepage of the application")
	@GetMapping("/random-featured-article")
	public ArticleDTO getRandomFeaturedArticle() {
		return this.articleService.getRandomFeaturedArticle();
	}

	@ApiOperation(value = "get a list of articles in pages, starting page index is 0",
			notes = "you can use this endpoint if you want to " +
			"to show the articles in pages. Each page will contain up to 5 entries ")
	@GetMapping("/articles/page/{pageNumber}")
	public ArticlePageDTO getArticlePage(@PathVariable Long pageNumber) {
		return this.articleService.getArticlePage(pageNumber.intValue());
	}

	@ApiOperation(value = "get a sinle article by id", notes = "Also returns rendered content as HTML.")
	@GetMapping("/articles/{articleId}")
	public ArticleDTO getArticle(@PathVariable Long articleId) {
		return this.articleService.getArticle(articleId);
	}

	@ApiOperation(value = "creates a new article")
	@PostMapping("/articles")
	public ArticleDTO createArticle(@Valid @RequestBody Article article) {
		return this.articleService.createArticle(article);
	}

	@ApiOperation(value = "edit an existing article")
	@PutMapping("/articles/{articleId}")
	public ArticleDTO editArticle(@PathVariable Long articleId, @RequestBody Article article) throws Exception {
		return this.articleService.editArticle(article);
	}

	@ApiOperation(value = "delete article by its id")
	@DeleteMapping("/articles/{articleId}")
	public boolean deleteArticle(@PathVariable Long articleId) throws Exception {
		return this.articleService.deleteArticle(articleId);
	}

	@ApiOperation(value = "returns the currently logged in user (works only when security is enabled)")
	@GetMapping("/user")
	public Principal getPrincipal(Principal principal) {
		return principal;
	}

	@ApiOperation(value = "returns a summary of existing articles")
	@GetMapping("/info/articles")
	public ArticleInfoDTO getArticleInfo() {
		return this.articleService.getArticleInfo();
	}
	
	
	
	
}
