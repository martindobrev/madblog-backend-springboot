package com.noser.blog.mapper;

import com.noser.blog.api.BlogFileDTO;
import com.noser.blog.domain.BlogFile;
import com.noser.blog.domain.BlogFileView;

public interface FileMapper {
  BlogFileDTO domain2dto(BlogFile blogFile);
  BlogFileDTO domain2dto(BlogFileView blogFileView);
  BlogFile dto2domain(BlogFileDTO blogFileDTO);
}
