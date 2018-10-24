package com.noser.blog.security;

import com.noser.blog.domain.Article;
import org.springframework.security.core.Authentication;

import java.security.Principal;

public class AccessRights {

  public static boolean canUserEditArticle(Authentication authentication) {
    if (authentication == null || authentication.getAuthorities() == null || authentication.getAuthorities().isEmpty()) {
      return false;
    }

    return authentication.getAuthorities().stream()
        .anyMatch(authority -> (authority).getAuthority().equals("admin"));
  }

  public static boolean isOwnArticle(Article article, Principal principal) {
    if (article == null || principal == null || article.getAuthorId() == null || principal.getName() == null) {
      return false;
    }

    return article.getAuthorId().equals(principal.getName());
  }
}
