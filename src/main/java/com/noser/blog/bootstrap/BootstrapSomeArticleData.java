package com.noser.blog.bootstrap;

import java.io.BufferedReader;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
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
		if (this.fileRepository.count() == 0) {
			addImages();
		}
		
		if (this.articleRepository.count() == 0) {			
			addArticles();
		}
		
		if (this.pageRepository.count() == 0) {			
			addPages();
		}
	}

	private void addImages() {
		InputStream imagesList = this.getClass().getClassLoader().getResourceAsStream("images/list.txt");

		BufferedReader in = new BufferedReader(new InputStreamReader(imagesList));
		String imageFileName = null;

		try { 
			while((imageFileName = in.readLine()) != null) {
				log.info("Adding file: {}", imageFileName);
				InputStream imageFileInputStream = this.getClass().getClassLoader().getResourceAsStream("images/" + imageFileName);
				byte[] bytes = IOUtils.toByteArray(imageFileInputStream);
				BlogFile blogFile = fileRepository.save(BlogFile.builder()
						.fileType("image/jpeg")
						.name(imageFileName)
						.authorId(TIM_USER_ID)
						.size(bytes.length)
						.data(bytes)
						.uploaded(LocalDateTime.now())
						.build());
				imageFileIds.put(blogFile.getName(), blogFile.getId());
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}



	private void addArticles() {
		InputStream articlesList = this.getClass().getClassLoader().getResourceAsStream("articles/list.txt");

		BufferedReader in = new BufferedReader(new InputStreamReader(articlesList));
		String articleFile = null;

		try { 
			while((articleFile = in.readLine()) != null) {
				log.info("Creating article from: {}", articleFile);
				InputStream articleInputStream = this.getClass().getClassLoader().getResourceAsStream("articles/" + articleFile);
				createArticleFromInputStream(articleInputStream);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	private void addPages() {
		
		InputStream pagesList = this.getClass().getClassLoader().getResourceAsStream("pages/list.txt");
		BufferedReader in = new BufferedReader(new InputStreamReader(pagesList));
		String pageFile = null;
		
		try { 
			while((pageFile = in.readLine()) != null) {
				log.info("Creating article from: {}", pageFile);
				InputStream pageInputStream = this.getClass().getClassLoader().getResourceAsStream("pages/" + pageFile);
				createPageFromInputStream(pageInputStream);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	private void createPageFromInputStream(InputStream pageInputStream) throws IOException { 
		
		List<String> lines = IOUtils.readLines(pageInputStream);
		
		String name = lines.remove(0);
		String slug = lines.remove(0);
		Long order = Long.valueOf(lines.remove(0));
		String authorId = lines.remove(0);
		boolean published = Boolean.parseBoolean(lines.remove(0));
		final String createdFormatAndDate = lines.remove(0);
		final String[] localDateTimeParts = createdFormatAndDate.split("\\|");
		final LocalDateTime created = LocalDateTime.parse(localDateTimeParts[1], DateTimeFormatter.ofPattern(localDateTimeParts[0]));
		final String content = lines.stream().reduce((s, s2) -> s + String.format("%n") + s2).get();
		
		pageRepository.save(Page.builder()
					.name(name)
					.slug(slug)
					.order(order)
					.authorId(authorId)
					.published(published)
					.created(created)
					.content(content)
					.build());
	}

	private void createArticleFromInputStream(InputStream articleInputStream) throws IOException {

		List<String> lines = IOUtils.readLines(articleInputStream);

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
