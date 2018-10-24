package com.noser.blog.controller;

import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.api.BlogFileDTO;
import com.noser.blog.domain.Article;
import com.noser.blog.domain.BlogFile;
import com.noser.blog.service.ArticleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.http.codec.multipart.Part;
import org.springframework.security.core.Authentication;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;


import javax.validation.Valid;

import java.security.Principal;

@Slf4j
@RestController
@RequestMapping("/api/v1/")
public class ArticleController {

  private final ArticleService articleService;

  @Autowired
  public ArticleController(ArticleService articleService) {
    this.articleService = articleService;
  }

  @GetMapping("/articles")
  public ArticleCollectionDTO getAllArticles(Principal principal, Authentication authentication) {
    log.info("Principal is: {}", principal);
    log.info("Authentication is: {}", authentication);
    return this.articleService.getAllArticles(principal, authentication);
  }

  @GetMapping("/articles/{articleId}")
  public ArticleDTO getArticle(@PathVariable Long articleId, Principal principal, Authentication authentication) {
    return this.articleService.getArticle(articleId, principal, authentication);
  }

  @PostMapping("/articles")
  public ArticleDTO createArticle(@Valid @RequestBody Article article, Principal principal, Authentication authentication) {
    return this.articleService.createArticle(article, principal, authentication);
  }

  @PutMapping("/articles/{articleId}")
  public ArticleDTO editArticle(@PathVariable Long articleId, @RequestBody Article article, Principal principal, Authentication authentication) throws Exception {
    return this.articleService.editArticle(article, principal, authentication);
  }

  @GetMapping("/user")
  public Principal getPrincipal(Principal principal) {
    return principal;
  }

}
