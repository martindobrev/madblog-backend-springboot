package com.noser.blog.mapper;

import com.noser.blog.TestAuthentication;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.domain.Article;
import org.junit.Test;
import org.springframework.security.core.Authentication;
import sun.security.acl.PrincipalImpl;

import java.security.Principal;
import java.time.LocalDateTime;

import static junit.framework.TestCase.assertTrue;
import static org.junit.Assert.assertFalse;

public class SimpleArticleMapperTest {

  private final Principal testUser = new PrincipalImpl("user");

  private final Authentication adminAuthentication = new TestAuthentication(true, "admin");
  private final Authentication userAuthentication = new TestAuthentication(true, "user");
  private final Authentication publishedAuthentication = new TestAuthentication(true, "publisher");
  private final SimpleArticleMapper articleMapperUnderTest = new SimpleArticleMapper();

  private final Article ownArticle = Article.builder()
      .authorId("user")
      .created(LocalDateTime.now())
      .title("Own Article")
      .published(true)
      .featured(true)
      .build();


  private final Article foreignArticle = Article.builder()
      .authorId("someOtherUser")
      .created(LocalDateTime.now())
      .title("Foreign article")
      .published(true)
      .featured(true)
      .build();


  @Test
  public void testMapperSetsEditableToTrueIfUserIsAdmin() {
    final ArticleDTO articleDTO = articleMapperUnderTest.domain2dto(this.ownArticle, testUser, adminAuthentication);
    assertTrue(articleDTO.isEditable());
  }

  @Test
  public void testMapperSetsEditableToTrueIfOwnArticle() {
    final ArticleDTO articleDTO = articleMapperUnderTest.domain2dto(this.ownArticle, testUser, userAuthentication);
    assertTrue(articleDTO.isEditable());
  }

  @Test
  public void testMapperSetsEditableToFalseOnDifferentSimpleUser() {
    final ArticleDTO articleDTO = articleMapperUnderTest.domain2dto(this.foreignArticle, testUser, userAuthentication);
    assertFalse(articleDTO.isEditable());
  }

  @Test
  public void testMapperSetsEditableToFalseWhenNoUserIsLoggedIn() {
    final ArticleDTO articleDTO = articleMapperUnderTest.domain2dto(this.foreignArticle, testUser, userAuthentication);
    assertFalse(articleDTO.isEditable());
  }

}
