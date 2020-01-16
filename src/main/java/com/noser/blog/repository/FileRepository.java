package com.noser.blog.repository;

import com.noser.blog.domain.BlogFile;
import com.noser.blog.domain.BlogFileView;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends CrudRepository<BlogFile, Long> {
	
	@Query("SELECT new com.noser.blog.domain.BlogFileView(b.id, b.name, b.size, b.authorId, b.fileType, b.uploaded) FROM BlogFile b")
	Iterable<BlogFileView> findBlobFileView();

	@Query("SELECT new com.noser.blog.domain.BlogFileView(b.id, b.name, b.size, b.authorId, b.fileType, b.uploaded) FROM BlogFile b")
	Page<BlogFileView> findBlobFilePage(Pageable pageable);
}
