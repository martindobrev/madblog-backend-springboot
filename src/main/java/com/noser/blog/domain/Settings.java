package com.noser.blog.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Settings {

	@Id
	@Column(name = "setting_name")
	private String name;

	@Column(name = "setting_value")
	private String value;
	
}