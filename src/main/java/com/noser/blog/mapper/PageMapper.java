package com.noser.blog.mapper;

import java.util.List;

import com.noser.blog.api.MenuDTO;
import com.noser.blog.api.PageDTO;
import com.noser.blog.domain.Page;

public interface PageMapper {
	PageDTO domain2dto(final Page page);
	Page dto2domain(final PageDTO pageDto);
	MenuDTO getMenu(final List<Page> pages);
}
