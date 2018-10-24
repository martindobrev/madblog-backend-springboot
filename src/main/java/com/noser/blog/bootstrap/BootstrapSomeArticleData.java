package com.noser.blog.bootstrap;

import com.noser.blog.domain.Article;
import com.noser.blog.repository.ArticleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Slf4j
public class BootstrapSomeArticleData implements ApplicationListener<ApplicationReadyEvent> {

  private final ArticleRepository articleRepository;

  private static final String TIM_USER_ID = "5b8cc585-6e80-4ebf-834f-73f88572ab5f";

  @Autowired
  public BootstrapSomeArticleData(ArticleRepository articleReactiveRepository) {
    this.articleRepository = articleReactiveRepository;
  }

  @Override
  public void onApplicationEvent(ApplicationReadyEvent applicationReadyEvent) {
    createSomeData();
    log.info("Article count is: " + articleRepository.count());
  }

  private void createSomeData() {
    articleRepository.save(
        Article.builder()
            .title("Hello Noser Bulgaria")
            .subtitle("Welcome to Noser Bulgaria! In this post we will tell you more about our company.")
            .content("CONTENT WILL BE ADDED LATER")
            .authorId(TIM_USER_ID)
            .published(true)
            .created(LocalDateTime.of(2018, 01, 1, 11, 27, 00))
            .featured(false)
            .build()
    );

    articleRepository.save(
        Article.builder()
            .title("The perfect team building event")
            .subtitle("What does it take to make the perfect event for your employees? Here are some ideas...")
            .content("CONTENT WILL BE ADDED LATER")
            .authorId(TIM_USER_ID)
            .published(true)
            .created(LocalDateTime.of(2018, 03, 3, 17, 37, 00))
            .featured(true)
            .build()
    );


    articleRepository.save(
        Article.builder()
            .title("Tech stack we are using")
            .subtitle("Check out what technologies are being currently used in our company")
            .content("CONTENT WILL BE ADDED LATER")
            .authorId(TIM_USER_ID)
            .published(true)
            .created(LocalDateTime.of(2018, 01, 20, 9, 29, 00))
            .featured(true)
            .build()
    );

    articleRepository.save(
        Article.builder()
            .title("Open positions")
            .subtitle("We are hiring people like you! Apply now!")
            .content("CONTENT WILL BE ADDED LATER")
            .authorId(TIM_USER_ID)
            .published(false)
            .created(LocalDateTime.of(2018, 10, 5, 10, 7, 00))
            .featured(false)
            .build()
    );

  }
}
