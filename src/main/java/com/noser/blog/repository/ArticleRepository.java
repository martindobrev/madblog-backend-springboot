package com.noser.blog.repository;

import com.noser.blog.domain.Article;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends PagingAndSortingRepository<Article, Long> {
  List<Article> findAllByOrderByCreatedDesc();
  List<Article> findByAuthorId(String authorId);
}
