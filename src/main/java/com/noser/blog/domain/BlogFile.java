package com.noser.blog.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class BlogFile {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @NotNull
  private String name;

  @Lob
  @Basic(fetch=FetchType.LAZY, optional = false)
  private byte[] data;

  private long size;
  private String authorId;
  private String fileType;
  private LocalDateTime uploaded;
}
