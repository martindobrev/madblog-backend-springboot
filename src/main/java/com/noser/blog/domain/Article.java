package com.noser.blog.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Article {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @NotNull
  private String title;

  @NotNull
  private String subtitle;

  @Lob
  @NotNull
  private byte[] content;

  private String authorId;

  private Long imageId;

  private boolean published;
  private boolean featured;
  private LocalDateTime created;
}
