package com.noser.blog.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.noser.blog.api.MenuDTO;
import com.noser.blog.api.PageCollectionDTO;
import com.noser.blog.api.PageDTO;
import com.noser.blog.service.PageService;

@RestController
@RequestMapping("/api/v1")
public class PageController {

	private final PageService pageService;
	
	public PageController(final PageService pageService) {
		this.pageService = pageService;
	}
	
	@GetMapping("/pages")
	public PageCollectionDTO getPages() {
		return this.pageService.getPages();
	}
	
	@GetMapping("/pages/{slug}")
	public PageDTO getPage(@RequestParam String slug) {
		return this.pageService.getPageBySlug(slug);
	}
	
	@GetMapping("/menu")
	public MenuDTO getPageMenu() {
		return this.pageService.getPageMenu();
	}
}
