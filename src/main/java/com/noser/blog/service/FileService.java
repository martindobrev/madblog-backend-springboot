package com.noser.blog.service;

import com.noser.blog.domain.BlogFile;
import com.noser.blog.domain.Thumbnail;

public interface FileService {
  Long saveFile(final BlogFile file);
  BlogFile getFile(final Long id);
  Iterable<BlogFile> getFiles(final String name);
  Thumbnail getThumbnail(BlogFile file, int size);
  boolean deleteFile(final Long id);
}
