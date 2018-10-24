package com.noser.blog.domain;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Data
@Builder
@Entity
public class BlogFile {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @NotNull
  private String name;

  @Lob
  private byte[] data;

  private long size;
  private String authorId;
  private String fileType;
  private LocalDateTime uploaded;
}
