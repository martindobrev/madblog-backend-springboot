package com.noser.blog.controller;

import javax.validation.Valid;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
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
import com.noser.blog.api.PageInfoDTO;
import com.noser.blog.domain.Page;
import com.noser.blog.service.PageService;

@RestController
@RequestMapping("/api/v1")
@Api(tags = "Page")
public class PageController {

	private final PageService pageService;
	
	public PageController(final PageService pageService) {
		this.pageService = pageService;
	}

	@ApiOperation(value = "get all available pages with complete details", notes = "This endpoint will return the " +
			"complete list of available pages. The list will also include unpublished pages. Another important point" +
			"is that page order may not be guaranteed. To get a simple ordered description of available pages, consider " +
			"using the /menu endpoint")
	@GetMapping("/pages")
	public PageCollectionDTO getPages() {
		return this.pageService.getPages();
	}

	@ApiOperation(value = "get a single page by it's slug")
	@GetMapping("/pages/{slug}")
	public PageDTO getPage(@PathVariable String slug) {
		return this.pageService.getPageBySlug(slug);
	}

	@ApiOperation(value = "get a single page by id")
	@GetMapping("/pages/single")
	public PageDTO getPage(@RequestParam Long id) {
		return this.pageService.getPageById(id);
	}

	@ApiOperation(value = "get an ordered summary of published pages", notes = "This endpoint will return an " +
			"ordered summary of the available published pages. It is meant to be used for getting the menu entries" +
			"of the application")
	@GetMapping("/menu")
	public MenuDTO getPageMenu() {
		return this.pageService.getPageMenu();
	}

	@ApiOperation(value = "create a new page")
	@PostMapping("/pages")
	public PageDTO createPage(@RequestBody @Valid Page page) {
		return this.pageService.createPage(page);
	}

	@ApiOperation(value = "reorder existing pages", notes = "The endpoint will overwrite the order number of the " +
			"provided pages")
	@PostMapping("/pages/reorder")
	public PageCollectionDTO reorderPages(@RequestBody PageCollectionDTO pageCollection) {
		return this.pageService.reorderPages(pageCollection.getPages());
	}

	@ApiOperation(value = "delete page by id")
	@DeleteMapping("/pages/{id}")
	public PageDTO deletePage(@PathVariable Long id) {
		return this.pageService.deletePage(id);
	}

	@ApiOperation("edit page by id")
	@PutMapping("/pages/{id}")
	public PageDTO editPage(@RequestBody @Valid Page page, @PathVariable Long id) {
		return this.pageService.editPage(page);
	}

	@ApiOperation(value = "get pages summary information")
	@GetMapping("/info/pages")
	public PageInfoDTO getPageInfo() {
		return this.pageService.getPageInfo();
	}
}
