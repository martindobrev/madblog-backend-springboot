package com.noser.blog.service;

import java.util.List;

import com.noser.blog.api.MenuDTO;
import com.noser.blog.api.PageCollectionDTO;
import com.noser.blog.api.PageDTO;
import com.noser.blog.domain.Page;

public interface PageService {
	PageCollectionDTO getPages();
	PageDTO getPageById(final long id);
	PageDTO getPageByName(final String name);
	PageDTO getPageBySlug(final String slug);
	PageDTO createPage(final Page page);
	PageDTO editPage(final Page page);
	PageCollectionDTO reorderPages(List<PageDTO> pages);
	MenuDTO getPageMenu();
	PageDTO deletePage(final long id);
}
