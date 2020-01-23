package com.noser.blog.service;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import lombok.extern.java.Log;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.api.ArticleInfoDTO;
import com.noser.blog.api.ArticlePageDTO;
import com.noser.blog.domain.Article;
import com.noser.blog.mapper.ArticleMapper;
import com.noser.blog.repository.ArticleRepository;
import com.noser.blog.security.CheckEditArticle;
import com.noser.blog.security.CheckManageArticles;
import com.noser.blog.security.CheckViewArticlePermission;
import com.noser.blog.security.UnauthorizedException;

@Log
@Service
@EnableAspectJAutoProxy
public class SimpleArticleService implements ArticleService {

	private final ArticleRepository articleRepository;

	private final ArticleMapper articleMapper;

	private final KeycloakService keycloakService;
	
	private final static int ARTICLE_PAGE_DEFAULT_SIZE = 5;

	public SimpleArticleService(ArticleRepository articleRepository, ArticleMapper articleMapper, KeycloakService keycloakService) {
		this.articleRepository = articleRepository;
		this.articleMapper = articleMapper;
		this.keycloakService = keycloakService;
	}

	@Override
	@CheckManageArticles
	public ArticleCollectionDTO getAllArticles(boolean loadUserInfo) {
		Iterable<Article> articles = articleRepository.findAllByOrderByCreatedDesc();
		
		List<ArticleDTO> articleDTOs = new ArrayList<>();
		Iterator<Article> it = articles.iterator();
		
		while (it.hasNext()) {
			ArticleDTO articleDTO = this.articleMapper.domain2dto(it.next(), loadUserInfo);
			if (articleDTO != null) {
				articleDTOs.add(articleDTO);
			}
		}
		
		return ArticleCollectionDTO.builder()
			.articles(articleDTOs)
			.build();
	}

	public ArticleCollectionDTO getAllArticlesBySearchTitle(String searchQuery){
		Iterable<Article> articles = articleRepository.findAllByTitleIgnoreCaseIsContainingOrSubtitleIgnoreCaseIsContainingOrContentIgnoreCaseIsContaining(searchQuery,searchQuery,searchQuery);
		List<ArticleDTO> articleDTOS = new ArrayList<>();
		Iterator<Article> articleIterator = articles.iterator();

		while (articleIterator.hasNext()){
			ArticleDTO articleDTO = this.articleMapper.domain2dto(articleIterator.next(),false);
			if (articleDTO != null){
				articleDTOS.add(articleDTO);
			}
		}
		return ArticleCollectionDTO.builder()
				.articles(articleDTOS)
				.build();
	}
	

	@Override
	@CheckViewArticlePermission
	public ArticleDTO getArticle(Long id) {
		
		Optional<Article> articleOptional = articleRepository.findById(id);
		if (articleOptional.isPresent()) {
			final Article article = articleOptional.get();	
			return articleMapper.domain2dto(article, true);
			
		}
		return null;
	}

	@Override public ArticlePageDTO getSearchArticlePage(long pageNumber, String query) {
		return this.articleMapper.domainPage2dto(this.articleRepository.findByPublishedTrueAndTitleIgnoreCaseIsContaining(PageRequest.of((int) pageNumber, 5), query));
	}

	@Override
	public ArticleDTO createArticle(Article article) {
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		Principal principal = null;
		try {
			principal = (Principal) authentication.getPrincipal();
		} catch (ClassCastException exception) {
			
		}
		log.warning(String.format("USERNAME WHILE CREATING ARTICLE %s",keycloakService.getUserUsername(principal.getName())));
		article.setAuthorId(keycloakService.getUserUsername(principal.getName()));
		article.setCreated(LocalDateTime.now());
		return articleMapper.domain2dto(articleRepository.save(article), true);
	}

	@Override
	@CheckEditArticle
	public ArticleDTO editArticle(Article article) throws UnauthorizedException {
		final Optional<Article> existingArticleOptional = articleRepository.findById(article.getId());

		final Article existingArticle = existingArticleOptional.get();
		existingArticle.setContent(article.getContent());
		existingArticle.setTitle(article.getTitle());
		existingArticle.setSubtitle(article.getSubtitle());
		existingArticle.setPublished(article.isPublished());
		existingArticle.setFeatured(article.isFeatured());
		existingArticle.setImageId(article.getImageId());
		ArticleDTO articleDTO = articleMapper.domain2dto(existingArticle, true);
		this.articleRepository.save(existingArticle);
		return articleDTO;
	}

	@Override
	public List<ArticleDTO> getUserArticles(String userId) {
		List<Article> articles = this.articleRepository.findByAuthorId(userId);
		return articles.stream().map(article -> this.articleMapper.domain2dto(article, false)).collect(Collectors.toList());
	}

	@Override
	public boolean deleteArticle(Article article) {
		if (article == null) {
			return false;
		}
		
		return deleteArticle(article.getId());
	}

	@Override
	public ArticleInfoDTO getArticleInfo() {
		
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		Principal principal = null;
		try {
			principal = (Principal) authentication.getPrincipal();
		} catch (ClassCastException exception) {
			
		}
		
		return ArticleInfoDTO.builder()
				.total(this.articleRepository.count())
				.own(getOwnArticles(principal))
				.unpublished(getUnpublishedCount())
				.featured(getFeaturedCount())
				.build();
	}

	private long getFeaturedCount() {
		return this.articleRepository.findByFeatured(true).size();
	}

	private long getUnpublishedCount() {
		return this.articleRepository.findByPublished(false).size();
	}

	private long getOwnArticles(Principal principal) {
		if (principal == null || principal.getName() == null) {
			return 0;
		}
		return this.articleRepository.findByAuthorId(principal.getName()).size();
	}

	@Override
	public boolean deleteArticle(Long articleId) {
		if (this.articleRepository.existsById(articleId)) {
			this.articleRepository.deleteById(articleId);
			return true;
		}
		return false;
	}

	@Override
	public ArticlePageDTO getArticlePage(int pageNumber) {
		
		Page<Article> articlePage = this.articleRepository.findByPublishedTrue(
				PageRequest.of(pageNumber , ARTICLE_PAGE_DEFAULT_SIZE, Sort.by("created").descending()));
		
		return ArticlePageDTO.builder()
				.pageNumber(articlePage.getNumber())
				.totalPages(articlePage.getTotalPages())
				.articles(articlePage.get()
						.map(article -> articleMapper.domain2dto(article, false))
						.collect(Collectors.toList()))
				.build();
	}

	@Override
	public ArticlePageDTO getAllPublishedArticlesBySearchAllFields(long pageNumber, String searchQuery){
		Page<Article> articlePage = this.articleRepository.findByPublishedTrueAndTitleIgnoreCaseIsContainingOrSubtitleIgnoreCaseIsContainingOrContentIgnoreCaseIsContainingOrAuthorIdIgnoreCaseIsContaining(
				PageRequest.of((int)pageNumber,ARTICLE_PAGE_DEFAULT_SIZE), searchQuery, searchQuery, searchQuery, searchQuery
		);

		return ArticlePageDTO.builder()
				.pageNumber(articlePage.getNumber())
				.totalPages(articlePage.getTotalPages())
				.articles(articlePage.get()
						.map(article -> articleMapper.domain2dto(article, false))
						.collect(Collectors.toList()))
				.build();
	}

	@Override
	public ArticleDTO getRandomFeaturedArticle() {
		List<Article> featuredArticles = this.articleRepository.findByFeatured(true);
		int size = featuredArticles.size();
		Article randomArticle = featuredArticles.get((int) Math.floor(Math.random() * size)); 
		return articleMapper.domain2dto(randomArticle, false);
	}
	
}