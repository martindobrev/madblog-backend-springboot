package com.noser.blog.domain;

import javax.validation.constraints.NotNull;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
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
