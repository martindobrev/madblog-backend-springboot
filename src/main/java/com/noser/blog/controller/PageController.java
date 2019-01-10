package com.noser.blog.controller;

import javax.validation.Valid;
import javax.ws.rs.PathParam;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.noser.blog.api.MenuDTO;
import com.noser.blog.api.PageCollectionDTO;
import com.noser.blog.api.PageDTO;
import com.noser.blog.domain.Page;
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
	public PageDTO getPage(@PathVariable String slug) {
		return this.pageService.getPageBySlug(slug);
	}
	
	@GetMapping("/pages/single")
	public PageDTO getPage(@RequestParam Long id) {
		return this.pageService.getPageById(id);
	}
	
	@GetMapping("/menu")
	public MenuDTO getPageMenu() {
		return this.pageService.getPageMenu();
	}
	
	@PostMapping("/pages")
	public PageDTO createPage(@RequestBody @Valid Page page) {
		return this.pageService.createPage(page);
	}
	
	@PostMapping("/pages/reorder")
	public PageCollectionDTO reorderPages(@RequestBody PageCollectionDTO pageCollection) {
		return this.pageService.reorderPages(pageCollection.getPages());
	}
	
	@DeleteMapping("/pages/{id}")
	public PageDTO deletePage(@PathVariable Long id) {
		return this.pageService.deletePage(id);
	}
	
	@PutMapping("/pages/{id}")
	public PageDTO editPage(@RequestBody @Valid Page page, @PathVariable Long id) {
		return this.pageService.editPage(page);
	}
	
	//@Post
}
