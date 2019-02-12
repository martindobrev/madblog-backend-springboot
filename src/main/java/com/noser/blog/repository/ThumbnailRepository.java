package com.noser.blog.repository;

import org.springframework.data.repository.CrudRepository;

import com.noser.blog.domain.Thumbnail;

public interface ThumbnailRepository extends CrudRepository<Thumbnail, String> {

}
