package com.noser.blog.controller;

import com.noser.blog.api.ArticleCollectionDTO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ArticleControllerTest {

  @LocalServerPort
  private int port;

  @Autowired
  private TestRestTemplate testRestTemplate;

  @Test
  public void testGetArticlesIsRetrievingArticlesFromDB() throws Exception {
    assertNotNull(this.testRestTemplate.getForObject("http://localhost:" + port + "/api/v1/articles", ArticleCollectionDTO.class));
  }

  //@Test
  //public void testPostOnArticles
}
