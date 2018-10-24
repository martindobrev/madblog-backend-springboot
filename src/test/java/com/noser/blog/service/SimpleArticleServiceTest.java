package com.noser.blog.service;

import com.noser.blog.TestAuthentication;
import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.domain.Article;
import com.noser.blog.mapper.ArticleMapper;
import com.noser.blog.mapper.SimpleArticleMapper;
import com.noser.blog.repository.ArticleRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.Authentication;
import sun.security.acl.PrincipalImpl;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

public class SimpleArticleServiceTest {

  private ArticleMapper articleMapper = new SimpleArticleMapper();
  private ArticleService articleService;

  @Mock
  private ArticleRepository articleRepository;


  @Before
  public void setup() {
    MockitoAnnotations.initMocks(this);

    when(articleRepository.findAll()).thenReturn(getTestArticles());

    this.articleService = new SimpleArticleService(articleRepository, articleMapper);
  }


  @Test
  public void testPublishedArticlesAreReturnedCorrectly() {

    ArticleCollectionDTO allArticles = this.articleService.getAllArticles(null, null).block();

    assertNotNull(allArticles.getPublished());
    assertEquals(3, allArticles.getPublished().size());
    assertEquals(false, allArticles.getPublished().stream().anyMatch(articleDTO -> articleDTO.getId() == 3l));
  }

  @Test
  public void testFeaturedArticlesAreReturnedCorrectly() {

    ArticleCollectionDTO allArticles = this.articleService.getAllArticles(null, null).block();

    assertNotNull(allArticles.getFeatured());
    assertEquals(1, allArticles.getFeatured().size());
    assertFalse(allArticles.getFeatured().stream().anyMatch(articleDTO -> articleDTO.getId() == 1l));
    assertFalse(allArticles.getFeatured().stream().anyMatch(articleDTO -> articleDTO.getId() == 2l));
    assertFalse(allArticles.getFeatured().stream().anyMatch(articleDTO -> articleDTO.getId() == 3l));
    assertTrue(allArticles.getFeatured().stream().anyMatch(articleDTO -> articleDTO.getId() == 4l));
  }

  @Test
  public void testOwnArticlesAreReturnedCorrectly() {
    Principal p = new PrincipalImpl("USER");
    ArticleCollectionDTO allArticles = this.articleService.getAllArticles(p, null).block();
    assertNotNull(allArticles.getOwn());
    assertEquals(1, allArticles.getOwn().size());
    assertTrue(allArticles.getOwn().stream().anyMatch(articleDTO -> articleDTO.getId() == 3l));
  }

  @Test
  public void testUnpublishedArticlesAreNotReturnedWhenNoUserIsLoggedIn() {
    ArticleCollectionDTO allArticles = this.articleService.getAllArticles(null, null).block();

    assertNotNull(allArticles.getUnpublished());
    assertTrue(allArticles.getOwn().isEmpty());
  }

  @Test
  public void testUnpublishedArticlesOfOthersAreNotReturnedWhenUserIsLoggedInButIsRegularUser() {
    Principal p = new PrincipalImpl("TEST");

    ArticleCollectionDTO allArticles = this.articleService.getAllArticles(p, null).block();

    assertNotNull(allArticles.getUnpublished());
    assertTrue(allArticles.getUnpublished().isEmpty());
  }

  @Test
  public void testUnpublishedArticlesOfTheCurrentUserAreReturnedWhenUserIsLoggedIn() {
    Principal p = new PrincipalImpl("USER");
    Authentication authentication = new TestAuthentication(true, "user", "test");

    ArticleCollectionDTO allArticles = this.articleService.getAllArticles(p, authentication).block();

    assertNotNull(allArticles.getUnpublished());
    assertFalse(allArticles.getUnpublished().isEmpty());
    assertEquals(1, allArticles.getUnpublished().size());
    assertEquals("Article 3", allArticles.getUnpublished().get(0).getTitle());
  }

  @Test
  public void testUnpublishedArticlesOfOtherUsersAreReturnedWhenUserIsAdmin() {
    Principal p = new PrincipalImpl("TEST");
    Authentication authentication = new TestAuthentication(true, "admin", "test");

    ArticleCollectionDTO allArticles = this.articleService.getAllArticles(p, authentication).block();

    assertNotNull(allArticles.getUnpublished());
    assertFalse(allArticles.getUnpublished().isEmpty());
    assertEquals(1, allArticles.getUnpublished().size());
    assertEquals("Article 3", allArticles.getUnpublished().get(0).getTitle());
  }


  private Iterable<Article> getTestArticles() {
    List<Article> articles = new ArrayList<>();

    LocalDateTime firstArticleTime = LocalDateTime.of(2018, 1, 1, 10, 0);

    articles.add(Article.builder().id(1l).title("Article 1").authorId("TEST").published(true).featured(false).created(firstArticleTime).build());
    articles.add(Article.builder().id(2l).title("Article 2").authorId("TEST").published(true).featured(false).created(firstArticleTime.plusDays(2)).build());
    articles.add(Article.builder().id(3l).title("Article 3").authorId("USER").published(false).featured(false).created(firstArticleTime.plusDays(4)).build());
    articles.add(Article.builder().id(4l).title("Article 4").authorId("TEST").published(true).featured(true).created(firstArticleTime.plusDays(10)).build());
    //articles.add(ArticleDTO.builder().id(5l).title("Article 2").authorId("TEST").published(true).featured(false).created(firstArticleTime.plusDays(2)).build());

    return articles;
  }

}
