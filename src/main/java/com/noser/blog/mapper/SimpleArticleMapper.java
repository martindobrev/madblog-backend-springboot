package com.noser.blog.mapper;

import com.noser.blog.api.ArticleDTO;
import com.noser.blog.domain.Article;
import com.noser.blog.security.AccessRights;
import com.vladsch.flexmark.html.HtmlRenderer;
import com.vladsch.flexmark.parser.Parser;
import com.vladsch.flexmark.util.options.MutableDataSet;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.security.Principal;

@Component
public class SimpleArticleMapper implements ArticleMapper {

  private final Parser parser;
  private final HtmlRenderer renderer;

  public SimpleArticleMapper() {
    MutableDataSet options = new MutableDataSet();
    parser = Parser.builder(options).build();
    renderer = HtmlRenderer.builder(options).build();
  }

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
        .htmlContent(renderer.render(parser.parse(article.getContent())))
        .created(article.getCreated())
        .published(article.isPublished())
        .featured(article.isFeatured())
        .imageId(article.getImageId())
        .editable(AccessRights.canUserEditArticle(article, principal, authentication))
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
