package com.noser.blog.service;

import com.noser.blog.api.BlogFileDTO;
import com.noser.blog.api.BlogFilePageDTO;
import com.noser.blog.domain.BlogFile;
import com.noser.blog.domain.BlogFileView;
import com.noser.blog.domain.Thumbnail;

import java.util.Collection;

public interface FileService {
  Long saveFile(final BlogFile file);
  BlogFile getFile(final Long id);
  Iterable<BlogFileView> getFiles(final String name);
  Thumbnail getThumbnail(BlogFile file, int size);
  boolean deleteFile(final Long id);
  BlogFilePageDTO getFilePage(long pageNumber);
//  BlogFilePageDTO getFilePageSearchName(long pageNumber, String name);
  BlogFileDTO getFilePageSearchName(String name);
  Collection<BlogFileDTO> getAllFilesSearchByName(String name);
}
