package com.noser.blog.service;

import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.domain.Article;
import org.springframework.security.core.Authentication;
import reactor.core.publisher.Mono;

import java.security.Principal;

public interface ArticleService {
  Mono<ArticleCollectionDTO> getAllArticles(Principal principal, Authentication authentication);
  Mono<ArticleDTO> getArticle(Long id, Principal principal, Authentication authentication);
  Mono<ArticleDTO> createArticle(Article article, Principal principal, Authentication authentication);
  Mono<ArticleDTO> editArticle(Article article, Principal principal, Authentication authentication) throws IllegalAccessException;
}
