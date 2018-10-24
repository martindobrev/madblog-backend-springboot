package com.noser.blog.mapper;

import com.noser.blog.api.ArticleDTO;
import com.noser.blog.domain.Article;
import org.springframework.security.core.Authentication;

import java.security.Principal;

public interface ArticleMapper {
  ArticleDTO domain2dto(Article article, Principal principal, Authentication authentication);
  Article dto2domain(ArticleDTO articleDTO);
}
