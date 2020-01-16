package com.noser.blog.mapper;

import com.noser.blog.api.BlogFileDTO;
import com.noser.blog.api.BlogFilePageDTO;
import com.noser.blog.domain.BlogFile;
import com.noser.blog.domain.BlogFileView;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class SimpleFileMapper implements FileMapper {

  @Override
  public BlogFileDTO domain2dto(BlogFile blogFile) {
    if (blogFile == null) {
      return null;
    }

    return BlogFileDTO.builder()
        .size(blogFile.getSize())
        .name(blogFile.getName())
        .id(blogFile.getId())
        .build();
  }

  @Override
  public BlogFile dto2domain(BlogFileDTO blogFileDTO) {
    if (blogFileDTO == null) {
      return null;
    }

    return BlogFile.builder()
        .name(blogFileDTO.getName())
        .size(blogFileDTO.getSize())
        .id(blogFileDTO.getId())
        .build();
  }

	@Override
	public BlogFileDTO domainView2dto(BlogFileView blogFileView) {
		
		return BlogFileDTO.builder()
				.name(blogFileView.getName())
				.id(blogFileView.getId())
        .size(blogFileView.getSize())
        .authorId(blogFileView.getAuthorId())
        .uploaded(blogFileView.getUploaded())
        .fileType(blogFileView.getFileType())
				.build();
	}

  @Override
  public BlogFilePageDTO domainPage2dto(Page<BlogFileView> blogFileViewPage) {
    if (blogFileViewPage == null) {
      return null;
    }

    return BlogFilePageDTO.builder()
        .blogFiles(blogFileViewPage.getContent().stream().map(this::domainView2dto).collect(Collectors.toList()))
        .pageNumber(blogFileViewPage.getNumber())
        .totalFiles(blogFileViewPage.getTotalElements())
        .totalPages(blogFileViewPage.getTotalPages())
        .build();
  }
}
