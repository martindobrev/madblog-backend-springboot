package com.noser.blog.bootstrap;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import com.noser.blog.domain.Article;
import com.noser.blog.domain.BlogFile;
import com.noser.blog.domain.Page;
import com.noser.blog.repository.ArticleRepository;
import com.noser.blog.repository.FileRepository;
import com.noser.blog.repository.PageRepository;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class BootstrapSomeArticleData implements ApplicationListener<ApplicationReadyEvent> {

  private final ArticleRepository articleRepository;
  private final FileRepository fileRepository;
  private final PageRepository pageRepository;

  private static final String TIM_USER_ID = "5b8cc585-6e80-4ebf-834f-73f88572ab5f";
  private static final String DANIEL_USER_ID = "94d26a9d-2b9f-43d0-b512-08955ee9a096";

  private Map<String, Long> imageFileIds = new HashMap<>();

  @Autowired
  public BootstrapSomeArticleData(final ArticleRepository articleReactiveRepository, 
		  final FileRepository fileRepository, final PageRepository pageRepository) {
    this.articleRepository = articleReactiveRepository;
    this.fileRepository = fileRepository;
    this.pageRepository = pageRepository;
  }

  @Override
  public void onApplicationEvent(ApplicationReadyEvent applicationReadyEvent) {
    addImages();
    addArticles();
    addPages();
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
  
  private void addPages() {
	  Page about = Page.builder()
			  //.id(1l)
			  .content("Hello from the new about page")
			  .created(LocalDateTime.now())
			  .order(1l)
			  .name("About page")
			  .slug("about")
			  .published(true)
			  .build();
	  this.pageRepository.save(about);
	  Page contact = Page.builder()
			  //.id(2l)
			  .content("Trying to find us??? Good luck :)")
			  .created(LocalDateTime.now())
			  .order(2l)
			  .name("Contact")
			  .slug("contact")
			  .published(true)
			  .build();
	  this.pageRepository.save(contact);
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

    articleRepository.save(
      Article.builder()
          .title(title)
          .subtitle(subtitle)
          .content(content)
          .authorId(userIdLine)
          .published(published)
          .featured(featured)
          .created(created)
          .imageId(imageId)
          .build()
    );
  }
}
