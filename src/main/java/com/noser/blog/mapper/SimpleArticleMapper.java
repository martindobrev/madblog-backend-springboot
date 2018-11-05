package com.noser.blog.mapper;

import com.noser.blog.api.ArticleDTO;
import com.noser.blog.domain.Article;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.security.Principal;

import static com.noser.blog.security.AccessRights.canUserEditArticle;
import static com.noser.blog.security.AccessRights.isOwnArticle;

@Component
public class SimpleArticleMapper implements ArticleMapper {

  @Override
  public ArticleDTO domain2dto(Article article, Principal principal, Authentication authentication) {
    if (article == null) {
      return null;
    }

    return ArticleDTO.builder()
        .authorId(article.getAuthorId())
        .id(article.getId())
        .title(article.getTitle())
        .subtitle(article.getSubtitle())
        .content(article.getContent())
        .created(article.getCreated())
        .published(article.isPublished())
        .featured(article.isFeatured())
        .imageId(article.getImageId())
        .editable(isOwnArticle(article, principal) || canUserEditArticle(authentication))
        .build();
  }



  @Override
  public Article dto2domain(ArticleDTO articleDTO) {
    if (articleDTO == null) {
      return null;
    }

    return Article.builder()
        .id(articleDTO.getId())
        .authorId(articleDTO.getAuthorId())
        .content(articleDTO.getContent())
        .title(articleDTO.getTitle())
        .subtitle(articleDTO.getSubtitle())
        .published(articleDTO.isPublished())
        .created(articleDTO.getCreated())
        .imageId(articleDTO.getImageId())
        .build();
  }

}
