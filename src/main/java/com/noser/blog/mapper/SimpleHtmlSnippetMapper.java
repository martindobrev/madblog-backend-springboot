package com.noser.blog.mapper;

import org.springframework.stereotype.Component;

import com.noser.blog.api.HtmlSnippetDTO;
import com.noser.blog.domain.HtmlSnippet;

@Component
public class SimpleHtmlSnippetMapper implements HtmlSnippetMapper {

	@Override
	public HtmlSnippetDTO domain2dto(HtmlSnippet htmlSnippet) {
		if (htmlSnippet == null) {
			return null;
		}
		
		return HtmlSnippetDTO.builder()
				.id(htmlSnippet.getId())
				.name(htmlSnippet.getName())
				.content(htmlSnippet.getContent())
				.build();
	}

	@Override
	public HtmlSnippet dto2domain(HtmlSnippetDTO htmlSnippetDTO) {
		if (htmlSnippetDTO == null) {
			return null;
		}
		
		return HtmlSnippet.builder()
				.id(htmlSnippetDTO.getId())
				.content(htmlSnippetDTO.getContent())
				.name(htmlSnippetDTO.getName())
				.build();
	}

}
