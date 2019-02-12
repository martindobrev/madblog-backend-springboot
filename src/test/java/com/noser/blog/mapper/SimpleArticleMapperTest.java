package com.noser.blog.mapper;

import com.noser.blog.TestAuthentication;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.config.BlogProperties;
import com.noser.blog.domain.Article;
import com.noser.blog.mock.SecurityContextMock;
import com.noser.blog.service.KeycloakService;

import org.junit.Before;
import org.junit.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.time.LocalDateTime;

import static junit.framework.TestCase.assertTrue;
import static org.junit.Assert.assertFalse;
import static org.mockito.Mockito.when;

public class SimpleArticleMapperTest {

	private final Authentication userAuthentication = new TestAuthentication(true, "TEST_USER", "user");	
	
  private SimpleArticleMapper articleMapperUnderTest;
  
  private BlogProperties blogProperties = new BlogProperties();

  @Mock
  private KeycloakService keycloakServiceMock;
  
  @Before
  public void setup() {
	  MockitoAnnotations.initMocks(this);
	  this.blogProperties.setSecurityDisabled(false);
	  when(keycloakServiceMock.getUserInfo(ArgumentMatchers.anyString())).thenReturn(null);
	  articleMapperUnderTest = new SimpleArticleMapper(this.keycloakServiceMock, this.blogProperties);	  
	  SecurityContextHolder.getContext().setAuthentication(userAuthentication);
	  
	  
  }
  
   

  private final Article ownArticle = Article.builder()
	  .id(1l)  
      .authorId("TEST_USER")
      .created(LocalDateTime.now())
      .title("Own Article")
      .subtitle("Some subtitle")
      .content("My TEST article is cool")
      .published(true)
      .featured(true)
      .build();


  private final Article foreignArticle = Article.builder()
	  .id(2l)
      .authorId("someOtherUser")
      .created(LocalDateTime.now())
      .title("Foreign article")
      .subtitle("FOREIGN SUBTITLE")
      .content("NOT YOUR BUSINESS")
      .published(true)
      .featured(true)
      .build();


  @Test
  public void testMapperSetsEditableToTrueIfUserIsAdmin() {
    final ArticleDTO articleDTO = articleMapperUnderTest.domain2dto(this.ownArticle, false);
    assertTrue(articleDTO.isEditable());
  }

  @Test
  public void testMapperSetsEditableToTrueIfOwnArticle() {
    final ArticleDTO articleDTO = articleMapperUnderTest.domain2dto(this.ownArticle, false);
    assertTrue(articleDTO.isEditable());
  }

  @Test
  public void testMapperSetsEditableToFalseOnDifferentSimpleUser() {
    final ArticleDTO articleDTO = articleMapperUnderTest.domain2dto(this.foreignArticle, false);
    assertFalse(articleDTO.isEditable());
  }

  @Test
  public void testMapperSetsEditableToFalseWhenNoUserIsLoggedIn() {
	  SecurityContextHolder.setContext(SecurityContextMock.createAnonymousContext());
    final ArticleDTO articleDTO = articleMapperUnderTest.domain2dto(this.foreignArticle, false);
    assertFalse(articleDTO.isEditable());
  }

}
