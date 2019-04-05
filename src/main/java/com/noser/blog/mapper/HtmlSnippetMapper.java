package com.noser.blog.mapper;

import com.noser.blog.api.HtmlSnippetDTO;
import com.noser.blog.domain.HtmlSnippet;

public interface HtmlSnippetMapper {
	HtmlSnippetDTO domain2dto(HtmlSnippet htmlSnippet);
	HtmlSnippet dto2domain(HtmlSnippetDTO htmlSnippetDTO);
}
