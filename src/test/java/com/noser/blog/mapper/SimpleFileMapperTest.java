package com.noser.blog.mapper;

import com.noser.blog.api.BlogFileDTO;
import com.noser.blog.api.BlogFilePageDTO;
import com.noser.blog.domain.BlogFileView;
import org.junit.jupiter.api.Test;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.function.Function;

import static org.junit.jupiter.api.Assertions.*;

class SimpleFileMapperTest {

   private SimpleFileMapper mapperUnderTest = new SimpleFileMapper();


   @Test
   void domain2dtoFilePageIsNull() {
      // when
      BlogFilePageDTO blogFilePageDTO = mapperUnderTest.domainPage2dto(null);
   }

   @Test
   void domain2dtoFilePageHasData() {
      // given
      Page<BlogFileView> blogFileViewPage = new TestPage();

      // when
      BlogFilePageDTO blogFilePageDTO = mapperUnderTest.domainPage2dto(blogFileViewPage);

      // then
      assertNotNull(blogFilePageDTO);
      assertEquals(1, blogFilePageDTO.getPageNumber());
      assertEquals(2, blogFilePageDTO.getTotalFiles());
      assertEquals(1, blogFilePageDTO.getTotalPages());
      assertNotNull(blogFilePageDTO.getBlogFiles());
      assertEquals(2, blogFilePageDTO.getBlogFiles().size());
      assertEquals(file1dto, blogFilePageDTO.getBlogFiles().get(0));
      assertEquals(file2dto, blogFilePageDTO.getBlogFiles().get(1));
   }

   private BlogFileView file1 = BlogFileView.builder()
       .fileType("plain/text")
       .authorId("unit_test")
       .id(1l)
       .name("test_file_1.txt")
       .size("This is just a test".getBytes().length)
       .uploaded(LocalDateTime.now())
       .build();

   private BlogFileDTO file1dto = BlogFileDTO.builder()
       .fileType(file1.getFileType())
       .authorId(file1.getAuthorId())
       .id(file1.getId())
       .name(file1.getName())
       .size(file1.getSize())
       .uploaded(file1.getUploaded())
       .build();

   private BlogFileView file2 = BlogFileView.builder()
       .fileType("plain/text")
       .authorId("unit_test")
       .id(2l)
       .name("test_file_2.txt")
       .size("HELLO TESTS".getBytes().length)
       .uploaded(LocalDateTime.now())
       .build();

   private BlogFileDTO file2dto = BlogFileDTO.builder()
       .fileType(file2.getFileType())
       .authorId(file2.getAuthorId())
       .id(file2.getId())
       .name(file2.getName())
       .size(file2.getSize())
       .uploaded(file2.getUploaded())
       .build();

   private class TestPage implements Page<BlogFileView> {

      @Override public int getTotalPages() {
         return 1;
      }

      @Override public long getTotalElements() {
         return 2;
      }

      @Override public int getNumber() {
         return 1;
      }

      @Override public int getSize() {
         return 0;
      }

      @Override public int getNumberOfElements() {
         return 2;
      }

      @Override public List<BlogFileView> getContent() {
         return Arrays.asList(file1, file2);
      }

      @Override public boolean hasContent() {
         return true;
      }

      @Override public Sort getSort() {
         return null;
      }

      @Override public boolean isFirst() {
         return false;
      }

      @Override public boolean isLast() {
         return false;
      }

      @Override public boolean hasNext() {
         return false;
      }

      @Override public boolean hasPrevious() {
         return false;
      }

      @Override public Pageable nextPageable() {
         return null;
      }

      @Override public Pageable previousPageable() {
         return null;
      }

      @Override public <U> Page<U> map(Function<? super BlogFileView, ? extends U> converter) {
         return null;
      }

      @Override public Iterator<BlogFileView> iterator() {
         return null;
      }
   }
}