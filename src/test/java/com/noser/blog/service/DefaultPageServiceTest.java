package com.noser.blog.service;

import static org.hamcrest.CoreMatchers.any;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.anything;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.ArgumentMatchers;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.noser.blog.api.MenuDTO;
import com.noser.blog.api.PageDTO;
import com.noser.blog.domain.Page;
import com.noser.blog.mapper.PageMapper;
import com.noser.blog.mapper.SimplePageMapper;
import com.noser.blog.repository.PageRepository;

public class DefaultPageServiceTest {
	
	@Mock
	private PageRepository pageRepository;
	
	private PageMapper pageMapper;
	
	private DefaultPageService serviceUnderTest;

	@Before
	public void setUp() {
		MockitoAnnotations.initMocks(this);
		pageMapper = new SimplePageMapper();
		serviceUnderTest = new DefaultPageService(pageMapper, pageRepository);
	}
	
	@Test
	public void testPageReordering() {
		when(pageRepository.findAllByOrderByOrderAsc()).thenReturn(getMockPages(3));
		when(pageRepository.existsById(ArgumentMatchers.anyLong())).thenReturn(true);
		when(pageRepository.findById(ArgumentMatchers.eq(1l))).thenReturn(Optional.of(getMockPages(3).get(0)));
		when(pageRepository.findById(ArgumentMatchers.eq(2l))).thenReturn(Optional.of(getMockPages(3).get(1)));
		when(pageRepository.findById(ArgumentMatchers.eq(3l))).thenReturn(Optional.of(getMockPages(3).get(2)));
		
		List<PageDTO> reorderedPages = new ArrayList<PageDTO>();
		
		reorderedPages.add(this.pageMapper.domain2dto(getMockPages(3).get(2), false));
		reorderedPages.add(this.pageMapper.domain2dto(getMockPages(3).get(1), false));
		reorderedPages.add(this.pageMapper.domain2dto(getMockPages(3).get(0), false));
		
		serviceUnderTest.reorderPages(reorderedPages);
		
		ArgumentCaptor<Page> argumentCaptor = ArgumentCaptor.forClass(Page.class);
		verify(pageRepository, times(3)).save(argumentCaptor.capture());
		
		assertEquals(3, argumentCaptor.getAllValues().size());
		assertEquals(Long.valueOf(1l), argumentCaptor.getAllValues().get(0).getOrder());
		assertEquals(Long.valueOf(2l), argumentCaptor.getAllValues().get(1).getOrder());
		assertEquals(Long.valueOf(3l), argumentCaptor.getAllValues().get(2).getOrder());
	}
	
	@Test
	public void testGetMenu() {
		when(pageRepository.findAllByOrderByOrderAsc()).thenReturn(getMockPages(3));
		
		final MenuDTO menuDto = serviceUnderTest.getPageMenu();
		
		assertNotNull(menuDto);
		assertEquals(3, menuDto.getMenuEntries().size());
		assertEquals("Page 1", menuDto.getMenuEntries().get(0).getName());
		assertEquals("Page 2", menuDto.getMenuEntries().get(1).getName());
		assertEquals("Page 3", menuDto.getMenuEntries().get(2).getName());
	}

	private List<Page> getMockPages(final int n) {
		List<Page> mockPages = new ArrayList<>();
		for (int i = 1; i <= n; i++) {
			mockPages.add(
					Page.builder()
					.id(Long.valueOf(i))
					.authorId("TEST")
					.content("CONTENT " + i)
					.created(LocalDateTime.now())
					.published(true)
					.order(Long.valueOf(i))
					.name("Page " + i)
					.slug("page" + i)
						.build()
					);
		}
		return mockPages;
	}

}
