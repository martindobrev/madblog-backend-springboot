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
import java.util.Optional;
import java.util.stream.Collectors;

@Api(description = "Controller responsible for handling article actions (just a test action)", tags = "Article")
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

	@GetMapping("/listSearchedArticles/{nameQuery}")
    public ArticleCollectionDTO getAllSearchedArticles(@PathVariable String nameQuery){
		System.out.println(nameQuery);
	    return this.articleService.getAllArticlesBySearchTitle(nameQuery);
	}

	@GetMapping("/complete-articles")
	public ArticleCollectionDTO getCompleteVisibleArticles() {
		return this.articleService.getAllArticles(true);
	}

	@GetMapping("/random-featured-article")
	public ArticleDTO getRandomFeaturedArticle() {
		return this.articleService.getRandomFeaturedArticle();
	}

//	@GetMapping("/articles/page/{pageNumber}")
//	public ArticlePageDTO getArticlePage(@PathVariable Long pageNumber) {
//		return this.articleService.getArticlePage(pageNumber.intValue());
//	}


	@GetMapping("/articles/page/{pageNumber}")
	public ArticlePageDTO getArticlePage(@PathVariable Long pageNumber, @RequestParam("name") Optional<String> nameQuery) {
		if (nameQuery.isPresent()){
			return this.articleService.getSearchArticlePage(pageNumber,nameQuery.get());
		}
		return this.articleService.getArticlePage(pageNumber.intValue());
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
	
	@DeleteMapping("/articles/{articleId}")
	public boolean deleteArticle(@PathVariable Long articleId) throws Exception {
		return this.articleService.deleteArticle(articleId);
	}

	@GetMapping("/user")
	public Principal getPrincipal(Principal principal) {
		return principal;
	}
	
	@GetMapping("/info/articles")
	public ArticleInfoDTO getArticleInfo() {
		return this.articleService.getArticleInfo();
	}
	
}
