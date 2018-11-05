package com.noser.blog.bootstrap;

import com.noser.blog.domain.Article;
import com.noser.blog.domain.BlogFile;
import com.noser.blog.repository.ArticleRepository;
import com.noser.blog.repository.FileRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.net.URL;
import java.time.LocalDateTime;

@Component
@Slf4j
public class BootstrapSomeArticleData implements ApplicationListener<ApplicationReadyEvent> {

  private final ArticleRepository articleRepository;

  private final FileRepository fileRepository;

  private static final String TIM_USER_ID = "5b8cc585-6e80-4ebf-834f-73f88572ab5f";

  @Autowired
  public BootstrapSomeArticleData(final ArticleRepository articleReactiveRepository, final FileRepository fileRepository) {
    this.articleRepository = articleReactiveRepository;
    this.fileRepository = fileRepository;
  }

  @Override
  public void onApplicationEvent(ApplicationReadyEvent applicationReadyEvent) {
    createSomeData();
    log.info("Article count is: " + articleRepository.count());
  }

  private void createSomeData() {


    String[] filenames = new String[] {
        "beer.jpg",
        "team_building.jpg"
    };


    for (String filename : filenames) {
      File file = new File(this.getClass().getClassLoader().getResource("images/" + filename).getFile());
      try {
        byte[] bytes = IOUtils.toByteArray(new FileInputStream(file));

        fileRepository.save(BlogFile.builder()
            .fileType("image/jpeg")
            .name(filename)
            .authorId(TIM_USER_ID)
            .size(bytes.length)
            .data(bytes)
            .uploaded(LocalDateTime.now())
            .build());

      } catch (IOException e) {
        e.printStackTrace();
      }
    }

    try {
      String perfectTeamBuildingContent = IOUtils.toString(this.getClass().getClassLoader().getResource("articles/team_building.txt"));

      articleRepository.save(
          Article.builder()
              .title("The perfect team building event")
              .subtitle("What does it take to make the perfect event for your employees? Here are some ideas...")
              .content(perfectTeamBuildingContent)
              .authorId(TIM_USER_ID)
              .imageId(2l)
              .published(true)
              .created(LocalDateTime.of(2018, 03, 3, 17, 37, 00))
              .featured(false)
              .build()
      );

    } catch (IOException e) {
      e.printStackTrace();
    }


    try {
      String grabABeerContent = IOUtils.toString(this.getClass().getClassLoader().getResource("articles/grab_a_beer.txt"));

      articleRepository.save(
          Article.builder()
              .title("Just grab a beer")
              .subtitle("Your new methods just throw some unexpected exceptions? You introduce typos although your IDE has autocompletion?")
              .content(grabABeerContent)
              .authorId(TIM_USER_ID)
              .imageId(1l)
              .published(true)
              .created(LocalDateTime.of(2018, 06, 21, 17, 37, 00))
              .featured(true)
              .build()
      );

    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
