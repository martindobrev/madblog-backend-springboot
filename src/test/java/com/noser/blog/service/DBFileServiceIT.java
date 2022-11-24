package com.noser.blog.service;

import com.noser.blog.api.BlogFilePageDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DBFileServiceIT {

  @Autowired
  DBFileService dbFileService;

  /**
   * Test that the search works
   *
   * The tests searches the bootstrap data {@link com.noser.blog.bootstrap.BootstrapSomeArticleData}
   * for names that contain "bike". Currently there are 3 images
   *
   */
  @Test
  void getSearchFilePage() {

    // when
    BlogFilePageDTO searchFilePage = dbFileService.getSearchFilePage(0, "bike");

    // then
    assertNotNull(searchFilePage);
    assertEquals(3, searchFilePage.getBlogFiles().size());

  }

  @Test
  void getSearchFilePageNoQuery() {
    // when
    BlogFilePageDTO searchFilePage = dbFileService.getSearchFilePage(1, null);

    // then
    assertNotNull(searchFilePage);
    assertEquals(20, searchFilePage.getBlogFiles().size());

  }
}
