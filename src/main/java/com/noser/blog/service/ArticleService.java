package com.noser.blog.service;

import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.domain.Article;
import org.springframework.security.core.Authentication;

import java.security.Principal;

public interface ArticleService {
  ArticleCollectionDTO getAllArticles(Principal principal, Authentication authentication);
  ArticleDTO getArticle(Long id, Principal principal, Authentication authentication);
  ArticleDTO createArticle(Article article, Principal principal, Authentication authentication);
  ArticleDTO editArticle(Article article, Principal principal, Authentication authentication) throws IllegalAccessException;
  boolean allowedToEditArticle(Long id, Principal principal, Authentication authentication);
  boolean allowedToViewArticle(Long id, Principal principal, Authentication authentication);
}
