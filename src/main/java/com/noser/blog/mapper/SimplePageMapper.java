package com.noser.blog.mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.noser.blog.api.MenuDTO;
import com.noser.blog.api.MenuEntryDTO;
import com.noser.blog.api.PageDTO;
import com.noser.blog.domain.Page;

@Component
public class SimplePageMapper implements PageMapper {

	@Override
	public PageDTO domain2dto(Page page) {
		if (page == null) {
			return null;
		}
		
		return PageDTO.builder()
				.authorId(page.getAuthorId())
				.id(page.getId())
				.content(page.getContent())
				.created(page.getCreated())
				.name(page.getName())
				.slug(page.getSlug())
				.order(page.getOrder())
				.build();
	}

	@Override
	public Page dto2domain(PageDTO pageDto) {
		if (pageDto == null) {
			return null;
		}
		return Page.builder()
			.id(pageDto.getId())
			.authorId(pageDto.getAuthorId())
			.content(pageDto.getContent())
			.name(pageDto.getName())
			.created(pageDto.getCreated())
			.order(pageDto.getOrder())
			.slug(pageDto.getSlug())
			.build();
	}

	@Override
	public MenuDTO getMenu(List<Page> pages) {
		if (pages == null) {
			return MenuDTO.builder().menuEntries(new ArrayList<>()).build();
		}
		
		return MenuDTO.builder().menuEntries(pages.stream().map(page -> {
			return MenuEntryDTO.builder().name(page.getName()).slug(page.getSlug()).build();
		}).collect(Collectors.toList())).build();
	}
}