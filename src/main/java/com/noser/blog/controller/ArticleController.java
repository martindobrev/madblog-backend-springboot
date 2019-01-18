package com.noser.blog.controller;

import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.domain.Article;
import com.noser.blog.service.ArticleService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.security.Principal;
import java.util.Optional;

@Api()
@RestController
@RequestMapping("/api/v1/")
public class ArticleController {

	private final ArticleService articleService;

	@Autowired
	public ArticleController(ArticleService articleService) {
		this.articleService = articleService;
	}

	@ApiOperation(value = "This will get a list of available articles", notes = "Articles content will only be "
			+ "available as markdown (content property). "
			+ "To get the parsed HTML in the field htmlContent, get the article by single ID")
	@GetMapping("/articles")
	public ArticleCollectionDTO getAllArticles() {
		return this.articleService.getAllArticles(false);
	}

	@GetMapping("/complete-articles")
	public ArticleCollectionDTO getCompleteVisibleArticles() {
		return this.articleService.getAllArticles(true);
	}

	@GetMapping("/articles/{articleId}")
	public ArticleDTO getArticle(@PathVariable Long articleId) {
		return this.articleService.getArticle(articleId);
	}

	@PostMapping("/articles")
	public ArticleDTO createArticle(@Valid @RequestBody Article article) {
		return this.articleService.createArticle(article);
	}

	@PutMapping("/articles/{articleId}")
	public ArticleDTO editArticle(@PathVariable Long articleId, @RequestBody Article article) throws Exception {
		return this.articleService.editArticle(article);
	}

	@GetMapping("/user")
	public Principal getPrincipal(Principal principal) {
		return principal;
	}
}
