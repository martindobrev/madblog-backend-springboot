package com.noser.blog.service;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.domain.Article;
import com.noser.blog.mapper.ArticleMapper;
import com.noser.blog.repository.ArticleRepository;
import com.noser.blog.security.CheckEditArticle;
import com.noser.blog.security.CheckManageArticles;
import com.noser.blog.security.CheckViewArticlePermission;
import com.noser.blog.security.UnauthorizedException;

@Service
@EnableAspectJAutoProxy
public class SimpleArticleService implements ArticleService {

	private final ArticleRepository articleRepository;

	private final ArticleMapper articleMapper;

	public SimpleArticleService(ArticleRepository articleRepository, ArticleMapper articleMapper) {
		this.articleRepository = articleRepository;
		this.articleMapper = articleMapper;
	}

	@Override
	@CheckManageArticles
	public ArticleCollectionDTO getAllArticles(boolean loadUserInfo) {
		Iterable<Article> allArticles = articleRepository.findAllByOrderByCreatedDesc();
		
		List<ArticleDTO> articleDTOs = new ArrayList<>();
		Iterator<Article> it = allArticles.iterator();

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

	@Override
	public ArticleDTO createArticle(Article article) {
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		Principal principal = null;
		try {
			principal = (Principal) authentication.getPrincipal();
		} catch (ClassCastException exception) {
			
		}
		article.setAuthorId(principal.getName());
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
		// TODO Auto-generated method stub
		return false;
	}
}
