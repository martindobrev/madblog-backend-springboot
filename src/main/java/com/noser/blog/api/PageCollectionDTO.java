package com.noser.blog.api;

import java.util.List;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class PageCollectionDTO {
	private List<PageDTO> pages;
}
