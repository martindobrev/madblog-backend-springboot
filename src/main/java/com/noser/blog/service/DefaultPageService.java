package com.noser.blog.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.stereotype.Service;

import com.noser.blog.api.MenuDTO;
import com.noser.blog.api.PageCollectionDTO;
import com.noser.blog.api.PageDTO;
import com.noser.blog.domain.Page;
import com.noser.blog.mapper.PageMapper;
import com.noser.blog.repository.PageRepository;

@Service
public class DefaultPageService implements PageService {

	private final PageMapper pageMapper;
	private final PageRepository pageRepository;

	public DefaultPageService(final PageMapper pageMapper, final PageRepository pageRepository) {
		this.pageMapper = pageMapper;
		this.pageRepository = pageRepository;
	}

	@Override
	public PageCollectionDTO getPages() {
		return PageCollectionDTO.builder()
				.pages(StreamSupport.stream(this.pageRepository.findAll().spliterator(), false)
						.map(this.pageMapper::domain2dto).collect(Collectors.toList()))
				.build();
	}

	@Override
	public PageDTO getPageById(long id) {
		Optional<Page> optionalPage = this.pageRepository.findById(id);

		if (!optionalPage.isPresent()) {
			return null;
		}

		return this.pageMapper.domain2dto(optionalPage.get());
	}

	@Override
	public PageDTO getPageByName(String name) {
		return null;
	}

	@Override
	public PageDTO getPageBySlug(String slug) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public PageDTO createPage(Page page) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public PageDTO editPage(Page page) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public PageCollectionDTO reorderPages(List<Page> pages) {
		List<PageDTO> pageDtos = new ArrayList<>();

		if (pages != null) {
			for (int i = 0; i < pages.size(); i++) {
				final Page page = pages.get(i);
				page.setOrder(Long.valueOf(i + 1));
				pageDtos.add(this.pageMapper.domain2dto(this.pageRepository.save(page)));
			}
		}

		return PageCollectionDTO.builder().pages(pageDtos).build();
	}

	@Override
	public boolean deletePage(long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public MenuDTO getPageMenu() {
		return this.pageMapper.getMenu(this.pageRepository.findAllByOrderByOrderDesc());
	}
}
