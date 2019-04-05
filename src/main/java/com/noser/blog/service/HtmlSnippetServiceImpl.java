package com.noser.blog.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.noser.blog.api.HtmlSnippetCollectionDTO;
import com.noser.blog.api.HtmlSnippetDTO;
import com.noser.blog.domain.HtmlSnippet;
import com.noser.blog.mapper.HtmlSnippetMapper;
import com.noser.blog.repository.HtmlSnippetRepository;

@Service
public class HtmlSnippetServiceImpl implements HtmlSnippetService {

	private final HtmlSnippetRepository htmlSnippetRepository;
	private final HtmlSnippetMapper htmlSnippetMapper;
	
	public HtmlSnippetServiceImpl(HtmlSnippetRepository htmlSnippetRepository, HtmlSnippetMapper htmlSnippetMapper) {
		super();
		this.htmlSnippetRepository = htmlSnippetRepository;
		this.htmlSnippetMapper = htmlSnippetMapper;
	}

	@Override
	public HtmlSnippetCollectionDTO getHtmlSnippets() {
		List<HtmlSnippetDTO> snippets = new ArrayList<>();
		
		Iterable<HtmlSnippet> iterable = this.htmlSnippetRepository.findAll();
		iterable.forEach(snippet -> {
			snippets.add(this.htmlSnippetMapper.domain2dto(snippet));
		});
		
		return HtmlSnippetCollectionDTO.builder()
				.htmlSnippets(snippets)
				.build();
	}

	@Override
	public HtmlSnippetDTO getHtmlSnippetById(long id) {
		
		if (!this.htmlSnippetRepository.existsById(id)) {
			return null;
		}
		
		final HtmlSnippet snippet = this.htmlSnippetRepository.findById(id).get();
		return this.htmlSnippetMapper.domain2dto(snippet);
	}

	@Override
	public HtmlSnippetDTO getHtmlSnippetByName(String name) {
		
		if (!this.htmlSnippetRepository.existsByName(name)) {
			return null;
		}
		
		final HtmlSnippet snippet = this.htmlSnippetRepository.findOneByName(name);
		return this.htmlSnippetMapper.domain2dto(snippet);
	}

	@Override
	public HtmlSnippetDTO createHtmlSnippet(HtmlSnippet htmlSnippet) {
		
		if (htmlSnippet == null || htmlSnippet.getName() == null) {
			return null;
		}
		
		final HtmlSnippet savedSnippet = this.htmlSnippetRepository.save(htmlSnippet);
		return this.htmlSnippetMapper.domain2dto(savedSnippet);
	}

	@Override
	public HtmlSnippetDTO editHtmlSnippet(HtmlSnippet htmlSnippet) {
		if (htmlSnippet == null || !this.htmlSnippetRepository.existsById(htmlSnippet.getId())) {
			return null;
		}
		
		HtmlSnippet snippetToEdit = this.htmlSnippetRepository.findById(htmlSnippet.getId()).get();
		
		snippetToEdit.setName(htmlSnippet.getName());
		snippetToEdit.setContent(htmlSnippet.getContent());
		
		return this.htmlSnippetMapper.domain2dto(this.htmlSnippetRepository.save(snippetToEdit));
	}

}
