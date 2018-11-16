package com.noser.blog.api;

import lombok.Builder;
import lombok.Value;

import java.util.List;

@Value
@Builder
public class ArticleCollectionDTO {
  private List<ArticleDTO> articles;
}
