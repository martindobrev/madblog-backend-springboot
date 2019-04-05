package com.noser.blog.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.noser.blog.domain.HtmlSnippet;

@Repository
public interface HtmlSnippetRepository extends CrudRepository<HtmlSnippet, Long> {
	HtmlSnippet findOneByName(final String name);
	boolean existsByName(final String name);
}
