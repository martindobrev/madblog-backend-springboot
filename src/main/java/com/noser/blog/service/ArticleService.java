package com.noser.blog.service;

import java.util.List;

import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.domain.Article;

public interface ArticleService {
  ArticleCollectionDTO getAllArticles(boolean loadUserInfo);
  ArticleDTO getArticle(Long id);
  ArticleDTO createArticle(Article article);
  ArticleDTO editArticle(Article article);
  ArticleDTO changePublishedStatus(Article article, boolean status);
  ArticleDTO changeFeaturedStatus(Article article, boolean status);
  List<ArticleDTO> getUserArticles(String userId);
}
