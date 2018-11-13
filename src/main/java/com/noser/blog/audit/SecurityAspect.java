package com.noser.blog.audit;

import java.security.Principal;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.noser.blog.security.UnauthorizedException;
import com.noser.blog.service.ArticleService;
import lombok.extern.slf4j.Slf4j;

@Aspect
@Component
@Slf4j
public class SecurityAspect {
	
	private final ArticleService articleService;
	
	public SecurityAspect(final ArticleService articleService) {
		this.articleService = articleService;
	}

	@Before("@annotation(CheckViewArticlePermission)")
	public void checkViewArticlePermission(final JoinPoint joinPoint) throws UnauthorizedException {
		final Long articleId = (Long) joinPoint.getArgs()[0];
		final Principal principal = (Principal) joinPoint.getArgs()[1];
		final Authentication authentication = (Authentication) joinPoint.getArgs()[2];
		if (!this.articleService.allowedToViewArticle(articleId, principal, authentication) ) {
			log.warn("Unauthorized access - user {} cannot view article with id {}", principal, articleId);
			throw new UnauthorizedException();
		}
	}
	
	@Before("@annotation(CheckEditArticlePermission)")
	public void checkEditArticlePermission(final JoinPoint joinPoint) throws UnauthorizedException {
		final Long articleId = (Long) joinPoint.getArgs()[0];
		final Principal principal = (Principal) joinPoint.getArgs()[1];
		final Authentication authentication = (Authentication) joinPoint.getArgs()[2];
		if (!this.articleService.allowedToEditArticle(articleId, principal, authentication) ) {
			log.warn("Unauthorized access - user {} cannot edit article with id {}", principal, articleId);
			throw new UnauthorizedException();
		}
	}
	
	@Before("@annotation(CheckGetAllFilesPermission)")
	public void checkGetAllFilesPermission(final JoinPoint joinPoint) throws UnauthorizedException {
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		Principal principal = null;
		try {
			principal = (Principal) authentication.getPrincipal();
		} catch (ClassCastException exception) {
			
		}
		
		if (!this.articleService.allowedToManageFiles(principal, authentication)) {
			log.warn("Unauthorized access - user {} cannot access all files", principal);
			throw new UnauthorizedException();
		}
	}
}
