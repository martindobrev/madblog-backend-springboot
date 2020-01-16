package com.noser.blog.mapper;

import com.noser.blog.api.BlogFileDTO;
import com.noser.blog.api.BlogFilePageDTO;
import com.noser.blog.domain.BlogFile;
import com.noser.blog.domain.BlogFileView;
import org.springframework.data.domain.Page;

public interface FileMapper {
  BlogFileDTO domain2dto(BlogFile blogFile);
  BlogFileDTO domainView2dto(BlogFileView blogFileView);
  BlogFilePageDTO domainPage2dto(Page<BlogFileView> blogFileViewPage);
  BlogFile dto2domain(BlogFileDTO blogFileDTO);
}
