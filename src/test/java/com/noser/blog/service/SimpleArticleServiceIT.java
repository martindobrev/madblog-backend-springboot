package com.noser.blog.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.when;

import java.lang.reflect.UndeclaredThrowableException;

import com.noser.blog.api.ArticlePageDTO;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
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

	@DisplayName("Test that search checks the article title the correct amount of matches")
	@Test
	public void testSearchChecksArticleTitleAndReturnsAllMatches(){

		//give - initial data articles are present

		//when
		//when
		final ArticleCollectionDTO searchResults =
				articleService.getAllArticlesBySearchTitle("end development");

		//then
		assertNotNull(searchResults);
		assertNotNull(searchResults.getArticles());
		assertEquals(2,searchResults.getArticles().size());
		assertEquals("Backend development tutorials (Spring Boot 2)",searchResults.getArticles().get(0).getTitle());
		assertEquals("Frontend development tutorial (Angular)",searchResults.getArticles().get(1).getTitle());
	}

	@DisplayName("Test that search checks the article title the correct amount of matches CASE INSENSITIVE")
	@Test
	public void testSearchChecksArticleTitleAndReturnsAllMatchesCaseInsensitive(){

		//give - initial data articles are present

		//when
		//when
		final ArticleCollectionDTO searchResults =
				articleService.getAllArticlesBySearchTitle("DEVElopMENT");

		//then
		assertNotNull(searchResults);
		assertNotNull(searchResults.getArticles());
		assertEquals(2,searchResults.getArticles().size());
		assertEquals("Backend development tutorials (Spring Boot 2)",searchResults.getArticles().get(0).getTitle());
		assertEquals("Frontend development tutorial (Angular)",searchResults.getArticles().get(1).getTitle());
	}

	@DisplayName("Test that search checks the article title")
	@Test
	public void testSearchChecksArticleTitle() {
		// given - initial data articles are present

		// when
		// when
		final ArticleCollectionDTO searchResults =
				articleService.getAllArticlesBySearchTitle("tech stack");

		// then
		assertNotNull(searchResults);
		assertNotNull(searchResults.getArticles());
		assertEquals(1, searchResults.getArticles().size());
		assertEquals("Our tech stack", searchResults.getArticles().get(0).getTitle());
	}

	@DisplayName("Test that search checks the article title CASE INSENSITIVE")
	@Test
	public void testSearchChecksArticleTitleCaseInsensitive() {
		// given - initial data articles are present

		// when
		// when
		final ArticleCollectionDTO searchResults =
				articleService.getAllArticlesBySearchTitle("TecH STaCk");

		// then
		assertNotNull(searchResults);
		assertNotNull(searchResults.getArticles());
		assertEquals(1, searchResults.getArticles().size());
		assertEquals("Our tech stack", searchResults.getArticles().get(0).getTitle());
	}

	@DisplayName("Test that search also checks the subtitle property")
	@Test
	public void testSearchAlsoIncludesSubtitles() {
		// given - initial data articles are present

		// when
		final ArticleCollectionDTO searchResults =
				articleService.getAllArticlesBySearchTitle("about the backend development topics");

		// then
		assertNotNull(searchResults);
		assertNotNull(searchResults.getArticles());
		assertEquals(1, searchResults.getArticles().size());
		assertEquals("Backend development tutorials (Spring Boot 2)", searchResults.getArticles().get(0).getTitle());
	}

	@DisplayName("Test that search also checks the subtitle property CASE INSENSITIVE")
	@Test
	public void testSearchAlsoIncludesSubtitlesCaseInsensitive() {
		// given - initial data articles are present

		// when
		final ArticleCollectionDTO searchResults =
				articleService.getAllArticlesBySearchTitle("ABOUT the bACKenD deVelopment topics");

		// then
		assertNotNull(searchResults);
		assertNotNull(searchResults.getArticles());
		assertEquals(1, searchResults.getArticles().size());
		assertEquals("Backend development tutorials (Spring Boot 2)", searchResults.getArticles().get(0).getTitle());
	}

	@DisplayName("Test that search also checks the subtitle property")
	@Test
	public void testSearchAlsoIncludesSubtitles1() {
		// given - initial data articles are present

		// when
		final ArticleCollectionDTO searchResults =
				articleService.getAllArticlesBySearchTitle("city");

		// then
		assertNotNull(searchResults);
		assertNotNull(searchResults.getArticles());
		assertEquals(1, searchResults.getArticles().size());
		assertEquals("Whether commuting to work or just cruising through the city - riding a bike is always fun!", searchResults.getArticles().get(0).getSubtitle());
	}

	@DisplayName("Test that search also searches the content of articles")
	@Test
	public void testSearchAlsoIncludesContent() {
		// given - initial data articles are present

		// when
		final ArticleCollectionDTO searchResults =
				articleService.getAllArticlesBySearchTitle("WE ARE JAVA EXPERTS");

		// then
		assertNotNull(searchResults);
		assertNotNull(searchResults.getArticles());
		assertEquals(1, searchResults.getArticles().size());
		assertEquals("Our tech stack", searchResults.getArticles().get(0).getTitle());
	}

	@DisplayName("Test that content search is case insensitive")
	@Test
	public void testSearchAlsoIncludesContentCaseInsensitive() {
		// given - initial data articles are present

		// when
		final ArticleCollectionDTO searchResults =
				articleService.getAllArticlesBySearchTitle("we are java experts");

		// then
		assertNotNull(searchResults);
		assertNotNull(searchResults.getArticles());
		assertEquals(1, searchResults.getArticles().size());
		assertEquals("Our tech stack", searchResults.getArticles().get(0).getTitle());
	}


	@DisplayName("Test that searchByAllFields return correct result when searching with authorId CASE INSENSITIVE")
	@Test
	public void getAllPublishedArticlesBySearchAuthorId() {

		final ArticlePageDTO searchResult =
				articleService.getAllPublishedArticlesBySearchAllFields(0,"danIEL");

		assertNotNull(searchResult);
		assertNotNull(searchResult.getArticles());
		assertEquals(2, searchResult.getArticles().size());
		assertEquals("daniel",searchResult.getArticles().get(0).getAuthorId().toLowerCase());
	}


	@DisplayName("Test searchByAllFields with non-existing keyword")
	@Test
	public void returnNullWhenNoArticlesFoundBySearchByAuthorId() {

		final ArticlePageDTO searchResult =
				articleService.getAllPublishedArticlesBySearchAllFields(0,"noone");

		assertNotNull(searchResult);
		assertNotNull(searchResult.getArticles());
		assertEquals(0, searchResult.getArticles().size());
	}

	@DisplayName("Test searchByAllFields with parentheses (")
	@Test
	public void searchWithParenthesesLeft() {

		final ArticlePageDTO searchResult =
				articleService.getAllPublishedArticlesBySearchAllFields(0,"(");

		assertNotNull(searchResult);
		assertNotNull(searchResult.getArticles());
		assertEquals(4, searchResult.getArticles().size());
	}

	@DisplayName("Test searchByAllFields with parentheses )")
	@Test
	public void searchWithParenthesesRight() {

		final ArticlePageDTO searchResult =
				articleService.getAllPublishedArticlesBySearchAllFields(0,")");

		assertNotNull(searchResult);
		assertNotNull(searchResult.getArticles());
		assertEquals(5, searchResult.getArticles().size());
	}

	@DisplayName("Test searchByAllFields with parentheses [")
	@Test
	public void searchWithSquareBracketLeft() {

		final ArticlePageDTO searchResult =
				articleService.getAllPublishedArticlesBySearchAllFields(0,"[");

		assertNotNull(searchResult);
		assertNotNull(searchResult.getArticles());
		assertEquals(3, searchResult.getArticles().size());
	}

	@DisplayName("Test searchByAllFields with parentheses ]")
	@Test
	public void searchWithSquareBracketRight() {

		final ArticlePageDTO searchResult =
				articleService.getAllPublishedArticlesBySearchAllFields(0,"]");

		assertNotNull(searchResult);
		assertNotNull(searchResult.getArticles());
		assertEquals(3, searchResult.getArticles().size());
	}

	@DisplayName("Test searchByAllFields with parentheses {")
	@Test
	public void searchWithCurlyBracketLeft() {

		final ArticlePageDTO searchResult =
				articleService.getAllPublishedArticlesBySearchAllFields(0,"{");

		assertNotNull(searchResult);
		assertNotNull(searchResult.getArticles());
		assertEquals(0, searchResult.getArticles().size());
	}

	@DisplayName("Test searchByAllFields with parentheses }")
	@Test
	public void searchWithCurlyBracketRight() {

		final ArticlePageDTO searchResult =
				articleService.getAllPublishedArticlesBySearchAllFields(0,"}");

		assertNotNull(searchResult);
		assertNotNull(searchResult.getArticles());
		assertEquals(0, searchResult.getArticles().size());
	}



}
