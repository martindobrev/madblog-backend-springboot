package com.noser.blog.domain;

import java.time.LocalDateTime;

import javax.validation.constraints.NotNull;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "blog_page")
public class Page {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotNull
	@Column(name = "page_name")
	private String name;
	
	@NotNull
	@Column(unique = true)
	private String slug;
	
	@Column(name = "page_order")
	private Long order;
	
	@Lob
	@NotNull
	private String content;
	
	private String authorId;
	private boolean published;
	private LocalDateTime created;
	
}
