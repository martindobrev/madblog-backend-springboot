package com.noser.blog.api;

import lombok.Builder;
import lombok.Value;

import java.time.LocalDateTime;

@Value
@Builder
public class ArticleDTO {
  private Long id;
  private String title;
  private String subtitle;
  private String content;
  private String authorId;
  private boolean published;
  private boolean featured;
  private boolean editable;
  private LocalDateTime created;
}
