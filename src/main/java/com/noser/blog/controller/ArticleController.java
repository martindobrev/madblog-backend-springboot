package com.noser.blog.controller;

import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.domain.Article;
import com.noser.blog.service.ArticleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.security.Principal;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/")
public class ArticleController {

	private final ArticleService articleService;

	@Autowired
	public ArticleController(ArticleService articleService) {
		this.articleService = articleService;
	}

	@GetMapping("/articles")
	public ArticleCollectionDTO getAllArticles(@RequestParam Optional<String> loadUserInfo) {
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
