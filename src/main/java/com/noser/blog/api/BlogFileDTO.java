package com.noser.blog.api;

import lombok.Builder;
import lombok.Value;

import java.time.LocalDateTime;

@Value
@Builder
public class BlogFileDTO {
  private long id;
  private String name;
  private long size;
  private String authorId;
  private String fileType;
  private LocalDateTime uploaded;
}
