package com.noser.blog.security;

import com.noser.blog.domain.Article;
import org.springframework.security.core.Authentication;

import java.security.Principal;

public class AccessRights {

  public static boolean canUserEditArticle(final Article article, final Principal principal, final Authentication authentication) {
	if (authentication == null || authentication.getAuthorities() == null || authentication.getAuthorities().isEmpty()) {
      return false;
    }

    if (isOwnArticle(article, principal)) {
      return true;
    }

    return isAdminOrPublisher(authentication);
  }

  public static boolean canUserViewArticle(final Article article, final Principal principal, final Authentication authentication) {
    if (article == null) {
      return false;
    }

    if (article.isPublished()) {
      return true;
    }

    return isOwnArticle(article, principal) || canUserEditArticle(article, principal, authentication);
  }

  public static boolean isOwnArticle(Article article, Principal principal) {
    if (article == null || principal == null || article.getAuthorId() == null || principal.getName() == null) {
      return false;
    }

    return article.getAuthorId().equals(principal.getName());
  }

  public static boolean isAdminOrPublisher(Authentication authentication) {
    if (authentication == null || authentication.getAuthorities() == null || authentication.getAuthorities().isEmpty()) {
      return false;
    }

    return authentication.getAuthorities().stream()
        .anyMatch(authority ->
            authority.getAuthority().equals("admin")
                || authority.getAuthority().equals("publisher"));
  }


}
