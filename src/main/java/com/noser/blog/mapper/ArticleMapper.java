package com.noser.blog.mapper;

import com.noser.blog.api.ArticleDTO;
import com.noser.blog.api.ArticlePageDTO;
import com.noser.blog.domain.Article;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface ArticleMapper {
  ArticleDTO domain2dto(Article article, boolean extractUser);
  Article dto2domain(ArticleDTO articleDTO);
  ArticlePageDTO domainPage2dto(Page<Article> articlePage);
}
