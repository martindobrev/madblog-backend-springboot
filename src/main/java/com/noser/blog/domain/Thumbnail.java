package com.noser.blog.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Thumbnail {
	
	@Id
	private String id;
	
	@NotNull
	private Long imageId;
	
	@Lob
	private byte[] data;

}
