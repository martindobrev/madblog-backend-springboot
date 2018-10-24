package com.noser.blog.mapper;

import com.noser.blog.api.BlogFileDTO;
import com.noser.blog.domain.BlogFile;

public interface FileMapper {
  BlogFileDTO domain2dto(BlogFile blogFile);
  BlogFile dto2domain(BlogFileDTO blogFileDTO);
}
