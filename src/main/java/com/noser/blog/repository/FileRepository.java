package com.noser.blog.repository;

import com.noser.blog.domain.BlogFile;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends CrudRepository<BlogFile, Long> {}
