package com.noser.blog.repository;

import com.noser.blog.domain.Article;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends PagingAndSortingRepository<Article, Long> {
  List<Article> findAllByOrderByCreatedDesc();
  List<Article> findAllByTitleIgnoreCaseIsContaining(String searchedTitle);
  List<Article> findByAuthorId(String authorId);
  List<Article> findByPublished(boolean published);
  List<Article> findByFeatured(boolean featured);
  //List<Article> findAll();
  Page<Article> findByPublishedTrue(Pageable pageable);
  Page<Article> findByPublishedTrueAndTitleIgnoreCaseIsContaining(Pageable pageable, String searchedTitle);
}
