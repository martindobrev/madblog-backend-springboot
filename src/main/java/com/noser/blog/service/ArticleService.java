package com.noser.blog.service;

import java.util.List;

import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.domain.Article;
import com.noser.blog.security.CheckEditArticle;
import com.noser.blog.security.UnauthorizedException;

public interface ArticleService {
  ArticleCollectionDTO getAllArticles(boolean loadUserInfo);
  ArticleDTO getArticle(Long id);
  ArticleDTO createArticle(Article article);
  ArticleDTO editArticle(Article article) throws UnauthorizedException;
  ArticleDTO changePublishedStatus(Article article, boolean status);
  ArticleDTO changeFeaturedStatus(Article article, boolean status);
  List<ArticleDTO> getUserArticles(String userId);
}
