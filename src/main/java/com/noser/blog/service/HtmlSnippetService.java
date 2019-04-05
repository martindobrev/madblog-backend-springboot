package com.noser.blog.service;

import com.noser.blog.api.HtmlSnippetCollectionDTO;
import com.noser.blog.api.HtmlSnippetDTO;
import com.noser.blog.domain.HtmlSnippet;

public interface HtmlSnippetService {
	HtmlSnippetCollectionDTO getHtmlSnippets();
	HtmlSnippetDTO getHtmlSnippetById(final long id);
	HtmlSnippetDTO getHtmlSnippetByName(final String name);
	HtmlSnippetDTO createHtmlSnippet(final HtmlSnippet htmlSnippet);
	HtmlSnippetDTO editHtmlSnippet(final HtmlSnippet htmlSnippet);
}
