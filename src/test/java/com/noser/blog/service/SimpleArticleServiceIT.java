package com.noser.blog.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.when;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.junit4.SpringRunner;

import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.domain.Article;
import com.noser.blog.mapper.ArticleMapper;
import com.noser.blog.mapper.SimpleArticleMapper;
import com.noser.blog.mock.AnonymousAuthentication;
import com.noser.blog.mock.UserWithRolesAuthentication;
import com.noser.blog.security.UnauthorizedException;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SimpleArticleServiceIT {
	
	
	@Autowired
	private ArticleService articleService;

	private ArticleMapper articleMapper;
	
	@Mock
	private SecurityContext mockSecurityContext;
	
	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);
		SecurityContextHolder.setContext(mockSecurityContext);
		this.articleMapper = new SimpleArticleMapper(null);
	}

	@Test
	public void testPublishedArticlesAreReturnedCorrectlyForAnonymousUsers() {
		when(mockSecurityContext.getAuthentication()).thenReturn(new AnonymousAuthentication());
		
		ArticleCollectionDTO allArticles = this.articleService.getAllArticles(false);

		assertNotNull(allArticles.getArticles());
		assertEquals(6, allArticles.getArticles().size());
		assertEquals(false, allArticles.getArticles().stream().anyMatch(articleDTO -> articleDTO.getTitle().equals("UNPUBLISHED")));
	}
	
	@Test
	public void testUnpublishedArticlesAreVisibleForTheCreatedUser() {
		when(mockSecurityContext.getAuthentication()).thenReturn(new UserWithRolesAuthentication("TEST_USER", "user"));
		
		ArticleCollectionDTO allArticles = this.articleService.getAllArticles(false);
		
		assertEquals(7, allArticles.getArticles().size());
		assertTrue(allArticles.getArticles().stream().anyMatch(articleDTO -> articleDTO.getTitle().equals("UNPUBLISHED")));
	}
	
	@Test
	public void testUnpublishedArticlesOfOtherUsersAreNotVisibleToDifferentUser() {
		
		when(mockSecurityContext.getAuthentication()).thenReturn(new UserWithRolesAuthentication("USER_WITHOUT_ARTICLES", "user"));
		
		ArticleCollectionDTO allArticles = this.articleService.getAllArticles(false);
		
		assertEquals(6, allArticles.getArticles().size());
		assertFalse(allArticles.getArticles().stream().anyMatch(article -> "UNPUBLISHED".equals(article.getTitle())));
	}
	
	@Test
	public void testEditingOwnArticleIsAllowed() throws Exception {
		when(mockSecurityContext.getAuthentication()).thenReturn(new AnonymousAuthentication());
		Article toBeChangedArticle = this.articleMapper.dto2domain(this.articleService.getAllArticles(false).getArticles().get(0));
		when(mockSecurityContext.getAuthentication()).thenReturn(new UserWithRolesAuthentication(toBeChangedArticle.getAuthorId(), "user"));
		toBeChangedArticle.setContent("CHANGED CONTENT");
		articleService.editArticle(toBeChangedArticle);
		// no exception shall be thrown
	}
	
	@Test(expected = UnauthorizedException.class)
	public void testEditingOtherArticleIsNotAllowed() throws UnauthorizedException {
		when(mockSecurityContext.getAuthentication())
			.thenReturn(new UserWithRolesAuthentication("TEST_USER", "user"));
		
		ArticleDTO dtoToChange = articleService.getAllArticles(false).getArticles().get(0);
		Article changedArticle = this.articleMapper.dto2domain(dtoToChange);
		changedArticle.setContent("CHANGED CONTENT");
		articleService.editArticle(changedArticle);
	}
}
