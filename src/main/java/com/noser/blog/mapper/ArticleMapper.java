package com.noser.blog.mapper;

import com.noser.blog.api.ArticleDTO;
import com.noser.blog.domain.Article;

public interface ArticleMapper {
  ArticleDTO domain2dto(Article article, boolean extractUser);
  Article dto2domain(ArticleDTO articleDTO);
}
