package com.noser.blog.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.when;

import java.lang.reflect.UndeclaredThrowableException;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.junit4.SpringRunner;

import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.api.UserDTO;
import com.noser.blog.config.BlogProperties;
import com.noser.blog.domain.Article;
import com.noser.blog.mapper.ArticleMapper;
import com.noser.blog.mapper.SimpleArticleMapper;
import com.noser.blog.mock.AnonymousAuthentication;
import com.noser.blog.mock.UserWithRolesAuthentication;
import com.noser.blog.security.UnauthorizedException;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SimpleArticleServiceIT {
	
	/**
	 * Test configuration to mock Keycloak Service
	 */
	@TestConfiguration
	static class SimpleArticleServiceTestConfiguration {
		
		@Bean
		@Primary
		public KeycloakService getKeycloakService() {
			return Mockito.mock(KeycloakService.class);
		}
	}
	
	private ArticleMapper articleMapper;
	
	private ArticleCollectionDTO ALL_ARTICLES;
	
	@Mock
	private SecurityContext mockSecurityContext;
	
	@MockBean
	private KeycloakService mockKeycloakService;
	
	@Autowired
	private ArticleService articleService;
	
	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);
		SecurityContextHolder.setContext(mockSecurityContext);
		this.articleMapper = new SimpleArticleMapper(null, new BlogProperties());
		
		when(mockSecurityContext.getAuthentication()).thenReturn(new UserWithRolesAuthentication("TEST_ADMIN", "user", "publisher", "admin"));
		when(mockKeycloakService.getUserInfo(ArgumentMatchers.anyString()))
				.thenReturn(UserDTO.builder().id("TEST").firstname("TIM").lastname("TEST").build());
		this.ALL_ARTICLES = articleService.getAllArticles(false);
	}
	
	private Article getPublishedArticle() {
		return this.ALL_ARTICLES.getArticles().stream()
			.filter(article -> article.isPublished())
			.findFirst().map(this.articleMapper::dto2domain)
			.orElse(null);
	}
	
	private Article getUnpublishedArticle() {
		return this.ALL_ARTICLES.getArticles().stream()
				.filter(article -> !article.isPublished())
				.findFirst().map(this.articleMapper::dto2domain)
				.orElse(null);
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
	public void testAnonymousUserCanViewPublishedArticle() {
		when(mockSecurityContext.getAuthentication()).thenReturn(new AnonymousAuthentication());
		
		final Article publishedArticle = this.getPublishedArticle();
		
		this.articleService.getArticle(publishedArticle.getId());
		// exception shall not be thrown
	}
	
	@Test(expected = UndeclaredThrowableException.class)
	public void testAnonymousUserCanNotViewUnPublishedArticle() {
		when(mockSecurityContext.getAuthentication()).thenReturn(new AnonymousAuthentication());
		
		final Article unpublishedArticle = this.getUnpublishedArticle();
		
		this.articleService.getArticle(unpublishedArticle.getId());
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
	
	@Test(expected = UnauthorizedException.class)
	public void testPublishingNotAllowedThrowsException() throws UnauthorizedException {
		when(mockSecurityContext.getAuthentication()).thenReturn(new UserWithRolesAuthentication("TEST_USER", "user"));
		ArticleDTO dtoToChange = articleService.getAllArticles(false)
				.getArticles().stream()
				.filter(article -> article.getAuthorId().equals("TEST_USER"))
				.findFirst().get();
		Article changedArticle = this.articleMapper.dto2domain(dtoToChange);
		changedArticle.setPublished(true);
		articleService.editArticle(changedArticle);
	}
	
	@Test
	public void testPublishingAllowed() throws UnauthorizedException {
		when(mockSecurityContext.getAuthentication()).thenReturn(new UserWithRolesAuthentication("TEST_ADMIN", "admin", "publisher"));
		ArticleDTO dtoToChange = articleService.getAllArticles(false)
				.getArticles().stream()
				.filter(article -> article.getAuthorId().equals("TEST_USER"))
				.findFirst().get();
		Article changedArticle = this.articleMapper.dto2domain(dtoToChange);
		changedArticle.setPublished(true);
		articleService.editArticle(changedArticle);
	}
	
	@Test(expected = UnauthorizedException.class)
	public void testFeaturingChangeNotAllowedThrowsException() throws UnauthorizedException {
		when(mockSecurityContext.getAuthentication()).thenReturn(new UserWithRolesAuthentication("TEST_USER", "user"));
		ArticleDTO dtoToChange = articleService.getAllArticles(false)
				.getArticles().stream()
				.filter(article -> article.getAuthorId().equals("TEST_USER"))
				.findFirst().get();
		Article changedArticle = this.articleMapper.dto2domain(dtoToChange);
		changedArticle.setFeatured(!dtoToChange.isFeatured());
		articleService.editArticle(changedArticle);
	}
	
	@Test
	public void testFeaturingChangeAllowed() throws UnauthorizedException {
		when(mockSecurityContext.getAuthentication()).thenReturn(new UserWithRolesAuthentication("TEST_ADMIN", "admin", "publisher"));
		ArticleDTO dtoToChange = articleService.getAllArticles(false)
				.getArticles().stream()
				.filter(article -> article.getAuthorId().equals("TEST_USER"))
				.findFirst().get();
		Article changedArticle = this.articleMapper.dto2domain(dtoToChange);
		changedArticle.setFeatured(!dtoToChange.isFeatured());
		articleService.editArticle(changedArticle);
	}
	
}
