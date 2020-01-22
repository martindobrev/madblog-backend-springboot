package com.noser.blog.service;

import java.util.List;

import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.api.ArticleInfoDTO;
import com.noser.blog.api.ArticlePageDTO;
import com.noser.blog.domain.Article;
import com.noser.blog.security.UnauthorizedException;

public interface ArticleService {
  ArticleCollectionDTO getAllArticles(boolean loadUserInfo);
  ArticlePageDTO getArticlePage(int pageNumber);
  ArticleDTO getArticle(Long id);
  ArticleDTO getRandomFeaturedArticle();
  ArticleDTO createArticle(Article article);
  ArticleDTO editArticle(Article article) throws UnauthorizedException;
  boolean deleteArticle(Article article);
  List<ArticleDTO> getUserArticles(String userId);
  ArticleInfoDTO getArticleInfo();
  boolean deleteArticle(Long articleId);
  ArticlePageDTO getSearchArticlePage(long pageNumber, String query);

  // TODO: Change the return type to ArticlePageDTO so that paging also works for pages
  ArticleCollectionDTO getAllArticlesBySearchTitle(String searchQuery);
  ArticlePageDTO getAllPublishedArticlesBySearchAllFields(long pageNumber, String searchQuery);
}