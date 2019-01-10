package com.noser.blog.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.noser.blog.domain.Page;

@Repository
public interface PageRepository extends CrudRepository<Page, Long> {
	List<Page> findAllByOrderByOrderDesc();
	List<Page> findAllByOrderByOrderAsc();
	Page findOneBySlug(final String slug);
}
