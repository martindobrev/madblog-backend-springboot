package com.noser.blog.controller;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.noser.blog.api.HtmlSnippetCollectionDTO;
import com.noser.blog.api.HtmlSnippetDTO;
import com.noser.blog.domain.HtmlSnippet;
import com.noser.blog.service.HtmlSnippetService;

@RestController
@RequestMapping("/api/v1/")
@Api(tags = "HtmlSnippet")
public class HtmlSnippetController {
	
	private final HtmlSnippetService htmlSnippetService;
	
	public HtmlSnippetController(HtmlSnippetService htmlSnippetService) {
		super();
		this.htmlSnippetService = htmlSnippetService;
	}
	
	
	@GetMapping("/snippets")
	public HtmlSnippetCollectionDTO getHtmlSnippets() {
		return this.htmlSnippetService.getHtmlSnippets();
	}
	
	@GetMapping("/snippets/{name}")
	public HtmlSnippetDTO getHtmlSnippetByName(@PathVariable String name) {
		return this.htmlSnippetService.getHtmlSnippetByName(name);
	}
	
	@PostMapping("/snippets")
	public HtmlSnippetDTO createSnippet(@RequestBody HtmlSnippet htmlSnippet) {
		return this.htmlSnippetService.createHtmlSnippet(htmlSnippet);
	}
	
	@PutMapping("/snippets/{id}")
	public HtmlSnippetDTO editSnippet(@RequestBody HtmlSnippet htmlSnippet) {
		return this.htmlSnippetService.editHtmlSnippet(htmlSnippet);
	}

}