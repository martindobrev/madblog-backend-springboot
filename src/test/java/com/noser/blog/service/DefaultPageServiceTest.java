package com.noser.blog.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.noser.blog.api.MenuDTO;
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
		when(pageRepository.findAllByOrderByOrderDesc()).thenReturn(getMockPages(3));
		
		List<Page> reorderedPages = new ArrayList<Page>();
		
		reorderedPages.add(getMockPages(3).get(2));
		reorderedPages.add(getMockPages(3).get(1));
		reorderedPages.add(getMockPages(3).get(0));
		
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
		when(pageRepository.findAllByOrderByOrderDesc()).thenReturn(getMockPages(3));
		
		final MenuDTO menuDto = serviceUnderTest.getPageMenu();
		
		assertNotNull(menuDto);
		assertEquals(3, menuDto.getMenuEntries().size());
		assertEquals("Page 0", menuDto.getMenuEntries().get(0).getName());
		assertEquals("Page 1", menuDto.getMenuEntries().get(1).getName());
		assertEquals("Page 2", menuDto.getMenuEntries().get(2).getName());
	}

	private List<Page> getMockPages(final int n) {
		List<Page> mockPages = new ArrayList<>();
		for (int i = 0; i < n; i++) {
			mockPages.add(
					Page.builder()
					.id(Long.valueOf(i))
					.authorId("TEST")
					.content("CONTENT " + i)
					.created(LocalDateTime.now())
					.order(Long.valueOf(i))
					.name("Page " + i)
					.slug("page" + i)
						.build()
					);
		}
		return mockPages;
	}

}
