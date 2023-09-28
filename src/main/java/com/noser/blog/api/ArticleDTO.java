package com.noser.blog.api;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Value;

import java.time.LocalDateTime;

@Value
@Builder
public class ArticleDTO {
  private Long id;
  private String title;
  private String subtitle;
  
  @Schema(description = "article content as markdown")
  private String content;
  
  @Schema(description = "parsed article content as html, only available when loading a single article")
  private String htmlContent;
  private String authorId;
  private Long imageId;
  private boolean published;
  private boolean featured;
  private boolean editable;
  private boolean publishable;
  private boolean deletable;
  private LocalDateTime created;
  private UserDTO user;
}
