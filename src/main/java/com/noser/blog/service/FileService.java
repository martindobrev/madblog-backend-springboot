package com.noser.blog.service;

import com.noser.blog.domain.BlogFile;

import java.util.List;

public interface FileService {

  Long saveFile(final BlogFile file);
  BlogFile getFile(final Long id);
  List<BlogFile> getFiles(final String name);
  boolean deleteFile(final Long id);
}
