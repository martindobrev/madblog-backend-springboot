package com.noser.blog.repository;

import com.noser.blog.domain.Article;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArticleRepository extends CrudRepository<Article, Long> {
  List<Article> findAllByOrderByCreatedDesc();
  List<Article> findByAuthorId(String authorId);
  List<Article> findByPublished(boolean published);
  List<Article> findByFeatured(boolean featured);
  //List<Article> findAll();
  Page<Article> findByPublishedTrue(Pageable pageable);

  Optional<Article> findById(Long id);
}
