package com.noser.blog.security;


import java.security.Principal;
import java.util.Optional;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.noser.blog.config.BlogProperties;
import com.noser.blog.domain.Article;
import com.noser.blog.repository.ArticleRepository;

import lombok.extern.slf4j.Slf4j;

@Aspect
@Component
@Slf4j
public class SecurityAspect {
	
	private final BlogProperties blogProperties;
	
	private final ArticleRepository articleRepository;
	
	public SecurityAspect(final ArticleRepository articleRepository, final BlogProperties blogProperties) {
		this.articleRepository = articleRepository;
		this.blogProperties = blogProperties;
	}

	@Before("@annotation(checkViewArticlePermission)")
	public void checkViewArticlePermission(final JoinPoint joinPoint, CheckViewArticlePermission checkViewArticlePermission) throws UnauthorizedException {
		log.info("SecurityAspect.checkViewArticlePermission");
		if (this.blogProperties.isSecurityDisabled()) {
			log.warn("WARNING: Global security is disabled!");
			return;
		}
		final Long articleId = (Long) joinPoint.getArgs()[0];
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		Principal principal = null;
		try {
			principal = (Principal) authentication.getPrincipal();
		} catch (ClassCastException exception) {
			
		}
		
		if (!this.allowedToViewArticle(articleId, principal, authentication) ) {
			log.warn("Unauthorized access - user {} cannot view article with id {}", principal, articleId);
			throw new UnauthorizedException();
		}
	}
	
	@Before("@annotation(CheckEditArticle)")
	public void checkEditArticlePermission(final JoinPoint joinPoint) throws UnauthorizedException {
		log.info("SecurityAspect.checkEditArticlePermission");
		if (this.blogProperties.isSecurityDisabled()) {
			log.warn("WARNING: Global security is disabled!");
			return;
		}
		final Article article = (Article) joinPoint.getArgs()[0];
		if (article == null) {
			throw new UnauthorizedException();
		}
		
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		Principal principal = null;
		try {
			principal = (Principal) authentication.getPrincipal();
		} catch (ClassCastException exception) {
			
		}
		
		Optional<Article> originalArticle = this.articleRepository.findById(article.getId());
		if (originalArticle.isPresent()) {
			if (article.isPublished() != originalArticle.get().isPublished() || article.isFeatured() != originalArticle.get().isFeatured()) {
				if (!this.allowedToPublishArticles(authentication)) {
					throw new UnauthorizedException();
				}
			}
		}
		
		if (!this.allowedToEditArticle(article.getId(), principal, authentication) ) {
			log.warn("Unauthorized access - user {} cannot edit article with id {}", principal, article.getId());
			throw new UnauthorizedException();
		}
	}
	
	@Before("@annotation(checkManageArticles)")
	public void checkManageArticlesPermission(final JoinPoint joinPoint, CheckManageArticles checkManageArticles) throws UnauthorizedException {
		log.info("SecurityAspect.checkManageArticlesPermission");
		if (this.blogProperties.isSecurityDisabled()) {
			log.warn("WARNING: Global security is disabled!");
			return;
		}
		if (!((boolean) joinPoint.getArgs()[0])) {
			return;
		}
		
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		try {
			@SuppressWarnings("unused")
			Principal principal = (Principal) authentication.getPrincipal();
		} catch (ClassCastException exception) {
			throw new UnauthorizedException();
		}
	}
	
	@Before("@annotation(checkGetAllFilesPermission)")
	public void checkGetAllFilesPermission(final JoinPoint joinPoint, CheckGetAllFilesPermission checkGetAllFilesPermission) throws UnauthorizedException {
		log.info("SecurityAspect.checkGetAllFilesPermission");
		if (this.blogProperties.isSecurityDisabled()) {
			log.warn("WARNING: Global security is disabled!");
			return;
		}
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		Principal principal = null;
		try {
			principal = (Principal) authentication.getPrincipal();
		} catch (ClassCastException exception) {
			
		}
		
		if (!this.allowedToManageFiles(principal, authentication)) {
			log.warn("Unauthorized access - user {} cannot access all files", principal);
			throw new UnauthorizedException();
		}
	}
	
	private boolean allowedToEditArticle(Long id, Principal principal, Authentication authentication) {
		Optional<Article> articleOptional = this.articleRepository.findById(id);
		if (!articleOptional.isPresent()) {
			return false;
		}
		
		return AccessRights.canUserEditArticle(articleOptional.get(), principal, authentication);
	}
	
	private boolean allowedToPublishArticles(Authentication authentication) {
		return AccessRights.isAdminOrPublisher(authentication);
	}
	
	private boolean allowedToViewArticle(Long id, Principal principal, Authentication authentication) {
		Optional<Article> articleOptional = this.articleRepository.findById(id);
		if (articleOptional.isPresent()) {
			return AccessRights.canUserViewArticle(articleOptional.get(), principal, authentication);
		}
		return false;
	}
	
	private boolean allowedToManageFiles(Principal principal, Authentication authentication) {
		if (authentication == null) {
			return false;
		}
		return authentication.getAuthorities().stream().anyMatch(auth -> auth.getAuthority().equals("user"));
	}
}
