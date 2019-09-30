package com.noser.blog.service;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.noser.blog.api.MenuDTO;
import com.noser.blog.api.PageCollectionDTO;
import com.noser.blog.api.PageDTO;
import com.noser.blog.api.PageInfoDTO;
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
				.pages(StreamSupport.stream(this.pageRepository.findAllByOrderByOrderAsc().spliterator(), false)
						.map(page -> this.pageMapper.domain2dto(page,  false)).collect(Collectors.toList()))
				.build();
	}

	@Override
	public PageDTO getPageById(long id) {
		Optional<Page> optionalPage = this.pageRepository.findById(id);

		if (!optionalPage.isPresent()) {
			return null;
		}

		return this.pageMapper.domain2dto(optionalPage.get(), true);
	}

	@Override
	public PageDTO getPageByName(String name) {
		return null;
	}

	@Override
	public PageDTO getPageBySlug(String slug) {
		final Page page = this.pageRepository.findOneBySlug(slug);
		if (page == null) {
			return null;
		}
		return this.pageMapper.domain2dto(page, true);
	}

	@Override
	public PageDTO createPage(Page page) {
		page.setCreated(LocalDateTime.now());
		page.setPublished(false);
		page.setOrder(this.pageRepository.count() + 1);
		Page savedPage = this.pageRepository.save(page);
		return this.pageMapper.domain2dto(savedPage, false);
	}

	@Override
	public PageDTO editPage(Page page) {
		if (!this.pageRepository.existsById(page.getId())) {
			return null;
		}
		Page pageToBeEdited = this.pageRepository.findById(page.getId()).get();
		pageToBeEdited.setContent(page.getContent());
		pageToBeEdited.setName(page.getName());
		pageToBeEdited.setPublished(page.isPublished());
		pageToBeEdited.setSlug(page.getSlug());
		return this.pageMapper.domain2dto(this.pageRepository.save(pageToBeEdited), false);
	}

	@Override
	public PageCollectionDTO reorderPages(List<PageDTO> pages) {
		List<PageDTO> pageDtos = new ArrayList<>();

		if (pages != null) {
			for (int i = 0; i < pages.size(); i++) {
				final PageDTO pageDTO = pages.get(i);
				if (this.pageRepository.existsById(pageDTO.getId())) {
					final Page page = this.pageRepository.findById(pageDTO.getId()).get();
					page.setOrder(Long.valueOf(i + 1));
					pageDtos.add(this.pageMapper.domain2dto(this.pageRepository.save(page), false));
				}
			}
		}

		return PageCollectionDTO.builder().pages(pageDtos).build();
	}

	@Override
	public PageDTO deletePage(long id) {
		Optional<Page> page = this.pageRepository.findById(id);
		if (page.isPresent()) {
			Page pageToDelete = page.get();
			PageDTO pageDTO = this.pageMapper.domain2dto(pageToDelete, false);
			this.pageRepository.delete(page.get());
			return pageDTO;
		}
		return null;
	}

	@Override
	public MenuDTO getPageMenu() {
		return this.pageMapper.getMenu(this.pageRepository.findAllByOrderByOrderAsc()
				.stream()
					.filter(page -> page.isPublished())
					.collect(Collectors.toList())
		);
	}

	@Override
	public PageInfoDTO getPageInfo() {
		
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		Principal principal = null;
		try {
			principal = (Principal) authentication.getPrincipal();
		} catch (ClassCastException exception) {
			
		}
		return PageInfoDTO.builder()
				.total(this.pageRepository.count())
				.own(getOwnPages(principal))
				.unpublished(getUnpublishedPages())
				.build();
	}

	private long getUnpublishedPages() {
		return this.pageRepository.findAllByPublished(false).size();
	}

	private long getOwnPages(Principal principal) {
		if (principal == null || principal.getName() == null) {
			return 0;
		}
		return this.pageRepository.findAllByAuthorId(principal.getName()).size();
	}
}
