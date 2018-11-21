package com.noser.blog.mapper;

import com.noser.blog.api.ArticleDTO;
import com.noser.blog.api.UserDTO;
import com.noser.blog.domain.Article;
import com.noser.blog.security.AccessRights;
import com.noser.blog.service.KeycloakService;
import com.vladsch.flexmark.html.HtmlRenderer;
import com.vladsch.flexmark.parser.Parser;
import com.vladsch.flexmark.util.options.MutableDataSet;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.security.Principal;

@Component
public class SimpleArticleMapper implements ArticleMapper {

  private final Parser parser;
  private final HtmlRenderer renderer;
  
  private final KeycloakService keycloakService;
  
  public SimpleArticleMapper(final KeycloakService keycloakService) {
	  this.keycloakService = keycloakService;
	  MutableDataSet options = new MutableDataSet();
	  parser = Parser.builder(options).build();
	  renderer = HtmlRenderer.builder(options).build();
  }

  @Override
  public ArticleDTO domain2dto(Article article, boolean extractUser) {
    if (article == null) {
      return null;
    }
    
    // Extract Authentication and Principal from the Security Context
    final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	Principal principal = null;
	try {
		principal = (Principal) authentication.getPrincipal();
	} catch (ClassCastException exception) {
		
	}
	
	if (!AccessRights.canUserViewArticle(article, principal, authentication)) {
		return null;
	}
	
	UserDTO userDTO = null;
	if (extractUser) {
		userDTO = this.keycloakService.getUserInfo(article.getAuthorId());
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
        .user(userDTO)
        .editable(AccessRights.canUserEditArticle(article, principal, authentication))
        .publishable(AccessRights.isAdminOrPublisher(authentication))
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
