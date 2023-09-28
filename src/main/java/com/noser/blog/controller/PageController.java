package com.noser.blog.controller;

import com.noser.blog.api.MenuDTO;
import com.noser.blog.api.PageCollectionDTO;
import com.noser.blog.api.PageDTO;
import com.noser.blog.api.PageInfoDTO;
import com.noser.blog.domain.Page;
import com.noser.blog.service.PageService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1")
@Tag(name = "Page")
public class PageController {

	private final PageService pageService;
	
	public PageController(final PageService pageService) {
		this.pageService = pageService;
	}

	@Operation(summary = "get all available pages with complete details", description = "This endpoint will return the " +
			"complete list of available pages. The list will also include unpublished pages. Another important point" +
			"is that page order may not be guaranteed. To get a simple ordered description of available pages, consider " +
			"using the /menu endpoint")
	@GetMapping("/pages")
	public PageCollectionDTO getPages() {
		return this.pageService.getPages();
	}

	@Operation(summary = "get a single page by it's slug")
	@GetMapping("/pages/{slug}")
	public PageDTO getPage(@PathVariable String slug) {
		return this.pageService.getPageBySlug(slug);
	}

	@Operation(summary = "get a single page by id")
	@GetMapping("/pages/single")
	public PageDTO getPage(@RequestParam Long id) {
		return this.pageService.getPageById(id);
	}

	@Operation(summary = "get an ordered summary of published pages", description = "This endpoint will return an " +
			"ordered summary of the available published pages. It is meant to be used for getting the menu entries" +
			"of the application")
	@GetMapping("/menu")
	public MenuDTO getPageMenu() {
		return this.pageService.getPageMenu();
	}

	@Operation(summary = "create a new page")
	@PostMapping("/pages")
	public PageDTO createPage(@RequestBody @Valid Page page) {
		return this.pageService.createPage(page);
	}

	@Operation(summary = "reorder existing pages", description = "The endpoint will overwrite the order number of the " +
			"provided pages")
	@PostMapping("/pages/reorder")
	public PageCollectionDTO reorderPages(@RequestBody PageCollectionDTO pageCollection) {
		return this.pageService.reorderPages(pageCollection.getPages());
	}

	@Operation(summary = "delete page by id")
	@DeleteMapping("/pages/{id}")
	public PageDTO deletePage(@PathVariable Long id) {
		return this.pageService.deletePage(id);
	}

	@Operation(summary = "edit page by id")
	@PutMapping("/pages/{id}")
	public PageDTO editPage(@RequestBody @Valid Page page, @PathVariable Long id) {
		return this.pageService.editPage(page);
	}

	@Operation(summary = "get pages summary information")
	@GetMapping("/info/pages")
	public PageInfoDTO getPageInfo() {
		return this.pageService.getPageInfo();
	}
}
