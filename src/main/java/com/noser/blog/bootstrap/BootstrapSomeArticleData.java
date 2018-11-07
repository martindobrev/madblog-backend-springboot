package com.noser.blog.bootstrap;

import com.noser.blog.domain.Article;
import com.noser.blog.domain.BlogFile;
import com.noser.blog.repository.ArticleRepository;
import com.noser.blog.repository.FileRepository;
import com.sun.org.apache.xml.internal.serialize.LineSeparator;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
@Slf4j
public class BootstrapSomeArticleData implements ApplicationListener<ApplicationReadyEvent> {

  private final ArticleRepository articleRepository;

  private final FileRepository fileRepository;

  private static final String TIM_USER_ID = "5b8cc585-6e80-4ebf-834f-73f88572ab5f";
  private static final String DANIEL_USER_ID = "94d26a9d-2b9f-43d0-b512-08955ee9a096";

  private Map<String, Long> imageFileIds = new HashMap<>();

  @Autowired
  public BootstrapSomeArticleData(final ArticleRepository articleReactiveRepository, final FileRepository fileRepository) {
    this.articleRepository = articleReactiveRepository;
    this.fileRepository = fileRepository;
  }

  @Override
  public void onApplicationEvent(ApplicationReadyEvent applicationReadyEvent) {
    addImages();
    addArticles();
    log.info("Article count is: " + articleRepository.count());
  }

  private void addImages() {
    File imageDir = new File(this.getClass().getClassLoader().getResource("images").getFile());
    if (imageDir.isDirectory()) {
      for (File image : imageDir.listFiles()) {
        try {
          byte[] bytes = IOUtils.toByteArray(new FileInputStream(image));
          BlogFile blogFile = fileRepository.save(BlogFile.builder()
              .fileType("image/jpeg")
              .name(image.getName())
              .authorId(TIM_USER_ID)
              .size(bytes.length)
              .data(bytes)
              .uploaded(LocalDateTime.now())
              .build());
          imageFileIds.put(blogFile.getName(), blogFile.getId());
        } catch (IOException e) {
          e.printStackTrace();
        }
      }
    }
  }



  private void addArticles() {
    File articlesDir = new File(this.getClass().getClassLoader().getResource("articles").getFile());
    if (articlesDir.isDirectory()) {
      for (File article : articlesDir.listFiles()) {
        try {
          createArticleFromFile(article);
        } catch (IOException e) {
          e.printStackTrace();
        }
      }
    }
  }

  private void createArticleFromFile(File article) throws IOException {

    List<String> lines = IOUtils.readLines(new FileInputStream(article));

    final String title = lines.remove(0);
    final String subtitle = lines.remove(0);
    final Long imageId = imageFileIds.get(lines.remove(0));
    final String userIdLine = lines.remove(0);
    final boolean published = Boolean.parseBoolean(lines.remove(0));
    final boolean featured = Boolean.parseBoolean(lines.remove(0));
    final String createdFormatAndDate = lines.remove(0);
    final String[] localDateTimeParts = createdFormatAndDate.split("\\|");
    final LocalDateTime created = LocalDateTime.parse(localDateTimeParts[1], DateTimeFormatter.ofPattern(localDateTimeParts[0]));
    final String content = lines.stream().reduce((s, s2) -> s + String.format("%n") + s2).get();

    String userId;
    if ("TIM".equals(userIdLine)) {
      userId = TIM_USER_ID;
    } else {
      userId = DANIEL_USER_ID;
    }

    articleRepository.save(
      Article.builder()
          .title(title)
          .subtitle(subtitle)
          .content(content)
          .authorId(userId)
          .published(published)
          .featured(featured)
          .created(created)
          .imageId(imageId)
          .build()
    );
  }
}
