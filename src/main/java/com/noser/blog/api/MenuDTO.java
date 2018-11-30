package com.noser.blog.api;

import java.util.List;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class MenuDTO {
	private final List<MenuEntryDTO> menuEntries;
}
